import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Zap, TrendingUp, Users, Briefcase, Pen, Star, Check } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SecondaryButton from '../components/ui/SecondaryButton';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';
import FAQAccordion from '../components/ui/FAQAccordion';

const personas = [
  { icon: Briefcase, label: 'Especialistas' },
  { icon: Users, label: 'Consultores' },
  { icon: Star, label: 'Profissionais liberais' },
  { icon: Pen, label: 'Criadores' },
  { icon: Brain, label: 'Empresários' },
  { icon: TrendingUp, label: 'Transição de carreira' },
];

const pillars = [
  {
    n: '01',
    title: 'Fundamentos de IA',
    body: 'Entenda IA, LLMs, modelos de linguagem e os conceitos essenciais para criar com segurança.',
    color: 'from-brand-blue/15 to-brand-blue/5',
    accent: 'text-brand-blue',
  },
  {
    n: '02',
    title: 'Mentalidade Agêntica',
    body: 'Aprenda a pensar objetivos, entradas, saídas, processos, autonomia e contexto.',
    color: 'from-brand-purple/15 to-brand-purple/5',
    accent: 'text-brand-purple',
  },
  {
    n: '03',
    title: 'Meta Agente na Prática',
    body: 'Crie, configure, publique e gerencie agentes dentro da plataforma.',
    color: 'from-brand-blue/15 to-brand-purple/10',
    accent: 'gradient-text',
  },
  {
    n: '04',
    title: 'Monetização',
    body: 'Transforme agentes em soluções, serviços, produtos e oportunidades de negócio.',
    color: 'from-brand-purple/15 to-brand-blue/5',
    accent: 'text-brand-purple',
  },
];

const modules = [
  'O que é IA, LLMs e modelos de linguagem',
  'Base de conhecimento e RAG',
  'Engenharia de prompts',
  'Arquitetura de agentes',
  'Como escolher o modelo certo',
  'Mentalidade agêntica',
  'Criação na prática',
  'Integrações e canais',
  'Monetização e posicionamento',
];

const included = [
  { label: 'Formação completa', desc: 'Todos os módulos e atualizações' },
  { label: 'Licença Meta Produtor', desc: 'Acesso à plataforma com recursos avançados' },
  { label: 'Créditos mensais', desc: 'Para criar e testar agentes' },
  { label: 'Comunidade', desc: 'Acesso à comunidade de produtores' },
  { label: 'Aulas práticas', desc: 'Exercícios dentro da plataforma' },
  { label: 'Acesso ao ecossistema', desc: 'Rede de especialistas e oportunidades' },
];

export default function Formacao() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <main>
      {/* HERO */}
      <section className="min-h-[100svh] flex items-center bg-brand-ice bg-blueprint-grid pt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Formação</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4">
                Torne-se um <span className="gradient-text">Arquiteto de IA Agêntica.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6 max-w-xl">
                Aprenda a criar agentes inteligentes com método, aplicar no mundo real e transformar conhecimento em soluções que podem gerar valor e renda.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }} className="flex flex-col sm:flex-row gap-3">
                <GradientButton to="/contato" size="lg">Quero entrar na Formação</GradientButton>
                <SecondaryButton to="/contato" size="lg">Falar com Especialista</SecondaryButton>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <img
                src="https://media.base44.com/images/public/6a3057094f64de9f1f72d897/72def000f_ChatGPTImage15dejunde202617_40_12.png"
                alt="Formação Arquiteto de IA Agêntica"
                className="w-full max-w-[560px] object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Para quem é" headline="Para quem quer dominar uma nova habilidade de mercado." align="center" className="max-w-xl mx-auto mb-12 text-center" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {personas.map((p, i) => (
              <GlassCard key={i} delay={i * 0.07} className="p-5 text-center" hover={false}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center mx-auto mb-3">
                  <p.icon className="w-4 h-4 text-brand-blue" strokeWidth={1.5} />
                </div>
                <p className="text-xs font-semibold text-navy">{p.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4 PILARES */}
      <section className="py-20 bg-brand-ice bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Os 4 Pilares" headline="Quatro pilares para criar agentes com clareza, prática e visão de negócio." align="center" className="max-w-2xl mx-auto mb-12 text-center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p, i) => (
              <GlassCard
                key={i}
                delay={i * 0.1}
                className={`p-6 cursor-pointer transition-all duration-300 ${activePillar === i ? 'ring-2 ring-brand-blue/30' : ''}`}
                onClick={() => setActivePillar(i)}
              >
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4`}>
                  <span className={`text-sm font-bold ${p.accent}`}>{p.n}</span>
                </div>
                <h3 className="font-heading text-base font-semibold text-navy mb-2">{p.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">{p.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ APRENDE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Conteúdo" headline="Da base técnica à criação de soluções reais." align="center" className="max-w-xl mx-auto mb-12 text-center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {modules.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 glass-card rounded-xl p-4"
              >
                <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-brand-blue" />
                </div>
                <span className="text-sm font-medium text-navy">{m}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUÍDO */}
      <section className="py-20 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Incluído" headline="Mais do que aulas. Uma jornada dentro do ecossistema." align="center" className="max-w-xl mx-auto mb-12 text-center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item, i) => (
              <GlassCard key={i} delay={i * 0.08} className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-0.5">{item.label}</p>
                    <p className="text-xs text-navy/55">{item.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* MONETIZAÇÃO */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Monetização" headline="Aprenda a transformar agentes em soluções de mercado." body="Você aprende a pensar agentes como produtos, serviços, implementações, pacotes, consultorias e soluções para nichos." dark align="center" className="max-w-xl mx-auto mb-12 text-center" />
          <div className="flex flex-wrap justify-center gap-3">
            {['Conhecimento', 'Agente', 'Solução', 'Oferta', 'Receita'].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <GlassCard dark delay={i * 0.09} className="px-5 py-3" hover={false}>
                  <p className="text-sm font-semibold text-white">{step}</p>
                </GlassCard>
                {i < 4 && <div className="w-5 h-px bg-brand-blue/40" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Entre agora" headline="Seu conhecimento pode ganhar escala." body="Entre para a formação e aprenda a criar agentes com método, prática e visão de mercado." primaryLabel="Quero me tornar Arquiteto de IA Agêntica" primaryTo="/contato" />
    </main>
  );
}