import { WindowFrame } from '../ui/WindowFrame';
import { ShoppingCart, CheckCircle, Shield, CreditCard } from 'lucide-react';

export const PdvFlowMockup = () => {
  return (
    <WindowFrame title="pdvFlow · Terminal #01 [Modo Rápido Teclado]" badge="ACID ISOLATION">
      <div className="space-y-4 text-xs font-mono">
        {/* Keyboard Shortcuts Topbar */}
        <div className="flex flex-wrap items-center gap-1.5 pb-3 border-b border-corporate-100 text-[10px]">
          <span className="px-2 py-0.5 rounded bg-corporate-900 text-white font-semibold">F2 Buscar</span>
          <span className="px-2 py-0.5 rounded bg-corporate-100 text-corporate-700">F4 Qtd</span>
          <span className="px-2 py-0.5 rounded bg-corporate-100 text-corporate-700">F7 Desconto</span>
          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">F8 Finalizar</span>
          <span className="ml-auto text-corporate-400 hidden sm:inline">Operador: Caixa Central</span>
        </div>

        {/* Current Sale Item List */}
        <div className="space-y-2">
          <div className="text-[11px] text-corporate-500 flex justify-between font-medium">
            <span>CÓD / PRODUTO</span>
            <span>QTD x VALOR · TOTAL</span>
          </div>
          
          <div className="space-y-1.5 max-h-24 overflow-y-auto pr-1">
            <div className="p-2 rounded bg-corporate-50 border border-corporate-200/60 flex items-center justify-between">
              <div>
                <span className="font-semibold text-corporate-900 block">00481 · Cabo Blindado 2m Type-C</span>
                <span className="text-[10px] text-emerald-600 font-sans">Estoque: 14 un (atômico)</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-corporate-950 font-sans">R$ 59,90</span>
                <span className="text-[10px] text-corporate-400 block font-mono">1 un x R$ 59,90</span>
              </div>
            </div>

            <div className="p-2 rounded bg-corporate-50 border border-corporate-200/60 flex items-center justify-between">
              <div>
                <span className="font-semibold text-corporate-900 block">01092 · Fonte 65W GaN Compact</span>
                <span className="text-[10px] text-emerald-600 font-sans">Estoque: 8 un (atômico)</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-corporate-950 font-sans">R$ 149,00</span>
                <span className="text-[10px] text-corporate-400 block font-mono">1 un x R$ 149,00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Total & Checkout Section */}
        <div className="p-3 rounded-lg bg-corporate-900 text-white flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[10px] text-corporate-300 block uppercase tracking-wider">Subtotal Líquido</span>
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-corporate-200 font-sans">2 itens</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-white">
              R$ 208,90
            </span>
            <span className="text-[10px] text-emerald-400 block font-mono flex items-center gap-1 justify-end">
              <CheckCircle className="w-3 h-3" /> Transação Pronta
            </span>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-2 border-t border-corporate-100 flex items-center justify-between text-[10px] text-corporate-500">
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-corporate-600" /> Concorrência: Optimistic Lock
          </span>
          <span className="flex items-center gap-1">
            <CreditCard className="w-3 h-3 text-corporate-600" /> Pix Instantâneo / TEF
          </span>
        </div>
      </div>
    </WindowFrame>
  );
};
