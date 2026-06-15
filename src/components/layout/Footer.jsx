import { Link } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';

const footerLinks = {
  Plataforma: [
    { label: 'Plataforma', href: '/plataforma' },
    { label: 'Jornada Agêntica', href: '/jornada-agentica' },
    { label: 'Soluções Agênticas', href: '/solucoes-agenticas' },
    { label: 'Cases', href: '/cases' },
  ],
  Formação: [
    { label: 'Arquiteto de IA Agêntica', href: '/formacao-arquiteto-ia-agentica' },
    { label: 'Meta Produtor', href: '/meta-produtor' },
    { label: 'Ecossistema', href: '/ecossistema' },
  ],
  Empresa: [
    { label: 'Meta Empresa', href: '/meta-empresa' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* CTA strip */}
        <div className="glass-card-dark rounded-2xl p-8 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-2">Comece agora</p>
            <h3 className="font-heading text-xl font-semibold text-white">
              Transforme conhecimento em agentes de IA.
            </h3>
          </div>
          <Link
            to="/contato"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-purple text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-blue/30 transition-all duration-300 flex-shrink-0"
          >
            Falar com Especialista
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-heading font-bold text-white text-sm tracking-tight">
                Meta Agente <span className="text-brand-blue">360</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Plataforma brasileira para criar, publicar, gerenciar e escalar agentes de inteligência artificial personalizados.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">{section}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2025 Meta Agente 360. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs text-center">
            Meta Agente 360 — inteligência agêntica para ampliar o potencial humano.
          </p>
        </div>
      </div>
    </footer>
  );
}