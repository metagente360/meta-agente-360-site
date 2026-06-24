import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Building2, Star, Users, Check } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SecondaryButton from '../components/ui/SecondaryButton';
import SectionHeader from '../components/ui/SectionHeader';

const WHATSAPP_NUMBER = '5511999999999'; // Replace with real number

const routingCards = [
  {
    icon: MessageSquare,
    title: 'Quero entrar na Formação',
    desc: 'Para quem quer aprender a criar agentes e atuar como Arquiteto de IA Agêntica.',
    cta: 'Falar sobre Formação',
    value: 'formacao',
  },
  {
    icon: Building2,
    title: 'Quero usar na minha empresa',
    desc: 'Para empresas que querem aplicar agentes em processos, atendimento, dados e operação.',
    cta: 'Solicitar Diagnóstico',
    value: 'empresa',
  },
  {
    icon: Star,
    title: 'Quero ser Meta Produtor',
    desc: 'Para quem quer criar, implementar e monetizar soluções agênticas.',
    cta: 'Falar com Especialista',
    value: 'produtor',
  },
  {
    icon: Users,
    title: 'Quero parceria ou ecossistema',
    desc: 'Para especialistas, comunidades e parceiros interessados em construir junto.',
    cta: 'Conversar com o Time',
    value: 'ecossistema',
  },
];

const perfilOptions = [
  { value: 'formacao', label: 'Quero entrar na Formação' },
  { value: 'empresa', label: 'Quero usar na minha empresa' },
  { value: 'produtor', label: 'Quero ser Meta Produtor' },
  { value: 'ecossistema', label: 'Quero parceria ou ecossistema' },
  { value: 'outro', label: 'Outro assunto' },
];

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', perfil_interesse: '', mensagem: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRoutingClick = (value) => {
    setForm(prev => ({ ...prev, perfil_interesse: value }));
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.ContactLead.create({ ...form, origem: '/contato' });
    setLoading(false);
    setSubmitted(true);
  };

  const whatsappMsg = encodeURIComponent(`Olá! Tenho interesse no Meta Agente 360. Perfil: ${form.perfil_interesse || 'não informado'}`);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

  return (
    <main>
      {/* HERO */}
      <section className="min-h-[100svh] flex items-center bg-brand-ice bg-blueprint-grid pt-16 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Contato</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4">
                Vamos encontrar o melhor <span className="gradient-text">caminho para você.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] max-w-xl">
                Escolha como deseja começar sua jornada com o Meta Agente 360.
              </motion.p>
            </div>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <img
                src="https://media.base44.com/images/public/6a31bcdad828457821b25dc5/c60d9df39_imgherocontato.png"
                alt="Contato Meta Agente 360"
                className="w-full max-w-[560px] object-contain scale-[1.3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROUTING CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Por onde começar" headline="Escolha o caminho mais alinhado com o seu objetivo." align="center" className="max-w-xl mx-auto mb-12 text-center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {routingCards.map((card, i) => (
              <GlassCard
                key={i}
                delay={i * 0.08}
                className={`p-6 cursor-pointer transition-all duration-300 ${form.perfil_interesse === card.value ? 'ring-2 ring-brand-blue/30' : ''}`}
                onClick={() => handleRoutingClick(card.value)}
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center mb-4">
                  <card.icon className="w-4 h-4 text-brand-blue" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-sm font-semibold text-navy mb-2 leading-snug">{card.title}</h3>
                <p className="text-xs text-navy/55 leading-relaxed mb-4">{card.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue">
                  {card.cta}
                  {form.perfil_interesse === card.value && <Check className="w-3 h-3" />}
                </span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form-section" className="py-20 bg-brand-ice bg-blueprint-grid">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Formulário" headline="Envie uma mensagem para o nosso time." align="center" className="max-w-xl mx-auto mb-10 text-center" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-2xl p-10 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-2">Mensagem enviada!</h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                Nossa equipe vai entrar em contato em breve. Se preferir falar agora, use o WhatsApp abaixo.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-colors"
              >
                Falar agora pelo WhatsApp
              </a>
            </motion.div>
          ) : (
            <GlassCard className="p-8" hover={false} animate={false}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy/60 mb-1.5">Nome *</label>
                    <input
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-grey bg-white/70 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/50 transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy/60 mb-1.5">E-mail *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-grey bg-white/70 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/50 transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy/60 mb-1.5">WhatsApp</label>
                  <input
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-grey bg-white/70 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/50 transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy/60 mb-1.5">Perfil de interesse *</label>
                  <select
                    name="perfil_interesse"
                    value={form.perfil_interesse}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-grey bg-white/70 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/50 transition-all"
                  >
                    <option value="">Selecione seu perfil</option>
                    {perfilOptions.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy/60 mb-1.5">Mensagem</label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-grey bg-white/70 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue/50 transition-all resize-none"
                    placeholder="Conte um pouco sobre o que você está buscando..."
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-purple text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-blue/25 transition-all duration-300 disabled:opacity-60 min-h-[48px]"
                  >
                    {loading ? 'Enviando...' : 'Enviar mensagem'}
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-600 transition-colors min-h-[48px]"
                  >
                    Falar pelo WhatsApp
                  </a>
                </div>
              </form>
            </GlassCard>
          )}
        </div>
      </section>
    </main>
  );
}