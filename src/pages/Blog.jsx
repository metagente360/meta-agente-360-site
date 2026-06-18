import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PenLine, ArrowRight } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';
import SectionHeader from '../components/ui/SectionHeader';
import CTASection from '../components/ui/CTASection';
import blogPosts from '../data/blogPosts';

const posts = blogPosts.map(({ slug, content, ...rest }) => rest);
const postsWithSlug = blogPosts;

export default function Blog() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[100svh] flex items-center bg-brand-ice bg-blueprint-grid pt-16 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="eyebrow text-brand-blue mb-4">Blog</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[2.25rem] sm:text-[2.75rem] font-semibold text-navy leading-[1.1] tracking-tight mb-4">
              Conhecimento criado por <span className="gradient-text">quem pratica.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-navy/65 text-[1.0625rem] leading-[1.7] mb-6 max-w-xl">
              Meta Produtores e especialistas do ecossistema compartilham experiências reais sobre inteligência agêntica aplicada a negócios, setores e desafios do dia a dia.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.35 }}>
              <GradientButton to="/contato" size="lg">Quero escrever no Blog</GradientButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Artigos" headline="Perspectivas de quem está construindo." align="center" className="max-w-xl mx-auto mb-14 text-center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postsWithSlug.map((post, i) => (
              <GlassCard key={i} delay={i * 0.08} className="p-0 overflow-hidden relative flex flex-col">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                </div>
                <div className="p-6 relative z-10 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block px-2.5 py-1 rounded-full bg-white/70 text-[10px] font-bold uppercase tracking-wider ${post.accent}`}>
                      {post.tag}
                    </span>
                    <span className="text-[10px] text-navy/40 font-medium">{post.readTime} de leitura</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 flex items-center justify-center">
                      <PenLine className="w-3 h-3 text-brand-purple" />
                    </div>
                    <span className="text-[10px] text-navy/50 font-medium">{post.author}</span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-navy mb-3 leading-snug">{post.title}</h3>
                  <p className="text-sm text-navy/60 leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-5 pt-4 border-t border-navy/8">
                    <Link to={`/blog/${post.slug}`} className={`inline-flex items-center gap-1.5 text-xs font-semibold ${post.accent} hover:opacity-70 transition-opacity`}>
                      Ler artigo <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow="É especialista?" headline="Compartilhe seu conhecimento com o ecossistema." body="Se você é Meta Produtor ou especialista em IA agêntica, publique suas experiências e alcance uma audiência qualificada." primaryLabel="Quero Escrever" primaryTo="/contato" secondaryLabel="Conhecer Ecossistema" secondaryTo="/ecossistema" />
    </main>
  );
}