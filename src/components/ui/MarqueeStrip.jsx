import { cn } from '@/lib/utils';

const defaultItems = [
  'Atendimento', 'Agendamento', 'Reuniões', 'Transcrição', 'Relatórios',
  'Financeiro', 'RH', 'Treinamento', 'Saúde', 'Educação', 'Eventos',
  'Restaurantes', 'Consultoria', 'Comunidades', 'Conteúdo', 'Pesquisa',
  'Vendas consultivas', 'Suporte interno', 'Onboarding'
];

const defaultItems2 = [
  'Diagnóstico', 'Estruturação', 'Criação', 'Publicação', 'Gestão',
  'Dados', 'Evolução', 'Canais', 'WhatsApp', 'WebApp', 'Dashboard',
  'Métricas', 'Contexto', 'Memória', 'Missão', 'Arquitetura', 'Escala'
];

function TagPill({ label, dark = false }) {
  return (
    <div className={cn(
      'flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium flex-shrink-0',
      dark
        ? 'bg-white/5 border-white/10 text-white/70'
        : 'bg-white/70 border-brand-grey text-navy/70 backdrop-blur-sm'
    )}>
      <div className={cn('w-1 h-1 rounded-full', dark ? 'bg-brand-blue' : 'bg-brand-purple')} />
      {label}
    </div>
  );
}

export default function MarqueeStrip({ items = defaultItems, items2 = defaultItems2, dark = false, className = '' }) {
  const doubled = [...items, ...items, ...items];
  const doubled2 = [...items2, ...items2, ...items2];

  return (
    <div className={cn('overflow-hidden space-y-3', className)}>
      <div className="flex gap-3 marquee-track">
        {doubled.map((item, i) => (
          <TagPill key={i} label={item} dark={dark} />
        ))}
      </div>
      <div className="flex gap-3 marquee-track-reverse">
        {doubled2.map((item, i) => (
          <TagPill key={i} label={item} dark={dark} />
        ))}
      </div>
    </div>
  );
}