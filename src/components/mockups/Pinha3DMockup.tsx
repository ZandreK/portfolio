import { WindowFrame } from '../ui/WindowFrame';
import { Cpu, Activity, Clock, Layers, Flame } from 'lucide-react';

export const Pinha3DMockup = () => {
  return (
    <WindowFrame title="pinha3d-telemetry · Creality i7 [Moonraker :7125]" badge="LIVE STREAM 250ms">
      <div className="space-y-4 text-xs font-mono">
        {/* Status bar */}
        <div className="flex items-center justify-between pb-3 border-b border-corporate-100">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-corporate-900">IMPRIMINDO: case_sensor_v3.3mf</span>
          </div>
          <span className="text-corporate-500 font-medium">Camada 284 / 360</span>
        </div>

        {/* Progress & Speed */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-corporate-600">
            <span>Progresso da Peça</span>
            <span className="font-bold text-corporate-950 font-sans text-sm">78.8%</span>
          </div>
          <div className="w-full h-2.5 bg-corporate-100 rounded-full overflow-hidden">
            <div className="h-full bg-corporate-900 rounded-full w-[78.8%] transition-all"></div>
          </div>
          <div className="flex justify-between text-[11px] text-corporate-500 pt-0.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> Restante: 01h 14m
            </span>
            <span className="flex items-center gap-1">
              <Activity className="w-3 h-3" /> Velocidade: 180 mm/s
            </span>
          </div>
        </div>

        {/* Telemetry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
          <div className="p-2.5 rounded-lg bg-corporate-50 border border-corporate-200/70 space-y-1">
            <div className="flex items-center justify-between text-corporate-500 text-[10px]">
              <span className="flex items-center gap-1">
                <Flame className="w-3 h-3 text-amber-500" /> Bico (Extrusor)
              </span>
              <span>Alvo: 215°C</span>
            </div>
            <div className="text-base font-bold text-corporate-950 font-sans">
              215.2 <span className="text-xs text-corporate-500 font-mono">°C</span>
            </div>
            <div className="text-[10px] text-emerald-600 font-medium">PID Estável (±0.3)</div>
          </div>

          <div className="p-2.5 rounded-lg bg-corporate-50 border border-corporate-200/70 space-y-1">
            <div className="flex items-center justify-between text-corporate-500 text-[10px]">
              <span className="flex items-center gap-1">
                <Layers className="w-3 h-3 text-blue-500" /> Mesa Aquecida
              </span>
              <span>Alvo: 60°C</span>
            </div>
            <div className="text-base font-bold text-corporate-950 font-sans">
              60.0 <span className="text-xs text-corporate-500 font-mono">°C</span>
            </div>
            <div className="text-[10px] text-emerald-600 font-medium">Temperatura nominal</div>
          </div>

          <div className="col-span-2 sm:col-span-1 p-2.5 rounded-lg bg-corporate-50 border border-corporate-200/70 space-y-1">
            <div className="flex items-center justify-between text-corporate-500 text-[10px]">
              <span className="flex items-center gap-1">
                <Cpu className="w-3 h-3 text-corporate-700" /> Filamento Usado
              </span>
              <span>PLA+</span>
            </div>
            <div className="text-base font-bold text-corporate-950 font-sans">
              42.4 <span className="text-xs text-corporate-500 font-mono">g</span>
            </div>
            <div className="text-[10px] text-corporate-500">Custo mat.: R$ 4,66</div>
          </div>
        </div>

        {/* Footer info pill */}
        <div className="pt-2 border-t border-corporate-100 flex items-center justify-between text-[10px] text-corporate-500">
          <span>Worker Python: Parser .3mf integrado</span>
          <span className="text-corporate-700 font-semibold">PostgreSQL (Supabase RLS)</span>
        </div>
      </div>
    </WindowFrame>
  );
};
