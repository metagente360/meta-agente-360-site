import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock } from 'lucide-react';

const ADMIN_USER = 'metadmin';
const ADMIN_PASS = '1234';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ user: '', pass: '' });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      if (form.user === ADMIN_USER && form.pass === ADMIN_PASS) {
        sessionStorage.setItem('blog_admin', 'true');
        navigate('/admin/blog');
      } else {
        setError('Usuário ou senha incorretos.');
      }
      setLoading(false);
    }, 400);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-blue/8 rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10 w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center mx-auto mb-4">
            <Lock className="w-5 h-5 text-white" />
          </div>
          <h1 className="font-heading text-xl font-semibold text-white">Área Admin</h1>
          <p className="text-white/50 text-sm mt-1">Acesso restrito ao blog</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl space-y-4">
          <div>
            <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Usuário</label>
            <input
              type="text"
              value={form.user}
              onChange={e => setForm(f => ({ ...f, user: e.target.value }))}
              placeholder="Digite seu usuário"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm [color-scheme:dark]"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Senha</label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                value={form.pass}
                onChange={e => setForm(f => ({ ...f, pass: e.target.value }))}
                placeholder="Digite sua senha"
                className="w-full px-4 py-3 pr-11 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm [color-scheme:dark]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(s => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-xs text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-purple hover:shadow-lg hover:shadow-brand-blue/25 transition-all disabled:opacity-60 mt-2"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}