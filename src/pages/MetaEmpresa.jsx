import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Settings, BarChart3, Users, TrendingUp, AlertCircle } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SectionHeader from '../components/ui/SectionHeader';

const painPoints = [
{ icon: AlertCircle, label: 'Informações espalhadas', desc: 'Dados em planilhas, e-mails, chats e documentos desconectados.' },
{ icon: Settings, label: 'Processos manuais', desc: 'Tarefas repetitivas que consomem tempo das equipes.' },
{ icon: Users, label: 'Equipes sobrecarregadas', desc: 'Profissionais fazendo trabalho que poderia ser automatizado.' },
{ icon: BarChart3, label: 'Decisões sem dados claros', desc: 'Falta de visibilidade sobre o que está acontecendo na operação.' },
{ icon: MessageSquare, label: 'Atendimento sem contexto', desc: 'Clientes precisam repetir informações a cada contato.' },
{ icon: TrendingUp, label: 'Operação pouco escalável', desc: 'Crescimento exige contratação, não inteligência.' }];


const areas = [
{
  label: 'Atendimento',
  agents: ['Agente de atendimento ao cliente', 'Agente de suporte técnico', 'Agente de onboarding', 'Agente de FAQ inteligente']
},
{
  label: 'Comercial',
  agents: ['Agente de qualificação de leads', 'Agente de proposta', 'Agente de follow-up', 'Agente de CRM']
},
{
  label: 'Marketing',
  agents: ['Agente de conteúdo', 'Agente de pesquisa', 'Agente de briefing', 'Agente de análise de campanha']
},
{
  label: 'Financeiro',
  agents: ['Agente de relatórios financeiros', 'Agente de análise de custos', 'Agente de conciliação', 'Agente de DRE']
},
{
  label: 'RH',
  agents: ['Agente de recrutamento', 'Agente de onboarding', 'Agente de treinamento', 'Agente de feedback']
},
{
  label: 'Operação',
  agents: ['Agente de processos internos', 'Agente de checklist', 'Agente de documentação', 'Agente de auditoria']
}];


export default function MetaEmpresa() {
  const [activeArea, setActiveArea] = useState(0);

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center bg-navy overflow-hidden pt-16">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(33,107,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(33,107,255,0.4) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-blue/8 rounded-full blur-[120px]" />
        </div>

        {/* Imagem lateral com fade */}
        <div className="absolute right-8 lg:right-16 top-16 bottom-0 w-[42%] lg:w-[44%] hidden lg:block">
          <img
            src="https://media.base44.com/images/public/6a31bcdad828457821b25dc5/0179fdfa8_ChatGPTImage19dejunde202616_53_52.png"
            alt="Meta Empresa"
            className="w-full h-full object-contain scale-110"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 10%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 10%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%)'
            }} />
          
          {/* Overlay para suavizar a transição com o fundo navy */}
          <div
            className="absolute inset-y-0 left-0 w-32 lg:w-40"
            style={{
              background: 'linear-gradient(to right, #050A24 0%, transparent 100%)'
            }} />
          
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-xl lg:max-w-[46%]">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Meta Empresa</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-white leading-[1.1] tracking-tight mb-4">
              Agentes de IA para empresas que precisam de mais{' '}
              <span className="gradient-text">clareza, velocidade e controle.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-white/60 text-[1.0625rem] leading-[1.7] mb-6 max-w-xl">
              Leve inteligência agêntica para atendimento, operação, gestão, dados, relatórios, treinamento e processos internos.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
              <GradientButton to="/contato" size="lg">Solicitar Diagnóstico</GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DORES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="O problema" headline="O problema não é falta de ferramenta. É falta de inteligência conectada ao processo." align="center" className="max-w-2xl mx-auto mb-12 text-center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((p, i) =>
            <GlassCard key={i} delay={i * 0.07} className="p-6">
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <p.icon className="w-4 h-4 text-red-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-sm font-semibold text-navy mb-1.5">{p.label}</h3>
                <p className="text-xs text-navy/55 leading-relaxed">{p.desc}</p>
              </GlassCard>
            )}
          </div>
        </div>
      </section>

      {/* APLICAÇÕES POR ÁREA */}
      <section className="py-20 bg-brand-ice bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Aplicações" headline="Agentes por área da empresa." body="Cada área pode ter agentes especializados para automatizar, organizar e ampliar a capacidade da equipe." align="center" className="max-w-xl mx-auto mb-10 text-center" />
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {areas.map((area, i) =>
            <button
              key={i}
              onClick={() => setActiveArea(i)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 min-h-[40px] ${
              activeArea === i ?
              'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-md shadow-brand-blue/20' :
              'bg-white/60 border border-brand-grey text-navy/60 hover:text-navy hover:border-brand-blue/30'}`
              }>
              
                {area.label}
              </button>
            )}
          </div>
          <motion.div key={activeArea} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {areas[activeArea].agents.map((agent, i) =>
            <div key={i} className="glass-card rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                <p className="text-sm font-medium text-navy">{agent}</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* BOARD DE AGENTES */}
      <section className="relative py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionHeader eyebrow="Board de Agentes" headline="Vários agentes trabalhando como uma arquitetura." body="Um Board de Agentes conecta agentes especializados em diferentes funções, coordenados por um agente gestor central." dark />

            {/* Board image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative">
              
              <img src="https://media.base44.com/images/public/6a31bcdad828457821b25dc5/ebbde4855_img5.png"

              alt="Board de Agentes - Arquitetura de IA"
              className="w-full h-auto"
              style={{
                maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 60%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 60%, transparent 100%)'
              }} />
              
            </motion.div>
          </div>
        </div>
      </section>


    </main>);

}