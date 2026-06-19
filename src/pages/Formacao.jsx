import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Users, Calendar, Rocket, CreditCard, GraduationCap, UserCheck, Megaphone, Star, Zap } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SecondaryButton from '../components/ui/SecondaryButton';
import SectionHeader from '../components/ui/SectionHeader';
import FAQAccordion from '../components/ui/FAQAccordion';

const pillars = [
  {
    n: 'PILAR 1',
    title: 'Fundamentos de IA',
    subtitle: 'Domine a base técnica',
    color: 'from-brand-blue/15 to-brand-blue/5',
    accent: 'text-brand-blue',
    badgeBg: 'bg-brand-blue',
    items: [
      'O que é IA, LLMs e modelos de linguagem',
      'Como funciona uma base de conhecimento e RAG',
      'O que é um prompt, entrada, saída e formatação',
      'Arquitetura de agentes e pensamento profundo',
      'Como escolher o modelo certo para cada situação',
    ],
  },
  {
    n: 'PILAR 2',
    title: 'Mentalidade Agêntica',
    subtitle: 'Pense como arquiteto',
    color: 'from-brand-purple/15 to-brand-purple/5',
    accent: 'text-brand-purple',
    badgeBg: 'bg-brand-purple',
    items: [
      'Como pegar um processo físico e digitalizar para IA',
      'Estrutura de entrada, processamento e saída de um agente',
      'Como criar agentes com o seu conhecimento e especialidade',
      'Como pensar em resultado antes de pensar em ferramenta',
      'Como estruturar processos automáticos do zero ao fim',
    ],
  },
  {
    n: 'PILAR 3',
    title: 'Meta Agente 360 na Prática',
    subtitle: 'Mão na massa',
    color: 'from-brand-blue/15 to-brand-purple/10',
    accent: 'gradient-text',
    badgeBg: 'bg-gradient-to-r from-brand-blue to-brand-purple',
    items: [
      'Como criar e configurar um agente do zero',
      'Integrações de processo, formulários e SDR',
      'Como fazer seu próprio app agêntico',
      'Como conversar com seus dados e fontes externas',
      'Como criar uma base de conhecimento para seus usuários',
      'Configurações avançadas, automações e fluxos completos',
    ],
  },
  {
    n: 'PILAR 4',
    title: 'Monetização',
    subtitle: 'Transforme em receita',
    color: 'from-brand-purple/15 to-brand-blue/5',
    accent: 'text-brand-purple',
    badgeBg: 'bg-brand-purple',
    items: [
      'O que é um micro-SaaS e como criar o seu',
      'Como precificar, vender e entregar agentes para clientes',
      'Integração com Hotmart, Monetizze e plataformas de pagamento',
      'Como se posicionar como consultor de IA Agêntica',
      'Como vender para empresas, autônomos e nichos específicos',
    ],
  },
];

const included = [
  { icon: GraduationCap, label: 'Formação completa Arquiteto de IA Agêntica' },
  { icon: Star, label: 'Licença Meta Produtor por 12 meses' },
  { icon: Zap, label: '10.000 créditos mensais na plataforma' },
  { icon: Users, label: 'Acesso à comunidade de Meta Produtores' },
  { icon: UserCheck, label: 'Módulos com especialistas de diferentes nichos' },
];

const paraQuem = [
  'Você tem conhecimento ou especialidade em alguma área',
  'Quer criar soluções com IA sem depender de programador',
  'Quer monetizar o que sabe sem limite de horas trabalhadas',
  'Quer entrar no mercado de IA com base sólida e método',
];

const trustBadges = [
  { icon: Shield, label: 'Método validado no ecossistema Meta Agente 360' },
  { icon: Users, label: 'Comunidade ativa de Meta Produtores' },
  { icon: Calendar, label: 'Aprenda na prática em 90 dias' },
  { icon: Rocket, label: 'Comece a monetizar com agentes de IA' },
];

export default function Formacao() {
  const [activePillar, setActivePillar] = useState(null);

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
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Formação Meta Produtor</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-3">
                Monetize o que<br />você já sabe.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="font-heading text-xl sm:text-2xl font-semibold text-brand-purple mb-4">
                Torne-se um Arquiteto de IA Agêntica em 90 dias.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6 max-w-xl">
                A Formação Meta Produtor é o único programa que te ensina a criar agentes de IA com o seu conhecimento, aplicar mentalidades agênticas nos seus processos e monetizar tudo isso dentro do ecossistema Meta Agente 360.
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
                src="https://media.base44.com/images/public/6a3057094f64de9f1f72d897/fad44e70e_formao.png"
                alt="Formação Arquiteto de IA Agêntica"
                className="w-full max-w-[560px] object-contain scale-150"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ SE TORNA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple/15 to-brand-purple/5 flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6 text-brand-purple" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-purple uppercase tracking-wider mb-2">O que você se torna</p>
                <p className="text-navy/70 text-[1.0625rem] leading-[1.7]">
                  Um <strong className="text-navy">Arquiteto de IA Agêntica</strong> que cria agentes inteligentes personalizados com o próprio conhecimento e especialidade, sem precisar programar, e os aplica para otimizar, automatizar e monetizar processos reais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 PILARES */}
      <section className="py-20 bg-brand-ice bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Os 4 Pilares"
            headline="Quatro pilares que nenhuma formação de IA ensina juntos."
            body="Domine os fundamentos, a mentalidade, a prática e a monetização para criar agentes inteligentes e transformar conhecimento em receita."
            align="center"
            className="max-w-2xl mx-auto mb-12 text-center"
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-6 h-full">
                  <span className={`inline-block text-[0.65rem] font-bold tracking-widest uppercase ${p.badgeBg} text-white px-3 py-1 rounded-full mb-4`}>
                    {p.n}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-navy mb-1">{p.title}</h3>
                  <p className="text-sm text-brand-purple/60 italic mb-5">{p.subtitle}</p>
                  <ul className="space-y-2.5">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-brand-blue" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-navy/70 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUÍDO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Incluso"
            headline="O que está incluído na formação."
            align="center"
            className="max-w-xl mx-auto mb-12 text-center"
          />
          <div className="max-w-2xl mx-auto space-y-3">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-4 glass-card rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-brand-blue" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold text-navy">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section className="py-20 bg-brand-ice bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Investimento"
            headline="Invista no seu futuro como Arquiteto de IA."
            align="center"
            className="max-w-xl mx-auto mb-10 text-center"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <GlassCard className="p-8 text-center overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-blue" />
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple/15 to-brand-blue/10 flex items-center justify-center mx-auto mb-5">
                <CreditCard className="w-7 h-7 text-brand-purple" strokeWidth={1.5} />
              </div>
              <div className="mb-2">
                <span className="text-xs text-navy/40 line-through">R$ 997/mês</span>
              </div>
              <div className="mb-1">
                <span className="text-sm text-navy/60">12x de</span>
              </div>
              <div className="text-5xl font-bold gradient-text font-heading mb-1">R$497</div>
              <p className="text-sm text-navy/50 mb-6">ou R$ 4.997 à vista</p>
              <GradientButton to="/contato" size="lg" className="w-full justify-center">Garantir minha vaga</GradientButton>
              <p className="text-xs text-red-500/70 font-medium mt-4 flex items-center justify-center gap-1.5">
                <Megaphone className="w-3 h-3" />
                Oferta exclusiva para o evento. Vagas limitadas.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Para quem é"
            headline="Para quem é essa formação."
            align="center"
            className="max-w-xl mx-auto mb-12 text-center"
          />
          <div className="max-w-2xl mx-auto space-y-3">
            {paraQuem.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-brand-blue" strokeWidth={3} />
                </div>
                <span className="text-[1.0625rem] text-navy/75">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-16 bg-brand-lavender/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-center text-center gap-3 p-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm shadow-navy/4 flex items-center justify-center">
                  <badge.icon className="w-6 h-6 text-brand-blue" strokeWidth={1.5} />
                </div>
                <p className="text-xs font-semibold text-navy/70 max-w-[180px]">{badge.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE + CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xl sm:text-2xl font-semibold text-white mb-6"
          >
            Seu conhecimento é único.<br />Transforme em impacto. Transforme em renda.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card-dark rounded-2xl p-6 sm:p-8 max-w-lg mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Megaphone className="w-5 h-5 text-brand-blue" />
              <p className="text-white/90 font-semibold text-sm">Garanta sua vaga agora</p>
            </div>
            <p className="text-white/60 text-xs mb-5">Oferta exclusiva para o evento. Vagas limitadas.</p>
            <GradientButton to="/contato" size="lg" className="w-full justify-center">
              Procure um Meta Produtor no stand
            </GradientButton>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brand-ice">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Dúvidas"
            headline="Perguntas frequentes sobre a Formação."
            align="center"
            className="max-w-xl mx-auto mb-10 text-center"
          />
          <FAQAccordion />
        </div>
      </section>
    </main>
  );
}