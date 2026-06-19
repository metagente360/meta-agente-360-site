import { motion } from 'framer-motion';
import { Zap, Users, Brain, Building2, MessageSquare, Globe, TrendingUp, ChevronRight } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SectionHeader from '../components/ui/SectionHeader';
import MarqueeStrip from '../components/ui/MarqueeStrip';

const canCreate = [
  { icon: Brain, label: 'Agentes especialistas', desc: 'Transformam conhecimento técnico em respostas precisas.' },
  { icon: MessageSquare, label: 'Agentes de atendimento', desc: 'Atendem com contexto, histórico e personalidade da marca.' },
  { icon: Users, label: 'Agentes de treinamento', desc: 'Ensinam, orientam e avaliam equipes ou alunos.' },
  { icon: Zap, label: 'Agentes de reunião', desc: 'Transcrevem, resumem e geram próximos passos.' },
  { icon: Building2, label: 'Agentes para empresas', desc: 'Processos internos, relatórios e operação.' },
  { icon: Globe, label: 'Soluções para nichos', desc: 'Saúde, eventos, restaurantes, consultoria e mais.' },
];

const valueSteps = [
  { n: '01', title: 'Entender a dor', body: 'Identificar o problema real, o processo impactado e o resultado esperado pelo cliente.' },
  { n: '02', title: 'Estruturar o processo', body: 'Organizar conhecimento, regras, fluxos e instruções que o agente vai usar.' },
  { n: '03', title: 'Criar o agente', body: 'Configurar missão, comportamento, contexto e canais dentro da plataforma.' },
  { n: '04', title: 'Entregar a solução', body: 'Implementar, treinar, publicar e acompanhar a evolução com o cliente.' },
];

const monetizationItems = [
  'Implementação para clientes', 'Pacotes de agentes', 'Agentes por nicho',
  'Consultorias', 'Produtos digitais', 'Treinamentos', 'Soluções recorrentes',
  'Licenciamento', 'White-label', 'Comunidades'
];

export default function MetaProdutor() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[100svh] flex items-center bg-brand-ice bg-blueprint-grid pt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-brand-purple/6 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Meta Produtor</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4">
                Transforme sua especialidade em <span className="gradient-text">agentes de IA.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6 max-w-xl">
                O Meta Produtor é quem cria, implementa e monetiza soluções agênticas usando o Meta Agente 360.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
                <GradientButton to="/contato" size="lg">Quero ser Meta Produtor</GradientButton>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <img
                src="https://media.base44.com/images/public/6a31bcdad828457821b25dc5/190dce66e_img4.png"
                alt="Meta Produtor — ecossistema de IA"
                className="w-full max-w-[560px] object-contain scale-150"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionHeader
              eyebrow="Novo perfil profissional"
              headline="Um novo perfil profissional para a era da inteligência agêntica."
              body="É o profissional que transforma conhecimento, processos e metodologias em agentes de IA personalizados para si, para clientes, para empresas ou para nichos específicos."
            />
            <GlassCard className="p-8" hover={false}>
              <p className="eyebrow text-brand-purple mb-3">Definição</p>
              <p className="text-navy font-heading text-base font-semibold leading-snug mb-4">
                "Quem usa o conhecimento como matéria-prima e o agente como produto."
              </p>
              <p className="text-sm text-navy/60 leading-relaxed">
                Não é desenvolvedor. Não é consultor genérico. É o especialista que entende de IA agêntica e sabe transformar isso em valor real para clientes, empresas e mercado.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* O QUE PODE CRIAR */}
      <section className="py-20 bg-brand-ice bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="O que pode criar" headline="Do conhecimento à solução aplicável." align="center" className="max-w-xl mx-auto mb-12 text-center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {canCreate.map((item, i) => (
              <GlassCard key={i} delay={i * 0.08} className="p-6 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center mb-4 group-hover:from-brand-blue/20 group-hover:to-brand-purple/20 transition-all duration-300">
                  <item.icon className="w-4 h-4 text-brand-blue" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-sm font-semibold text-navy mb-1.5">{item.label}</h3>
                <p className="text-xs text-navy/55 leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* COMO GERA VALOR */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Como gera valor" headline="Você não vende IA genérica. Você entrega solução com contexto." body="O valor está em entender a dor, estruturar o processo, criar o agente certo e acompanhar a evolução da solução." align="center" className="max-w-2xl mx-auto mb-12 text-center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {valueSteps.map((step, i) => (
              <GlassCard key={i} delay={i * 0.09} className="p-6 relative overflow-hidden">
                <span className="absolute top-4 right-4 text-3xl font-heading font-bold text-brand-blue/8">{step.n}</span>
                <h3 className="font-heading text-sm font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-xs text-navy/60 leading-relaxed">{step.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* MONETIZAÇÃO MARQUEE */}
      <section className="py-16 bg-brand-ice overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <SectionHeader eyebrow="Monetização" headline="Múltiplos caminhos para gerar valor com agentes." align="center" className="max-w-xl mx-auto text-center" />
        </div>
        <MarqueeStrip items={monetizationItems} items2={['Implementação', 'Pacotes', 'Nicho', 'Consultoria', 'Produto digital', 'Recorrência', 'Escala', 'Licença', 'Treinamento', 'Parceria']} />
      </section>


    </main>
  );
}