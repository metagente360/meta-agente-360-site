import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, TrendingUp, Video, Settings, BookOpen, Globe, ChevronDown } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SectionHeader from '../components/ui/SectionHeader';
import MarqueeStrip from '../components/ui/MarqueeStrip';

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
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-brand-blue/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center relative">
            {/* Texto */}
            <div className="relative z-20 max-w-lg">
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Soluções</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4">
                Soluções de IA para <span className="gradient-text">processos reais.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6">
                Explore possibilidades de agentes por área, nicho e objetivo.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
                <GradientButton to="/contato" size="lg">Quero descobrir possibilidades</GradientButton>
              </motion.div>
            </div>
            {/* Imagem */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center">
              <img
                src="https://media.base44.com/images/public/6a31bcdad828457821b25dc5/cd1beea73_imgherosolues.png"
                alt="Soluções de IA"
                className="w-full max-w-[560px] object-contain scale-[1.6]" />
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

      {/* CASES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Cases reais" headline="Resultados de quem já usa agentes." body="Meta Produtores e empresas que transformaram processos com agentes de IA." align="center" className="max-w-xl mx-auto mb-12 text-center" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face', nome: 'Dra. Mariana Costa', especialidade: 'Médica e Gestora de Clínica', agente: 'Agente Clinicar', resultado: 'Reduziu em 70% o tempo de triagem de pacientes na Clínica Bem-Estar, automatizando agendamentos e lembretes com IA.' },
              { foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', nome: 'Rafael Mendes', especialidade: 'Consultor Financeiro', agente: 'Agente CFO Virtual', resultado: 'Implementou dashboards automáticos para 12 empresas, economizando 40h por mês de trabalho manual com relatórios.' },
              { foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face', nome: 'Camila Oliveira', especialidade: 'Advogada Tributarista', agente: 'Agente Lex 360', resultado: 'Automatizou a qualificação inicial de casos no escritório, aumentando a conversão de clientes em 45%.' },
              { foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face', nome: 'André Santana', especialidade: 'Diretor de Operações', agente: 'Agente Flow Ops', resultado: 'Redesenhou o fluxo de aprovações internas com IA, reduzindo o ciclo de 5 dias para 4 horas em uma indústria de 800 funcionários.' },
              { foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', nome: 'Juliana Vargas', especialidade: 'Coordenadora Pedagógica', agente: 'Agente EduTrack', resultado: 'Criou trilhas de aprendizado personalizadas para 300 alunos, aumentando a retenção do curso em 60%.' },
              { foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', nome: 'Thiago Nunes', especialidade: 'Gerente de Vendas B2B', agente: 'Agente SDR Pro', resultado: 'Automatizou a qualificação de leads inbound, gerando 3x mais reuniões qualificadas sem contratar novos SDRs.' },
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


    </main>
  );
}