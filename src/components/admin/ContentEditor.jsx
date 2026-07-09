import { useState } from 'react';
import { Code, Monitor } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function ContentEditor({ content, onChange }) {
  const [mode, setMode] = useState('edit'); // 'edit' | 'preview'

  return (
    <div className="bg-white rounded-2xl border border-navy/8 p-6">
      {/* Header with toggle */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading text-sm font-semibold text-navy">Conteúdo do Artigo (Markdown)</h2>
        <div className="flex items-center gap-1 bg-navy/6 rounded-xl p-1">
          <button
            type="button"
            onClick={() => setMode('edit')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              mode === 'edit'
                ? 'bg-white text-navy shadow-sm shadow-navy/8'
                : 'text-navy/50 hover:text-navy'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            Editar
          </button>
          <button
            type="button"
            onClick={() => setMode('preview')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              mode === 'preview'
                ? 'bg-white text-navy shadow-sm shadow-navy/8'
                : 'text-navy/50 hover:text-navy'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            Preview
          </button>
        </div>
      </div>

      {mode === 'edit' ? (
        <>
          <textarea
            rows={24}
            value={content}
            onChange={e => onChange(e.target.value)}
            placeholder={`## Título da seção\n\nEscreva o conteúdo em Markdown...\n\n**Negrito**, *itálico*, listas, links e mais.\n\n- Item 1\n- Item 2`}
            className="w-full px-4 py-3 rounded-xl border border-navy/12 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 resize-none font-mono leading-relaxed"
          />
          <p className="text-xs text-navy/40 mt-2">Suporte a Markdown: **negrito**, *itálico*, ## títulos, - listas, [links](url)</p>
        </>
      ) : (
        <div className="min-h-[400px] px-4 py-3 rounded-xl border border-navy/12 bg-brand-ice overflow-auto">
          {content ? (
            <div className="prose prose-sm max-w-none text-navy
              prose-headings:font-heading prose-headings:text-navy prose-headings:font-semibold
              prose-h2:text-xl prose-h2:mt-6 prose-h2:mb-3
              prose-h3:text-base prose-h3:mt-4 prose-h3:mb-2
              prose-p:text-navy/80 prose-p:leading-relaxed prose-p:mb-3
              prose-strong:text-navy prose-strong:font-semibold
              prose-em:text-navy/70
              prose-ul:pl-5 prose-li:text-navy/80 prose-li:mb-1
              prose-ol:pl-5
              prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
              prose-hr:border-navy/12 prose-hr:my-6
              prose-blockquote:border-l-brand-blue prose-blockquote:text-navy/60
              prose-code:text-brand-purple prose-code:bg-brand-lavender prose-code:px-1 prose-code:rounded
            ">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          ) : (
            <div className="flex items-center justify-center h-48 text-navy/30 text-sm">
              Nenhum conteúdo para visualizar. Escreva no modo Editar.
            </div>
          )}
        </div>
      )}
    </div>
  );
}