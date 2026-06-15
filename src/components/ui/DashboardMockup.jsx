// Illustrative dashboard mockup — glassmorphism tech UI
export default function DashboardMockup({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Main panel */}
      <div className="glass-card rounded-2xl overflow-hidden shadow-2xl shadow-navy/10">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-brand-grey/50 bg-white/40">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <span className="text-xs text-navy/40 font-medium ml-2">Meta Agente 360</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-4 bg-brand-grey rounded-full" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple" />
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-12 bg-navy/4 border-r border-brand-grey/40 flex flex-col items-center py-4 gap-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  i === 0 ? 'bg-brand-blue/15' : 'bg-transparent'
                }`}
              >
                <div className={`w-3 h-3 rounded-sm ${i === 0 ? 'bg-brand-blue' : 'bg-navy/20'}`} />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-3">
            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Agentes ativos', value: '12', color: 'text-brand-blue' },
                { label: 'Conversas', value: '1.4k', color: 'text-brand-purple' },
                { label: 'Créditos', value: '89%', color: 'text-green-500' },
              ].map((m, i) => (
                <div key={i} className="bg-white/60 rounded-xl p-2.5 border border-brand-grey/40">
                  <p className="text-[9px] text-navy/40 mb-1">{m.label}</p>
                  <p className={`text-base font-bold font-heading ${m.color}`}>{m.value}</p>
                </div>
              ))}
            </div>

            {/* Agent list */}
            <div className="space-y-1.5">
              {[
                { name: 'Agente Atendimento', status: 'ativo', color: 'bg-green-400' },
                { name: 'Agente Reuniões', status: 'ativo', color: 'bg-green-400' },
                { name: 'Agente Relatórios', status: 'pausado', color: 'bg-yellow-400' },
                { name: 'Agente WhatsApp', status: 'ativo', color: 'bg-green-400' },
              ].map((agent, i) => (
                <div key={i} className="flex items-center justify-between bg-white/50 rounded-lg px-3 py-2 border border-brand-grey/30">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${agent.color}`} />
                    <span className="text-xs text-navy/80 font-medium">{agent.name}</span>
                  </div>
                  <span className="text-[10px] text-navy/40">{agent.status}</span>
                </div>
              ))}
            </div>

            {/* Activity bar */}
            <div className="bg-white/50 rounded-xl p-3 border border-brand-grey/30">
              <p className="text-[9px] text-navy/40 mb-2 font-medium uppercase tracking-wide">Atividade — 7 dias</p>
              <div className="flex items-end gap-1 h-10">
                {[4, 7, 5, 9, 6, 8, 7].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-brand-blue/40 to-brand-purple/40"
                    style={{ height: `${(h / 10) * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -top-4 -right-4 glass-card rounded-xl px-3 py-2 shadow-lg animate-float">
        <p className="text-[10px] text-navy/40">Publicado em</p>
        <p className="text-xs font-semibold text-navy">WhatsApp · WebApp</p>
      </div>

      <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-3 py-2 shadow-lg animate-float-delayed">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <p className="text-xs font-medium text-navy">12 agentes online</p>
        </div>
      </div>
    </div>
  );
}