import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, ArrowLeft, Upload, X, Save, Star } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const emptyForm = {
  nome: '', especialidade: '', foto: '', agente: '', resultado: '', status: 'ativo',
};

export default function AdminCases() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list');
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [uploadingImg, setUploadingImg] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    setLoading(true);
    const data = await base44.entities.CaseSolucao.list('-created_date', 100);
    setItems(data);
    setLoading(false);
  }

  function openNew() { setForm(emptyForm); setEditingId(null); setView('edit'); }
  function openEdit(item) {
    setForm({ nome: item.nome || '', especialidade: item.especialidade || '', foto: item.foto || '',
      agente: item.agente || '', resultado: item.resultado || '', status: item.status || 'ativo' });
    setEditingId(item.id); setView('edit');
  }

  async function handleImageUpload(e) {
    const file = e.target.files[0]; if (!file) return;
    setUploadingImg(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setForm(f => ({ ...f, foto: file_url }));
    setUploadingImg(false);
  }

  async function handleSave() {
    if (!form.nome || !form.especialidade || !form.agente || !form.resultado) return;
    setSaving(true);
    if (editingId) { await base44.entities.CaseSolucao.update(editingId, form); }
    else { await base44.entities.CaseSolucao.create(form); }
    setSaving(false);
    await load();
    setView('list');
  }

  async function handleDelete(id) {
    if (!confirm('Excluir este case?')) return;
    await base44.entities.CaseSolucao.delete(id);
    setItems(items.filter(i => i.id !== id));
  }

  if (view === 'edit') return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between mb-2">
        <button onClick={() => setView('list')} className="inline-flex items-center gap-2 text-sm text-navy/60 hover:text-navy transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>
        <h1 className="font-heading text-sm font-semibold text-navy">{editingId ? 'Editar Case' : 'Novo Case'}</h1>
        <button onClick={handleSave} disabled={saving || !form.nome || !form.agente || !form.resultado}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple hover:shadow-lg hover:shadow-brand-blue/25 transition-all disabled:opacity-50">
          <Save className="w-4 h-4" /> {saving ? 'Salvando...' : 'Salvar'}
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-navy/8 p-6 space-y-4">
        <h2 className="font-heading text-sm font-semibold text-navy mb-2">Foto</h2>
        {form.foto ? (
          <div className="relative w-24 h-24">
            <img src={form.foto} alt="Foto" className="w-24 h-24 rounded-full object-cover" />
            <button onClick={() => setForm(f => ({ ...f, foto: '' }))}
              className="absolute -top-1 -right-1 w-6 h-6 bg-navy/70 rounded-full flex items-center justify-center text-white hover:bg-navy transition-colors">
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center h-28 w-28 rounded-full border-2 border-dashed border-navy/20 cursor-pointer hover:border-brand-blue/40 transition-all">
            {uploadingImg ? <div className="w-5 h-5 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" /> : <><Upload className="w-6 h-6 text-navy/30 mb-1" /><span className="text-[10px] text-navy/40 text-center px-2">Upload foto</span></>}
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
        )}
        <input type="text" placeholder="Ou cole URL da foto..." value={form.foto}
          onChange={e => setForm(f => ({ ...f, foto: e.target.value }))}
          className="w-full px-3 py-2 text-sm rounded-xl border border-navy/12 text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30" />
      </div>

      <div className="bg-white rounded-2xl border border-navy/8 p-6 space-y-4">
        <h2 className="font-heading text-sm font-semibold text-navy mb-2">Dados do Case</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[['Nome *', 'nome', 'Nome completo'], ['Especialidade *', 'especialidade', 'ex: Consultor Financeiro']].map(([label, key, ph]) => (
            <div key={key}>
              <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">{label}</label>
              <input value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))} placeholder={ph}
                className="w-full px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30" />
            </div>
          ))}
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Nome do Agente *</label>
          <input value={form.agente} onChange={e => setForm(f => ({ ...f, agente: e.target.value }))} placeholder="ex: Agente CFO Virtual"
            className="w-full px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Resultado *</label>
          <textarea rows={4} value={form.resultado} onChange={e => setForm(f => ({ ...f, resultado: e.target.value }))}
            placeholder="Descreva o resultado alcançado com o agente..."
            className="w-full px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 resize-none" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy/60 mb-1.5 uppercase tracking-wide">Status</label>
          <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
            className="px-3 py-2.5 rounded-xl border border-navy/12 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-brand-blue/30">
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-heading text-xl font-semibold text-navy">Cases de Soluções</h1>
          <p className="text-xs text-navy/50 mt-0.5">{items.filter(i => i.status === 'ativo').length} ativos</p>
        </div>
        <button onClick={openNew}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple hover:shadow-lg hover:shadow-brand-blue/25 hover:-translate-y-0.5 transition-all">
          <Plus className="w-4 h-4" /> Novo Case
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><div className="w-7 h-7 border-[3px] border-brand-grey border-t-brand-blue rounded-full animate-spin" /></div>
      ) : items.length === 0 ? (
        <div className="text-center py-20">
          <Star className="w-12 h-12 text-navy/20 mx-auto mb-4" />
          <h2 className="font-heading text-lg font-semibold text-navy mb-2">Nenhum case ainda</h2>
          <button onClick={openNew} className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple">
            <Plus className="w-4 h-4" /> Adicionar Case
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
              className="bg-white rounded-2xl border border-navy/8 p-5 flex items-center gap-4">
              {item.foto ? (
                <img src={item.foto} alt={item.nome} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-brand-lavender flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-brand-purple" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-heading text-sm font-semibold text-navy truncate">{item.nome}</h3>
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold ${item.status === 'ativo' ? 'bg-green-50 text-green-600' : 'bg-navy/6 text-navy/40'}`}>
                    {item.status === 'ativo' ? 'Ativo' : 'Inativo'}
                  </span>
                </div>
                <p className="text-xs text-navy/50">{item.especialidade} · <span className="text-brand-blue font-medium">{item.agente}</span></p>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button onClick={() => openEdit(item)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-navy/40 hover:text-brand-blue hover:bg-brand-blue/8 transition-all">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(item.id)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-navy/40 hover:text-red-500 hover:bg-red-50 transition-all">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}