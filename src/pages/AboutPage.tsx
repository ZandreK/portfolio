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
      <header className="space-y-4 pb-8 border-b border-corporate-200">
        <span className="text-xs font-mono uppercase tracking-wider text-corporate-500 font-semibold">
          Perfil & Trajetória
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-corporate-950">
          Sobre André Martins
        </h1>
        <p className="text-base sm:text-lg text-corporate-600 leading-relaxed max-w-3xl">
          Engenheiro de Software com foco em desenvolvimento Full Stack, Ciência de Dados e Administração de Bancos de Dados Relacionais.
        </p>
      </header>

      {/* Bio / Visão Profissional */}
      <section className="space-y-4 text-corporate-700 leading-relaxed text-sm sm:text-base">
        <h2 className="text-xl font-bold text-corporate-950">
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
        <h2 className="text-xl font-bold text-corporate-950">
          Princípios de Engenharia de Software
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg border border-corporate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-sm text-corporate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-corporate-700" />
              Integridade de Dados em Primeiro Lugar
            </h3>
            <p className="text-xs text-corporate-600 leading-relaxed">
              O banco de dados não é apenas um depósito de JSONs. Modelagem normalizada, restrições de chave estrangeira, índices estratégicos e transações ACID evitam falhas antes mesmo de chegarem à aplicação.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-corporate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-sm text-corporate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-corporate-700" />
              Simplicidade & Performance Operacional
            </h3>
            <p className="text-xs text-corporate-600 leading-relaxed">
              Evitar sobre-engenharia desnecessária. Escolher ferramentas adequadas ao problema real, priorizando baixa latência, código legível e arquiteturas com custo zero ou mínimo de manutenção.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-corporate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-sm text-corporate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-corporate-700" />
              Decisões Baseadas em Dados (Data-Driven)
            </h3>
            <p className="text-xs text-corporate-600 leading-relaxed">
              Aplicar estatística e análise exploratória para entender comportamentos de uso, gargalos de performance e oportunidades de otimização de produtos digitais.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-corporate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-sm text-corporate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-corporate-700" />
              Ergonomia de Uso (UX & DX)
            </h3>
            <p className="text-xs text-corporate-600 leading-relaxed">
              Sistemas corporativos devem ser rápidos, previsíveis e confortáveis para o operador no dia a dia, tanto em telas desktop quanto no mobile.
            </p>
          </div>
        </div>
      </section>

      {/* Matriz de Competências e Tecnologias */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-corporate-950">
          Matriz de Competências Técnicas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Frontend */}
          <div className="p-5 bg-white rounded-lg border border-corporate-200 space-y-3">
            <div className="flex items-center gap-2 text-corporate-900 font-bold text-sm">
              <Code2 className="w-4 h-4 text-corporate-700" />
              Frontend & Interface
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-corporate-100 pb-1">
                <span className="text-corporate-600">Linguagens:</span>
                <span className="text-corporate-950 font-semibold">TypeScript, JavaScript (ES6+), HTML5, CSS3</span>
              </div>
              <div className="flex justify-between border-b border-corporate-100 pb-1">
                <span className="text-corporate-600">Frameworks:</span>
                <span className="text-corporate-950 font-semibold">React, Next.js, Vite</span>
              </div>
              <div className="flex justify-between border-b border-corporate-100 pb-1">
                <span className="text-corporate-600">Estilização:</span>
                <span className="text-corporate-950 font-semibold">Tailwind CSS, PostCSS, Responsive Design</span>
              </div>
              <div className="flex justify-between">
                <span className="text-corporate-600">Padrões:</span>
                <span className="text-corporate-950 font-semibold">SPA, Component-Driven, Keyboard UX</span>
              </div>
            </div>
          </div>

          {/* Backend & Sistemas */}
          <div className="p-5 bg-white rounded-lg border border-corporate-200 space-y-3">
            <div className="flex items-center gap-2 text-corporate-900 font-bold text-sm">
              <Server className="w-4 h-4 text-corporate-700" />
              Backend & APIs
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-corporate-100 pb-1">
                <span className="text-corporate-600">Linguagens:</span>
                <span className="text-corporate-950 font-semibold">Node.js, Python, TypeScript</span>
              </div>
              <div className="flex justify-between border-b border-corporate-100 pb-1">
                <span className="text-corporate-600">APIs & Protocolos:</span>
                <span className="text-corporate-950 font-semibold">RESTful, WebSocket, JSON-RPC, Moonraker</span>
              </div>
              <div className="flex justify-between border-b border-corporate-100 pb-1">
                <span className="text-corporate-600">Autenticação:</span>
                <span className="text-corporate-950 font-semibold">JWT, OAuth, Supabase Auth, RLS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-corporate-600">Arquitetura:</span>
                <span className="text-corporate-950 font-semibold">Microserviços, Modulares, MVC</span>
              </div>
            </div>
          </div>

          {/* Banco de Dados (DBA) */}
          <div className="p-5 bg-white rounded-lg border border-corporate-200 space-y-3">
            <div className="flex items-center gap-2 text-corporate-900 font-bold text-sm">
              <Database className="w-4 h-4 text-corporate-700" />
              Bancos de Dados & DBA
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-corporate-100 pb-1">
                <span className="text-corporate-600">SGBDs:</span>
                <span className="text-corporate-950 font-semibold">PostgreSQL, Supabase, MySQL</span>
              </div>
              <div className="flex justify-between border-b border-corporate-100 pb-1">
                <span className="text-corporate-600">Técnicas:</span>
                <span className="text-corporate-950 font-semibold">Modelagem Relacional, Normalização, ACID</span>
              </div>
              <div className="flex justify-between border-b border-corporate-100 pb-1">
                <span className="text-corporate-600">Otimização:</span>
                <span className="text-corporate-950 font-semibold">Índices B-Tree, Explain Analyze, Views</span>
              </div>
              <div className="flex justify-between">
                <span className="text-corporate-600">Ferramentas:</span>
                <span className="text-corporate-950 font-semibold">pgAdmin 4, Supabase Studio, DBeaver</span>
              </div>
            </div>
          </div>

          {/* Ciência de Dados & Infra */}
          <div className="p-5 bg-white rounded-lg border border-corporate-200 space-y-3">
            <div className="flex items-center gap-2 text-corporate-900 font-bold text-sm">
              <LineChart className="w-4 h-4 text-corporate-700" />
              Data Science & Infraestrutura
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between border-b border-corporate-100 pb-1">
                <span className="text-corporate-600">Data Analytics:</span>
                <span className="text-corporate-950 font-semibold">Pandas, NumPy, Séries Temporais, SQL</span>
              </div>
              <div className="flex justify-between border-b border-corporate-100 pb-1">
                <span className="text-corporate-600">Deploy & Edge:</span>
                <span className="text-corporate-950 font-semibold">Cloudflare Pages, Global CDN, Git</span>
              </div>
              <div className="flex justify-between border-b border-corporate-100 pb-1">
                <span className="text-corporate-600">Versionamento:</span>
                <span className="text-corporate-950 font-semibold">Git, GitHub Actions, Conventional Commits</span>
              </div>
              <div className="flex justify-between">
                <span className="text-corporate-600">Ambiente:</span>
                <span className="text-corporate-950 font-semibold">Linux (Ubuntu/Debian), Bash, Docker</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contato & Links Diretos */}
      <section className="bg-corporate-900 text-white rounded-xl p-8 sm:p-10 space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-corporate-400 font-semibold">
            Contato Profissional
          </h2>
          <h3 className="text-2xl font-bold mt-1">
            Canais de Comunicação Direta
          </h3>
          <p className="text-sm text-corporate-300 mt-2">
            Sinta-se à vontade para entrar em contato para conversarmos sobre posições, projetos ou consultoria técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <a
            href="https://wa.me/5541995797851"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-corporate-800 hover:bg-corporate-700 border border-corporate-700 flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>(41) 99579-7851</span>
            </div>
            <span className="text-corporate-400">WhatsApp →</span>
          </a>

          <a
            href="mailto:zk.amsilva@gmail.com"
            className="p-4 rounded-lg bg-corporate-800 hover:bg-corporate-700 border border-corporate-700 flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>zk.amsilva@gmail.com</span>
            </div>
            <span className="text-corporate-400">E-mail →</span>
          </a>

          <a
            href="https://www.linkedin.com/in/andré-m-9b8ba230b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-corporate-800 hover:bg-corporate-700 border border-corporate-700 flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-blue-400" />
              <span>/in/andré-m-9b8ba230b</span>
            </div>
            <span className="text-corporate-400">LinkedIn →</span>
          </a>

          <a
            href="https://github.com/ZandreK"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-corporate-800 hover:bg-corporate-700 border border-corporate-700 flex items-center justify-between transition-colors"
          >
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-white" />
              <span>github.com/ZandreK</span>
            </div>
            <span className="text-corporate-400">GitHub →</span>
          </a>
        </div>
      </section>

    </div>
  );
};
