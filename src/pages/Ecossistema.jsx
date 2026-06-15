import { motion } from 'framer-motion';
import { Users, BookOpen, Zap, Globe, Star } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SecondaryButton from '../components/ui/SecondaryButton';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';

const producers = [
  { name: 'Meta Produtor', specialty: 'Saúde & Bem-estar', niche: 'Clínicas e consultórios' },
  { name: 'Meta Produtor', specialty: 'Educação', niche: 'Cursos e treinamentos' },
  { name: 'Meta Produtor', specialty: 'Jurídico', niche: 'Escritórios de advocacia' },
  { name: 'Meta Produtor', specialty: 'Financeiro', niche: 'Contabilidade e finanças' },
  { name: 'Meta Produtor', specialty: 'Marketing', niche: 'Agências e consultorias' },
  { name: 'Meta Produtor', specialty: 'Vendas', niche: 'Times comerciais' },
];

const community = [
  { icon: Users, label: 'Comunidade ativa', desc: 'Produtores, especialistas e criadores trocando experiências e criando soluções.' },
  { icon: BookOpen, label: 'Aprendizado contínuo', desc: 'Aulas, workshops, conteúdos práticos e encontros regulares.' },
  { icon: Zap, label: 'Oportunidades reais', desc: 'Conexões com empresas, projetos e demandas de mercado.' },
  { icon: Globe, label: 'Ecossistema aberto', desc: 'Qualquer especialista pode se tornar um Meta Produtor e criar soluções.' },
];

export default function Ecossistema() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[100svh] flex items-center bg-brand-ice bg-blueprint-grid pt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-brand-purple/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Ecossistema</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4">
              Um ecossistema de pessoas criando <span className="gradient-text">soluções com IA.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6 max-w-xl">
              O Meta Agente 360 reúne produtores, especialistas, empresas, consultores e criadores que estão construindo a nova camada de inteligência aplicada ao mercado.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
              <GradientButton to="/contato" size="lg">Fazer parte do Ecossistema</GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* META PRODUTORES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Meta Produtores"
            headline="Especialistas que transformam conhecimento em agentes."
            body="Cada Meta Produtor carrega uma especialidade, uma visão de mercado e uma forma de resolver problemas."
            align="center"
            className="max-w-2xl mx-auto mb-12 text-center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {producers.map((p, i) => (
              <GlassCard key={i} delay={i * 0.08} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue/15 to-brand-purple/15 flex items-center justify-center">
                    <Star className="w-4 h-4 text-brand-purple" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-navy/40 uppercase tracking-wide">{p.name}</p>
                    <p className="text-sm font-semibold text-navy">{p.specialty}</p>
                  </div>
                </div>
                <p className="text-xs text-navy/55">{p.niche}</p>
                <div className="mt-4 pt-4 border-t border-brand-grey/50">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-lavender text-brand-purple text-[10px] font-bold">
                    Especialista
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FRASES EM DESTAQUE */}
      <section className="py-16 bg-brand-ice">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          {[
            'Cada Meta Produtor carrega uma especialidade.',
            'Cada agente carrega uma forma de pensar.',
            'Cada solução nasce de uma dor real.',
          ].map((frase, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`font-heading font-semibold leading-snug ${
                i === 0 ? 'text-xl text-navy' :
                i === 1 ? 'text-lg text-navy/70' :
                'text-base text-navy/50'
              }`}
            >
              "{frase}"
            </motion.p>
          ))}
        </div>
      </section>

      {/* COMUNIDADE */}
      <section className="py-20 bg-white">
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

      <CTASection eyebrow="Faça parte" headline="Entre para uma rede que cria o futuro da inteligência agêntica." primaryLabel="Conhecer Formação" primaryTo="/formacao-arquiteto-ia-agentica" secondaryLabel="Falar com Especialista" secondaryTo="/contato" />
    </main>
  );
}