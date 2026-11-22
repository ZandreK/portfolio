import { 
  Code, 
  Database, 
  Terminal, 
  Cloud, 
  Layers, 
  Server, 
  Cpu, 
  GitBranch 
} from 'lucide-react';

export const BentoTechStrip = () => {
  const techs = [
    { name: 'React 18', category: 'Frontend', icon: Code },
    { name: 'TypeScript', category: 'Linguagem', icon: Code },
    { name: 'PostgreSQL', category: 'Database', icon: Database },
    { name: 'Python (Pandas/NumPy)', category: 'Data & Backend', icon: Terminal },
    { name: 'Supabase (Auth & RLS)', category: 'BaaS & DB', icon: Database },
    { name: 'Cloudflare Pages', category: 'Edge CDN', icon: Cloud },
    { name: 'Tailwind CSS', category: 'Design System', icon: Layers },
    { name: 'Node.js & REST', category: 'APIs', icon: Server },
    { name: 'Moonraker API', category: 'IoT & Telemetry', icon: Cpu },
    { name: 'Git & GitHub', category: 'CI/CD', icon: GitBranch },
  ];

  return (
    <div className="rounded-2xl border border-corporate-200 bg-white p-5 shadow-sm space-y-3">
      <div className="flex items-center justify-between text-xs font-mono text-corporate-500">
        <span className="uppercase tracking-wider font-semibold">Stack Tecnológica & Ferramentas Dominadas</span>
        <span>Produção & Edge</span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {techs.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="px-3 py-1.5 rounded-lg bg-corporate-50 border border-corporate-200/80 hover:border-corporate-300 hover:bg-corporate-100 transition-colors flex items-center gap-2 group"
            >
              <Icon className="w-3.5 h-3.5 text-corporate-600 group-hover:text-corporate-950 transition-colors" />
              <span className="text-xs font-mono font-medium text-corporate-800">
                {tech.name}
              </span>
              <span className="text-[10px] text-corporate-400 font-mono hidden sm:inline">
                {tech.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
