import { MapPin, Github, Linkedin, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';

export const BentoProfileCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-corporate-200 bg-white p-6 sm:p-7 shadow-sm flex flex-col justify-between group hover:border-corporate-300 transition-all">
      {/* Background subtle radial glow (estilo Dribbble) */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-100/40 via-corporate-100/20 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="relative space-y-5">
        {/* Top bar with Avatar Monogram & Location */}
        <div className="flex items-center justify-between">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-corporate-900 text-white flex items-center justify-center font-extrabold text-xl tracking-wider shadow-md border-2 border-white ring-2 ring-corporate-200">
              AM
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" title="Disponível para avaliação técnica"></span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-corporate-50 border border-corporate-200 text-corporate-600 text-xs font-mono">
            <MapPin className="w-3 h-3 text-corporate-500" />
            Curitiba, PR · Brasil
          </div>
        </div>

        {/* Name & Bio */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-corporate-950">
            André Martins
          </h2>
          <p className="text-xs font-mono text-corporate-500 font-semibold tracking-wide uppercase">
            Full Stack · Data Science · Relational DBA
          </p>
          <p className="text-sm text-corporate-600 leading-relaxed pt-1">
            Construo aplicações web resilientes e rápidas com React, Python e Node.js, com profundo rigor em modelagem relacional PostgreSQL e inteligência com dados.
          </p>
        </div>
      </div>

      {/* Direct Social Links Grid */}
      <div className="relative pt-6 mt-6 border-t border-corporate-100 grid grid-cols-2 gap-2 text-xs font-mono">
        <a
          href="https://wa.me/5541995767851"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-corporate-900 hover:bg-corporate-800 text-white flex items-center justify-between transition-colors shadow-sm"
        >
          <span className="flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            WhatsApp
          </span>
          <ArrowUpRight className="w-3 h-3 opacity-70" />
        </a>

        <a
          href="https://www.linkedin.com/in/andré-m-9b8ba230b"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-corporate-50 hover:bg-corporate-100 border border-corporate-200 text-corporate-700 flex items-center justify-between transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <Linkedin className="w-3.5 h-3.5 text-blue-600" />
            LinkedIn
          </span>
          <ArrowUpRight className="w-3 h-3 opacity-50" />
        </a>

        <a
          href="https://github.com/ZandreK"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-corporate-50 hover:bg-corporate-100 border border-corporate-200 text-corporate-700 flex items-center justify-between transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <Github className="w-3.5 h-3.5" />
            GitHub
          </span>
          <ArrowUpRight className="w-3 h-3 opacity-50" />
        </a>

        <a
          href="mailto:zk.amsilva@gmail.com"
          className="p-2.5 rounded-lg bg-corporate-50 hover:bg-corporate-100 border border-corporate-200 text-corporate-700 flex items-center justify-between transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-corporate-600" />
            E-mail
          </span>
          <ArrowUpRight className="w-3 h-3 opacity-50" />
        </a>
      </div>
    </div>
  );
};
