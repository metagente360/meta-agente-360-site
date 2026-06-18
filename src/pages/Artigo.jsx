import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, PenLine } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import blogPosts from '../data/blogPosts';
import CTASection from '../components/ui/CTASection';

export default function Artigo() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-brand-ice pt-16">
        <div className="text-center px-4">
          <h1 className="font-heading text-2xl font-semibold text-navy mb-3">Artigo não encontrado</h1>
          <p className="text-navy/60 mb-6">O artigo que você procura não está disponível.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Header image */}
      <section className="relative w-full h-[40vh] min-h-[280px] max-h-[480px] overflow-hidden bg-navy">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-16 bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={`inline-block px-2.5 py-1 rounded-full bg-white/70 text-[10px] font-bold uppercase tracking-wider mb-4 ${post.accent}`}>
              {post.tag}
            </span>
            <h1 className="font-heading text-[1.75rem] sm:text-[2.25rem] font-semibold text-navy leading-[1.2] tracking-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-navy/50 mb-8 pb-8 border-b border-navy/8">
              <div className="flex items-center gap-1.5">
                <PenLine className="w-3.5 h-3.5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime} de leitura</span>
              </div>
            </div>

            <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-navy prose-headings:font-semibold prose-p:text-navy/70 prose-p:leading-[1.8] prose-p:text-[1.0625rem] prose-li:text-navy/70 prose-strong:text-navy">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </motion.div>
        </article>
      </section>

      <CTASection
        eyebrow="Gostou do conteúdo?"
        headline="Transforme conhecimento em agentes de IA."
        primaryLabel="Falar com Especialista"
        primaryTo="/contato"
        secondaryLabel="Mais Artigos"
        secondaryTo="/blog"
      />
    </main>
  );
}