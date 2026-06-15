import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain, Building2, Users, Layers, ArrowRight,
  BarChart3, Smartphone, Zap, ChevronRight,
  BookOpen, Star, Globe
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SecondaryButton from '../components/ui/SecondaryButton';
import SectionHeader from '../components/ui/SectionHeader';
import DashboardMockup from '../components/ui/DashboardMockup';
import MarqueeStrip from '../components/ui/MarqueeStrip';
import CTASection from '../components/ui/CTASection';

const paths = [
  {
    icon: Layers,
    eyebrow: 'Produto',
    title: 'Quero entender a plataforma',
    body: 'Conheça o ambiente onde você cria, publica, gerencia e evolui seus agentes de IA.',
    cta: 'Ver Plataforma',
    to: '/plataforma',
  },
  {
    icon: BookOpen,
    eyebrow: 'Formação',
    title: 'Quero criar agentes com meu conhecimento',
    body: 'Aprenda a transformar sua experiência, método ou especialidade em agentes inteligentes.',
    cta: 'Conhecer Formação',
    to: '/formacao-arquiteto-ia-agentica',
  },
  {
    icon: Building2,
    eyebrow: 'Empresas',
    title: 'Quero levar IA para minha empresa',
    body: 'Use agentes para processos, atendimento, operação, dashboards e organização da informação.',
    cta: 'Ver Meta Empresa',
    to: '/meta-empresa',
  },
  {
    icon: Star,
    eyebrow: 'Produtor',
    title: 'Quero criar soluções para o mercado',
    body: 'Entenda como o Meta Produtor cria, implementa e monetiza soluções agênticas.',
    cta: 'Ser Meta Produtor',
    to: '/meta-produtor',
  },
  {
    icon: Globe,
    eyebrow: 'Explorar',
    title: 'Quero explorar possibilidades',
    body: 'Veja exemplos de agentes, aplicações, nichos e arquiteturas possíveis.',
    cta: 'Explorar Soluções',
    to: '/solucoes-agenticas',
  },
];

const howSteps = [
  {
    n: '01',
    title: 'Defina a missão',
    body: 'Escolha o que o agente precisa resolver: atender, organizar, ensinar, vender ou analisar.',
  },
  {
    n: '02',
    title: 'Estruture o contexto',
    body: 'Adicione conhecimento, documentos, processos, regras, fluxos e instruções.',
  },
  {
    n: '03',
    title: 'Crie o agente',
    body: 'Use o Estúdio para criar do zero, enviar um POP-A, colar um prompt ou descrever livremente.',
  },
  {
    n: '04',
    title: 'Publique nos canais',
    body: 'Leve seu agente para WhatsApp, WebApp, ChatApp, página pública ou QR Code.',
  },
  {
    n: '05',
    title: 'Acompanhe e evolua',
    body: 'Veja dados, conversas, créditos, usuários e melhore o agente com base no uso real.',
  },
];

const cases = [
  {
    tag: 'Cuidado familiar',
    title: 'Saúde com mais segurança',
    body: 'Um agente para organizar remédios, compras, sintomas e relatórios médicos, transformando informações espalhadas em segurança e clareza.',
  },
  {
    tag: 'Atendimento',
    title: 'Empresas e dados',
    body: 'Agentes que ajudam a entender etapas, organizar dados, acompanhar conversas e entregar informações úteis para tomada de decisão.',
  },
  {
    tag: 'Eventos',
    title: 'Inscrições inteligentes',
    body: 'Agentes para captar dados, orientar participantes, organizar listas e acompanhar jornadas de relacionamento.',
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <main>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-ice bg-blueprint-grid pt-16"
      >
        {/* Background halos */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue/6 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="eyebrow text-brand-blue mb-4"
              >
                Meta Agente 360
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4"
              >
                Transforme conhecimento em agentes de IA que{' '}
                <span className="gradient-text">trabalham, organizam</span>{' '}
                e geram valor.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6 max-w-lg"
              >
                O Meta Agente 360 é a plataforma brasileira para criar, publicar, gerenciar e escalar agentes inteligentes com contexto, propósito e aplicação real.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-3 mb-6"
              >
                <GradientButton to="/plataforma" size="lg">
                  Conhecer a Plataforma
                </GradientButton>
                <SecondaryButton to="/formacao-arquiteto-ia-agentica" size="lg">
                  Conhecer a Formação
                </SecondaryButton>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-navy/40 text-xs leading-relaxed max-w-sm"
              >
                Para especialistas, consultores, empresas, criadores e profissionais que querem usar IA com método, contexto e propósito.
              </motion.p>
            </div>

            {/* Right — hero image */}
            <div className="hidden lg:flex items-center justify-center">
              <img
                src="https://media.base44.com/images/public/6a3057094f64de9f1f72d897/f6e19b230_imghero-home.png"
                alt="Meta Agente 360"
                className="w-full max-w-xl h-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CHOOSE YOUR PATH ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Escolha seu caminho"
            headline="Cada pessoa chega ao Meta Agente por um motivo. Todas encontram uma nova forma de criar valor com IA."
            subheadline="Entenda qual jornada faz mais sentido para você agora."
            align="center"
            className="max-w-2xl mx-auto mb-12 text-center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paths.map((p, i) => (
              <GlassCard
                key={i}
                delay={i * 0.08}
                className={`p-6 group ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <Link to={p.to} className="block h-full">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center mb-4 group-hover:from-brand-blue/20 group-hover:to-brand-purple/20 transition-all duration-300">
                    <p.icon className="w-4.5 h-4.5 text-brand-blue" strokeWidth={1.5} />
                  </div>
                  <p className="eyebrow text-brand-purple mb-2">{p.eyebrow}</p>
                  <h3 className="font-heading text-base font-semibold text-navy mb-2 leading-snug">{p.title}</h3>
                  <p className="text-sm text-navy/60 leading-relaxed mb-4">{p.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue group-hover:gap-2.5 transition-all duration-200">
                    {p.cta} <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS META AGENTE ── */}
      <section className="py-20 bg-brand-ice bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionHeader
              eyebrow="O que é"
              headline="Uma plataforma para criar agentes com contexto, canal e gestão."
              body="No Meta Agente 360, você cria agentes personalizados, conecta conhecimentos e processos, publica em canais como WhatsApp, WebApp e ChatApp, acompanha dados e evolui suas soluções em um só ambiente."
            />
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              {[
                { icon: Brain, label: 'Conhecimento', desc: 'Documentos, processos, contexto' },
                { icon: Zap, label: 'Agente', desc: 'Missão, comportamento, instruções' },
                { icon: Smartphone, label: 'Canal', desc: 'WhatsApp, WebApp, ChatApp' },
                { icon: BarChart3, label: 'Dados', desc: 'Métricas, conversas, evolução' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card rounded-xl flex items-center gap-4 p-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-brand-blue" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{item.label}</p>
                    <p className="text-xs text-navy/50">{item.desc}</p>
                  </div>
                  {i < 3 && <ArrowRight className="w-4 h-4 text-navy/20 ml-auto flex-shrink-0" />}
                </motion.div>
              ))}
              <Link to="/plataforma" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all duration-200 mt-2 block text-right">
                Ver a Plataforma Completa <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Da ideia ao agente"
            headline="Crie, publique, gerencie e evolua."
            align="center"
            className="max-w-xl mx-auto mb-14 text-center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {howSteps.map((step, i) => (
              <GlassCard key={i} delay={i * 0.08} className="p-5" hover={false}>
                <span className="text-2xl font-heading font-bold text-brand-blue/20">{step.n}</span>
                <h3 className="font-heading text-sm font-semibold text-navy mt-2 mb-2">{step.title}</h3>
                <p className="text-xs text-navy/55 leading-relaxed">{step.body}</p>
              </GlassCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <SecondaryButton to="/jornada-agentica">Conhecer a Jornada Agêntica</SecondaryButton>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS MARQUEE ── */}
      <section className="py-16 bg-brand-ice overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <SectionHeader
            eyebrow="Soluções"
            headline="Um agente para cada processo. Uma arquitetura para cada negócio."
            body="O Meta Agente pode ser aplicado em diferentes áreas, nichos e operações. A solução não começa pela ferramenta. Começa pelo objetivo."
            align="center"
            className="max-w-2xl mx-auto text-center"
          />
        </div>
        <MarqueeStrip />
        <div className="text-center mt-10">
          <GradientButton to="/solucoes-agenticas">Explorar Soluções Agênticas</GradientButton>
        </div>
      </section>

      {/* ── EMPRESA SECTION ── */}
      <section className="py-20 bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="eyebrow text-brand-blue mb-3"
              >
                Para empresas
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-heading text-[1.75rem] sm:text-[2rem] font-semibold text-white leading-[1.2] tracking-tight mb-4"
              >
                Agentes de IA para processos, equipes e decisões empresariais.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-white/60 text-[1.0625rem] leading-[1.7] mb-8"
              >
                Crie agentes para atendimento, operação, gestão, treinamento, relatórios, dashboards e organização de informações.
              </motion.p>
              <GradientButton to="/meta-empresa">Ver Soluções para Empresas</GradientButton>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Atendimento com contexto', 'Operação e processos', 'Dashboards e dados', 'Agentes por área', 'Board de Agentes', 'Diagnóstico e implementação'].map((item, i) => (
                <GlassCard key={i} dark delay={i * 0.06} className="p-4" hover={false}>
                  <div className="w-6 h-6 rounded-lg bg-brand-blue/15 flex items-center justify-center mb-3">
                    <div className="w-2 h-2 rounded-sm bg-brand-blue" />
                  </div>
                  <p className="text-sm font-medium text-white/80">{item}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Aplicações reais"
            headline="Agentes criados para dores reais."
            align="center"
            className="max-w-xl mx-auto mb-12 text-center"
          />
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {cases.map((c, i) => (
              <GlassCard key={i} delay={i * 0.1} className="p-6">
                <span className="inline-block px-2.5 py-1 rounded-full bg-brand-lavender text-brand-purple text-[10px] font-bold uppercase tracking-wider mb-4">
                  {c.tag}
                </span>
                <h3 className="font-heading text-base font-semibold text-navy mb-2">{c.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">{c.body}</p>
              </GlassCard>
            ))}
          </div>
          <div className="text-center">
            <SecondaryButton to="/cases">Ver Cases</SecondaryButton>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTASection
        eyebrow="Comece agora"
        headline="O que você sabe pode virar agente. O que você cria pode virar solução."
        body="Comece a construir com método, plataforma e um ecossistema que entende que a inteligência artificial só faz sentido quando amplia o potencial humano."
        primaryLabel="Falar com Especialista"
        primaryTo="/contato"
        secondaryLabel="Conhecer a Formação"
        secondaryTo="/formacao-arquiteto-ia-agentica"
      />
    </main>
  );
}