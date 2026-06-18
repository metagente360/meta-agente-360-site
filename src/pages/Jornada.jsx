import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SectionHeader from '../components/ui/SectionHeader';

const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    body: 'Entendemos a dor, o processo, o público e o resultado esperado. Sem diagnóstico claro, não há agente eficaz.',
    detail: 'Mapeamos processos, identificamos gargalos e definimos o que o agente precisa resolver com precisão.',
  },
  {
    n: '02',
    title: 'Estruturação',
    body: 'Organizamos conhecimento, regras, fluxos, documentos, linguagem e limites do agente.',
    detail: 'Criamos a base de conhecimento, definimos o comportamento esperado e preparamos todas as instruções.',
  },
  {
    n: '03',
    title: 'Criação',
    body: 'Configuramos o agente dentro da plataforma, definindo missão, comportamento, contexto e canais.',
    detail: 'Usamos o Estúdio para construir o agente com todos os parâmetros definidos na etapa anterior.',
  },
  {
    n: '04',
    title: 'Teste',
    body: 'Validamos respostas, ajustamos falhas, melhoramos instruções e refinamos a experiência.',
    detail: 'Testamos cenários reais, simulamos conversas e otimizamos até atingir a qualidade esperada.',
  },
  {
    n: '05',
    title: 'Publicação',
    body: 'Disponibilizamos o agente nos canais ideais: WhatsApp, WebApp, ChatApp, página ou QR Code.',
    detail: 'O agente entra em operação com monitoramento ativo e ajustes imediatos se necessário.',
  },
  {
    n: '06',
    title: 'Evolução',
    body: 'Acompanhamos dados, comportamento, uso e oportunidades de melhoria contínua.',
    detail: 'Analisamos métricas, conversas e feedback para tornar o agente cada vez mais eficaz.',
  },
];

export default function Jornada() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main>
      {/* HERO */}
      <section className="min-h-[100svh] flex items-center bg-brand-ice bg-blueprint-grid pt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/4 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Método</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4">
              A jornada para transformar uma ideia em <span className="gradient-text">agente inteligente.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6 max-w-xl">
              Criar um agente não é apenas escrever um prompt. É entender objetivo, contexto, processo, canal, dados e evolução.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
              <GradientButton to="/contato" size="lg">Começar minha Jornada Agêntica</GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="As 6 etapas" headline="Do diagnóstico à evolução contínua." align="center" className="max-w-xl mx-auto mb-16 text-center" />

          {/* Desktop: two-column layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <GlassCard
                key={i}
                delay={i * 0.08}
                className={`p-6 cursor-pointer transition-all duration-300 ${activeStep === i ? 'ring-2 ring-brand-blue/30 shadow-lg shadow-brand-blue/8' : ''}`}
                onClick={() => setActiveStep(i)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    activeStep === i ? 'bg-gradient-to-br from-brand-blue to-brand-purple text-white' : 'bg-brand-grey text-navy/40'
                  }`}>
                    {step.n}
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-navy">{step.title}</h3>
                </div>
                <p className="text-xs text-navy/60 leading-relaxed mb-3">{step.body}</p>
                {activeStep === i && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-brand-blue/80 leading-relaxed border-t border-brand-blue/10 pt-3 mt-1">
                    {step.detail}
                  </motion.p>
                )}
              </GlassCard>
            ))}
          </div>

          {/* Mobile: vertical list */}
          <div className="lg:hidden space-y-4">
            {steps.map((step, i) => (
              <GlassCard key={i} delay={i * 0.07} className="p-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 flex items-center justify-center text-xs font-bold text-brand-blue flex-shrink-0">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-navy mb-1.5">{step.title}</h3>
                    <p className="text-xs text-navy/60 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRESS VISUAL */}
      <section className="py-16 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto pb-4 gap-2">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-2 flex-shrink-0">
                <div className={`flex flex-col items-center gap-1.5 ${i <= activeStep ? 'opacity-100' : 'opacity-30'} transition-opacity duration-300`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    i <= activeStep ? 'bg-gradient-to-br from-brand-blue to-brand-purple text-white' : 'bg-brand-grey text-navy/40'
                  }`}>
                    {step.n}
                  </div>
                  <span className="text-[10px] font-medium text-navy/50 whitespace-nowrap">{step.title}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-8 h-px transition-all duration-300 ${i < activeStep ? 'bg-brand-blue' : 'bg-brand-grey'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}