import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, TrendingUp, Video, Settings, BookOpen, Globe, ChevronDown } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SectionHeader from '../components/ui/SectionHeader';
import MarqueeStrip from '../components/ui/MarqueeStrip';
import CTASection from '../components/ui/CTASection';

const categories = [
  {
    icon: MessageSquare,
    label: 'Atendimento e relacionamento',
    agents: ['Agente de atendimento', 'Agente de dúvidas frequentes', 'Agente de suporte', 'Agente de onboarding', 'Agente de satisfação'],
  },
  {
    icon: TrendingUp,
    label: 'Vendas e captação',
    agents: ['Agente de qualificação', 'Agente de inscrição', 'Agente de proposta', 'Agente de triagem', 'Agente de follow-up'],
  },
  {
    icon: Video,
    label: 'Reuniões e produtividade',
    agents: ['Agente de transcrição', 'Agente de resumo', 'Agente de próximos passos', 'Agente de documentação', 'Agente de pauta'],
  },
  {
    icon: Settings,
    label: 'Gestão e operação',
    agents: ['Agente financeiro', 'Agente de RH', 'Agente de relatórios', 'Agente de processos internos', 'Agente de checklist'],
  },
  {
    icon: BookOpen,
    label: 'Conhecimento e educação',
    agents: ['Agente professor', 'Agente de treinamento', 'Agente biblioteca', 'Agente de pesquisa', 'Agente de avaliação'],
  },
  {
    icon: Globe,
    label: 'Nichos e aplicações',
    agents: ['Saúde', 'Educação', 'Eventos', 'Restaurantes', 'Consultorias', 'Clínicas', 'Comunidades', 'Negócios locais'],
  },
];

export default function Solucoes() {
  const [openCat, setOpenCat] = useState(null);

  return (
    <main>
      {/* HERO */}
      <section className="min-h-[100svh] flex items-center bg-brand-ice bg-blueprint-grid pt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Soluções</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4">
              Soluções de IA para <span className="gradient-text">processos reais.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6 max-w-xl">
              Explore possibilidades de agentes por área, nicho e objetivo.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
              <GradientButton to="/contato" size="lg">Quero descobrir possibilidades</GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Categorias" headline="Explore soluções por área, processo e nicho." align="center" className="max-w-xl mx-auto mb-12 text-center" />
          <div className="space-y-3 max-w-4xl mx-auto">
            {categories.map((cat, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 gap-4 min-h-[64px]"
                  onClick={() => setOpenCat(openCat === i ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center flex-shrink-0">
                      <cat.icon className="w-4 h-4 text-brand-blue" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-semibold text-navy">{cat.label}</span>
                  </div>
                  <motion.div animate={{ rotate: openCat === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-4 h-4 text-navy/40" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openCat === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 flex flex-wrap gap-2">
                        {cat.agents.map((agent, j) => (
                          <span key={j} className="px-3 py-1.5 rounded-full bg-brand-lavender text-brand-purple text-xs font-medium">
                            {agent}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-16 bg-brand-ice overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <SectionHeader eyebrow="Aplicações" headline="Um agente para cada processo." align="center" className="max-w-xl mx-auto text-center" />
        </div>
        <MarqueeStrip />
      </section>

      {/* EDITORIAL */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Método</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="font-heading text-[1.75rem] sm:text-[2rem] font-semibold text-navy leading-[1.2] tracking-tight mb-4">
            A solução começa pelo objetivo.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] max-w-2xl mx-auto">
            Antes de criar um agente, a pergunta é: o que ele precisa resolver? A partir disso, definimos missão, contexto, dados, canais e evolução.
          </motion.p>
        </div>
      </section>

      <CTASection eyebrow="Existe uma solução para o seu processo" headline="Existe um agente possível para o seu processo." primaryLabel="Falar com Especialista" primaryTo="/contato" />
    </main>
  );
}