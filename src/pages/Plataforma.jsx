import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Monitor, Zap, Smartphone, BarChart3, BookOpen, CreditCard, Copy, Globe, MessageCircle } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SecondaryButton from '../components/ui/SecondaryButton';
import SectionHeader from '../components/ui/SectionHeader';
import DashboardMockup from '../components/ui/DashboardMockup';
import MarqueeStrip from '../components/ui/MarqueeStrip';
import CTASection from '../components/ui/CTASection';
import FAQAccordion from '../components/ui/FAQAccordion';

const channels = ['WhatsApp', 'WebApp', 'ChatApp', 'Página Pública', 'QR Code'];
const models = ['GPT-4o', 'Claude 3.5', 'Gemini 1.5', 'GPT-4o mini', 'Mistral', 'LLaMA 3', 'Claude Haiku', 'Gemini Flash'];

const appTabs = [
{ icon: Monitor, label: 'Meta Chat', desc: 'Conversas organizadas, histórico e contexto de cada agente em um ambiente limpo e funcional.', image: 'https://media.base44.com/images/public/6a31bcdad828457821b25dc5/2be7bd337_image.png' },
{ icon: Layers, label: 'Meta Contexto', desc: 'Base de conhecimento, documentos, regras e instruções que alimentam cada agente.', image: 'https://media.base44.com/images/public/6a31bcdad828457821b25dc5/4fdc80b16_image.png' },
{ icon: BarChart3, label: 'Meta Dados', desc: 'Métricas de uso, conversas, usuários e indicadores de desempenho dos agentes.' },
{ icon: Zap, label: 'Meta Análise', desc: 'Análise de conversas, qualidade de respostas e oportunidades de melhoria.' },
{ icon: Monitor, label: 'Dashboard', desc: 'Painel unificado com visão geral de todos os agentes, créditos e atividades.' },
{ icon: BookOpen, label: 'Biblioteca', desc: 'Coleção de prompts, templates, configurações e melhores práticas.' },
{ icon: CreditCard, label: 'Créditos', desc: 'Controle de uso, saldo disponível, histórico de consumo e alertas.' }];


const studioModes = [
{ title: 'Iniciar do zero', desc: 'Defina missão, contexto, comportamento e canais manualmente.' },
{ title: 'Enviar POP-A', desc: "Envie um Procedimento Operacional e Padr\xE3o Ag\xEAntico." },
{ title: 'Colar Prompt', desc: 'Cole um prompt existente e a plataforma estrutura automaticamente.' },
{ title: 'Descrição Livre', desc: 'Descreva o que você precisa e a IA transforma em configuração.' }];


export default function Plataforma() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center bg-brand-ice bg-blueprint-grid pt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative z-20 order-1 lg:order-1">
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Plataforma</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4">
                A plataforma para criar, publicar e gerenciar agentes de IA com contexto.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6 max-w-lg">
                O Meta Agente 360 reúne criação, canais, dados, créditos, histórico, análise e evolução dos seus agentes em um só ambiente.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
                <GradientButton to="/contato" size="lg">Falar com Especialista</GradientButton>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-2 flex items-center justify-end relative">
              
              {/* Sombra neon azul atrás */}
              <div className="absolute inset-0 rounded-2xl blur-3xl opacity-25 bg-brand-blue pointer-events-none" />
              <img
                src="https://media.base44.com/images/public/6a3057094f64de9f1f72d897/ce88deb71_dashboard.png"
                alt="Plataforma Meta Agente 360"
                className="relative z-10 w-full max-w-none object-contain translate-x-16 scale-150"
                style={{ mixBlendMode: 'multiply' }} />
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISÃO GERAL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — imagem da plataforma */}
            <div className="flex items-center justify-center">
              <img src="https://media.base44.com/images/public/6a3057094f64de9f1f72d897/7ccc30ddc_ChatGPT_Image_15_de_jun_de_2026__18_45_21.png"

              alt="Plataforma Meta Agente 360"
              className="w-full max-w-xl h-auto object-contain"
              style={{ mixBlendMode: 'multiply' }} />
              
            </div>
            {/* Right — texto e passo a passo */}
            <div>
              <SectionHeader eyebrow="Visão geral" headline="Tudo que um agente precisa para sair da ideia e chegar ao uso real." body="Criar um agente começa pela sua essência. Defina sua identidade, persona, protocolo, regras e formato — e então publique com propósito e método." />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
                {['Identidade', 'Persona', 'Protocolo', 'Regras', 'Formato', 'Criar'].map((step, i) =>
                <GlassCard key={i} delay={i * 0.07} className="p-4 text-center" hover={false}>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 flex items-center justify-center mx-auto mb-3">
                      <span className="text-xs font-bold text-brand-blue">{i + 1}</span>
                    </div>
                    <p className="text-sm font-semibold text-navy">{step}</p>
                  </GlassCard>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTÚDIO */}
      <section className="py-20 bg-brand-ice bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Estúdio de Criação" headline="Crie agentes de diferentes formas." body="Comece do zero, envie um POP-A, cole um prompt pronto ou descreva livremente o que precisa." align="center" className="max-w-xl mx-auto mb-12 text-center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {studioModes.map((m, i) =>
            <GlassCard key={i} delay={i * 0.08} className="p-6">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center mb-4">
                  <span className="text-sm font-bold gradient-text">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-heading text-sm font-semibold text-navy mb-2">{m.title}</h3>
                <p className="text-xs text-navy/60 leading-relaxed">{m.desc}</p>
              </GlassCard>
            )}
          </div>
        </div>
      </section>

      {/* EDIÇÃO E HIPERPERSONALIZAÇÃO */}
      <section className="py-20 bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              
              <p className="eyebrow text-brand-blue mb-4">Edição e Hiperpersonalização</p>
              <h2 className="font-heading text-[1.75rem] sm:text-[2rem] font-semibold text-white leading-[1.2] tracking-tight mb-4">
                Cada agente do seu jeito. Configure, personalize, evolua.
              </h2>
              <p className="text-white/60 text-[1.0625rem] leading-[1.7] mb-8">
                Edite identidade, persona, regras, formato e protocolos. Ajuste prompts, conecte fontes de conhecimento, 
                defina canais e monitore cada agente com total controle. O Meta Agente 360 oferece um painel completo 
                para você gerenciar e refinar cada detalhe do seu agente de IA.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                { label: 'Identidade do agente', desc: 'Nome, título, avatar e cor' },
                { label: 'Configuração de IA', desc: 'Modelo, temperatura, contexto' },
                { label: 'Prompts e regras', desc: 'Comportamento e limitações' },
                { label: 'Canais e ativação', desc: 'WhatsApp, WebApp e mais' }].
                map((item, i) =>
                <GlassCard key={i} dark delay={i * 0.07} className="p-4" hover={false}>
                    <div className="w-6 h-6 rounded-lg bg-brand-blue/15 flex items-center justify-center mb-3">
                      <div className="w-2 h-2 rounded-sm bg-brand-blue" />
                    </div>
                    <p className="text-sm font-semibold text-white/85">{item.label}</p>
                    <p className="text-xs text-white/45 mt-1">{item.desc}</p>
                  </GlassCard>
                )}
              </div>
              <div className="mt-8">
                <GradientButton to="/contato">Falar com Especialista</GradientButton>
              </div>
            </motion.div>
            {/* Right — imagem sem moldura */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center">
              
              <img src="https://media.base44.com/images/public/6a31bcdad828457821b25dc5/7e66fc559_editar_agente_cell.png"

              alt="Editar Agente - Meta Agente 360"
              className="w-full max-w-[380px] lg:max-w-md h-auto" />
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* ONDE ATIVAR SEU AGENTE */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ativação do Agente"
            headline="Use o agente onde preferir."
            body="Depois de criar, seu agente pode ser ativado via WhatsApp ou Web App — sem fricção, no canal que faz mais sentido para o seu público."
            align="center"
            dark
            className="max-w-xl mx-auto mb-10 text-center" />
          
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
            {
              icon: MessageCircle,
              label: 'WhatsApp',
              desc: 'Interaja com o agente direto pelo WhatsApp — sem instalar nada, no canal que seu público já usa.',
              color: 'from-green-500/10 to-green-500/5',
              iconColor: 'text-green-500',
              badge: 'bg-green-500/20 text-green-400',
              badgeLabel: 'Canal disponível'
            },
            {
              icon: Globe,
              label: 'Web App',
              desc: 'Acesse a plataforma pelo navegador com interface completa, histórico e painel de controle.',
              color: 'from-brand-blue/10 to-brand-blue/5',
              iconColor: 'text-brand-blue',
              badge: 'bg-brand-blue/20 text-brand-blue',
              badgeLabel: 'Canal disponível'
            }].
            map((ch, i) =>
            <GlassCard key={i} delay={i * 0.1} dark className="p-7 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${ch.color} opacity-30 rounded-2xl`} />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <ch.icon className={`w-5 h-5 ${ch.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 ${ch.badge}`}>
                    {ch.badgeLabel}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">{ch.label}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{ch.desc}</p>
                </div>
              </GlassCard>
            )}
          </div>
        </div>
      </section>

      {/* APP AGÊNTICO */}
      <section className="py-20 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="App Agêntico" headline="Cada agente tem seu próprio ambiente." body="O App Agêntico organiza chat, contexto, dados, análise, dashboard, biblioteca e créditos em um só lugar." align="center" className="max-w-xl mx-auto mb-10 text-center" />
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {appTabs.map((tab, i) =>
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 min-h-[40px] ${
              activeTab === i ?
              'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-md shadow-brand-blue/20' :
              'bg-white/60 border border-brand-grey text-navy/60 hover:text-navy hover:border-brand-blue/30'}`
              }>
              
                {tab.label}
              </button>
            )}
          </div>
          <motion.div key={activeTab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="max-w-4xl mx-auto">
            {appTabs[activeTab].image ?
            <img src="https://media.base44.com/images/public/6a31bcdad828457821b25dc5/dc7f3d653_ChatGPT_Image_16_de_jun_de_2026__19_55_50.png"

            alt={appTabs[activeTab].label + ' - Meta Agente 360'}
            className="w-full h-auto rounded-2xl shadow-xl shadow-navy/10" /> :


            <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center mx-auto mb-4">
                  {(() => {const Icon = appTabs[activeTab].icon;return <Icon className="w-5 h-5 text-brand-blue" strokeWidth={1.5} />;})()}
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">{appTabs[activeTab].label}</h3>
                <p className="text-navy/65 text-[1.0625rem] leading-[1.7]">{appTabs[activeTab].desc}</p>
              </div>
            }
          </motion.div>
        </div>
      </section>

      {/* MODELOS */}
      <section className="py-16 bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <SectionHeader eyebrow="Modelos de IA" headline="Escolha o modelo certo para cada tarefa." body="A plataforma permite trabalhar com diferentes modelos de IA conforme objetivo, custo, velocidade, raciocínio e complexidade." dark align="center" className="max-w-xl mx-auto text-center" />
        </div>
        <MarqueeStrip items={models} items2={['Rápido', 'Profundo', 'Multimodal', 'Econômico', 'Raciocínio', 'Visão', 'Código', 'Análise', 'Criativo', 'Longo contexto']} dark />
      </section>

      {/* COLEÇÕES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SectionHeader eyebrow="Coleções e Clonagem" headline="Organize, clone e escale soluções." body="Agrupe agentes por cliente, área, projeto ou nicho. Clone agentes, crie variações e transfira soluções com mais velocidade." />
            <div className="grid grid-cols-2 gap-3">
              {[
              { label: 'Criar coleção', icon: Layers },
              { label: 'Clonar agente', icon: Copy },
              { label: 'Compartilhar', icon: Smartphone },
              { label: 'Escalar', icon: Zap }].
              map((item, i) =>
              <GlassCard key={i} delay={i * 0.07} className="p-5">
                  <item.icon className="w-5 h-5 text-brand-blue mb-3" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-navy">{item.label}</p>
                </GlassCard>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brand-ice">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Dúvidas" headline="Perguntas frequentes sobre a plataforma." align="center" className="max-w-xl mx-auto mb-10 text-center" />
          <FAQAccordion />
        </div>
      </section>

      <CTASection eyebrow="Próximo passo" headline="Veja como a plataforma pode sustentar seus agentes." primaryLabel="Falar com Especialista" primaryTo="/contato" />
    </main>);

}