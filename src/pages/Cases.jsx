import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';

const cases = [
  {
    tag: 'Cuidado familiar',
    title: 'Cuidado familiar com mais segurança',
    body: 'Um agente criado para organizar medicamentos, compras, sintomas e relatórios médicos. O que antes ficava espalhado em cadernos e conversas passou a ser acompanhado com mais clareza.',
    outcome: 'Mais organização, menos risco, mais tranquilidade para a família.',
    color: 'from-blue-500/10 to-blue-500/5',
    accent: 'text-blue-600',
  },
  {
    tag: 'Atendimento',
    title: 'Atendimento com dados e acompanhamento',
    body: 'Agentes podem registrar informações, acompanhar etapas, organizar conversas e entregar dados úteis para decisões comerciais e operacionais.',
    outcome: 'Dados estruturados, histórico completo e decisões mais rápidas.',
    color: 'from-brand-blue/10 to-brand-blue/5',
    accent: 'text-brand-blue',
  },
  {
    tag: 'Eventos',
    title: 'Eventos com inscrição e orientação inteligente',
    body: 'Agentes podem captar dados, orientar participantes, tirar dúvidas, organizar listas e acompanhar a jornada de relacionamento.',
    outcome: 'Processo de inscrição fluido e relacionamento contínuo com participantes.',
    color: 'from-brand-purple/10 to-brand-purple/5',
    accent: 'text-brand-purple',
  },
  {
    tag: 'Processos empresariais',
    title: 'Processos empresariais mais claros',
    body: 'Empresas podem criar agentes para consolidar informações, gerar relatórios, apoiar equipes e reduzir tarefas repetitivas.',
    outcome: 'Equipes mais focadas, informação mais acessível e operação mais escalável.',
    color: 'from-emerald-500/10 to-emerald-500/5',
    accent: 'text-emerald-600',
  },
];

export default function Cases() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[100svh] flex items-center bg-brand-ice bg-blueprint-grid pt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Cases</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4">
              Agentes reais para <span className="gradient-text">problemas reais.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6 max-w-xl">
              O valor da inteligência agêntica aparece quando ela resolve dores concretas da vida, do trabalho e dos negócios.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
              <GradientButton to="/contato" size="lg">Quero criar um case</GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Aplicações" headline="Quatro histórias, quatro soluções." align="center" className="max-w-xl mx-auto mb-14 text-center" />
          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((c, i) => (
              <GlassCard key={i} delay={i * 0.1} className="p-8 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-50 rounded-2xl`} />
                <div className="relative z-10">
                  <span className={`inline-block px-2.5 py-1 rounded-full bg-white/60 text-[10px] font-bold uppercase tracking-wider mb-4 ${c.accent}`}>
                    {c.tag}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-navy mb-3 leading-snug">{c.title}</h3>
                  <p className="text-sm text-navy/65 leading-relaxed mb-4">{c.body}</p>
                  <div className="border-t border-navy/8 pt-4">
                    <p className={`text-xs font-semibold ${c.accent}`}>→ {c.outcome}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow="A sua dor também pode virar solução" headline="A sua dor também pode virar uma solução agêntica." primaryLabel="Falar com Especialista" primaryTo="/contato" />
    </main>
  );
}