export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: 'Full Stack & IoT' | 'Sistemas Comerciais' | 'Finanças & Full Stack' | 'Web & Landing Pages';
  role: string;
  year: string;
  status: 'Produção' | 'Concluído' | 'Em Evolução';
  tags: string[];
  metrics: { label: string; value: string }[];
  problem: string;
  solution: string;
  architectureDetails: string[];
  stack: {
    frontend: string[];
    backend: string[];
    database: string[];
    infrastructure: string[];
  };
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'pinha-3d',
    title: 'Pinha 3D',
    slug: '/projetos/pinha-3d',
    summary: 'Plataforma integrada de gestão fabril de impressão 3D, telemetria em tempo real (Moonraker) e processador em Python para extração de custos e metadados de arquivos .3mf (XML).',
    category: 'Full Stack & IoT',
    role: 'Tech Lead, Engenharia de Software & Modelagem de Banco',
    year: '2025 - 2026',
    status: 'Produção',
    tags: ['Python', 'Formato .3mf (XML)', 'Moonraker API', 'Supabase', 'React', 'TypeScript'],
    metrics: [
      { label: 'Telemetria Real-Time', value: '< 250ms' },
      { label: 'Parser .3mf (ZIP + XML)', value: '100% Python Stdlib' },
      { label: 'Estimativa de Custos', value: 'Gramas + Tempo Real' },
      { label: 'Custo de Nuvem', value: 'Zero (Pages + Worker Local)' }
    ],
    problem: 'Na operação de manufatura aditiva, todo o custo de produção é medido em gramas de filamento e tempo de impressão. Esses números ficam encapsulados dentro do pacote .3mf gerado pelo fatiador, e digitar tudo à mão a cada peça gera erros de precificação. Além disso, operar impressoras à distância exige monitoramento contínuo de temperaturas e falhas.',
    solution: 'Desenvolvimento de uma arquitetura híbrida: interface reativa em React hospedada no Cloudflare Pages, banco e autenticação com Supabase PostgreSQL (RLS), sincronizador de telemetria em tempo real com a API Klipper/Moonraker e um parser em Python (sem dependências externas) para ler metadados do pacote .3mf (XML) com fallback geométrico.',
    architectureDetails: [
      'Parser parser_3mf.py baseado exclusivamente na biblioteca padrão do Python (zipfile, xml.etree.ElementTree).',
      'Suporte a arquivos gerados pelo Creality Print, Bambu Studio, PrusaSlicer e OrcaSlicer para extração de tempo, filamento (peça + purga) e bounding box.',
      'Algoritmo de fallback geométrico com cálculo do volume real da malha pelo método dos tetraedros com sinal e densidade.',
      'Sincronizador sync_printer.py comunicando com Klipper/Moonraker na porta 7125 e persistindo status no Supabase PostgreSQL.'
    ],
    stack: {
      frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'Vite'],
      backend: ['Python 3.8+ (stdlib: zipfile, xml)', 'Klipper / Moonraker API', 'Scripts Locais'],
      database: ['PostgreSQL (Supabase)', 'Row Level Security', 'REST API'],
      infrastructure: ['Cloudflare Pages', 'GitHub CI/CD', 'Rede Local IoT']
    },
    keyFeatures: [
      'Extração precisa de tempo e consumo de filamento por slot (peça + purga) direto do pacote .3mf.',
      'Cálculo de custos automatizado por grama e tempo de operação.',
      'Telemetria em tempo real: temperaturas de bico e mesa, progresso percentual e status de impressão.',
      'Módulo de integração de código aberto com documentação e saída JSON/CLI.'
    ],
    githubUrl: 'https://github.com/ZandreK/pinha3d-3mf-processor'
  },
  {
    id: 'pdvflow',
    title: 'pdvFlow',
    slug: '/projetos/pdvflow',
    summary: 'Sistema de automação comercial e Ponto de Venda (PDV) de alta performance, desenhado para fluxo de caixa contínuo, controle de estoque atômico e confiabilidade operacional.',
    category: 'Sistemas Comerciais',
    role: 'Engenheiro Full Stack & DBA',
    year: '2026',
    status: 'Produção',
    tags: ['Full Stack', 'PostgreSQL', 'Transações ACID', 'TypeScript', 'Tailwind CSS'],
    metrics: [
      { label: 'Tempo de Registro por Venda', value: '< 1.2s' },
      { label: 'Consistência de Estoque', value: '100% ACID' },
      { label: 'Suporte a Falha de Rede', value: 'Graceful Degradation' },
      { label: 'Fechamento de Caixa', value: 'Automático & Auditado' }
    ],
    problem: 'Sistemas de PDV tradicionais costumam ser lentos, exigem múltiplos cliques para fechar vendas e sofrem com inconsistência de estoque concorrente quando múltiplos terminais operam simultaneamente.',
    solution: 'Construção de uma solução orientada a performance de checkout com atalhos de teclado ágeis, transações ACID rigorosas no banco de dados e pipeline de fechamento de caixa auditável com conciliação automática.',
    architectureDetails: [
      'Arquitetura focada em latência zero para digitação de produtos e leitura de código de barras.',
      'Controle de concorrência com travas otimistas no banco de dados para evitar estoque negativo.',
      'Auditoria de transações de caixa: abertura, suprimento, sangria e conferência cega.',
      'Design corporativo com foco em ergonomia visual para operadores em turnos longos.'
    ],
    stack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'State Management'],
      backend: ['Node.js / REST APIs', 'Microserviços de Vendas'],
      database: ['PostgreSQL', 'Modelagem Relacional Normalizada', 'Índices Otimizados'],
      infrastructure: ['Docker', 'Cloudflare', 'Linux Server']
    },
    keyFeatures: [
      'Frente de caixa ultra-rápida operável 100% via teclado.',
      'Gestão multi-nível de permissões de operadores, fiscais e gerentes.',
      'Relatórios gerenciais analíticos com margem de contribuição por SKU.',
      'Emissão de comprovantes e integração com meios de pagamento.'
    ]
  },
  {
    id: 'pocket-finance',
    title: 'Pocket Finance Hub',
    slug: '/projetos/pocket-finance',
    summary: 'Controle financeiro pessoal mobile-first com rendimento por conta atrelado ao CDI ou à taxa Selic ao vivo via API pública do Banco Central do Brasil (SGS).',
    category: 'Finanças & Full Stack',
    role: 'Engenheiro Front-End & Regra de Negócio',
    year: '2026',
    status: 'Concluído',
    tags: ['React', 'TypeScript', 'API Banco Central', 'Juros Compostos', 'Tailwind CSS', 'Vite'],
    metrics: [
      { label: 'Taxas CDI / Selic', value: 'Ao Vivo (BACEN)' },
      { label: 'Bases de Cálculo', value: '252 (Úteis) e 365' },
      { label: 'Execução', value: '100% Client-Side' },
      { label: 'Persistência', value: 'Local + Schema Cloud RLS' }
    ],
    problem: 'Aplicativos financeiros tradicionais tratam contas bancárias como valores estáticos, sem refletir a rentabilidade real do dinheiro em reservas de emergência (como CDB 100% CDI, Nubank ou Tesouro Selic), além de dificultar o acompanhamento do ciclo de faturas de múltiplos cartões de crédito.',
    solution: 'Desenvolvimento de uma aplicação web reativa que consulta diariamente as taxas oficiais do Banco Central (SGS), calculando juros compostos diários na base 252 (dias úteis) ou 365 (corridos) para exibir o saldo atualizado em tempo real com rendimento acumulado, acompanhado de gestão de faturas de cartão e lançamentos categorizados.',
    architectureDetails: [
      'Consumo da API pública do Banco Central (SGS séries 4389 para CDI e 432 para Meta Selic) com cache diário e tolerância a falhas offline.',
      'Motor de cálculo financeiro (yield.ts) convertendo taxa anualizada em diária composta com suporte a múltiplos indexadores (% CDI, % Selic, % a.a., % a.m.).',
      'Fluxo completo de cartão de crédito: controle de limite, fatura aberta e débito com quitação atômica.',
      'Arquitetura modular pronta para rodar sem servidor (localStorage) ou conectada ao Supabase PostgreSQL com Row Level Security (RLS).'
    ],
    stack: {
      frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Recharts'],
      backend: ['API Banco Central (SGS)', 'Context + Reducer', 'Hooks Customizados'],
      database: ['LocalStorage', 'Supabase PostgreSQL (Schema com RLS opcional)'],
      infrastructure: ['GitHub', 'Vite', 'Cloudflare Pages']
    },
    keyFeatures: [
      'Rendimento automático por conta configurável (% do CDI, % da Selic, prefixado).',
      'Diferenciação precisa entre dias úteis (252 para CDB/LCI) e dias corridos (365 para poupança).',
      'Gestão de cartões de crédito com liberação automática de limite no pagamento da fatura.',
      'Dashboard com patrimônio líquido, entradas/saídas do mês e distribuição por categoria.'
    ],
    githubUrl: 'https://github.com/ZandreK/pocket-finance-hub'
  }
];

export const OTHER_PROJECTS = [
  {
    id: 'doutor-saude',
    title: 'Doutor Saúde',
    category: 'Web & Landing Pages',
    period: '2026',
    description: 'Ambiente digital para clínica médica com landing pages de alta conversão, campanhas sazonais estruturadas (Outubro Rosa, Novembro Azul) e agendamento simplificado.',
    stack: ['React', 'Tailwind CSS', 'Vite', 'SEO Otimizado'],
    highlights: 'Otimização Lighthouse 98+, responsividade multiplataforma e arquitetura de componentes reutilizáveis.'
  },
  {
    id: 'evntuz-brilluz',
    title: 'Evntuz & Brilluz',
    category: 'Sistemas Comerciais & Catálogos',
    period: '2026',
    description: 'Plataforma para catálogo comercial de iluminação e gestão de locações para eventos corporativos e sociais.',
    stack: ['TypeScript', 'React', 'Tailwind CSS', 'PostgreSQL'],
    highlights: 'Catálogo dinâmico de produtos com busca facetada e organização por perfil de evento.'
  }
];

export const TECHNICAL_PILLARS = [
  {
    id: 'fullstack',
    title: 'Engenharia Full Stack',
    subtitle: 'Arquitetura de Software & Aplicações Modernas',
    description: 'Construção de aplicações de ponta a ponta com foco em manutenibilidade, separação de responsabilidades e interfaces reativas de alto desempenho.',
    skills: [
      'React, TypeScript, Next.js, Vite',
      'APIs RESTful, Node.js, Express, Python',
      'Tailwind CSS, Component-Driven Design',
      'Testes unitários e integração contínua (CI/CD)'
    ]
  },
  {
    id: 'data-science',
    title: 'Ciência de Dados & Analytics',
    subtitle: 'Modelagem Estatística & Tomada de Decisão',
    description: 'Transformação de dados brutos em inteligência acionável por meio de pipelines de ingestão, análise exploratória, séries temporais e visualizações executivas.',
    skills: [
      'Python (Pandas, NumPy, Scikit-Learn)',
      'Análise Exploratória & Estatística Aplicada',
      'Visualização de Dados & Dashboards Analíticos',
      'Modelagem Preditiva & Extração de Insights'
    ]
  },
  {
    id: 'dba',
    title: 'Administração de Banco de Dados (DBA)',
    subtitle: 'Modelagem Relacional, Performance & Segurança',
    description: 'Design de esquemas relacionais normalizados, otimização de consultas complexas, garantia de transações ACID e governança de dados.',
    skills: [
      'PostgreSQL, Supabase, MySQL',
      'Modelagem relacional, Normalização & Índices',
      'Tuning de Queries & Explain Analyze',
      'Row Level Security (RLS) & Transações ACID'
    ]
  }
];
