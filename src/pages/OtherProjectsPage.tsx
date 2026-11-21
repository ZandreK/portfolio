import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export const OtherProjectsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Voltar */}
      <div>
        <Link
          to="/projetos"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-corporate-500 hover:text-corporate-950 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar para todos os projetos
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-4 pb-8 border-b border-corporate-200">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-corporate-500 uppercase tracking-wider font-semibold">
          Histórico de Entregas & Aplicações Web
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-corporate-950">
          Outros Projetos & Experiências Práticas
        </h1>
        <p className="text-base text-corporate-600 leading-relaxed max-w-2xl">
          Além dos projetos principais, desenvolvi e mantive soluções focadas em conversão, catálogos digitais de alta performance e plataformas para o setor de saúde e eventos.
        </p>
      </header>

      {/* Projetos Detalhados */}
      <div className="space-y-10">
        
        {/* Doutor Saúde */}
        <section className="bg-white rounded-xl border border-corporate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-corporate-100 text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded bg-corporate-100 text-corporate-800 font-semibold">
              Saúde & Conversão Web
            </span>
            <span className="text-corporate-500">2024 · Produção</span>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-corporate-950">
              Doutor Saúde — Plataforma Web & Campanhas Sazonais
            </h2>
            <p className="text-sm sm:text-base text-corporate-600 mt-2 leading-relaxed">
              Ecossistema digital voltado para clínica de serviços médicos, com foco em transmissão de autoridade clínica, captação de pacientes e suporte a campanhas de saúde preventiva (Outubro Rosa, Novembro Azul).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-corporate-400 font-semibold">
              Desafios Técnicos Solucionados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-corporate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-corporate-600 mt-0.5 flex-shrink-0" />
                <span>Score 98+ no Google Lighthouse (Performance, Acessibilidade e SEO).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-corporate-600 mt-0.5 flex-shrink-0" />
                <span>Arquitetura de componentes modulares para troca rápida de temas de campanhas sazonais.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-corporate-600 mt-0.5 flex-shrink-0" />
                <span>Integração de roteamento direto para WhatsApp com rastreio de origem de tráfego (UTMs).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-corporate-600 mt-0.5 flex-shrink-0" />
                <span>Imagens compactadas em formato WebP com carregamento assíncrono (lazy-load nativo).</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-corporate-100">
            {['React', 'Vite', 'Tailwind CSS', 'SEO Técnico', 'WebP Optimization', 'Lighthouse 98+'].map(tag => (
              <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-corporate-50 border border-corporate-200 text-corporate-600 rounded">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Evntuz & Brilluz */}
        <section className="bg-white rounded-xl border border-corporate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-corporate-100 text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded bg-corporate-100 text-corporate-800 font-semibold">
              Catálogo Comercial & Eventos
            </span>
            <span className="text-corporate-500">2024 · Produção</span>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-corporate-950">
              Evntuz & Brilluz — Catálogo de Iluminação e Locações
            </h2>
            <p className="text-sm sm:text-base text-corporate-600 mt-2 leading-relaxed">
              Solução digital para apresentação de produtos técnicos de iluminação cenográfica, lustres e equipamentos para eventos corporativos e sociais, com filtros por categoria de evento e orçamento rápido.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-corporate-400 font-semibold">
              Desafios Técnicos Solucionados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-corporate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-corporate-600 mt-0.5 flex-shrink-0" />
                <span>Navegação facetada de produtos por tipo de evento, potência e dimensões.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-corporate-600 mt-0.5 flex-shrink-0" />
                <span>Layout responsivo adaptado para clientes visualizarem portfólio no próprio local do evento via mobile.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-corporate-600 mt-0.5 flex-shrink-0" />
                <span>Geração de lista de interesses para envio direto para a equipe de locação comercial.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-corporate-100">
            {['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Filtros Dinâmicos'].map(tag => (
              <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-corporate-50 border border-corporate-200 text-corporate-600 rounded">
                {tag}
              </span>
            ))}
          </div>
        </section>

      </div>

      {/* Footer Nav */}
      <footer className="pt-8 border-t border-corporate-200 flex items-center justify-between">
        <Link
          to="/projetos/pocket-finance"
          className="text-xs font-mono text-corporate-600 hover:text-corporate-950"
        >
          ← Anterior: Pocket Finance
        </Link>
        <Link
          to="/sobre"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-corporate-900 font-semibold hover:underline"
        >
          Conhecer Trajetória & Sobre
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </footer>

    </div>
  );
};
