import { WindowFrame } from '../ui/WindowFrame';
import { TrendingUp, BarChart3, Database } from 'lucide-react';

export const PocketFinanceMockup = () => {
  return (
    <WindowFrame title="pocket-finance · Analytics Engine [Séries Temporais]" badge="PROJEÇÃO 90 DIAS">
      <div className="space-y-4 text-xs font-mono">
        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 gap-2.5 pb-3 border-b border-corporate-100">
          <div className="p-2.5 rounded-lg bg-corporate-50 border border-corporate-200/70">
            <span className="text-[10px] text-corporate-500 uppercase block">Saldo Projetado (+60d)</span>
            <div className="text-base sm:text-lg font-bold text-corporate-950 font-sans mt-0.5">
              R$ 48.720,00
            </div>
            <span className="text-[10px] text-emerald-600 font-sans flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +14.2% margem operacional
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-corporate-50 border border-corporate-200/70">
            <span className="text-[10px] text-corporate-500 uppercase block">Runway de Caixa</span>
            <div className="text-base sm:text-lg font-bold text-corporate-950 font-sans mt-0.5">
              8.4 Meses
            </div>
            <span className="text-[10px] text-corporate-500 font-sans">
              Burn rate: R$ 5.800/mês
            </span>
          </div>
        </div>

        {/* Time-series SVG Chart simulation */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[11px] text-corporate-500">
            <span>CURVA DE LIQUIDEZ E FLUXO PREVISTO</span>
            <span className="text-emerald-700 font-medium">Acurácia: 94.8%</span>
          </div>
          
          <div className="h-20 sm:h-24 w-full bg-corporate-50 rounded-lg border border-corporate-100 p-2 flex items-end">
            <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Fill area */}
              <path
                d="M 0 70 Q 50 65, 100 50 T 200 45 T 300 30 T 400 15 L 400 100 L 0 100 Z"
                fill="url(#chartGrad)"
              />
              {/* Actual line */}
              <path
                d="M 0 70 Q 50 65, 100 50 T 200 45"
                fill="none"
                stroke="#0F172A"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Projected dashed line */}
              <path
                d="M 200 45 T 300 30 T 400 15"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                strokeLinecap="round"
              />
              {/* Data point pin */}
              <circle cx="200" cy="45" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex justify-between text-[10px] text-corporate-400 font-mono">
            <span>Out / Passado (Real)</span>
            <span className="text-corporate-800 font-semibold">Hoje</span>
            <span className="text-blue-600 font-semibold">Dez / Fev (Projetado)</span>
          </div>
        </div>

        {/* Ingestion & PostgreSQL footer */}
        <div className="pt-2 border-t border-corporate-100 flex items-center justify-between text-[10px] text-corporate-500">
          <span className="flex items-center gap-1">
            <Database className="w-3 h-3 text-corporate-600" /> PostgreSQL Views Materializadas
          </span>
          <span className="flex items-center gap-1">
            <BarChart3 className="w-3 h-3 text-corporate-600" /> Parse OFX/CSV Automatizado
          </span>
        </div>
      </div>
    </WindowFrame>
  );
};
