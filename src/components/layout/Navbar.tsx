import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-corporate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link 
          to="/" 
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-8 h-8 rounded-lg bg-corporate-900 text-white flex items-center justify-center font-bold text-sm tracking-wider">
            AM
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-corporate-900 tracking-tight text-sm sm:text-base leading-tight">
              André Martins
            </span>
            <span className="font-mono text-xs text-corporate-500">
              Full Stack · Data · DBA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-corporate-950 bg-corporate-100 font-semibold'
                  : 'text-corporate-600 hover:text-corporate-900 hover:bg-corporate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Social & Direct Links */}
        <div className="hidden md:flex items-center gap-2 pl-4 border-l border-corporate-200">
          <a
            href="https://github.com/ZandreK"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub (ZandreK)"
            className="p-2 text-corporate-600 hover:text-corporate-900 hover:bg-corporate-100 rounded-md transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/andré-m-9b8ba230b"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="p-2 text-corporate-600 hover:text-corporate-900 hover:bg-corporate-100 rounded-md transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:zk.amsilva@gmail.com"
            title="E-mail direto"
            className="p-2 text-corporate-600 hover:text-corporate-900 hover:bg-corporate-100 rounded-md transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/5541995767851"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-corporate-900 hover:bg-corporate-800 rounded-md transition-all shadow-sm"
          >
            WhatsApp
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://wa.me/5541995767851"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 text-xs font-medium text-white bg-corporate-900 rounded-md"
          >
            WhatsApp
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-corporate-600 hover:text-corporate-900 hover:bg-corporate-100 rounded-md"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-corporate-200 bg-white px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                isActive(link.path)
                  ? 'text-corporate-950 bg-corporate-100 font-semibold'
                  : 'text-corporate-600 hover:bg-corporate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-corporate-100 flex items-center justify-around text-corporate-600">
            <a
              href="https://github.com/ZandreK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono py-1 px-2 rounded hover:bg-corporate-50"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/andré-m-9b8ba230b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono py-1 px-2 rounded hover:bg-corporate-50"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="mailto:zk.amsilva@gmail.com"
              className="flex items-center gap-1.5 text-xs font-mono py-1 px-2 rounded hover:bg-corporate-50"
            >
              <Mail className="w-4 h-4" /> E-mail
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
