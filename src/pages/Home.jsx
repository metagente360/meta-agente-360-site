import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain, Building2, Users, Layers,
  BarChart3, Smartphone, Zap, ChevronRight,
  BookOpen, Star, Globe, Newspaper,
  Play, X, Lock, Server, Search, Clock
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SecondaryButton from '../components/ui/SecondaryButton';
import SectionHeader from '../components/ui/SectionHeader';
import DashboardMockup from '../components/ui/DashboardMockup';
import MarqueeStrip from '../components/ui/MarqueeStrip';

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
  {
    icon: Newspaper,
    eyebrow: 'Blog',
    title: 'Quero me manter informado',
    body: 'Acompanhe artigos, tendências e insights sobre IA agêntica, arquiteturas, automação e mercado.',
    cta: 'Ver Blog',
    to: '/blog',
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

function VideoThumbnail() {
  const openModal = () => {
    const dialog = document.getElementById('video-modal');
    if (dialog) dialog.showModal();
  };
  return (
    <div
      onClick={openModal}
      className="relative w-full cursor-pointer group rounded-2xl overflow-hidden shadow-lg"
      style={{ aspectRatio: '16/9', borderRadius: 16 }}
    >
      <img
        src="https://img.youtube.com/vi/dkEzqtUkZzc/maxresdefault.jpg"
        alt="Vídeo Institucional Meta Agente 360"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/40 z-10 transition-opacity group-hover:bg-navy/25" />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
          <Play className="w-6 h-6 text-[#1B3FBF] ml-1" fill="#1B3FBF" />
        </div>
      </div>
    </div>
  );
}

function VideoModal() {
  return (
    <dialog
      id="video-modal"
      className="fixed inset-0 m-0 w-full h-full max-w-none max-h-none bg-transparent p-0 border-0"
      style={{ background: 'rgba(5,10,26,0.96)' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <button
          onClick={() => document.getElementById('video-modal')?.close()}
          className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        <iframe
          src="https://drive.google.com/file/d/1j3sg6XqfpCNM6hSKknjqE-oxGbhFx5Iv/preview"
          className="rounded-2xl"
          style={{ width: '80vw', maxWidth: 900, aspectRatio: '16/9' }}
          allow="autoplay"
          allowFullScreen
          title="Vídeo Institucional Meta Agente 360"
        />
      </div>
    </dialog>
  );
}

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
            <div className="order-1 lg:order-1">
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
            <div className="order-2 lg:order-2 flex items-center justify-center">
              <img
                src="https://media.base44.com/images/public/6a31bcdad828457821b25dc5/77acc80d7_imghero.png"
                alt="Meta Agente 360"
                className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[520px] h-auto object-contain scale-[1.8]"
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="O que é"
                headline="Uma plataforma para criar agentes com contexto, canal e gestão."
                body="No Meta Agente 360, você cria agentes personalizados, conecta conhecimentos e processos, publica em canais como WhatsApp, WebApp e ChatApp, acompanha dados e evolui suas soluções em um só ambiente."
              />
              <Link to="/plataforma" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all duration-200 mt-6">
                Ver a Plataforma Completa <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <VideoThumbnail />
              <VideoModal />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── A PLATAFORMA — SEGURANÇA ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: '#6B4FD8' }}
            >
              SEGURANÇA E INFRAESTRUTURA
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-semibold leading-[1.2] mb-0 text-[28px] sm:text-[32px] lg:text-[40px]"
              style={{ color: '#F0F4FF' }}
            >
              Seus dados e os dos seus clientes, protegidos.
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Lock, title: 'Dados criptografados', desc: 'Todas as informações armazenadas com criptografia em trânsito e em repouso.' },
              { icon: Server, title: 'Infraestrutura robusta', desc: 'Plataforma hospedada dentro da Implanta, uma das maiores empresas de tecnologia do Brasil.' },
              { icon: Search, title: 'Auditoria disponível', desc: 'Qualquer cliente pode solicitar auditoria da infraestrutura. Transparência total.' },
              { icon: Clock, title: 'Disponibilidade 24/7', desc: 'Monitoramento contínuo e uptime garantido.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-7 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(107,79,216,0.15)' }}
              >
                <item.icon className="w-6 h-6 mb-4" style={{ color: '#6B4FD8' }} strokeWidth={1.5} />
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs leading-relaxed text-white/55">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left — steps */}
            <div>
              <SectionHeader
                eyebrow="Da ideia ao agente"
                headline="Crie, publique, gerencie e evolua."
                className="mb-6"
              />
              <div className="grid grid-cols-2 gap-2">
                {howSteps.map((step, i) => (
                  <GlassCard key={i} delay={i * 0.08} className="p-3" hover={false}>
                    <span className="text-lg font-heading font-bold text-brand-blue/20">{step.n}</span>
                    <h3 className="font-heading text-xs font-semibold text-navy mt-1.5 mb-0.5">{step.title}</h3>
                    <p className="text-[11px] text-navy/55 leading-relaxed">{step.body}</p>
                  </GlassCard>
                ))}
              </div>
              <div className="mt-8">
                <SecondaryButton to="/jornada-agentica">Conhecer a Jornada Agêntica</SecondaryButton>
              </div>
            </div>
            {/* Right — studio preview */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-brand-blue/10 via-brand-purple/8 to-transparent rounded-2xl blur-2xl pointer-events-none" />
                <img
                  src="https://media.base44.com/images/public/6a31bcdad828457821b25dc5/1b04e61bf_asistente.png"
                  alt="Estúdio Meta Agente 360"
                  className="relative w-full max-w-md lg:max-w-xl h-auto rounded-2xl shadow-xl shadow-navy/10"
                />
              </div>
            </motion.div>
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
        <div id="cases-reais" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 scroll-mt-24">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face', nome: 'Dra. Mariana Costa', especialidade: 'Médica e Gestora de Clínica', agente: 'Agente Clinicar', resultado: 'Reduziu em 70% o tempo de triagem de pacientes na Clínica Bem-Estar, automatizando agendamentos e lembretes com IA.' },
              { foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', nome: 'Rafael Mendes', especialidade: 'Consultor Financeiro', agente: 'Agente CFO Virtual', resultado: 'Implementou dashboards automáticos para 12 empresas, economizando 40h por mês de trabalho manual com relatórios.' },
              { foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face', nome: 'Camila Oliveira', especialidade: 'Advogada Tributarista', agente: 'Agente Lex 360', resultado: 'Automatizou a qualificação inicial de casos no escritório, aumentando a conversão de clientes em 45%.' },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-[20px] p-9"
                style={{ boxShadow: '0 8px 40px rgba(27,63,191,0.07)' }}
              >
                <img
                  src={c.foto}
                  alt={c.nome}
                  className="w-14 h-14 rounded-full object-cover mb-4"
                />
                <p className="text-[15px] font-bold mb-1" style={{ color: '#1A2040' }}>{c.nome}</p>
                <p className="text-[13px] mb-4" style={{ color: '#6B7A99' }}>{c.especialidade}</p>
                <div className="w-full h-px my-4" style={{ background: '#EEF2FF' }} />
                <p className="text-[17px] font-bold mb-2" style={{ color: '#1B3FBF' }}>{c.agente}</p>
                <p className="text-[15px] leading-relaxed" style={{ color: '#2A3550' }}>{c.resultado}</p>
              </motion.div>
            ))}
          </div>
        </div>
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
            <a href="#cases-reais" className="inline-flex items-center gap-2 text-sm font-semibold text-navy px-5 py-2.5 rounded-xl border border-brand-grey hover:border-brand-blue/30 transition-all duration-300 min-h-[44px]">
              Ver Cases <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>


    </main>
  );
}