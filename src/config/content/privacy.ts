import { CONTACT_ANCHOR } from "@/config/navigation";

export interface LegalLetterItem {
  letter: string;
  text: string;
}

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  leadText?: string;
  secondaryLead?: string;
  bulletItems?: readonly string[];
  letteredItems?: readonly LegalLetterItem[];
  paragraphs?: readonly string[];
  trailingParagraphs?: readonly string[];
  highlightTag?: string;
}

export interface LegalDocument {
  id: "privacy" | "terms";
  eyebrow: string;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  lastUpdated: string;
  version: string;
  readingTime: string;
  documentHref: string;
  alternativeDoc: {
    label: string;
    href: string;
    description: string;
  };
  introParagraphs: readonly string[];
  sections: readonly LegalSection[];
  finalStatement: string;
  contactBox: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export const privacyPolicyContent: LegalDocument = {
  id: "privacy",
  eyebrow: "/05 — privacidade & conformidade",
  badge: "🛡️ LGPD & Proteção de Dados (Lei 13.709/2018)",
  title: "Política de",
  titleHighlight: "Privacidade",
  subtitle:
    "Transparência, responsabilidade e governança rigorosa no tratamento e segurança de dados pessoais em todo o ecossistema Solint.",
  lastUpdated: "13 de agosto de 2026",
  version: "2026.1",
  readingTime: "8 min de leitura",
  documentHref: "/politica-de-privacidade",
  alternativeDoc: {
    label: "Termos de Uso",
    href: "/termos-de-uso",
    description: "Consulte também os Termos de Uso das nossas soluções e plataformas.",
  },
  introParagraphs: [
    "A Solint | Soluções Inteligentes com IA valoriza a privacidade, a segurança e a proteção dos dados pessoais de seus usuários, clientes, parceiros e visitantes.",
    "Esta Política de Privacidade tem como objetivo explicar, de forma clara e transparente, como podemos coletar, utilizar, armazenar, compartilhar e proteger informações pessoais durante a utilização de nossos sites, formulários, plataformas, sistemas, serviços e demais canais digitais.",
    "O tratamento de dados pessoais realizado pela Solint observa a legislação aplicável, especialmente a Lei nº 13.709/2018, Lei Geral de Proteção de Dados Pessoais, conhecida como LGPD.",
  ],
  sections: [
    {
      id: "dados-que-podemos-coletar",
      number: "01",
      title: "1. Dados que podemos coletar",
      leadText: "Dependendo da forma como você interage com a Solint, podemos coletar informações como:",
      bulletItems: [
        "Nome e sobrenome;",
        "Telefone e número de WhatsApp;",
        "Endereço de e-mail;",
        "Nome da empresa e informações profissionais;",
        "Informações fornecidas voluntariamente por meio de formulários, mensagens, solicitações de contato ou contratação de serviços;",
        "Dados relacionados à utilização de nossos sites, sistemas e plataformas;",
        "Endereço IP, tipo de navegador, dispositivo utilizado e informações técnicas de acesso;",
        "Cookies, identificadores e informações relacionadas à navegação e interação com nossas páginas.",
      ],
      trailingParagraphs: [
        "Solicitamos dados pessoais somente quando necessários para atender uma finalidade legítima relacionada às nossas atividades.",
      ],
      highlightTag: "Coleta Mínima & Finalidade Específica",
    },
    {
      id: "como-utilizamos-os-dados",
      number: "02",
      title: "2. Como utilizamos os dados",
      leadText: "As informações coletadas poderão ser utilizadas para:",
      bulletItems: [
        "Responder solicitações de contato;",
        "Apresentar nossos produtos, serviços e soluções;",
        "Realizar atendimento comercial e suporte;",
        "Elaborar propostas comerciais e viabilizar a contratação de serviços;",
        "Executar contratos e prestar os serviços contratados;",
        "Entrar em contato por telefone, e-mail, WhatsApp ou outros canais informados pelo usuário;",
        "Personalizar e melhorar a experiência em nossos sites, sistemas e serviços;",
        "Realizar análises, métricas e melhorias em nossas operações;",
        "Desenvolver, aperfeiçoar e manter nossas soluções tecnológicas;",
        "Prevenir fraudes, abusos e incidentes de segurança;",
        "Cumprir obrigações legais, regulatórias ou determinações de autoridades competentes;",
        "Realizar comunicações comerciais e de marketing quando houver base legal aplicável.",
      ],
      trailingParagraphs: [
        "O tratamento poderá ocorrer com fundamento no consentimento do titular ou em outras bases legais previstas na LGPD, conforme a finalidade e o contexto do tratamento.",
      ],
      highlightTag: "Bases Legais LGPD",
    },
    {
      id: "inteligencia-artificial-e-automacao",
      number: "03",
      title: "3. Inteligência Artificial e automação",
      paragraphs: [
        "A Solint desenvolve e utiliza soluções baseadas em inteligência artificial e automação para atividades como atendimento, qualificação de contatos, prospecção, vendas, análise de informações, produtividade e execução de processos empresariais.",
        "Em determinadas situações, informações fornecidas pelo usuário poderão ser processadas por sistemas automatizados e tecnologias de inteligência artificial necessárias à execução dos serviços.",
        "Quando aplicável, poderão ser utilizados fornecedores especializados de tecnologia, infraestrutura, inteligência artificial, comunicação, armazenamento ou processamento de dados.",
        "A Solint busca utilizar essas tecnologias de maneira responsável e compatível com as finalidades para as quais os dados foram coletados.",
      ],
      highlightTag: "IA Ética & Responsável",
    },
    {
      id: "compartilhamento-de-informacoes",
      number: "04",
      title: "4. Compartilhamento de informações",
      paragraphs: [
        "A Solint não comercializa dados pessoais.",
        "Entretanto, determinados dados poderão ser compartilhados quando isso for necessário para a prestação dos serviços, operação de nossos sistemas ou cumprimento de obrigações legais.",
        "Esse compartilhamento poderá ocorrer com fornecedores de tecnologia, serviços de hospedagem, bancos de dados, plataformas de comunicação, ferramentas de análise, serviços de inteligência artificial, sistemas de CRM, serviços de pagamento e outros parceiros necessários ao funcionamento das nossas operações.",
        "Também poderemos compartilhar informações quando houver obrigação legal, ordem judicial ou solicitação válida de autoridade competente.",
        "Sempre que aplicável, buscamos trabalhar com fornecedores que adotem medidas adequadas de privacidade e segurança da informação.",
      ],
      highlightTag: "Não Comercialização de Dados",
    },
    {
      id: "armazenamento-e-seguranca-dos-dados",
      number: "05",
      title: "5. Armazenamento e segurança dos dados",
      paragraphs: [
        "Os dados pessoais são mantidos somente pelo período necessário para atender às finalidades que justificaram sua coleta, cumprir obrigações legais ou regulatórias, exercer direitos em processos administrativos ou judiciais ou atender outras hipóteses permitidas pela legislação.",
        "Adotamos medidas técnicas e administrativas razoáveis para proteger as informações contra acessos não autorizados, perda, destruição, alteração, divulgação ou utilização indevida.",
        "Apesar dessas medidas, nenhum sistema conectado à internet pode ser considerado completamente imune a incidentes de segurança.",
      ],
      highlightTag: "Segurança da Informação",
    },
    {
      id: "cookies-e-tecnologias-semelhantes",
      number: "06",
      title: "6. Cookies e tecnologias semelhantes",
      paragraphs: [
        "Nosso site poderá utilizar cookies e tecnologias semelhantes para garantir seu funcionamento, melhorar a experiência de navegação, compreender como os visitantes utilizam nossas páginas e medir o desempenho de campanhas e ações de marketing.",
      ],
      leadText: "Poderão existir cookies:",
      bulletItems: [
        "Necessários ao funcionamento do site;",
        "Relacionados a preferências e funcionalidades;",
        "Utilizados para análise e medição de desempenho;",
        "Utilizados para publicidade e marketing.",
      ],
      trailingParagraphs: [
        "Quando exigido pela legislação aplicável, o usuário poderá escolher quais categorias de cookies deseja autorizar.",
        "O bloqueio de determinados cookies poderá afetar algumas funcionalidades do site.",
      ],
      highlightTag: "Controle de Navegação",
    },
    {
      id: "ferramentas-de-terceiros",
      number: "07",
      title: "7. Ferramentas de terceiros",
      paragraphs: [
        "A Solint poderá utilizar serviços de terceiros para viabilizar suas operações, incluindo ferramentas de análise, publicidade, comunicação, hospedagem, inteligência artificial, automação e gestão de relacionamento com clientes.",
        "Esses serviços poderão utilizar cookies ou realizar o tratamento de determinadas informações conforme suas próprias políticas de privacidade e termos de uso.",
        "Quando o usuário acessar páginas ou serviços externos por meio de links disponibilizados em nossos canais, estará sujeito às políticas e práticas de privacidade desses terceiros.",
        "A Solint não possui controle sobre sites e serviços externos independentes.",
      ],
    },
    {
      id: "direitos-do-titular",
      number: "08",
      title: "8. Direitos do titular",
      leadText: "Nos termos da LGPD, o titular dos dados poderá, conforme aplicável, solicitar:",
      bulletItems: [
        "Confirmação da existência de tratamento;",
        "Acesso aos seus dados pessoais;",
        "Correção de dados incompletos, inexatos ou desatualizados;",
        "Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a legislação;",
        "Portabilidade dos dados, observadas as condições legais e regulamentares;",
        "Informações sobre o compartilhamento de seus dados;",
        "Informações sobre a possibilidade de não fornecer consentimento e suas consequências;",
        "Revogação do consentimento;",
        "Eliminação dos dados tratados com fundamento no consentimento, quando aplicável;",
        "Oposição ao tratamento realizado em determinadas circunstâncias previstas em lei.",
      ],
      trailingParagraphs: [
        "Alguns dados poderão continuar armazenados mesmo após uma solicitação de exclusão quando sua manutenção for necessária ou permitida pela legislação.",
      ],
      highlightTag: "Garantias ao Titular — Art. 18 LGPD",
    },
    {
      id: "comunicacoes-e-marketing",
      number: "09",
      title: "9. Comunicações e marketing",
      paragraphs: [
        "Quando permitido pela legislação, a Solint poderá utilizar os dados de contato para apresentar produtos, serviços, conteúdos, novidades e oportunidades comerciais.",
        "O titular poderá solicitar a interrupção dessas comunicações pelos mecanismos disponibilizados nas próprias mensagens ou entrando em contato com a Solint.",
        "A solicitação de interrupção de comunicações promocionais não impede o envio de mensagens necessárias à execução de contratos, suporte, segurança, cobrança ou outras comunicações operacionais legítimas.",
      ],
      highlightTag: "Opt-out Disponível",
    },
    {
      id: "dados-tratados-em-nome-de-clientes",
      number: "10",
      title: "10. Dados tratados em nome de clientes",
      paragraphs: [
        "Em determinados serviços, especialmente aqueles relacionados a sistemas, automações, agentes de inteligência artificial, atendimento, CRM, prospecção e integrações, a Solint poderá tratar dados pessoais em nome de seus clientes.",
        "Nessas situações, dependendo da operação realizada e das responsabilidades definidas entre as partes, a Solint poderá atuar como operadora de dados pessoais, realizando o tratamento conforme as instruções do cliente e os limites estabelecidos contratualmente e pela legislação aplicável.",
        "O cliente contratante permanece responsável pela legitimidade da coleta, utilização e disponibilização dos dados inseridos ou integrados às soluções contratadas, quando atuar como controlador desses dados.",
      ],
      highlightTag: "Atuação Operadora vs. Controlador",
    },
    {
      id: "transferencia-e-processamento-de-dados",
      number: "11",
      title: "11. Transferência e processamento de dados",
      paragraphs: [
        "Alguns dos fornecedores tecnológicos utilizados pela Solint poderão possuir infraestrutura ou servidores localizados fora do Brasil.",
        "Consequentemente, determinados dados poderão ser processados ou armazenados em outros países.",
        "Quando aplicável, a Solint buscará realizar essas operações observando os requisitos previstos na legislação brasileira para transferência internacional de dados pessoais.",
      ],
      highlightTag: "Transferência Internacional Segura",
    },
    {
      id: "menores-de-idade",
      number: "12",
      title: "12. Menores de idade",
      paragraphs: [
        "Os produtos e serviços da Solint são destinados predominantemente a empresas e profissionais.",
        "Não buscamos coletar intencionalmente dados pessoais de crianças ou adolescentes sem que exista fundamento jurídico adequado para esse tratamento.",
        "Caso seja identificada a coleta indevida desse tipo de informação, poderão ser adotadas as medidas necessárias para sua exclusão ou regularização.",
      ],
    },
    {
      id: "responsabilidades-do-usuario",
      number: "13",
      title: "13. Responsabilidades do usuário",
      leadText: "Ao utilizar nossos sites, plataformas e serviços, o usuário compromete-se a utilizá-los de maneira lícita e adequada.",
      secondaryLead: "O usuário não deverá:",
      letteredItems: [
        {
          letter: "A",
          text: "Praticar atividades ilegais, fraudulentas ou contrárias à legislação, à boa-fé ou à ordem pública;",
        },
        {
          letter: "B",
          text: "Utilizar nossos serviços para disseminar conteúdos ilícitos, discriminatórios, fraudulentos ou que violem direitos de terceiros;",
        },
        {
          letter: "C",
          text: "Tentar obter acesso não autorizado aos sistemas, contas, servidores ou informações da Solint ou de terceiros;",
        },
        {
          letter: "D",
          text: "Introduzir ou disseminar vírus, códigos maliciosos ou outros mecanismos capazes de prejudicar sistemas, equipamentos, dados ou serviços;",
        },
        {
          letter: "E",
          text: "Utilizar nossas soluções de maneira incompatível com sua finalidade ou com a legislação aplicável.",
        },
      ],
      highlightTag: "Conduta & Segurança Digital",
    },
    {
      id: "alteracoes-desta-politica",
      number: "14",
      title: "14. Alterações desta Política",
      paragraphs: [
        "Esta Política de Privacidade poderá ser atualizada periodicamente para refletir alterações legais, regulatórias, tecnológicas ou relacionadas aos serviços oferecidos pela Solint.",
        "A versão vigente estará disponível em nossos canais oficiais, acompanhada da respectiva data de atualização.",
        "Recomendamos que o usuário consulte esta Política periodicamente.",
      ],
    },
    {
      id: "contato",
      number: "15",
      title: "15. Contato",
      paragraphs: [
        "Caso tenha dúvidas sobre esta Política de Privacidade, sobre o tratamento de seus dados pessoais ou queira exercer algum dos direitos previstos na LGPD, entre em contato com a Solint pelos canais oficiais disponibilizados em nosso site.",
      ],
      highlightTag: "Canal Direto do Titular",
    },
  ],
  finalStatement:
    "Ao utilizar nossos sites, sistemas ou serviços, o usuário declara estar ciente das práticas de tratamento de dados descritas nesta Política de Privacidade.",
  contactBox: {
    title: "Dúvidas sobre Privacidade ou LGPD?",
    description:
      "Nossa equipe e encarregado de proteção de dados estão disponíveis para responder solicitações de titulares e esclarecer qualquer ponto desta política.",
    ctaLabel: "Falar com a Solint via WhatsApp",
    ctaHref: CONTACT_ANCHOR,
  },
};
