import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Cpu, Database, Cloud, CheckCircle2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projectsData';

export const CaseStudyPinha3D = () => {
  const project = FEATURED_PROJECTS.find(p => p.id === 'pinha-3d')!;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Voltar */}
      <div>
        <Link
          to="/projetos"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-muted hover:text-ink-primary transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar para todos os projetos
        </Link>
      </div>

      {/* Header Executivo & Metadados */}
      <header className="space-y-6 pb-8 border-b border-surface-border">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-ink-tertiary">
          <span className="px-2.5 py-0.5 rounded bg-surface-tertiary text-ink-primary font-semibold">
            {project.category}
          </span>
          <span>·</span>
          <span>{project.year}</span>
          <span>·</span>
          <span className="text-emerald-700 font-medium">Status: {project.status}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-primary">
          {project.title} — Gestão Fabril, Telemetria 3D & Processamento de Slices
        </h1>

        <p className="text-base sm:text-lg text-ink-tertiary leading-relaxed">
          {project.summary}
        </p>

        {/* Ficha Técnica Executiva */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-lg bg-surface-secondary border border-surface-border text-xs font-mono">
          <div>
            <span className="text-ink-muted block uppercase">Papel</span>
            <span className="text-ink-primary font-semibold">{project.role}</span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase">Banco & Auth</span>
            <span className="text-ink-primary font-semibold">Supabase PostgreSQL</span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase">Hospedagem</span>
            <span className="text-ink-primary font-semibold">Cloudflare Pages</span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase">Repositório</span>
            {project.githubUrl ? (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ink-primary hover:underline flex items-center gap-1 font-semibold"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-ink-muted">Privado</span>
            )}
          </div>
        </div>
      </header>

      {/* Métricas de Impacto */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-ink-muted font-semibold">
          Resultados & Métricas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg border border-surface-border shadow-sm">
              <span className="text-xs text-ink-muted block font-mono">{m.label}</span>
              <span className="text-lg sm:text-xl font-bold text-ink-primary font-mono mt-1 block">
                {m.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* O Desafio & O Contexto */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-ink-primary">
          1. O Desafio de Negócio & Operação Física
        </h2>
        <p className="text-sm sm:text-base text-ink-tertiary leading-relaxed">
          {project.problem}
        </p>
        <p className="text-sm sm:text-base text-ink-tertiary leading-relaxed">
          Na rotina de fabricação digital, calcular custos requer precisão milimétrica: peso exato de filamento em gramas, tempo de máquina, consumo energético e desgaste. Fazer isso manualmente ou manter servidores em nuvem rodando parsers pesados de arquivos binários 3MF geraria custos inviáveis.
        </p>
      </section>

      {/* A Arquitetura da Solução */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-ink-primary">
          2. Arquitetura da Solução & Fluxo de Dados
        </h2>
        <p className="text-sm sm:text-base text-ink-tertiary leading-relaxed">
          A arquitetura foi pensada de maneira modular para desacoplar a interface, a camada de banco de dados e a comunicação local com o hardware:
        </p>

        {/* Bloco Visual de Arquitetura */}
        <div className="bg-white p-6 rounded-lg border border-surface-border space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-4 rounded-md bg-surface-secondary border border-surface-tertiary space-y-2">
              <div className="flex items-center gap-2 text-ink-primary font-semibold text-sm">
                <Cloud className="w-4 h-4 text-ink-secondary" />
                Frontend Edge (Cloudflare)
              </div>
              <p className="text-xs text-ink-tertiary">
                SPA React 18 distribuído na CDN global da Cloudflare. Carregamento instantâneo, SSL automático e custo zero de infraestrutura.
              </p>
            </div>

            <div className="p-4 rounded-md bg-surface-secondary border border-surface-tertiary space-y-2">
              <div className="flex items-center gap-2 text-ink-primary font-semibold text-sm">
                <Database className="w-4 h-4 text-ink-secondary" />
                Backend & Banco (Supabase)
              </div>
              <p className="text-xs text-ink-tertiary">
                PostgreSQL gerenciado com políticas de Row Level Security (RLS), autenticação JWT e API REST instantânea.
              </p>
            </div>

            <div className="p-4 rounded-md bg-surface-secondary border border-surface-tertiary space-y-2">
              <div className="flex items-center gap-2 text-ink-primary font-semibold text-sm">
                <Cpu className="w-4 h-4 text-ink-secondary" />
                Hardware & Telemetria
              </div>
              <p className="text-xs text-ink-tertiary">
                Moonraker API (porta 7125) via WebSocket local e rotinas Python para extração de metadados em fatiamentos 3D.
              </p>
            </div>

          </div>

          <div className="p-4 bg-ink-primary text-surface-tertiary rounded-md font-mono text-xs overflow-x-auto">
            <span className="text-ink-muted">// Fluxo de Telemetria e Pedidos</span><br/>
            [Interface Web] &lt;--- WebSocket (250ms) ---&gt; [Moonraker Klipper :7125]<br/>
            [Interface Web] &lt;--- REST + Auth (RLS) ---&gt; [Supabase PostgreSQL]<br/>
            [Arquivo .3mf] ---&gt; [Python Processor Local] ---&gt; [Metadados JSON Gravados no DB]
          </div>
        </div>
      </section>

      {/* Decisões de Engenharia */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-ink-primary">
          3. Principais Decisões Técnicas
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-white border border-surface-border">
            <h3 className="text-sm font-bold text-ink-primary flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-ink-secondary" />
              Isolamento de Segurança com Row Level Security (RLS)
            </h3>
            <p className="text-xs sm:text-sm text-ink-tertiary mt-1 leading-relaxed">
              Toda a camada de acesso a dados foi protegida no nível do PostgreSQL. As políticas de segurança garantem que nenhum cliente visualize pedidos ou configurações de terceiros, dispensando a necessidade de um servidor proxy backend intermediário apenas para autorização.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-white border border-surface-border">
            <h3 className="text-sm font-bold text-ink-primary flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-ink-secondary" />
              Sincronização em Tempo Real com Moonraker (Klipper)
            </h3>
            <p className="text-xs sm:text-sm text-ink-tertiary mt-1 leading-relaxed">
              Implementação de pooling inteligente e conexão direta com a API Moonraker das impressoras (como Creality e Voron), capturando temperaturas de bico e mesa, progresso percentual da impressão e fila de tarefas físicas com latência inferior a 250ms.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-white border border-surface-border">
            <h3 className="text-sm font-bold text-ink-primary flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-ink-secondary" />
              Processador 3D Local em Python (Economia de Nuvem)
            </h3>
            <p className="text-xs sm:text-sm text-ink-tertiary mt-1 leading-relaxed">
              Em vez de pagar computação em nuvem para descompactar arquivos pesados de 50MB a 200MB de fatiamento 3D, criamos um worker em Python que roda no ambiente de produção local, inspeciona os metadados do slice (camadas, filamento em gramas, tempo estimado) e sincroniza apenas os dados sintetizados com o banco de dados.
            </p>
          </div>
        </div>
      </section>

      {/* Stack Tecnológica */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-ink-primary">
          4. Stack Tecnológica Empregada
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg border border-surface-border">
            <span className="text-xs font-mono uppercase text-ink-muted font-semibold block mb-2">
              Frontend & Interface
            </span>
            <ul className="text-xs font-mono text-ink-secondary space-y-1">
              {project.stack.frontend.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-muted"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-white rounded-lg border border-surface-border">
            <span className="text-xs font-mono uppercase text-ink-muted font-semibold block mb-2">
              Backend, Hardware & Dados
            </span>
            <ul className="text-xs font-mono text-ink-secondary space-y-1">
              {[...project.stack.backend, ...project.stack.database].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-muted"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Navegação entre estudos de caso */}
      <footer className="pt-8 border-t border-surface-border flex items-center justify-between">
        <Link
          to="/projetos"
          className="text-xs font-mono text-ink-tertiary hover:text-ink-primary"
        >
          ← Todos os Projetos
        </Link>
        <Link
          to="/projetos/pdvflow"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-primary font-semibold hover:underline"
        >
          Próximo: pdvFlow
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </footer>

    </article>
  );
};
