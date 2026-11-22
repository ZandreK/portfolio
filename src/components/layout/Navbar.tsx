import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Projetos', path: '/projetos' },
    { label: 'Sobre', path: '/sobre' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-corporate-200/60 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="font-semibold text-corporate-900 tracking-tight text-base group-hover:text-corporate-700 transition-colors">
            André Martins
          </span>
          <span className="text-corporate-300 font-light">/</span>
          <span className="text-xs text-corporate-500 font-mono hidden sm:inline">
            Software & Dados
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition-colors ${
                isActive(link.path)
                  ? 'text-corporate-950 font-semibold'
                  : 'text-corporate-500 hover:text-corporate-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Direct Links */}
        <div className="hidden md:flex items-center gap-4 text-xs font-mono">
          <a
            href="https://github.com/ZandreK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-corporate-500 hover:text-corporate-950 transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/andré-m-9b8ba230b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-corporate-500 hover:text-corporate-950 transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://wa.me/5541995767851"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-corporate-900 text-white hover:bg-corporate-800 transition-colors font-sans text-xs font-medium"
          >
            Contato
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://wa.me/5541995767851"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 text-xs font-medium bg-corporate-900 text-white rounded-md"
          >
            Contato
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-corporate-600 hover:text-corporate-900"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-corporate-200 bg-white/95 backdrop-blur-md px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm py-1.5 ${
                isActive(link.path)
                  ? 'text-corporate-950 font-semibold'
                  : 'text-corporate-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-corporate-100 flex items-center gap-4 text-xs font-mono text-corporate-600">
            <a
              href="https://github.com/ZandreK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/andré-m-9b8ba230b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
