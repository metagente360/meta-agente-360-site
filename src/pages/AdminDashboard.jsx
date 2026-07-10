import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, Star, ExternalLink, LogOut } from 'lucide-react';
import AdminBlog from './AdminBlog';
import AdminMetaProdutores from './AdminMetaProdutores';
import AdminCases from './AdminCases';

const TABS = [
  { id: 'blog', label: 'Blog', icon: FileText },
  { id: 'produtores', label: 'Meta Produtores', icon: Users },
  { id: 'cases', label: 'Cases', icon: Star },
];

export default function AdminDashboard() {
  const [tab, setTab] = useState('blog');

  function handleLogout() {
    sessionStorage.removeItem('admin_auth');
    window.location.href = '/admin';
  }

  return (
    <div className="min-h-screen bg-brand-ice">
      {/* Top nav */}
      <div className="bg-white border-b border-navy/8 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1">
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  tab === t.id
                    ? 'bg-brand-blue/10 text-brand-blue'
                    : 'text-navy/50 hover:text-navy hover:bg-navy/6'
                }`}
              >
                <t.icon className="w-4 h-4" />
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-navy/50 hover:bg-navy/6 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Ver site
            </a>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-navy/50 hover:bg-red-50 hover:text-red-500 transition-all"
            >
              <LogOut className="w-3.5 h-3.5" /> Sair
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {tab === 'blog' && <AdminBlog embedded />}
      {tab === 'produtores' && <AdminMetaProdutores />}
      {tab === 'cases' && <AdminCases />}
    </div>
  );
}