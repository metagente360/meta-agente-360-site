import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Eye, EyeOff, ArrowLeft, Upload, X, Save, FileText } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import ContentEditor from '@/components/admin/ContentEditor';

const ACCENT_OPTIONS = [
  { label: 'Azul', value: 'text-brand-blue' },
  { label: 'Roxo', value: 'text-brand-purple' },
  { label: 'Verde', value: 'text-emerald-600' },
  { label: 'Laranja', value: 'text-orange-600' },
  { label: 'Azul claro', value: 'text-blue-600' },
  { label: 'Amarelo', value: 'text-yellow-600' },
];

const emptyForm = {
  title: '',
  seo_title: '',
  slug: '',
  excerpt: '',
  meta_description: '',
  content: '',
  author: '',
  tag: '',
  category: '',
  keyword: '',
  read_time: '',
  image: '',
  accent: 'text-brand-blue',
  status: 'draft',
};

export default function AdminBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list'); // 'list' | 'edit'
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    setLoading(true);
    const data = await base44.entities.BlogPost.list('-created_date', 100);
    setPosts(data);
    setLoading(false);
  }

  function openNew() {
    setForm(emptyForm);
    setEditingId(null);
    setView('edit');
  }

  function openEdit(post) {
    setForm({
      title: post.title || '',
      seo_title: post.seo_title || '',
      slug: post.slug || '',
      excerpt: post.excerpt || '',
      meta_description: post.meta_description || '',
      content: post.content || '',
      author: post.author || '',
      tag: post.tag || '',
      category: post.category || '',
      keyword: post.keyword || '',
      read_time: post.read_time || '',
      image: post.image || '',
      accent: post.accent || 'text-brand-blue',
      status: post.status || 'draft',
    });
    setEditingId(post.id);
    setView('edit');
  }

  function handleTitleChange(val) {
    const slug = val.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim().replace(/\s+/g, '-');
    setForm(f => ({ ...f, title: val, slug, seo_title: f.seo_title || val }));
  }

  async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    setUploadingImage(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setForm(f => ({ ...f, image: file_url }));
    setUploadingImage(false);
  }

  async function handleSave(status) {
    setSaving(true);
    const data = { ...form, status };
    if (editingId) {
      await base44.entities.BlogPost.update(editingId, data);
    } else {
      await base44.entities.BlogPost.create(data);
    }
    setSaving(false);
    await loadPosts();
    setView('list');
  }

  async function handleDelete(id) {
    if (!confirm('Tem certeza que deseja excluir este artigo?')) return;
    await base44.entities.BlogPost.delete(id);
    setPosts(posts.filter(p => p.id !== id));
  }

  async function toggleStatus(post) {
    const newStatus = post.status === 'published' ? 'draft' : 'published';
    await base44.entities.BlogPost.update(post.id, { status: newStatus });
    setPosts(posts.map(p => p.id === post.id ? { ...p, status: newStatus } : p));
  }

  if (view === 'edit') {
    return (
      <div className="min-h-screen bg-brand-ice">
        {/* Top bar */}
        <div className="sticky top-0 z-50 bg-white border-b border-navy/8 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button onClick={() => setView('list')} className="inline-flex items-center gap-2 text-sm text-navy/60 hover:text-navy transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </button>
          <h1 className="font-heading text-sm font-semibold text-navy">
            {editingId ? 'Editar Artigo' : 'Novo Artigo'}
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSave('draft')}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-navy/70 bg-navy/8 hover:bg-navy/12 transition-all min-h-[36px]"
            >
              {saving ? 'Salvando...' : 'Rascunho'}
            </button>
            <button
              onClick={() => handleSave('published')}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple hover:shadow-lg hover:shadow-brand-blue/25 transition-all min-h-[36px] inline-flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              {saving ? 'Publicando...' : 'Publicar'}
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Imagem de Capa */}
          <div className="bg-white rounded-2xl border border-navy/8 p-6">
            <h2 className="font-heading text-sm font-semibold text-navy mb-4">Imagem de Capa</h2>
            {form.image ? (
              <div className="relative rounded-xl overflow-hidden h-48">
                <img src={form.image} alt="Capa" className="w-full h-full object-cover" />
                <button
                  onClick={() => setForm(f => ({ ...f, image: '' }))}
                  className="absolute top-2 right-2 w-8 h-8 bg-navy/70 rounded-full flex items-center justify-center text-white hover:bg-navy transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center h-40 rounded-xl border-2 border-dashed border-navy/20 cursor-pointer hover:border-brand-blue/40 hover:bg-brand-blue/2 transition-all">
                {uploadingImage ? (
                  <div className="w-6 h-6 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-navy/30 mb-2" />
                    <span className="text-sm text-navy/50 font-medium">Clique para fazer upload da imagem</span>
                    <span className="text-xs text-navy/30 mt-1">JPG, PNG, WebP</span>
                  </>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            )}
            <div className="mt-3">
              <input
                type="text"
                placeholder="Ou cole uma URL de imagem..."
                value={form.image}
                onChange={e => setForm(f => ({ ...f, image: e.target.value }))}
                className="w-full px-3 py-2 text-sm rounded-xl border border-navy/12 text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
              />
            </div>
          </div>

          {/* Informações principais */}
          <div className="bg-white rounded-2xl border border-navy/8 p-6 space-y-4">
            <h2 className="font-heading text-sm font-semibold text-navy mb-2">Informações do Artigo</h2>

            <div>
              <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Título Principal *</label>
              <input
                type="text"
                value={form.title}
                onChange={e => handleTitleChange(e.target.value)}
                placeholder="Título do artigo..."
                className="w-full px-4 py-3 rounded-xl border border-navy/12 text-navy font-medium placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Slug (URL) *</label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                  placeholder="url-do-artigo"
                  className="w-full px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Tempo de Leitura</label>
                <input
                  type="text"
                  value={form.read_time}
                  onChange={e => setForm(f => ({ ...f, read_time: e.target.value }))}
                  placeholder="ex: 5 min"
                  className="w-full px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Tag</label>
                <input
                  type="text"
                  value={form.tag}
                  onChange={e => setForm(f => ({ ...f, tag: e.target.value }))}
                  placeholder="ex: Meta Produtor"
                  className="w-full px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Categoria</label>
                <input
                  type="text"
                  value={form.category}
                  onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                  placeholder="ex: Mentalidade Agêntica"
                  className="w-full px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Cor de Destaque</label>
                <select
                  value={form.accent}
                  onChange={e => setForm(f => ({ ...f, accent: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                >
                  {ACCENT_OPTIONS.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Autor</label>
              <input
                type="text"
                value={form.author}
                onChange={e => setForm(f => ({ ...f, author: e.target.value }))}
                placeholder="ex: Meta Agente 360 · Meta Produtor"
                className="w-full px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Excerpt / Resumo</label>
              <textarea
                rows={3}
                value={form.excerpt}
                onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
                placeholder="Breve descrição do artigo que aparece na listagem..."
                className="w-full px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 resize-none"
              />
            </div>
          </div>

          {/* SEO */}
          <div className="bg-white rounded-2xl border border-navy/8 p-6 space-y-4">
            <h2 className="font-heading text-sm font-semibold text-navy mb-2">SEO</h2>
            <div>
              <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Título SEO</label>
              <input
                type="text"
                value={form.seo_title}
                onChange={e => setForm(f => ({ ...f, seo_title: e.target.value }))}
                placeholder="Título otimizado para buscadores..."
                className="w-full px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Meta Description</label>
              <textarea
                rows={2}
                value={form.meta_description}
                onChange={e => setForm(f => ({ ...f, meta_description: e.target.value }))}
                placeholder="Descrição para aparecer nos resultados do Google..."
                className="w-full px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 resize-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Palavra-chave Principal</label>
              <input
                type="text"
                value={form.keyword}
                onChange={e => setForm(f => ({ ...f, keyword: e.target.value }))}
                placeholder="ex: Mentalidade Agêntica"
                className="w-full px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <ContentEditor content={form.content} onChange={val => setForm(f => ({ ...f, content: val }))} />

          {/* Ações finais */}
          <div className="flex justify-end gap-3 pb-8">
            <button
              onClick={() => setView('list')}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-navy/60 bg-white border border-navy/12 hover:bg-navy/4 transition-all"
            >
              Cancelar
            </button>
            <button
              onClick={() => handleSave('draft')}
              disabled={saving}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-navy/70 bg-navy/8 hover:bg-navy/12 transition-all"
            >
              Salvar Rascunho
            </button>
            <button
              onClick={() => handleSave('published')}
              disabled={saving || !form.title || !form.slug}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple hover:shadow-lg hover:shadow-brand-blue/25 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              {saving ? 'Publicando...' : 'Publicar'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // LIST VIEW
  return (
    <div className="min-h-screen bg-brand-ice">
      {/* Header */}
      <div className="bg-white border-b border-navy/8 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-heading text-xl font-semibold text-navy">Administração do Blog</h1>
            <p className="text-xs text-navy/50 mt-0.5">{posts.filter(p => p.status === 'published').length} publicados · {posts.filter(p => p.status === 'draft').length} rascunhos</p>
          </div>
          <button
            onClick={openNew}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple hover:shadow-lg hover:shadow-brand-blue/25 hover:-translate-y-0.5 transition-all"
          >
            <Plus className="w-4 h-4" /> Novo Artigo
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-7 h-7 border-[3px] border-brand-grey border-t-brand-blue rounded-full animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <FileText className="w-12 h-12 text-navy/20 mx-auto mb-4" />
            <h2 className="font-heading text-lg font-semibold text-navy mb-2">Nenhum artigo ainda</h2>
            <p className="text-navy/50 text-sm mb-6">Crie o primeiro artigo do blog.</p>
            <button onClick={openNew} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple">
              <Plus className="w-4 h-4" /> Criar Artigo
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-navy/8 p-5 flex items-center gap-4"
              >
                {post.image && (
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${post.accent || 'text-brand-blue'}`}>{post.tag}</span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${post.status === 'published' ? 'bg-green-50 text-green-600' : 'bg-navy/6 text-navy/50'}`}>
                      {post.status === 'published' ? 'Publicado' : 'Rascunho'}
                    </span>
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-navy truncate">{post.title}</h3>
                  <p className="text-xs text-navy/40 mt-0.5">/{post.slug} · {post.read_time}</p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => toggleStatus(post)}
                    title={post.status === 'published' ? 'Despublicar' : 'Publicar'}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-navy/40 hover:text-navy hover:bg-navy/6 transition-all"
                  >
                    {post.status === 'published' ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => openEdit(post)}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-navy/40 hover:text-brand-blue hover:bg-brand-blue/8 transition-all"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-navy/40 hover:text-red-500 hover:bg-red-50 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}