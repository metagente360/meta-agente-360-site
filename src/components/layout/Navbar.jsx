import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Plataforma', href: '/plataforma' },
  { label: 'Formação', href: '/formacao-arquiteto-ia-agentica' },
  { label: 'Meta Produtor', href: '/meta-produtor' },
  { label: 'Meta Empresa', href: '/meta-empresa' },
  { label: 'Soluções', href: '/solucoes-agenticas' },
  { label: 'Ecossistema', href: '/ecossistema' },
  { label: 'Blog', href: '/blog' },
  { label: 'Sobre', href: '/sobre' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isDarkPage = location.pathname === '/meta-empresa';
  const isTransparent = !scrolled;
  const textColor = isTransparent && isDarkPage ? 'text-white/80' : 'text-navy/70';
  const textHover = isTransparent && isDarkPage ? 'hover:text-white hover:bg-white/10' : 'hover:text-navy hover:bg-navy/5';
  const activeClass = isTransparent && isDarkPage
    ? 'text-white bg-white/15'
    : 'text-brand-blue bg-brand-blue/8';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-brand-grey/60 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
             <img
               src="https://media.base44.com/images/public/6a3057094f64de9f1f72d897/515fa1360_logohorizontal-black.png"
               alt="Meta Agente 360"
               className={`h-8 w-auto object-contain ${isTransparent && isDarkPage ? 'brightness-0 invert' : ''}`}
             />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                    location.pathname === link.href
                      ? activeClass
                      : `${textColor} ${textHover}`
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://app.metaagente360.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 text-xs font-medium transition-colors duration-200 ${isTransparent && isDarkPage ? 'text-white/70 hover:text-white' : 'text-navy/70 hover:text-navy'}`}
              >
                Login
              </a>
              <Link
                to="/contato"
                className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple rounded-lg hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              >
                Falar com Especialista
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center ${isTransparent && isDarkPage ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-navy/70 hover:text-navy hover:bg-navy/5'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-brand-grey shadow-lg lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 min-h-[48px] flex items-center ${
                    location.pathname === link.href
                      ? 'text-brand-blue bg-brand-blue/8'
                      : 'text-navy/70 hover:text-navy hover:bg-navy/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-3 border-t border-brand-grey mt-2">
                <a
                  href="https://app.metaagente360.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-sm font-medium text-center text-navy/70 border border-brand-grey rounded-xl min-h-[48px] flex items-center justify-center"
                >
                  Login
                </a>
                <Link
                  to="/contato"
                  className="px-4 py-3 text-sm font-semibold text-center text-white bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl min-h-[48px] flex items-center justify-center"
                >
                  Falar com Especialista
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}