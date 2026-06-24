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
      <section className="min-h-[100svh] flex items-center bg-brand-ice bg-blueprint-grid pt-16 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-purple/4 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-brand-blue/4 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center relative">
            {/* Texto */}
            <div className="relative z-20 max-w-lg">
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Sobre</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4">
                Por trás de toda inteligência artificial, precisa existir um{' '}
                <span className="gradient-text">humano genial.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6">
                O Meta Agente 360 nasceu da visão de que a IA não deve substituir pessoas. Ela deve ampliar o que cada pessoa sabe, cria, organiza e entrega.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
                <GradientButton to="/plataforma" size="lg">Conhecer a Plataforma</GradientButton>
              </motion.div>
            </div>
            {/* Imagem */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center">
              <img
                src="https://media.base44.com/images/public/6a31bcdad828457821b25dc5/a44918497_imgherosobre.png"
                alt="Sobre"
                className="w-full max-w-[560px] object-contain scale-[1.3]" />
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
      <section className="relative overflow-hidden" style={{ background: '#050A1A' }}>
        {/* Full-width container */}
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-5" style={{ minHeight: '80vh' }}>
            {/* Imagem — ocupa 2 colunas em desktop */}
            <div className="lg:col-span-2 relative overflow-hidden h-[350px] lg:h-auto">
              <img
                src="https://media.base44.com/images/public/6a31bcdad828457821b25dc5/d330664ad_Gemini_Generated_Image_2.png"
                alt="Eduardo Rocha"
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0 lg:hidden pointer-events-none"
                style={{ background: 'linear-gradient(to top, #050A1A 0%, transparent 60%)' }}
              />
              <div
                className="absolute inset-0 hidden lg:block pointer-events-none"
                style={{ background: 'linear-gradient(to right, transparent 70%, #050A1A 100%)' }}
              />
            </div>

            {/* Texto — ocupa 3 colunas em desktop */}
            <div className="lg:col-span-3 flex flex-col justify-center px-6 py-12 lg:px-16 lg:py-20">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
                style={{ color: '#6B4FD8' }}
              >
                O IDEALIZADOR E FUNDADOR
              </p>

              <h2
                className="font-heading font-semibold leading-[1.2] mb-10"
                style={{ fontSize: 'clamp(24px,2.8vw,40px)', color: '#F0F4FF' }}
              >
                Eduardo Rocha não criou uma plataforma de IA.
                <br />
                <span style={{ color: '#8B7CF8' }}>Ele criou um lugar onde o seu conhecimento ganha escala.</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="font-body leading-[1.8]" style={{ fontSize: 16, color: 'rgba(240,244,255,0.68)' }}>
                    <p className="mb-5">
                      Em 2015, Eduardo teve a felicidade de ter seu filho Arthur. Aos dois anos, a família percebeu que ele era diferente: não andava com firmeza, não falava, não tinha contato visual. Com cinco anos, os terapeutas disseram que Arthur jamais iria andar nem teria vida social.
                    </p>
                    <p className="mb-5">
                      Naquele dia, Eduardo chegou em casa e disse à esposa: a gente pode aceitar ouvir profissionais, ou pode tentar algo diferente. Ele escolheu tentar. Com o GPT 3.0, ainda tosco e pouco conhecido, perguntou o que fazer.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="font-body leading-[1.8]" style={{ fontSize: 16, color: 'rgba(240,244,255,0.68)' }}>
                    <p className="mb-5">
                      A resposta foi simples: leve Arthur para a esteira, coloque um tablet na frente dele, narre cada palavra, toque a música que ele ama e ande com ele todos os dias. Eduardo fez isso, com acompanhamento de terapeutas e psicólogos, todos os dias.
                    </p>
                    <p className="mb-5">
                      Arthur tem uma síndrome chamada SIGAP1, que compromete progressivamente a movimentação do corpo. Hoje, Arthur corre. Hoje, Arthur lê. Essa decisão — usar IA para impactar vidas de verdade — originou o Meta Agente 360.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 40, borderLeft: '3px solid #6B4FD8', paddingLeft: 24 }}>
                <p style={{ fontSize: 18, fontStyle: 'italic', color: 'rgba(240,244,255,0.5)', lineHeight: 1.6 }}>
                  "Que a gente se torne uma pessoa genial atrás de uma inteligência artificial. E nunca o contrário."
                </p>
                <p style={{ fontSize: 13, color: 'rgba(240,244,255,0.35)', marginTop: 6 }}>— Eduardo Rocha</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOSSA HISTÓRIA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Coluna esquerda — timeline */}
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: '#6B4FD8' }}
              >
                NOSSA HISTÓRIA
              </p>
              <h2
                className="font-heading font-semibold leading-[1.2] mb-10 text-[28px] sm:text-[32px]"
                style={{ color: '#1A2040' }}
              >
                Nascemos de uma necessidade real.
                <br />
                Crescemos com quem acredita em IA com propósito.
              </h2>

              {/* Timeline */}
              <div className="space-y-0">
                {[
                  {
                    year: '2015',
                    title: 'A origem',
                    desc: 'Eduardo Rocha descobre que seu filho Arthur tem SIGAP1. Uma IA ainda imperfeita sugere um caminho simples que muda tudo.',
                    highlight: false,
                  },
                  {
                    year: '2023',
                    title: 'O MVP',
                    desc: 'Começamos com poucos clientes, por escolha. A meta era maturar a plataforma antes de crescer.',
                    highlight: false,
                  },
                  {
                    year: '2024',
                    title: 'MetaProdutores',
                    desc: 'Os primeiros especialistas acreditam no projeto e começam a criar agentes para o mercado.',
                    highlight: true,
                  },
                  {
                    year: '2025',
                    title: 'Escala nacional',
                    desc: 'Atendemos empresas em todos os estados do Brasil. Parceria com a Implanta garante infraestrutura e segurança.',
                    highlight: false,
                  },
                  {
                    year: '2026',
                    title: 'Referência',
                    desc: 'Plataforma oficial de agentes de IA de conselhos federais brasileiros. O conhecimento humano ganhando a escala que merece.',
                    highlight: true,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 pb-6 relative">
                    {/* Linha vertical */}
                    {i < 4 && (
                      <div className="absolute left-[23px] top-12 bottom-0 w-px" style={{ background: '#E6EAF2' }} />
                    )}
                    {/* Círculo do ano */}
                    <div className="flex-shrink-0 relative z-10 mt-0.5">
                      <div
                        className="w-[47px] h-[47px] rounded-full flex items-center justify-center text-[10px] font-bold"
                        style={{
                          background: item.highlight ? '#1B3FBF' : '#EEF2FF',
                          color: item.highlight ? '#fff' : '#1B3FBF',
                          border: item.highlight ? 'none' : '2px solid #E6EAF2',
                        }}
                      >
                        {item.year.slice(2)}
                      </div>
                    </div>
                    {/* Conteúdo */}
                    <div className="pt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: '#6B7A99' }}>
                          {item.year}
                        </span>
                        {item.highlight && (
                          <span
                            className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                            style={{ background: '#EEF2FF', color: '#1B3FBF' }}
                          >
                            Marco
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-semibold mb-1" style={{ color: '#1A2040' }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#6B7A99' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna direita — carta de princípios */}
            <div className="lg:sticky lg:top-24">
              <GlassCard className="p-8 lg:p-10" hover={false}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center mb-6">
                  <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-brand-blue to-brand-purple" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#6B4FD8' }}>
                  NOSSO MANIFESTO
                </p>
                <p className="font-heading text-lg font-semibold leading-snug mb-8" style={{ color: '#1A2040' }}>
                  O Meta Agente 360 nasceu de uma pergunta feita a uma IA ainda imperfeita, por um pai que precisava ajudar o filho.
                </p>

                <div className="space-y-5">
                  {[
                    { label: 'Missão', text: 'Fazer com que o conhecimento humano ganhe escala, sem perder a humanidade por trás.' },
                    { label: 'Método', text: 'MVP enxuto com poucos clientes. Maturamos antes de crescer. Cada agente, uma solução real.' },
                    { label: 'Infraestrutura', text: 'Desenvolvido e hospedado dentro da Implanta, uma das maiores empresas de tecnologia do Brasil.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#1B3FBF' }} />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: '#6B4FD8' }}>{item.label}</p>
                        <p className="text-sm leading-relaxed" style={{ color: '#6B7A99' }}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 32, borderLeft: '3px solid #1B3FBF', paddingLeft: 20 }}>
                  <p style={{ fontSize: 16, fontStyle: 'italic', color: '#1A2040', lineHeight: 1.6 }}>
                    Não é sobre inteligência artificial. É sobre o que você sabe, finalmente trabalhando na escala que merece.
                  </p>
                </div>
              </GlassCard>
            </div>
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


    </main>
  );
}