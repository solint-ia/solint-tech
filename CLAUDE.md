# Solint — Site institucional (Next.js)

Site institucional da Solint em **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**.
Estética: futurista/tech, fundo escuro azul-marinho com acentos ciano/azul e âmbar para destaque de etapas finais/conclusão.

Migrado do export do Claude Design (`.dc.html`). Os arquivos originais ficam em `legacy/` apenas como referência — **não são usados em build nem em runtime**.

## Comandos
```bash
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

## Arquitetura

```text
src/
├── app/
│   ├── (site)/              # route group do site
│   │   ├── layout.tsx       # header + main + footer
│   │   ├── page.tsx         # Home
│   │   ├── agentes-ia/
│   │   ├── prospect/
│   │   └── solucoes/
│   ├── layout.tsx           # root: fontes, metadata, viewport
│   ├── not-found.tsx
│   └── globals.css          # tokens (@theme), keyframes, base
├── components/
│   ├── ui/                  # primitivos: Button, Card, Pill, IconBox, Reveal…
│   ├── layout/              # SiteHeader, SiteFooter, Section, PageGlow, HeroMesh
│   ├── sections/            # seções compostas, agrupadas por página
│   └── features/            # peças de negócio (carrossel, fluxos, hubs, feed)
├── config/
│   ├── site.ts              # identidade, contato, metadados
│   ├── navigation.ts        # links de nav, rodapé, legais
│   └── content/             # conteúdo tipado de cada página
├── hooks/                   # comportamento reutilizável (um arquivo, uma preocupação)
├── lib/
│   ├── utils.ts             # cn(), stepLabel()
│   └── prospect-calculator.ts  # regras da calculadora de resultados (puro, sem React)
└── types/index.ts           # contratos compartilhados
```

### Princípios que a estrutura sustenta
- **SRP** — cada hook resolve um comportamento (`useTypewriter`, `useHubLines`, `useActiveStep`…); cada seção compõe, não implementa.
- **DIP** — componentes de `features/` recebem dados por props tipadas (`types/`); quem injeta é a seção, que lê de `config/content/`. Trocar o conteúdo não toca em componente.
- **OCP** — variantes (`Button`, `Card`, `Section`, `Pill`) se estendem por mapa de variantes, não por `if` espalhado.

### Fronteira servidor/cliente
Tudo é Server Component por padrão. São `"use client"` apenas: hooks, componentes com estado/efeito e as **seções que injetam dados contendo ícones** (`ServiceAreasSection`, `ProcessSection`, `ApplicationsSection`) — componentes de ícone não atravessam a fronteira RSC. As quatro páginas são prerenderizadas estaticamente.

## Paleta (tokens em `globals.css` → `@theme`)
- Fundo: `--color-ink` `#050A14`; superfícies neutras frias `--color-panel` … `--color-surface-hi`
- Acento primário: `--color-accent` ciano `#35D9FF`, `--color-blue` `#168CFF`, `--color-blue-deep` `#174EFF`
- CTA: `CTA_GRADIENT` (`linear-gradient(100deg,#174EFF,#168CFF,#35D9FF)`), exportado por `components/ui/button`
- Acento secundário (etapa final/conclusão): `--color-amber` `#FFB65C`
- Faixas claras (`--color-paper` `#F4F7FB`): **1x por página** — Home "Parceiros", Agentes "Projetos", Prospect "Plataforma", Soluções "Portfólio"
- Texto: títulos brancos puros; corpo em cinza-azulado neutro (`--color-muted`, `--color-steel`), nunca ciano

Use sempre os tokens (`bg-ink`, `text-muted`, `border-accent/16`). Hex literal só em gradientes e sombras compostas.

## Padrões de layout por página
- **Home** — hero com terminal simulado + typewriter no H1, núcleo 3D (`InteractiveCore`), carrossel 3D de áreas (`ServiceCarousel`), timeline de processo em S (6 etapas, 06 em âmbar), faixa clara "Parceiros".
- **Agentes de IA** — hero com feed de agente ao vivo, "Como podemos ajudar" em constelação assimétrica (1 card principal + 7 tiles clicáveis), tecnologias em hub-and-spoke (centro = logo Solint pulsante em âmbar), grade clara de Projetos com hover-dimming.
- **Prospect** — hero com pipeline vertical, fluxo em S de 6 etapas com espinha luminosa contínua e arcos de conexão, painel de destino com progressão de status (Identificado → Qualificado → Interesse confirmado → Pronto para fechar), calculadora de resultados (wizard de 4 etapas: métricas → custos/plano → meta → resultado, etapa final em âmbar), faixa clara "Plataforma".
- **Soluções** — hero com mockup de produto, "Serviços" em bento grid assimétrico (3 grupos, rail luminoso lateral), "Como a Solint desenvolve" em espiral vertical de 6 etapas (etapa ativa detectada por scroll, 06 = painel de encerramento), Portfólio claro com hover-dimming.

## Convenções técnicas
- **Estilo**: Tailwind utilitário. `style` inline só para valores calculados em runtime (delays, offsets, posições de partícula).
- **Reveal on scroll**: componente `<Reveal>` (Framer Motion, `whileInView` + `once`).
- **Movimento reduzido**: `globals.css` neutraliza animações/transições sob `prefers-reduced-motion`; hooks que animam consultam `usePrefersReducedMotion` antes de iniciar.
- **Heros**: `<HeroMesh pattern="lines|diagonal|dots|grid">` — padrão geométrico + malha SVG com parallax e máscara radial. `<PageGlow preset>` faz os halos fixos de fundo.
- **Typewriter**: `<TypedHeading lead typed tail>`. O texto completo é renderizado no servidor e só então animado — permanece acessível sem JS.
- **Traçados dinâmicos**: `useConnectorPath` (linha suave por vários nós) e `useHubLines` (hub-and-spoke). Marque os nós com `FLOW_NODE_ATTR` / `HUB_NODE_ATTR` / `SPOKE_NODE_ATTR`.
- **Grids**: nunca deixar card órfão na última linha — usar bento assimétrico ou contagem controlada.
- **Mobile**: fluxos verticais colapsam para coluna única com o rail/espinha à esquerda, preservando a ordem temporal.

## Pendências conhecidas
- Conteúdo real de Parceiros, Projetos (Agentes) e Portfólio (Soluções) — atualmente placeholders em `config/content/`.
- Telefone e links de redes sociais em `config/site.ts` / `config/navigation.ts` estão como placeholder.
- Planos, preços e créditos da calculadora do Prospect (`config/content/prospect-calculator.ts`) são placeholder — substituir pelos valores oficiais. A taxa de validação de leads (40%) vive em `lib/prospect-calculator.ts`.
- Hero de Soluções: animação de módulos em camadas (não implementada).
- Seção de integrações/tecnologias de Soluções como ecossistema/rail (não implementada).
