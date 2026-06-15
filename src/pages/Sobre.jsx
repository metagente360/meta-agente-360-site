import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';

const principles = [
  { label: 'Contexto', desc: 'Todo agente precisa de contexto para agir com precisão.' },
  { label: 'Propósito', desc: 'A missão define o comportamento. Sem propósito, não há inteligência.' },
  { label: 'Aplicação', desc: 'IA que não resolve problemas reais não cria valor real.' },
  { label: 'Humanidade', desc: 'O agente certo nasce de um humano que entendeu a dor certa.' },
  { label: 'Evolução', desc: 'Um agente nunca está pronto. Sempre há dados para aprender.' },
];

export default function Sobre() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[100svh] flex items-center bg-brand-ice bg-blueprint-grid pt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-purple/4 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-brand-blue/4 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Sobre</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4">
              Por trás de toda inteligência artificial, precisa existir um{' '}
              <span className="gradient-text">humano genial.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6 max-w-xl">
              O Meta Agente 360 nasceu da visão de que a IA não deve substituir pessoas. Ela deve ampliar o que cada pessoa sabe, cria, organiza e entrega.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
              <GradientButton to="/plataforma" size="lg">Conhecer a Plataforma</GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ORIGEM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionHeader
              eyebrow="A origem"
              headline="A IA como extensão de objetivos reais."
              body="O Meta Agente 360 nasce de uma inquietação: usar inteligência artificial não apenas para responder perguntas, mas para apoiar objetivos reais, organizar processos e gerar impacto na vida e no trabalho."
            />
            <GlassCard className="p-8" hover={false}>
              <p className="eyebrow text-brand-blue mb-4">Essência</p>
              <blockquote className="font-heading text-lg font-semibold text-navy leading-snug mb-4 border-l-2 border-brand-blue pl-4">
                "A inteligência artificial não substitui o humano genial. Ela amplia o que uma pessoa sabe, organiza, cria e entrega."
              </blockquote>
              <p className="text-sm text-navy/60 leading-relaxed">
                Esse é o princípio que guia cada decisão sobre a plataforma, a formação e o ecossistema Meta Agente 360.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* VISÃO */}
      <section className="py-20 bg-brand-ice bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="A visão" headline="Não é sobre IA genérica. É sobre inteligência com contexto." body="Acreditamos que a IA só faz sentido quando carrega contexto, propósito e humanidade. O agente certo não é aquele que sabe tudo. É aquele que entende a missão certa." align="center" className="max-w-2xl mx-auto mb-12 text-center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {principles.map((p, i) => (
              <GlassCard key={i} delay={i * 0.08} className="p-5" hover={false}>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center mb-3">
                  <div className="w-2 h-2 rounded-sm bg-gradient-to-br from-brand-blue to-brand-purple" />
                </div>
                <p className="text-sm font-semibold text-navy mb-1">{p.label}</p>
                <p className="text-xs text-navy/55 leading-relaxed">{p.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Missão</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="font-heading text-[1.75rem] sm:text-[2rem] font-semibold text-white leading-[1.2] tracking-tight mb-4">
            Democratizar a criação de agentes inteligentes.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="text-white/60 text-[1.0625rem] leading-[1.7]">
            Permitimos que pessoas e empresas transformem conhecimento em soluções aplicáveis, criando agentes que organizam, atendem, ensinam, analisam e ampliam o potencial humano.
          </motion.p>
        </div>
      </section>

      <CTASection eyebrow="Conheça a plataforma" headline="Conheça a plataforma por trás dessa visão." primaryLabel="Ver Plataforma" primaryTo="/plataforma" secondaryLabel="Falar com Especialista" secondaryTo="/contato" />
    </main>
  );
}