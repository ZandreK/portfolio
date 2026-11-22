import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Projetos & Estudos de Caso', path: '/projetos' },
    { label: 'Sobre & Trajetória', path: '/sobre' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-corporate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link 
          to="/" 
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-9 h-9 rounded-xl bg-corporate-950 text-white flex items-center justify-center font-black text-sm tracking-widest shadow-sm border border-corporate-800">
            AM
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-corporate-950 tracking-tight text-sm sm:text-base leading-tight">
              André Martins
            </span>
            <span className="font-mono text-[11px] text-corporate-500">
              Full Stack · Data · DBA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-corporate-50 p-1 rounded-xl border border-corporate-200/80">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                isActive(link.path)
                  ? 'text-corporate-950 bg-white font-bold shadow-sm'
                  : 'text-corporate-600 hover:text-corporate-950 hover:bg-white/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Direct Links & WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://github.com/ZandreK"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub (ZandreK)"
            className="p-2 text-corporate-600 hover:text-corporate-950 hover:bg-corporate-100 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/andré-m-9b8ba230b"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="p-2 text-corporate-600 hover:text-corporate-950 hover:bg-corporate-100 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/5541995767851"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-semibold text-white bg-corporate-900 hover:bg-corporate-800 rounded-lg transition-all shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            WhatsApp
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://wa.me/5541995767851"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-mono font-semibold text-white bg-corporate-900 rounded-lg"
          >
            WhatsApp
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-corporate-700 hover:text-corporate-950 hover:bg-corporate-100 rounded-lg"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-corporate-200 bg-white px-4 pt-2 pb-5 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-xs font-mono ${
                isActive(link.path)
                  ? 'text-corporate-950 bg-corporate-100 font-bold'
                  : 'text-corporate-600 hover:bg-corporate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-corporate-100 grid grid-cols-3 gap-2 text-corporate-600 text-center">
            <a
              href="https://github.com/ZandreK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-xs font-mono py-2 rounded bg-corporate-50"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/andré-m-9b8ba230b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-xs font-mono py-2 rounded bg-corporate-50"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a
              href="mailto:zk.amsilva@gmail.com"
              className="flex items-center justify-center gap-1.5 text-xs font-mono py-2 rounded bg-corporate-50"
            >
              <Mail className="w-3.5 h-3.5" /> E-mail
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
