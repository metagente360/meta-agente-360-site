import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, PenLine } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import CTASection from '../components/ui/CTASection';
import { base44 } from '@/api/base44Client';

export default function Artigo() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const results = await base44.entities.BlogPost.filter({ slug, status: 'published' });
      const found = results[0] || null;
      setPost(found);
      if (found) {
        const all = await base44.entities.BlogPost.filter({ status: 'published' }, '-created_date', 10);
        setRelated(all.filter(p => p.slug !== slug).slice(0, 2));
      }
      setLoading(false);
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-brand-ice pt-16">
        <div className="w-7 h-7 border-[3px] border-brand-grey border-t-brand-blue rounded-full animate-spin" />
      </main>
    );
  }

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
                <span>{post.read_time} de leitura</span>
              </div>
            </div>

            <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-navy prose-headings:font-semibold prose-p:text-navy/70 prose-p:leading-[1.8] prose-p:text-[1.0625rem] prose-li:text-navy/70 prose-strong:text-navy">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </motion.div>
        </article>
      </section>

      {/* Sugestões de leitura */}
      <section className="py-16 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow text-brand-blue mb-3">Leia também</p>
            <h2 className="font-heading text-[1.5rem] sm:text-[1.75rem] font-semibold text-navy leading-[1.2] tracking-tight mb-8">
              Conteúdos que complementam sua leitura
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((p, i) => (
                  <Link
                    key={i}
                    to={`/blog/${p.slug}`}
                    className="group glass-card rounded-2xl p-5 hover:shadow-lg hover:shadow-navy/6 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className={`inline-block text-[10px] font-bold uppercase tracking-wider mb-1.5 ${p.accent}`}>
                          {p.tag}
                        </span>
                        <h3 className="font-heading text-sm font-semibold text-navy leading-snug group-hover:text-brand-blue transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-[11px] text-navy/40 mt-1">{p.read_time} de leitura</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:gap-3 transition-all">
                Ver todos os artigos <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}