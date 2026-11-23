import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-surface-border mt-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-12">
          
          {/* Left */}
          <div className="space-y-3 max-w-md">
            <span className="font-serif text-2xl text-ink-primary">
              André Martins
            </span>
            <p className="text-sm text-ink-tertiary leading-relaxed">
              Engenharia Full Stack, Ciência de Dados e Administração de Bancos de Dados. 
              Graduando em Ciência da Computação pela UTFPR.
            </p>
          </div>

          {/* Right - Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="space-y-3">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-ink-muted">
                Navegação
              </h4>
              <ul className="space-y-2 text-sm text-ink-secondary">
                <li>
                  <Link to="/" className="hover:text-ink-primary transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/projetos" className="hover:text-ink-primary transition-colors">
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="hover:text-ink-primary transition-colors">
                    Sobre
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-ink-muted">
                Contato
              </h4>
              <ul className="space-y-2 text-sm text-ink-secondary">
                <li>
                  <a href="https://github.com/ZandreK" target="_blank" rel="noopener noreferrer" className="hover:text-ink-primary transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/andré-m-9b8ba230b" target="_blank" rel="noopener noreferrer" className="hover:text-ink-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:zk.amsilva@gmail.com" className="hover:text-ink-primary transition-colors">
                    E-mail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-ink-muted">
          <p>© {new Date().getFullYear()} André Martins</p>
          <p className="font-mono">React · TypeScript · Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};
