import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Zap, Globe, MessageCircle, ExternalLink } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SectionHeader from '../components/ui/SectionHeader';
import EcossistemaIllustration from '../components/ecossistema/EcossistemaIllustration';
import { base44 } from '@/api/base44Client';

const community = [
  { icon: Users, label: 'Comunidade ativa', desc: 'Produtores, especialistas e criadores trocando experiências e construindo soluções juntos.' },
  { icon: BookOpen, label: 'Aprendizado contínuo', desc: 'Aulas, workshops, conteúdos práticos e encontros regulares com os melhores do ecossistema.' },
  { icon: Zap, label: 'Oportunidades reais', desc: 'Conexões com empresas, projetos e demandas de mercado que chegam pelo ecossistema.' },
  { icon: Globe, label: 'Ecossistema aberto', desc: 'Qualquer especialista pode se tornar um Meta Produtor e criar soluções escaláveis.' },
];


export default function Ecossistema() {
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    base44.entities.MetaProdutor.filter({ status: 'ativo' }, '-created_date', 50)
      .then(data => setProducers(data));
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="min-h-[100svh] flex items-center bg-brand-ice bg-blueprint-grid pt-16 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-brand-purple/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT — copy */}
            <div className="order-1 lg:order-1">
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Ecossistema</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4">
                Pessoas reais criando <span className="gradient-text">soluções com IA.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6">
                Conheça os Meta Produtores — especialistas de mercado que transformam seu conhecimento em agentes inteligentes e conectam negócios a soluções reais.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
                <GradientButton to="/contato" size="lg">Fazer parte do Ecossistema</GradientButton>
              </motion.div>
            </div>

            {/* RIGHT — illustration (order-1 on mobile = aparece primeiro) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-2 flex items-center justify-center h-[320px] lg:h-[480px]"
            >
              <EcossistemaIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* META PRODUTORES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Comunidade Meta Agente"
            headline="Conheça quem já faz parte."
            body="Cada Meta Produtor carrega uma especialidade única. Clique em 'Falar' para entrar em contato direto com aquele que faz mais sentido para o seu desafio."
            align="center"
            className="max-w-2xl mx-auto mb-12 text-center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {producers.map((p, i) => (
              <GlassCard key={p.id || i} delay={i * 0.08} className="p-6 flex flex-col">
                {/* Header com foto */}
                <div className="flex items-start gap-4 mb-4">
                  {p.foto ? (
                    <img src={p.foto} alt={p.nome} className="w-14 h-14 rounded-2xl object-cover flex-shrink-0 border-2 border-brand-grey" />
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 flex-shrink-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-brand-purple">{p.nome?.charAt(0)}</span>
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-heading text-sm font-semibold text-navy leading-tight">{p.nome}</p>
                    <p className="text-xs font-bold text-brand-blue mt-0.5">{p.especialidade}</p>
                    <p className="text-[10px] text-navy/45 mt-0.5">{p.nicho}</p>
                  </div>
                </div>

                {/* Mini bio */}
                <p className="text-xs text-navy/60 leading-relaxed flex-1 mb-5">{p.bio}</p>

                {/* CTA WhatsApp */}
                {p.whatsapp && (
                  <a
                    href={`https://wa.me/${p.whatsapp}?text=Olá+${encodeURIComponent(p.nome)}!+Vi+seu+perfil+no+ecossistema+Meta+Agente+360+e+gostaria+de+conversar.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Falar com {p.nome?.split(' ')[0]}
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* COMUNIDADE */}
      <section className="py-20 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Comunidade" headline="Aprendizado, prática e oportunidade." body="O ecossistema conecta formação, plataforma, troca, implementação e mercado." align="center" className="max-w-xl mx-auto mb-12 text-center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {community.map((item, i) => (
              <GlassCard key={i} delay={i * 0.08} className="p-6" hover={false}>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 flex items-center justify-center mb-4">
                  <item.icon className="w-4 h-4 text-brand-blue" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-sm font-semibold text-navy mb-2">{item.label}</h3>
                <p className="text-xs text-navy/60 leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}