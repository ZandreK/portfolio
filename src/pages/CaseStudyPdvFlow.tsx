import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Database, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projectsData';

export const CaseStudyPdvFlow = () => {
  const project = FEATURED_PROJECTS.find(p => p.id === 'pdvflow')!;

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
          {project.title} — Automação Comercial, Concorrência de Estoque & PDV Ágil
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
            <span className="text-ink-muted block uppercase">Banco de Dados</span>
            <span className="text-ink-primary font-semibold">PostgreSQL ACID</span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase">Paradigma</span>
            <span className="text-ink-primary font-semibold">Transacional / PDV</span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase">Design</span>
            <span className="text-ink-primary font-semibold">Keyboard-First UX</span>
          </div>
        </div>
      </header>

      {/* Métricas de Impacto */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-ink-muted font-semibold">
          Métricas de Desempenho Operacional
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

      {/* O Desafio */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-ink-primary">
          1. O Desafio de Negócio & Integridade de Caixa
        </h2>
        <p className="text-sm sm:text-base text-ink-tertiary leading-relaxed">
          {project.problem}
        </p>
        <p className="text-sm sm:text-base text-ink-tertiary leading-relaxed">
          Em operações de varejo com múltiplos terminais ou picos de fluxo, um atraso de 3 segundos no checkout gera filas e perda de receita. Mais crítico ainda: sem controle transacional rigoroso, a venda simultânea do mesmo produto em duas frentes de caixa pode gerar estoque negativo e quebra de inventário.
        </p>
      </section>

      {/* Arquitetura & Decisões DBA */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-ink-primary">
          2. Modelagem Relacional & Decisões de Engenharia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg border border-surface-border space-y-2">
            <div className="flex items-center gap-2 text-ink-primary font-semibold text-sm">
              <Database className="w-4 h-4 text-ink-secondary" />
              Transações Atômicas (ACID)
            </div>
            <p className="text-xs text-ink-tertiary">
              Cada venda executa em bloco transacional único: gravação do cabeçalho da venda, inserção dos itens, débito atômico de estoque e registro financeiro no livro-caixa. Se qualquer etapa falhar, ocorre rollback automático.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-surface-border space-y-2">
            <div className="flex items-center gap-2 text-ink-primary font-semibold text-sm">
              <Zap className="w-4 h-4 text-ink-secondary" />
              Interface 100% via Teclado
            </div>
            <p className="text-xs text-ink-tertiary">
              Operadores de caixa experientes não usam mouse. Toda a interface foi mapeada com atalhos de função (F2 busca, F4 quantidade, F8 pagamento, Enter confirma) garantindo checkout em menos de 2 segundos.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-surface-border space-y-2">
            <div className="flex items-center gap-2 text-ink-primary font-semibold text-sm">
              <ShieldCheck className="w-4 h-4 text-ink-secondary" />
              Fechamento Cego de Caixa
            </div>
            <p className="text-xs text-ink-tertiary">
              O operador informa a contagem física das notas e cartões sem ver o total do sistema. O software concilia discrepâncias de sangrias e suprimentos automaticamente, impedindo desvios operacionais.
            </p>
          </div>
        </div>

        {/* Bloco de Código / Schema SQL */}
        <div className="p-4 bg-ink-primary text-surface-tertiary rounded-md font-mono text-xs overflow-x-auto space-y-1">
          <span className="text-ink-muted">// Exemplo: Decremento Atômico Seguro de Estoque</span><br/>
          <span className="text-blue-300">UPDATE</span> produtos<br/>
          <span className="text-blue-300">SET</span> estoque_atual = estoque_atual - $quantidade_vendida,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;atualizado_em = <span className="text-emerald-400">NOW()</span><br/>
          <span className="text-blue-300">WHERE</span> id = $produto_id <br/>
          &nbsp;&nbsp;<span className="text-blue-300">AND</span> estoque_atual &gt;= $quantidade_vendida;<br/>
          <span className="text-ink-muted">-- Se 0 linhas afetadas, transação aborta imediatamente com erro de concorrência.</span>
        </div>
      </section>

      {/* Principais Funcionalidades */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-ink-primary">
          3. Módulos & Recursos Implementados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.keyFeatures.map((feat, idx) => (
            <div key={idx} className="p-3 bg-white rounded-md border border-surface-border flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-ink-secondary mt-0.5 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-ink-secondary">{feat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stack Tecnológica */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-ink-primary">
          4. Tecnologias Utilizadas
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
              Banco & Backend
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
          to="/projetos/pinha-3d"
          className="text-xs font-mono text-ink-tertiary hover:text-ink-primary"
        >
          ← Anterior: Pinha 3D
        </Link>
        <Link
          to="/projetos/pocket-finance"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-primary font-semibold hover:underline"
        >
          Próximo: Pocket Finance
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </footer>

    </article>
  );
};
