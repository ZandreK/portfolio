import { Code2, LineChart, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BentoPillarsCard = () => {
  const pillars = [
    {
      title: 'Engenharia Full Stack',
      desc: 'SPAs com React 18, TypeScript, Tailwind CSS e APIs REST/WebSocket de baixa latência.',
      icon: Code2,
    },
    {
      title: 'Ciência de Dados & Séries Temporais',
      desc: 'Pipelines em Python (Pandas/NumPy), projeção analítica e dashboards executivos.',
      icon: LineChart,
    },
    {
      title: 'Administração de Bancos (DBA)',
      desc: 'Modelagem relacional normalizada, transações ACID, índices e segurança com RLS.',
      icon: Database,
    },
  ];

  return (
    <div className="rounded-2xl border border-corporate-200 bg-white p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-corporate-300 transition-all">
      <div className="space-y-1">
        <h3 className="text-xs font-mono uppercase tracking-wider text-corporate-500 font-semibold">
          Especialidades Técnicas
        </h3>
        <p className="text-sm font-bold text-corporate-950">
          Os 3 Pilares de Atuação
        </p>
      </div>

      <div className="space-y-3 py-4">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div key={idx} className="p-3 rounded-xl bg-corporate-50 border border-corporate-100 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-corporate-900 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-corporate-950">
                  {p.title}
                </h4>
                <p className="text-[11px] text-corporate-600 leading-snug">
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-corporate-100">
        <Link
          to="/sobre"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-corporate-800 font-semibold hover:text-corporate-950 hover:underline"
        >
          Ver Matriz Completa de Competências
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
