export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: 'Full Stack & IoT' | 'Sistemas Comerciais' | 'Data & Finanças' | 'Web & Landing Pages';
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
    summary: 'Plataforma integrada de gestão fabril, telemetria em tempo real para impressão 3D e processador autônomo de arquivos de fatiamento (.3mf e .gcode).',
    category: 'Full Stack & IoT',
    role: 'Tech Lead, Engenharia de Software & Modelagem de Banco',
    year: '2025 - 2026',
    status: 'Produção',
    tags: ['React', 'TypeScript', 'Supabase', 'Python', 'Moonraker API', 'Cloudflare Pages'],
    metrics: [
      { label: 'Telemetria Real-Time', value: '< 250ms' },
      { label: 'Processamento Local de GCODE', value: '100% Client/Local' },
      { label: 'Disponibilidade de Catálogo', value: '99.9%' },
      { label: 'Custo de Nuvem', value: 'Zero (Pages + Local Worker)' }
    ],
    problem: 'Oficinas de manufatura aditiva sofrem com a falta de sincronização entre o status físico das impressoras 3D (temperaturas, tempo restante, falhas) e a gestão comercial de pedidos, além da dificuldade de extrair metadados pesados de arquivos .3mf sem onerar servidores.',
    solution: 'Desenvolvimento de uma arquitetura híbrida: interface reativa em React hospedada globalmente no Cloudflare Pages, backend relacional e autenticação com Supabase PostgreSQL (RLS), telemetria via Moonraker API e um processador local em Python para inspeção de arquivos 3D sem custos de nuvem.',
    architectureDetails: [
      'Frontend SPA com React + TypeScript + Tailwind CSS compilado via Vite.',
      'Sincronização em tempo real via WebSocket e polling inteligente com Moonraker (Klipper) na porta 7125.',
      'Políticas de RLS (Row Level Security) rigorosas no Supabase PostgreSQL garantindo isolamento total por inquilino.',
      'Processador 3D modular em Python capaz de extrair metadados, estimativas de peso de filamento e tempo diretamente dos slices.'
    ],
    stack: {
      frontend: ['React 18', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'Vite'],
      backend: ['Python 3.10+', 'FastAPI / Scripts Locais', 'Moonraker Klipper API'],
      database: ['PostgreSQL (Supabase)', 'Row Level Security', 'pgAdmin 4'],
      infrastructure: ['Cloudflare Pages (Global CDN)', 'GitHub CI/CD', 'Git']
    },
    keyFeatures: [
      'Dashboard executivo de pedidos, custos por grama e margem líquida.',
      'Monitoramento de telemetria de bicos e mesas em tempo real (Creality, Voron, etc.).',
      'Catálogo de modelos 3D com versionamento de arquivos e parâmetros de fatiamento.',
      'Pipeline de deploy contínuo integrado com Git e Cloudflare.'
    ],
    githubUrl: 'https://github.com/ZandreK/pinha-3d-sistema'
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
    title: 'Pocket Finance',
    slug: '/projetos/pocket-finance',
    summary: 'Plataforma de inteligência financeira pessoal e corporativa, agregando conciliação bancária, previsão de fluxo de caixa e visualização analítica orientada a dados.',
    category: 'Data & Finanças',
    role: 'Cientista de Dados & Engenheiro Full Stack',
    year: '2026',
    status: 'Concluído',
    tags: ['Data Science', 'Data Analytics', 'Python', 'React', 'Timeseries', 'SQL'],
    metrics: [
      { label: 'Acurácia de Projeção', value: '94.8%' },
      { label: 'Categorização Automatizada', value: 'Via Regras & Heurística' },
      { label: 'Processamento de Extratos', value: 'Instantâneo (OFX/CSV)' },
      { label: 'Privacidade de Dados', value: 'Criptografia em Repouso' }
    ],
    problem: 'Falta de clareza analítica em planilhas financeiras tradicionais, que falham em antecipar quebras de caixa futuras e demandam categorização manual exaustiva de despesas e receitas.',
    solution: 'Criação de um motor analítico que processa séries temporais de fluxo de caixa, projeta cenários de curto e médio prazo com alertas de liquidez e apresenta dashboards executivos interativos.',
    architectureDetails: [
      'Tratamento e limpeza de dados financeiros estruturados com Python e SQL analítico (Window Functions).',
      'Modelos de séries temporais para projeção de despesas recorrentes e detecção de anomalias.',
      'Visualização de dados limpa e sem distrações visuais, com gráficos de dispersão e tendência.',
      'Camada de segurança estrita para proteção de dados financeiros sensíveis.'
    ],
    stack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Charts Engine'],
      backend: ['Python (Pandas, NumPy)', 'FastAPI'],
      database: ['PostgreSQL Analítico', 'Views Materializadas'],
      infrastructure: ['Cloudflare', 'GitHub Actions']
    },
    keyFeatures: [
      'Análise preditiva de saldo para os próximos 30, 60 e 90 dias.',
      'Importação automática e parse de extratos bancários com de-duplicação.',
      'DRE gerencial e métricas de ponto de equilíbrio financeiro.',
      'Exportação de relatórios executivos estruturados.'
    ]
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
