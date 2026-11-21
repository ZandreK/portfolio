import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-corporate-200 bg-white mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Coluna 1: Perfil */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-semibold text-corporate-900 text-base">
              André Martins
            </span>
            <p className="text-sm text-corporate-600 max-w-md leading-relaxed">
              Engenharia de Software Full Stack, Ciência de Dados e Administração de Bancos de Dados Relacionais. Foco em arquiteturas sólidas, integridade transacional e entrega contínua.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/ZandreK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-corporate-500 hover:text-corporate-900 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/andré-m-9b8ba230b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-corporate-500 hover:text-corporate-900 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:zk.amsilva@gmail.com"
                className="text-corporate-500 hover:text-corporate-900 transition-colors"
                title="E-mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-corporate-400 font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-corporate-600">
              <li>
                <Link to="/" className="hover:text-corporate-950 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="hover:text-corporate-950 transition-colors">
                  Projetos & Estudos de Caso
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-corporate-950 transition-colors">
                  Sobre & Competências
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Estudos de Caso */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-corporate-400 font-semibold">
              Estudos de Caso
            </h4>
            <ul className="space-y-2 text-sm text-corporate-600">
              <li>
                <Link to="/projetos/pinha-3d" className="hover:text-corporate-950 flex items-center gap-1 group">
                  Pinha 3D
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/projetos/pdvflow" className="hover:text-corporate-950 flex items-center gap-1 group">
                  pdvFlow
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/projetos/pocket-finance" className="hover:text-corporate-950 flex items-center gap-1 group">
                  Pocket Finance
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Inferior */}
        <div className="pt-8 border-t border-corporate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-corporate-500 gap-4">
          <p>© {new Date().getFullYear()} André Martins. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 font-mono">
            <span>Hospedado no Cloudflare Pages</span>
            <span>·</span>
            <span>React + TypeScript + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
