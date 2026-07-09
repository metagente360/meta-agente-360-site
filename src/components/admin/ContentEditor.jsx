import { useState } from 'react';
import { Code, Monitor } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function ContentEditor({ content, onChange }) {
  const [mode, setMode] = useState('edit');

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
                ? 'bg-white text-navy shadow-sm'
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
                ? 'bg-white text-navy shadow-sm'
                : 'text-navy/50 hover:text-navy'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            Preview
          </button>
        </div>
      </div>

      {/* Edit mode */}
      {mode === 'edit' && (
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
      )}

      {/* Preview mode */}
      {mode === 'preview' && (
        <div className="min-h-[400px] px-6 py-5 rounded-xl border border-navy/12 bg-brand-ice overflow-auto">
          {content && content.trim() ? (
            <MarkdownPreview content={content} />
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

function MarkdownPreview({ content }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => <h1 className="font-heading text-2xl font-bold text-navy mt-6 mb-3 leading-tight">{children}</h1>,
        h2: ({ children }) => <h2 className="font-heading text-xl font-semibold text-navy mt-6 mb-3 leading-snug border-b border-navy/8 pb-2">{children}</h2>,
        h3: ({ children }) => <h3 className="font-heading text-base font-semibold text-navy mt-4 mb-2">{children}</h3>,
        p: ({ children }) => <p className="text-navy/80 text-sm leading-relaxed mb-3">{children}</p>,
        strong: ({ children }) => <strong className="font-semibold text-navy">{children}</strong>,
        em: ({ children }) => <em className="text-navy/70 italic">{children}</em>,
        ul: ({ children }) => <ul className="list-disc pl-5 mb-3 space-y-1">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-5 mb-3 space-y-1">{children}</ol>,
        li: ({ children }) => <li className="text-navy/80 text-sm leading-relaxed">{children}</li>,
        a: ({ href, children }) => <a href={href} className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
        hr: () => <hr className="border-navy/12 my-6" />,
        blockquote: ({ children }) => <blockquote className="border-l-4 border-brand-blue pl-4 my-4 text-navy/60 italic text-sm">{children}</blockquote>,
        code: ({ children, inline }) => inline
          ? <code className="text-brand-purple bg-brand-lavender px-1.5 py-0.5 rounded text-xs font-mono">{children}</code>
          : <pre className="bg-navy/6 rounded-xl p-4 overflow-auto mb-3"><code className="text-navy text-xs font-mono">{children}</code></pre>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}