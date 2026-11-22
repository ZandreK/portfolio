import { Zap, ShieldCheck, TrendingUp, Cloud } from 'lucide-react';

export const BentoMetricsCard = () => {
  const metrics = [
    {
      value: '< 250ms',
      label: 'Latência de Telemetria',
      desc: 'Moonraker Klipper em tempo real (Pinha 3D)',
      icon: Zap,
    },
    {
      value: '100% ACID',
      label: 'Consistência de Dados',
      desc: 'Transações atômicas de caixa (pdvFlow)',
      icon: ShieldCheck,
    },
    {
      value: '94.8%',
      label: 'Acurácia Analítica',
      desc: 'Séries temporais e projeção (Pocket Finance)',
      icon: TrendingUp,
    },
    {
      value: '0 R$',
      label: 'Custo de Nuvem',
      desc: 'Deploy na Edge (Cloudflare Pages) + Python Local',
      icon: Cloud,
    },
  ];

  return (
    <div className="rounded-2xl border border-corporate-200 bg-white p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-corporate-300 transition-all">
      <div className="space-y-1">
        <h3 className="text-xs font-mono uppercase tracking-wider text-corporate-500 font-semibold">
          Métricas de Engenharia
        </h3>
        <p className="text-sm font-bold text-corporate-950">
          Resultados Quantitativos de Arquitetura
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 py-4">
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="space-y-1 p-3 rounded-xl bg-corporate-50 border border-corporate-100">
              <div className="flex items-center justify-between text-corporate-500">
                <span className="text-[10px] font-mono uppercase truncate">{item.label}</span>
                <Icon className="w-3.5 h-3.5 text-corporate-700 flex-shrink-0" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-corporate-950 font-mono tracking-tight">
                {item.value}
              </div>
              <p className="text-[11px] text-corporate-600 leading-tight">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-corporate-100 text-[11px] text-corporate-500 font-mono flex items-center justify-between">
        <span>Arquiteturas testadas em produção</span>
        <span className="text-corporate-700 font-semibold">PostgreSQL · Edge</span>
      </div>
    </div>
  );
};
