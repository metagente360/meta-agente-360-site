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
      {/* ── HERO ── */}
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

      {/* ── A ORIGEM ── */}
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

      {/* ── VISÃO (PRINCÍPIOS) ── */}
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

      {/* ── O IDEALIZADOR ── */}
      <section style={{ background: '#050A1A', padding: 0, overflow: 'hidden' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '80vh' }}>
          {/* Coluna esquerda — foto */}
          <div className="relative overflow-hidden h-[300px] lg:h-auto order-1 lg:order-1">
            <img
              src="[FOTO_EDUARDO]"
              alt="Eduardo Rocha"
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to right, transparent 55%, #050A1A 100%)' }}
            />
          </div>

          {/* Coluna direita — texto */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-12 xl:px-16 py-12 lg:py-20 order-2 lg:order-2">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: '#6B4FD8' }}
            >
              O IDEALIZADOR E FUNDADOR
            </p>

            <h2
              className="font-heading font-extrabold leading-[1.2] mb-8"
              style={{ fontSize: 'clamp(22px,2.5vw,36px)' }}
            >
              <span style={{ color: '#F0F4FF' }}>Eduardo Rocha não criou uma plataforma de IA.</span>
              <br />
              <span style={{ color: '#8B7CF8' }}>Ele criou um lugar onde o seu conhecimento ganha escala.</span>
            </h2>

            <div style={{ fontSize: 18, color: 'rgba(240,244,255,0.72)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: 24 }}>
                Em 2015, Eduardo teve a felicidade de ter seu filho Arthur. Aos dois anos, a família percebeu que ele era diferente: não andava com firmeza, não falava, não tinha contato visual. Com cinco anos, os terapeutas disseram que Arthur jamais iria andar nem teria vida social.
              </p>
              <p style={{ marginBottom: 24 }}>
                Naquele dia, Eduardo chegou em casa e disse à esposa: a gente pode aceitar ouvir profissionais, ou pode tentar algo diferente. Ele escolheu tentar. Com o GPT 3.0, ainda tosco e pouco conhecido, perguntou o que fazer. A resposta foi simples: leve Arthur para a esteira, coloque um tablet na frente dele, narre cada palavra, toque a música que ele ama e ande com ele todos os dias.
              </p>
              <p style={{ marginBottom: 24 }}>
                Eduardo fez isso. Com acompanhamento de terapeutas e psicólogos, todos os dias. Arthur tem uma síndrome chamada SIGAP1, que compromete progressivamente a movimentação do corpo. Hoje, Arthur corre. Hoje, Arthur lê.
              </p>
              <p style={{ marginBottom: 24 }}>
                A partir daí, Eduardo decidiu que não usaria inteligência artificial apenas como ferramenta para resumos ou respostas rápidas. Usaria para impactar vidas de verdade. Essa decisão originou o Meta Agente 360.
              </p>
            </div>

            <div style={{ marginTop: 32, borderLeft: '3px solid #6B4FD8', paddingLeft: 24 }}>
              <p style={{ fontSize: 17, fontStyle: 'italic', color: 'rgba(240,244,255,0.55)' }}>
                "Que a gente se torne uma pessoa genial atrás de uma inteligência artificial. E nunca o contrário." — Eduardo Rocha
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOSSA HISTÓRIA ── */}
      <section style={{ background: '#F8F9FF', padding: '100px 48px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: '#6B4FD8' }}
          >
            NOSSA HISTÓRIA
          </p>

          <h2
            className="font-heading font-extrabold leading-[1.2] mb-12"
            style={{ fontSize: 'clamp(28px,3vw,42px)', color: '#1A2040' }}
          >
            Nascemos de uma necessidade real. Crescemos com quem acredita em IA com propósito.
          </h2>

          <div style={{ fontSize: 18, color: '#6B7A99', lineHeight: 1.8 }}>
            <p style={{ marginBottom: 24 }}>
              O Meta Agente 360 nasceu de uma pergunta feita a uma IA ainda imperfeita, por um pai que precisava ajudar o filho. Desde então, a missão não mudou: fazer com que o conhecimento humano ganhe escala, sem perder a humanidade por trás.
            </p>
            <p style={{ marginBottom: 24 }}>
              Começamos como um MVP com poucos clientes, por escolha. Queríamos maturar bem antes de crescer. Os MetaProdutores foram os primeiros a acreditar. Os distribuidores vieram depois. Hoje, atendemos empresas em todos os estados do Brasil.
            </p>
            <p style={{ marginBottom: 24 }}>
              A plataforma é desenvolvida e hospedada dentro da Implanta, uma das maiores empresas de tecnologia do Brasil. Isso garante a infraestrutura, a segurança e a seriedade que projetos de IA em escala corporativa exigem. O Meta Agente 360 é hoje a plataforma oficial de agentes de IA de conselhos federais brasileiros.
            </p>
          </div>

          <div style={{ borderLeft: '3px solid #1B3FBF', paddingLeft: 24, marginTop: 40 }}>
            <p style={{ fontSize: 20, fontStyle: 'italic', color: '#1A2040' }}>
              Não é sobre inteligência artificial. É sobre o que você sabe, finalmente trabalhando na escala que merece.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSÃO ── */}
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

      {/* ── CTA FINAL ── */}
      <CTASection eyebrow="Conheça a plataforma" headline="Conheça a plataforma por trás dessa visão." primaryLabel="Ver Plataforma" primaryTo="/plataforma" secondaryLabel="Falar com Especialista" secondaryTo="/contato" />
    </main>
  );
}