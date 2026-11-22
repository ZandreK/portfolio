import React from 'react';

interface WindowFrameProps {
  title: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  title,
  badge,
  children,
  className = '',
}) => {
  return (
    <div className={`rounded-xl border border-corporate-200 bg-white shadow-sm overflow-hidden flex flex-col ${className}`}>
      {/* Window Header */}
      <div className="h-9 bg-corporate-100/80 border-b border-corporate-200 px-3.5 flex items-center justify-between select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="text-[11px] font-mono text-corporate-600 font-medium truncate max-w-[200px] sm:max-w-none">
          {title}
        </div>
        <div className="flex items-center gap-2">
          {badge && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-corporate-200 text-corporate-700 font-semibold">
              {badge}
            </span>
          )}
        </div>
      </div>
      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 bg-white">
        {children}
      </div>
    </div>
  );
};
