import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="flex items-center group">
          <span className="text-ink-primary font-semibold text-[15px] tracking-[-0.01em] group-hover:opacity-70 transition-opacity">
            André Martins
          </span>
        </Link>

        {/* Desktop Navigation - Center */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-[13px] tracking-wide transition-colors py-1 ${
                isActive(link.path)
                  ? 'text-ink-primary font-medium'
                  : 'text-ink-tertiary hover:text-ink-primary'
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-ink-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/5541995797851"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink-primary text-white text-[12px] font-medium tracking-wide hover:bg-accent-hover transition-colors"
          >
            Contato
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="https://wa.me/5541995797851"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-[11px] font-medium bg-ink-primary text-white rounded-full"
          >
            Contato
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-ink-tertiary hover:text-ink-primary transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-6 pt-2 space-y-1 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-2.5 text-sm transition-colors ${
                isActive(link.path)
                  ? 'text-ink-primary font-medium'
                  : 'text-ink-tertiary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
