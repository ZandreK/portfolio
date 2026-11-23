import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Landmark, Calculator, CreditCard, CheckCircle2 } from 'lucide-react';
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
          {project.title} — Finanças Pessoais com Rendimento CDI / Selic ao Vivo
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
            <span className="text-ink-muted block uppercase">Integração</span>
            <span className="text-ink-primary font-semibold">API Banco Central (SGS)</span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase">Arquitetura</span>
            <span className="text-ink-primary font-semibold">React + TypeScript (Edge)</span>
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
          Diferenciais & Métricas de Arquitetura
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
          1. O Problema Real de Controle Financeiro
        </h2>
        <p className="text-sm sm:text-base text-ink-tertiary leading-relaxed">
          {project.problem}
        </p>
        <p className="text-sm sm:text-base text-ink-tertiary leading-relaxed">
          Quando uma conta corrente ou carteira digital (Nubank, PicPay, CDB 100% do CDI) rende diariamente, o saldo bancário diverge rapidamente do registrado em planilhas ou apps estáticos. O usuário se vê obrigado a fazer lançamentos manuais de "ajuste de saldo" todos os meses para bater as contas, perdendo a visibilidade do rendimento real acumulado.
        </p>
      </section>

      {/* Arquitetura da Solução */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-ink-primary">
          2. Arquitetura da Solução & Motor de Rendimento
        </h2>
        <p className="text-sm sm:text-base text-ink-tertiary leading-relaxed">
          O Pocket Finance Hub resolve esse gargalo conectando as contas diretamente à fonte oficial de dados macroeconômicos do país e aplicando matemática financeira precisa:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg border border-surface-border space-y-2">
            <div className="flex items-center gap-2 text-ink-primary font-semibold text-sm">
              <Landmark className="w-4 h-4 text-ink-secondary" />
              API do Banco Central (SGS)
            </div>
            <p className="text-xs text-ink-tertiary">
              Consulta pública diária das séries temporais do SGS (Série 4389 para CDI anualizado e 432 para Meta Selic Copom). Os dados são cacheados e contam com fallback de segurança para modo offline.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-surface-border space-y-2">
            <div className="flex items-center gap-2 text-ink-primary font-semibold text-sm">
              <Calculator className="w-4 h-4 text-ink-secondary" />
              Juros Compostos Diários
            </div>
            <p className="text-xs text-ink-tertiary">
              Conversão rigorosa da taxa anual para taxa diária equivalente base 252 (dias úteis para CDB/LCI) ou base 365 (dias corridos para poupança), compondo o saldo exato decorrido.
            </p>
          </div>

          <div className="p-4 bg-white rounded-lg border border-surface-border space-y-2">
            <div className="flex items-center gap-2 text-ink-primary font-semibold text-sm">
              <CreditCard className="w-4 h-4 text-ink-secondary" />
              Ciclo Completo de Cartões
            </div>
            <p className="text-xs text-ink-tertiary">
              Acompanhamento de fatura aberta, controle de limite comprometido e fluxo de liquidação: o pagamento debita da conta escolhida, registra a despesa e restaura o limite instantaneamente.
            </p>
          </div>
        </div>

        {/* Bloco de Código TypeScript da Regra de Negócio Real */}
        <div className="p-4 bg-ink-primary text-surface-tertiary rounded-md font-mono text-xs overflow-x-auto space-y-1">
          <span className="text-ink-muted">// src/lib/yield.ts — Cálculo do rendimento composto por conta</span><br/>
          <span className="text-blue-300">export function</span> <span className="text-emerald-400">calcularRendimentoConta</span>(saldoBase: <span className="text-amber-300">number</span>, taxaAnual: <span className="text-amber-300">number</span>, diasDecorridos: <span className="text-amber-300">number</span>, base: <span className="text-amber-300">252 | 365</span>) &#123;<br/>
          &nbsp;&nbsp;<span className="text-ink-muted">// Converte taxa anual em taxa diária equivalente pela base selecionada</span><br/>
          &nbsp;&nbsp;<span className="text-blue-300">const</span> taxaDiaria = Math.pow(1 + taxaAnual / 100, 1 / base) - 1;<br/>
          &nbsp;&nbsp;<span className="text-blue-300">const</span> fatorAcumulado = Math.pow(1 + taxaDiaria, diasDecorridos);<br/>
          &nbsp;&nbsp;<span className="text-blue-300">const</span> rendimento = saldoBase * (fatorAcumulado - 1);<br/>
          &nbsp;&nbsp;<span className="text-blue-300">return</span> &#123; rendimento, saldoAtualizado: saldoBase + rendimento &#125;;<br/>
          &#125;
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
              APIs, Banco & Infra
            </span>
            <ul className="text-xs font-mono text-ink-secondary space-y-1">
              {[...project.stack.backend, ...project.stack.database, ...project.stack.infrastructure].map(item => (
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
