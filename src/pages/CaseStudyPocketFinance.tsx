import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Database, BarChart3, TrendingUp, CheckCircle2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/projectsData';

export const CaseStudyPocketFinance = () => {
  const project = FEATURED_PROJECTS.find(p => p.id === 'pocket-finance')!;

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
          {project.title} — Inteligência de Fluxo de Caixa, Séries Temporais & Analytics
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
            <span className="text-ink-muted block uppercase">Domínio</span>
            <span className="text-ink-primary font-semibold">Data Science & Finanças</span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase">Análise de Dados</span>
            <span className="text-ink-primary font-semibold">Python (Pandas, NumPy)</span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase">Banco Analítico</span>
            <span className="text-ink-primary font-semibold">PostgreSQL Materialized</span>
          </div>
        </div>
      </header>

      {/* Métricas de Impacto */}
      <section className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-ink-muted font-semibold">
          Resultados Analíticos & Métricas
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
          1. O Problema de Decisão Financeira
        </h2>
        <p className="text-sm sm:text-base text-ink-tertiary leading-relaxed">
          {project.problem}
        </p>
        <p className="text-sm sm:text-base text-ink-tertiary leading-relaxed">
          Olhar apenas para o extrato bancário de hoje é como dirigir olhando apenas pelo retrovisor. Negócios e indivíduos frequentemente entram no vermelho não por falta de faturamento, mas pelo descasamento temporal entre contas a pagar e recebíveis.
        </p>
      </section>

      {/* Pipeline de Dados & Data Science */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-ink-primary">
          2. Pipeline de Engenharia de Dados & Modelagem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg border border-surface-border space-y-2">
            <div className="flex items-center gap-2 text-ink-primary font-semibold text-sm">
              <Database className="w-4 h-4 text-ink-secondary" />
              Ingestão & De-duplicação
            </div>
            <p className="text-xs text-ink-tertiary">
              Mecanismo de parse de extratos OFX e CSV bancários. Criação de hash criptográfico baseado em (data, valor, descrição) para evitar transações duplicadas em importações repetidas.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-surface-border space-y-2">
            <div className="flex items-center gap-2 text-ink-primary font-semibold text-sm">
              <TrendingUp className="w-4 h-4 text-ink-secondary" />
              Séries Temporais Preditivas
            </div>
            <p className="text-xs text-ink-tertiary">
              Modelos de séries temporais para detectar despesas recorrentes (assinaturas, aluguéis, tributos) e projetar a curva de liquidez futura com intervalo de confiança.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-surface-border space-y-2">
            <div className="flex items-center gap-2 text-ink-primary font-semibold text-sm">
              <BarChart3 className="w-4 h-4 text-ink-secondary" />
              Dashboards Analíticos Reativos
            </div>
            <p className="text-xs text-ink-tertiary">
              Visualização gerencial executiva: DRE simplificado, divisão percentual por centro de custo, taxa de poupança e curva de queima de caixa (runway).
            </p>
          </div>
        </div>

        {/* Bloco de Código Python / SQL */}
        <div className="p-4 bg-ink-primary text-surface-tertiary rounded-md font-mono text-xs overflow-x-auto space-y-1">
          <span className="text-ink-muted"># Pipeline analítico: cálculo de saldo acumulado e projeção móvel</span><br/>
          <span className="text-blue-300">def</span> <span className="text-emerald-400">calcular_curva_liquidez</span>(transacoes_df, dias_futuros=90):<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;df = transacoes_df.sort_values(<span className="text-amber-300">'data'</span>)<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;df[<span className="text-amber-300">'saldo_acumulado'</span>] = df[<span className="text-amber-300">'valor'</span>].cumsum()<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;recorrencias = extrair_despesas_recorrentes(df)<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;projecao = gerar_cenario_sazonal(df[<span className="text-amber-300">'saldo_acumulado'</span>].iloc[-1], recorrencias, dias_futuros)<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">return</span> &#123; <span className="text-amber-300">'historico'</span>: df, <span className="text-amber-300">'projecao'</span>: projecao &#125;
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-ink-primary">
          3. Módulos & Recursos Desenvolvidos
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

      {/* Tecnologias */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-ink-primary">
          4. Stack Técnica
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg border border-surface-border">
            <span className="text-xs font-mono uppercase text-ink-muted font-semibold block mb-2">
              Frontend & Visualização
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
              Ciência de Dados & Backend
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
          to="/projetos/pdvflow"
          className="text-xs font-mono text-ink-tertiary hover:text-ink-primary"
        >
          ← Anterior: pdvFlow
        </Link>
        <Link
          to="/projetos/outros"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-primary font-semibold hover:underline"
        >
          Próximo: Outros Projetos
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </footer>

    </article>
  );
};
