import { CONTACT_ANCHOR } from "@/config/navigation";
import type { LegalDocument } from "./privacy";

export const termsOfUseContent: LegalDocument = {
  id: "terms",
  eyebrow: "/06 — termos de uso & condições",
  badge: "📜 Termos & Condições Gerais de Uso",
  title: "Termos de",
  titleHighlight: "Uso",
  subtitle:
    "Diretrizes, responsabilidades, licenças e condições contratuais aplicáveis aos sistemas, ferramentas, agentes de IA e plataformas Solint.",
  lastUpdated: "13 de agosto de 2026",
  version: "2026.1",
  readingTime: "11 min de leitura",
  documentHref: "/termos-de-uso",
  alternativeDoc: {
    label: "Política de Privacidade",
    href: "/politica-de-privacidade",
    description: "Consulte também nossa Política de Privacidade e proteção de dados.",
  },
  introParagraphs: [
    "Bem-vindo à Solint | Soluções Inteligentes com IA.",
    "Estes Termos de Uso estabelecem as condições aplicáveis ao acesso e utilização dos sites, plataformas, sistemas, ferramentas, softwares, agentes de inteligência artificial, automações e demais soluções disponibilizadas pela Solint.",
    "Ao acessar ou utilizar nossos serviços, o usuário declara ter lido e compreendido estes Termos de Uso e concorda em respeitá-los.",
    "Caso não concorde com alguma das condições apresentadas, recomendamos que não utilize os serviços correspondentes.",
  ],
  sections: [
    {
      id: "sobre-a-solint",
      number: "01",
      title: "1. Sobre a Solint",
      paragraphs: [
        "A Solint atua no desenvolvimento e fornecimento de soluções tecnológicas para empresas e profissionais, incluindo sistemas personalizados, softwares, plataformas digitais, automações de processos, agentes de inteligência artificial, soluções de atendimento e vendas, ferramentas de prospecção comercial e outros serviços relacionados à tecnologia e inteligência artificial.",
        "Determinados produtos ou serviços poderão possuir contratos, propostas comerciais, planos, condições ou termos específicos. Nesses casos, tais documentos deverão ser considerados em conjunto com estes Termos de Uso.",
        "Em caso de divergência entre estes Termos e um contrato específico firmado entre a Solint e o cliente, prevalecerão as condições estabelecidas no contrato específico em relação ao objeto contratado.",
      ],
      highlightTag: "Escopo & Prevalência Contratual",
    },
    {
      id: "aceitacao-dos-termos",
      number: "02",
      title: "2. Aceitação dos Termos",
      paragraphs: [
        "Ao acessar, contratar ou utilizar qualquer serviço disponibilizado pela Solint, o usuário declara possuir capacidade legal para aceitar estes Termos.",
        "Quando a utilização ocorrer em nome de uma empresa ou outra pessoa jurídica, o usuário declara possuir autorização suficiente para representá-la.",
        "O uso continuado dos serviços após eventual atualização destes Termos poderá representar a aceitação das novas condições, observada a legislação aplicável.",
      ],
      highlightTag: "Capacidade & Representação Legal",
    },
    {
      id: "cadastro-e-informacoes-do-usuario",
      number: "03",
      title: "3. Cadastro e informações do usuário",
      paragraphs: [
        "Alguns serviços poderão exigir cadastro, criação de conta ou fornecimento de determinadas informações.",
        "O usuário compromete-se a fornecer informações verdadeiras, completas e atualizadas.",
        "Quando houver utilização de login e senha, o usuário será responsável por manter suas credenciais protegidas e confidenciais.",
        "O compartilhamento indevido de credenciais ou a utilização da conta por terceiros poderá comprometer a segurança do serviço.",
        "O usuário deverá comunicar à Solint sempre que identificar ou suspeitar de acesso não autorizado à sua conta.",
      ],
      highlightTag: "Sigilo de Credenciais",
    },
    {
      id: "utilizacao-dos-servicos",
      number: "04",
      title: "4. Utilização dos serviços",
      leadText:
        "Os serviços da Solint deverão ser utilizados exclusivamente para finalidades lícitas e de acordo com estes Termos, com os contratos eventualmente celebrados e com a legislação aplicável.",
      secondaryLead: "O usuário compromete-se a não utilizar os serviços para:",
      letteredItems: [
        { letter: "A", text: "Praticar atividades ilícitas ou fraudulentas;" },
        { letter: "B", text: "Violar direitos de terceiros;" },
        {
          letter: "C",
          text: "Enviar conteúdos ilegais, abusivos, discriminatórios, fraudulentos ou maliciosos;",
        },
        {
          letter: "D",
          text: "Disseminar vírus, malware ou qualquer código destinado a comprometer sistemas ou informações;",
        },
        {
          letter: "E",
          text: "Tentar obter acesso não autorizado aos sistemas, servidores, contas ou dados da Solint ou de terceiros;",
        },
        {
          letter: "F",
          text: "Interferir no funcionamento, segurança ou disponibilidade dos serviços;",
        },
        {
          letter: "G",
          text: "Realizar engenharia reversa, copiar, reproduzir ou explorar indevidamente tecnologias da Solint, salvo quando expressamente autorizado ou permitido por lei;",
        },
        {
          letter: "H",
          text: "Utilizar as soluções para práticas de spam, fraude, falsidade ideológica ou outras atividades incompatíveis com a legislação;",
        },
        {
          letter: "I",
          text: "Utilizar sistemas de comunicação, prospecção ou automação de forma incompatível com as regras aplicáveis às plataformas utilizadas ou com a legislação vigente.",
        },
      ],
      trailingParagraphs: [
        "A Solint poderá adotar medidas para prevenir ou interromper utilizações que representem riscos técnicos, jurídicos, operacionais ou de segurança.",
      ],
      highlightTag: "Uso Aceitável & Diretrizes de Conduta",
    },
    {
      id: "inteligencia-artificial",
      number: "05",
      title: "5. Inteligência Artificial",
      paragraphs: [
        "Algumas soluções disponibilizadas pela Solint utilizam modelos, agentes e tecnologias de inteligência artificial.",
        "O usuário reconhece que sistemas de inteligência artificial possuem limitações inerentes à tecnologia e podem eventualmente produzir respostas incorretas, incompletas, imprecisas ou inadequadas ao contexto.",
        "As respostas geradas por inteligência artificial não devem ser consideradas automaticamente verdadeiras ou utilizadas como substitutas de avaliação profissional quando a situação exigir conhecimento técnico especializado, especialmente em decisões jurídicas, médicas, financeiras, contábeis ou outras atividades reguladas.",
        "Quando necessário, cabe ao usuário revisar e validar as informações antes de utilizá-las em decisões relevantes.",
        "A Solint poderá realizar ajustes, atualizações e aperfeiçoamentos nos modelos, prompts, integrações, fluxos e tecnologias utilizados em suas soluções.",
      ],
      highlightTag: "Limitações Inerentes de Modelos de IA",
    },
    {
      id: "sistemas-automatizados-e-integracoes",
      number: "06",
      title: "6. Sistemas automatizados e integrações",
      paragraphs: [
        "Alguns serviços poderão depender de integrações com plataformas e tecnologias de terceiros, incluindo serviços de inteligência artificial, APIs, WhatsApp, sistemas de CRM, bancos de dados, serviços de hospedagem, plataformas de automação, serviços de e-mail, calendários e outros sistemas.",
        "A disponibilidade dessas funcionalidades poderá depender do funcionamento e das políticas desses fornecedores.",
        "Alterações, bloqueios, limitações, indisponibilidades, mudanças de API ou modificações nas políticas de terceiros poderão afetar temporária ou permanentemente determinadas funcionalidades.",
        "Quando tecnicamente possível e comercialmente aplicável, a Solint poderá realizar adaptações para manter a continuidade dos serviços.",
      ],
      highlightTag: "Dependências & Provedores Externos",
    },
    {
      id: "whatsapp-mensagens-e-comunicacao-automatizada",
      number: "07",
      title: "7. WhatsApp, mensagens e comunicação automatizada",
      paragraphs: [
        "Determinadas soluções da Solint poderão possibilitar o envio e recebimento de mensagens por WhatsApp ou outros canais de comunicação.",
        "Quando utilizar essas funcionalidades, o cliente é responsável pela legitimidade dos contatos utilizados, pelo conteúdo das comunicações e pelo cumprimento das normas aplicáveis à sua atividade.",
        "O usuário também deverá observar as políticas e condições estabelecidas pelos respectivos provedores de comunicação.",
        "A Solint não poderá ser responsabilizada por bloqueios, limitações ou suspensões aplicadas diretamente por plataformas de terceiros em razão da utilização realizada pelo cliente, especialmente quando houver descumprimento das regras dessas plataformas.",
      ],
      highlightTag: "Conformidade em Mensageria",
    },
    {
      id: "dados-inseridos-pelo-cliente",
      number: "08",
      title: "8. Dados inseridos pelo cliente",
      paragraphs: [
        "Quando o usuário inserir, importar, integrar ou disponibilizar dados em uma solução da Solint, declara possuir legitimidade para utilizá-los para as finalidades pretendidas.",
        "Isso inclui, quando aplicável, dados de clientes, leads, colaboradores, fornecedores, parceiros ou outros terceiros.",
        "O usuário é responsável pela origem, qualidade e legalidade das informações disponibilizadas aos sistemas.",
        "A Solint realizará o tratamento dessas informações de acordo com a finalidade dos serviços contratados, com sua Política de Privacidade, com os instrumentos contratuais aplicáveis e com a legislação vigente.",
      ],
      highlightTag: "Legitimidade dos Dados Integrados",
    },
    {
      id: "propriedade-intelectual",
      number: "09",
      title: "9. Propriedade intelectual",
      paragraphs: [
        "Salvo disposição contratual específica em contrário, os direitos relacionados às tecnologias, metodologias, estruturas, sistemas, códigos, componentes reutilizáveis, fluxos, automações, interfaces, marcas, conteúdos e demais ativos desenvolvidos ou pertencentes à Solint permanecem de propriedade de seus respectivos titulares.",
        "A contratação ou utilização de um serviço não representa automaticamente transferência de propriedade intelectual ao cliente.",
        "Quando houver desenvolvimento de software ou solução personalizada, as regras relativas à propriedade, licença de uso, código-fonte, exclusividade, cessão ou transferência deverão observar o contrato ou proposta comercial correspondente.",
        "É proibida a reprodução, distribuição, comercialização, sublicenciamento, modificação ou exploração não autorizada dos ativos intelectuais da Solint.",
      ],
      highlightTag: "Proteção Intelectual & Código-fonte",
    },
    {
      id: "licenca-de-uso",
      number: "10",
      title: "10. Licença de uso",
      paragraphs: [
        "Quando aplicável, a Solint concede ao cliente uma licença limitada, revogável, não exclusiva e não transferível para utilizar determinada plataforma, sistema ou software durante o período de contratação.",
        "Essa licença não representa venda ou transferência da tecnologia.",
        "Salvo disposição contratual diferente, o direito de utilização permanecerá condicionado à manutenção da contratação e ao cumprimento das obrigações financeiras e contratuais correspondentes.",
      ],
      highlightTag: "Licenciamento & Termos de Acesso",
    },
    {
      id: "planos-pagamentos-e-servicos-contratados",
      number: "11",
      title: "11. Planos, pagamentos e serviços contratados",
      paragraphs: [
        "Os valores, formas de pagamento, limites de utilização, funcionalidades, prazos e demais condições comerciais serão apresentados na proposta, contrato, página de contratação ou documento correspondente ao serviço escolhido.",
        "Determinados serviços poderão envolver cobrança inicial de implantação, desenvolvimento ou configuração, além de mensalidades, licenças, créditos, consumo ou outros valores recorrentes.",
        "Serviços de terceiros necessários ao funcionamento de determinada solução poderão possuir custos próprios, conforme estabelecido na contratação.",
        "O atraso ou inadimplemento poderá resultar na suspensão do acesso ao serviço, observadas as condições contratuais e a legislação aplicável.",
      ],
      highlightTag: "Condições Financeiras",
    },
    {
      id: "creditos-limites-e-consumo",
      number: "12",
      title: "12. Créditos, limites e consumo",
      paragraphs: [
        "Algumas soluções poderão funcionar com limites de utilização, quantidade de contatos, leads, mensagens, créditos, processamento, armazenamento ou consumo de inteligência artificial.",
        "Os limites aplicáveis serão informados nas condições do respectivo plano ou contratação.",
        "Caso o usuário ultrapasse os limites contratados, poderão ser aplicadas cobranças adicionais, redução temporária de funcionalidades ou necessidade de contratação de capacidade adicional, conforme as condições previamente estabelecidas.",
      ],
    },
    {
      id: "disponibilidade-dos-servicos",
      number: "13",
      title: "13. Disponibilidade dos serviços",
      leadText:
        "A Solint busca manter seus serviços disponíveis e funcionando adequadamente, porém não garante disponibilidade ininterrupta ou ausência absoluta de falhas.",
      secondaryLead: "Os serviços poderão ser temporariamente interrompidos em razão de:",
      bulletItems: [
        "Manutenções programadas ou emergenciais;",
        "Atualizações de sistemas;",
        "Falhas de infraestrutura;",
        "Problemas de conexão com a internet;",
        "Indisponibilidade de fornecedores;",
        "Alterações em APIs e plataformas de terceiros;",
        "Incidentes de segurança;",
        "Eventos de força maior;",
        "Situações técnicas fora do controle razoável da Solint.",
      ],
      trailingParagraphs: [
        "Sempre que possível, serão adotadas medidas para restabelecer o funcionamento dos serviços.",
      ],
      highlightTag: "Disponibilidade & Manutenção",
    },
    {
      id: "atualizacoes-e-alteracoes-dos-servicos",
      number: "14",
      title: "14. Atualizações e alterações dos serviços",
      paragraphs: [
        "As soluções tecnológicas da Solint estão sujeitas a evolução contínua.",
        "Por isso, funcionalidades, interfaces, modelos de inteligência artificial, integrações e características técnicas poderão ser atualizados ou modificados para melhoria de desempenho, segurança, adequação tecnológica ou compatibilidade com serviços de terceiros.",
        "Alterações que afetem de forma substancial as condições comerciais de determinado cliente deverão observar o contrato ou plano correspondente.",
      ],
    },
    {
      id: "suporte-e-manutencao",
      number: "15",
      title: "15. Suporte e manutenção",
      paragraphs: [
        "Os serviços de suporte, manutenção e atualização serão prestados conforme as condições estabelecidas no plano, contrato ou proposta comercial contratada.",
        "O suporte poderá possuir limites relacionados a horários, canais de atendimento, escopo técnico e níveis de serviço.",
        "Solicitações que representem desenvolvimento de novas funcionalidades, alterações relevantes de escopo ou customizações adicionais poderão ser objeto de orçamento específico.",
      ],
      highlightTag: "Níveis de Atendimento (SLA)",
    },
    {
      id: "responsabilidades-do-usuario",
      number: "16",
      title: "16. Responsabilidades do usuário",
      leadText:
        "O usuário é responsável pela maneira como utiliza as ferramentas disponibilizadas pela Solint.",
      secondaryLead: "É responsabilidade do usuário:",
      bulletItems: [
        "Manter suas informações cadastrais atualizadas;",
        "Proteger suas credenciais de acesso;",
        "Utilizar os serviços de maneira legal;",
        "Garantir a legitimidade dos dados inseridos nos sistemas;",
        "Revisar informações relevantes produzidas por inteligência artificial;",
        "Cumprir as políticas das plataformas de terceiros utilizadas;",
        "Respeitar os direitos de propriedade intelectual;",
        "Manter equipamentos, conexão e infraestrutura necessários à utilização dos serviços quando estes forem de sua responsabilidade.",
      ],
      highlightTag: "Deveres do Usuário",
    },
    {
      id: "limitacao-de-responsabilidade",
      number: "17",
      title: "17. Limitação de responsabilidade",
      paragraphs: [
        "A Solint não poderá ser responsabilizada por prejuízos decorrentes de utilização inadequada dos serviços pelo usuário, informações incorretas fornecidas pelo cliente, decisões tomadas exclusivamente com base em respostas automatizadas sem validação adequada ou descumprimento das políticas de plataformas de terceiros.",
        "Da mesma forma, a Solint não será responsável por indisponibilidades ou alterações decorrentes diretamente de serviços externos sobre os quais não possua controle operacional.",
        "Eventuais responsabilidades da Solint deverão observar os limites estabelecidos pela legislação aplicável e pelos contratos específicos celebrados entre as partes.",
        "Nenhuma disposição destes Termos deverá ser interpretada como exclusão de responsabilidade quando essa exclusão for vedada pela legislação brasileira.",
      ],
      highlightTag: "Limites Jurídicos & Operacionais",
    },
    {
      id: "suspensao-ou-encerramento-do-acesso",
      number: "18",
      title: "18. Suspensão ou encerramento do acesso",
      leadText: "A Solint poderá suspender ou restringir o acesso aos serviços quando identificar:",
      bulletItems: [
        "Violação destes Termos;",
        "Utilização ilegal ou fraudulenta;",
        "Risco à segurança da plataforma ou de terceiros;",
        "Tentativa de acesso não autorizado;",
        "Inadimplência, quando aplicável;",
        "Descumprimento de obrigações contratuais;",
        "Utilização que possa comprometer a infraestrutura ou reputação dos serviços.",
      ],
      trailingParagraphs: [
        "Sempre que aplicável, serão observadas as condições previstas no contrato correspondente e na legislação vigente.",
      ],
      highlightTag: "Medidas de Proteção da Plataforma",
    },
    {
      id: "privacidade-e-protecao-de-dados",
      number: "19",
      title: "19. Privacidade e proteção de dados",
      paragraphs: [
        "O tratamento de dados pessoais realizado durante a utilização dos serviços seguirá a Política de Privacidade da Solint e a legislação brasileira aplicável, especialmente a Lei nº 13.709/2018, Lei Geral de Proteção de Dados Pessoais, LGPD.",
        "Ao utilizar os serviços, recomendamos que o usuário também consulte nossa Política de Privacidade.",
      ],
      highlightTag: "Vinculação com a Política de Privacidade",
    },
    {
      id: "links-e-servicos-externos",
      number: "20",
      title: "20. Links e serviços externos",
      paragraphs: [
        "Nossos sites, plataformas ou sistemas poderão conter links ou integrações com serviços externos.",
        "A Solint não controla integralmente as práticas, conteúdos, disponibilidade ou políticas desses serviços.",
        "A utilização de plataformas externas poderá estar sujeita aos termos de uso e políticas de privacidade dos respectivos fornecedores.",
      ],
    },
    {
      id: "alteracoes-destes-termos",
      number: "21",
      title: "21. Alterações destes Termos",
      paragraphs: [
        "A Solint poderá atualizar estes Termos de Uso sempre que necessário para refletir mudanças em seus serviços, tecnologias, práticas comerciais ou legislação aplicável.",
        "A versão mais recente permanecerá disponível nos canais oficiais da Solint, acompanhada da data da última atualização.",
        "Quando alterações relevantes exigirem comunicação ou consentimento específico, serão adotadas as medidas cabíveis conforme a legislação aplicável.",
      ],
    },
    {
      id: "legislacao-aplicavel",
      number: "22",
      title: "22. Legislação aplicável",
      paragraphs: [
        "Estes Termos serão interpretados de acordo com as leis da República Federativa do Brasil.",
        "Eventuais controvérsias relacionadas à utilização dos serviços deverão observar a legislação aplicável e as disposições específicas existentes nos contratos celebrados entre a Solint e seus clientes.",
        "Quando houver relação de consumo, serão preservados integralmente os direitos e regras de competência estabelecidos pela legislação consumerista.",
      ],
      highlightTag: "Jurisdição Brasileira",
    },
    {
      id: "contato",
      number: "23",
      title: "23. Contato",
      paragraphs: [
        "Em caso de dúvidas sobre estes Termos de Uso, funcionamento dos serviços ou demais questões relacionadas às soluções oferecidas, o usuário poderá entrar em contato com a Solint pelos canais oficiais disponibilizados em nosso site.",
      ],
      highlightTag: "Canais Oficiais Solint",
    },
  ],
  finalStatement:
    "Ao acessar ou utilizar os serviços da Solint, o usuário declara estar ciente das condições estabelecidas nestes Termos de Uso.",
  contactBox: {
    title: "Dúvidas sobre os Termos de Uso?",
    description:
      "Nossa equipe técnica e jurídica está à disposição para esclarecer contratos, planos e diretrizes de utilização dos nossos serviços.",
    ctaLabel: "Falar com a Solint via WhatsApp",
    ctaHref: CONTACT_ANCHOR,
  },
};
