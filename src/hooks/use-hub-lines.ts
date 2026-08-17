"use client";

import { useCallback, useEffect, useRef } from "react";

/** Marca o nó central do diagrama. */
export const HUB_NODE_ATTR = "data-hub-node";
/** Marca cada nó satélite ligado ao hub. */
export const SPOKE_NODE_ATTR = "data-spoke-node";

const MAX_BOW = 30;
const BOW_RATIO = 0.14;

interface Point {
  x: number;
  y: number;
}

function centerOf(element: Element, origin: DOMRect): Point {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left - origin.left + rect.width / 2,
    y: rect.top - origin.top + rect.height / 2,
  };
}

/** Curva quadrática levemente arqueada entre dois pontos. */
function arcPath(from: Point, to: Point): string {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) || 1;
  const bow = Math.min(MAX_BOW, length * BOW_RATIO);
  const controlX = midX + (-dy / length) * bow;
  const controlY = midY + (dx / length) * bow;

  return `M${from.x.toFixed(1)},${from.y.toFixed(1)} Q${controlX.toFixed(1)},${controlY.toFixed(1)} ${to.x.toFixed(1)},${to.y.toFixed(1)}`;
}

/**
 * Desenha as ligações hub-and-spoke dentro de um wrapper.
 *
 * O wrapper deve conter um elemento com `data-hub-node` e um ou mais com
 * `data-spoke-node`; as linhas são recalculadas a cada resize, ao carregar as
 * fontes e sempre que `redrawKey` mudar (ex.: troca do card ativo).
 */
export function useHubLines<W extends HTMLElement>(redrawKey?: unknown) {
  const wrapRef = useRef<W>(null);
  const groupRef = useRef<SVGGElement>(null);

  const draw = useCallback(() => {
    const wrap = wrapRef.current;
    const group = groupRef.current;
    if (!wrap || !group) return;

    const hub = wrap.querySelector(`[${HUB_NODE_ATTR}]`);
    if (!hub) {
      group.innerHTML = "";
      return;
    }

    const hubRect = hub.getBoundingClientRect();
    if (hubRect.width === 0 || hubRect.height === 0) {
      group.innerHTML = "";
      return;
    }

    const allSpokes = wrap.querySelectorAll(`[${SPOKE_NODE_ATTR}]`);
    const visibleSpokes = Array.from(allSpokes).filter((spoke) => {
      const rect = spoke.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });

    if (visibleSpokes.length === 0) {
      group.innerHTML = "";
      return;
    }

    const origin = wrap.getBoundingClientRect();
    const hubCenter = centerOf(hub, origin);

    group.innerHTML = visibleSpokes
      .map((spoke) => {
        const d = arcPath(hubCenter, centerOf(spoke, origin));
        return (
          `<path d="${d}" fill="none" stroke="#35D9FF" stroke-width="1.1" opacity=".3"></path>` +
          `<path d="${d}" fill="none" stroke="#9CEBFF" stroke-width="1.6" stroke-linecap="round" pathLength="1" stroke-dasharray="0.06 0.94" opacity=".8" class="animate-flow-hub"></path>`
        );
      })
      .join("");
  }, []);

  useEffect(() => {
    let frame = requestAnimationFrame(draw);

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", schedule);
    void document.fonts?.ready.then(schedule);

    const observer = new ResizeObserver(schedule);
    if (wrapRef.current) observer.observe(wrapRef.current);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, [draw, redrawKey]);

  return { wrapRef, groupRef };
}
