import { 
  Code2, 
  Database, 
  LineChart, 
  Server, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare
} from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      
      {/* Header */}
      <header className="space-y-4 pb-8 border-b border-surface-border">
        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted font-semibold">
          Perfil & Trajetória
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-primary">
          Sobre André Martins
        </h1>
        <p className="text-base sm:text-lg text-ink-tertiary leading-relaxed max-w-3xl">
          Engenheiro de Software com foco em desenvolvimento Full Stack, Ciência de Dados e Administração de Bancos de Dados Relacionais.
        </p>
      </header>

      {/* Formação Acadêmica UTFPR */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-ink-primary">
          Formação Acadêmica
        </h2>
        <div className="p-6 bg-white rounded-2xl border border-surface-border/90 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-tertiary pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-ink-muted font-semibold">
                Bacharelado · Em andamento
              </span>
              <h3 className="text-lg font-bold text-ink-primary mt-0.5">
                Ciência da Computação
              </h3>
              <p className="text-sm text-ink-secondary">
                Universidade Tecnológica Federal do Paraná (UTFPR) — Câmpus Ponta Grossa
              </p>
            </div>
            <span className="text-xs font-mono text-ink-muted">
              DAINF · Departamento de Informática
            </span>
          </div>

          <p className="text-sm text-ink-tertiary leading-relaxed">
            Formação focada nos fundamentos rigorosos da ciência da computação: análise assintótica de algoritmos, estruturas de dados, compiladores, arquitetura de sistemas operacionais, redes e pesquisa acadêmica em Sistemas Multiagente (MAS).
          </p>
        </div>
      </section>

      {/* Bio / Visão Profissional */}
      <section className="space-y-4 text-ink-secondary leading-relaxed text-sm sm:text-base">
        <h2 className="text-xl font-bold text-ink-primary">
          Trajetória & Foco Técnico
        </h2>
        <p>
          Minha atuação combina a capacidade de construir interfaces modernas e funcionais no frontend com a solidez necessária no backend e na modelagem de dados. Acredito que um software de excelência nasce de uma boa modelagem relacional, transações seguras e código limpo e manutenível.
        </p>
        <p>
          Ao longo dos projetos, atuei na concepção e desenvolvimento de sistemas críticos — desde a integração de telemetria em tempo real com hardware de impressão 3D (projeto <strong>Pinha 3D</strong>) até automações comerciais com fluxo de caixa atômico (<strong>pdvFlow</strong>) e motores de análise preditiva financeira (<strong>Pocket Finance</strong>).
        </p>
      </section>

      {/* Filosofia de Engenharia */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-ink-primary">
          Princípios de Engenharia de Software
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg border border-surface-border shadow-sm space-y-2">
            <h3 className="font-bold text-sm text-ink-primary flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-ink-secondary" />
              Integridade de Dados em Primeiro Lugar
            </h3>
            <p className="text-xs text-ink-tertiary leading-relaxed">
              O banco de dados não é apenas um depósito de JSONs. Modelagem normalizada, restrições de chave estrangeira, índices estratégicos e transações ACID evitam falhas antes mesmo de chegarem à aplicação.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-surface-border shadow-sm space-y-2">
            <h3 className="font-bold text-sm text-ink-primary flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-ink-secondary" />
              Simplicidade & Performance Operacional
            </h3>
            <p className="text-xs text-ink-tertiary leading-relaxed">
              Evitar sobre-engenharia desnecessária. Escolher ferramentas adequadas ao problema real, priorizando baixa latência, código legível e arquiteturas com custo zero ou mínimo de manutenção.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-surface-border shadow-sm space-y-2">
            <h3 className="font-bold text-sm text-ink-primary flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-ink-secondary" />
              Decisões Baseadas em Dados (Data-Driven)
            </h3>
            <p className="text-xs text-ink-tertiary leading-relaxed">
              Aplicar estatística e análise exploratória para entender comportamentos de uso, gargalos de performance e oportunidades de otimização de produtos digitais.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-surface-border shadow-sm space-y-2">
            <h3 className="font-bold text-sm text-ink-primary flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-ink-secondary" />
              Ergonomia de Uso (UX & DX)
            </h3>
            <p className="text-xs text-ink-tertiary leading-relaxed">
              Sistemas corporativos devem ser rápidos, previsíveis e confortáveis para o operador no dia a dia, tanto em telas desktop quanto no mobile.
            </p>
          </div>
        </div>
      </section>

      {/* Matriz de Competências e Tecnologias */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-ink-primary">
          Matriz de Competências Técnicas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Frontend */}
          <div className="p-5 bg-white rounded-lg border border-surface-border space-y-3">
            <div className="flex items-center gap-2 text-ink-primary font-bold text-sm">
              <Code2 className="w-4 h-4 text-ink-secondary" />
              Frontend & Interface
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-surface-tertiary pb-1">
                <span className="text-ink-tertiary">Linguagens:</span>
                <span className="text-ink-primary font-semibold">TypeScript, JavaScript (ES6+), HTML5, CSS3</span>
              </div>
              <div className="flex justify-between border-b border-surface-tertiary pb-1">
                <span className="text-ink-tertiary">Frameworks:</span>
                <span className="text-ink-primary font-semibold">React, Next.js, Vite</span>
              </div>
              <div className="flex justify-between border-b border-surface-tertiary pb-1">
                <span className="text-ink-tertiary">Estilização:</span>
                <span className="text-ink-primary font-semibold">Tailwind CSS, PostCSS, Responsive Design</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-tertiary">Padrões:</span>
                <span className="text-ink-primary font-semibold">SPA, Component-Driven, Keyboard UX</span>
              </div>
            </div>
          </div>

          {/* Backend & Sistemas */}
          <div className="p-5 bg-white rounded-lg border border-surface-border space-y-3">
            <div className="flex items-center gap-2 text-ink-primary font-bold text-sm">
              <Server className="w-4 h-4 text-ink-secondary" />
              Backend & APIs
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-surface-tertiary pb-1">
                <span className="text-ink-tertiary">Linguagens:</span>
                <span className="text-ink-primary font-semibold">Node.js, Python, TypeScript</span>
              </div>
              <div className="flex justify-between border-b border-surface-tertiary pb-1">
                <span className="text-ink-tertiary">APIs & Protocolos:</span>
                <span className="text-ink-primary font-semibold">RESTful, WebSocket, JSON-RPC, Moonraker</span>
              </div>
              <div className="flex justify-between border-b border-surface-tertiary pb-1">
                <span className="text-ink-tertiary">Autenticação:</span>
                <span className="text-ink-primary font-semibold">JWT, OAuth, Supabase Auth, RLS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-tertiary">Arquitetura:</span>
                <span className="text-ink-primary font-semibold">Microserviços, Modulares, MVC</span>
              </div>
            </div>
          </div>

          {/* Banco de Dados (DBA) */}
          <div className="p-5 bg-white rounded-lg border border-surface-border space-y-3">
            <div className="flex items-center gap-2 text-ink-primary font-bold text-sm">
              <Database className="w-4 h-4 text-ink-secondary" />
              Bancos de Dados & DBA
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-surface-tertiary pb-1">
                <span className="text-ink-tertiary">SGBDs:</span>
                <span className="text-ink-primary font-semibold">PostgreSQL, Supabase, MySQL</span>
              </div>
              <div className="flex justify-between border-b border-surface-tertiary pb-1">
                <span className="text-ink-tertiary">Técnicas:</span>
                <span className="text-ink-primary font-semibold">Modelagem Relacional, Normalização, ACID</span>
              </div>
              <div className="flex justify-between border-b border-surface-tertiary pb-1">
                <span className="text-ink-tertiary">Otimização:</span>
                <span className="text-ink-primary font-semibold">Índices B-Tree, Explain Analyze, Views</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-tertiary">Ferramentas:</span>
                <span className="text-ink-primary font-semibold">pgAdmin 4, Supabase Studio, DBeaver</span>
              </div>
            </div>
          </div>

          {/* Ciência de Dados & Infra */}
          <div className="p-5 bg-white rounded-lg border border-surface-border space-y-3">
            <div className="flex items-center gap-2 text-ink-primary font-bold text-sm">
              <LineChart className="w-4 h-4 text-ink-secondary" />
              Data Science & Infraestrutura
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-surface-tertiary pb-1">
                <span className="text-ink-tertiary">Data Analytics:</span>
                <span className="text-ink-primary font-semibold">Pandas, NumPy, Séries Temporais, SQL</span>
              </div>
              <div className="flex justify-between border-b border-surface-tertiary pb-1">
                <span className="text-ink-tertiary">Deploy & Edge:</span>
                <span className="text-ink-primary font-semibold">Cloudflare Pages, Global CDN, Git</span>
              </div>
              <div className="flex justify-between border-b border-surface-tertiary pb-1">
                <span className="text-ink-tertiary">Versionamento:</span>
                <span className="text-ink-primary font-semibold">Git, GitHub Actions, Conventional Commits</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-tertiary">Ambiente:</span>
                <span className="text-ink-primary font-semibold">Linux (Ubuntu/Debian), Bash, Docker</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contato & Links Diretos */}
      <section className="bg-ink-primary text-white rounded-xl p-8 sm:p-10 space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-ink-muted font-semibold">
            Contato Profissional
          </h2>
          <h3 className="text-2xl font-bold mt-1">
            Canais de Comunicação Direta
          </h3>
          <p className="text-sm text-ink-faint mt-2">
            Sinta-se à vontade para entrar em contato para conversarmos sobre posições, projetos ou consultoria técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <a
            href="https://wa.me/5541995797851"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-ink-secondary hover:bg-ink-secondary border border-ink-secondary flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>(41) 99579-7851</span>
            </div>
            <span className="text-ink-muted">WhatsApp →</span>
          </a>

          <a
            href="mailto:zk.amsilva@gmail.com"
            className="p-4 rounded-lg bg-ink-secondary hover:bg-ink-secondary border border-ink-secondary flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>zk.amsilva@gmail.com</span>
            </div>
            <span className="text-ink-muted">E-mail →</span>
          </a>

          <a
            href="https://www.linkedin.com/in/andré-m-9b8ba230b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-ink-secondary hover:bg-ink-secondary border border-ink-secondary flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>/in/andré-m-9b8ba230b</span>
            </div>
            <span className="text-ink-muted">LinkedIn →</span>
          </a>

          <a
            href="https://github.com/ZandreK"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-ink-secondary hover:bg-ink-secondary border border-ink-secondary flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-white" />
              <span>github.com/ZandreK</span>
            </div>
            <span className="text-ink-muted">GitHub →</span>
          </a>
        </div>
      </section>

    </div>
  );
};
