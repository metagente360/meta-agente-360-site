import { motion } from 'framer-motion';
import { Brain, Users, BookOpen, Globe, Zap, MessageCircle } from 'lucide-react';

const satellites = [
  { icon: Users,          label: 'Meta Produtores', sub: 'Especialistas ativos',  color: '#216BFF', angle: -90  },
  { icon: BookOpen,       label: 'Formação',         sub: 'Arquiteto de IA',       color: '#8A3FFC', angle: -30  },
  { icon: Globe,          label: 'Mercado',           sub: 'Soluções escaláveis',   color: '#06b6d4', angle:  30  },
  { icon: MessageCircle,  label: 'Comunidade',        sub: 'Troca e oportunidade',  color: '#10b981', angle:  90  },
  { icon: Zap,            label: 'Automação',         sub: 'Agentes inteligentes',  color: '#f59e0b', angle: 150  },
  { icon: Brain,          label: 'Plataforma',        sub: 'Orquestração central',  color: '#ec4899', angle: 210  },
];

const R = 138; // radius of orbit (SVG units, viewBox 400×400, center 200,200)

function toXY(angleDeg, r) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: 200 + r * Math.cos(rad), y: 200 + r * Math.sin(rad) };
}

export default function EcossistemaIllustration() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="relative w-full max-w-[480px] aspect-square">

        {/* Background glow orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-brand-blue/10 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl" />
        </div>

        {/* SVG layer: orbit ring + connection lines */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="orbitGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#216BFF" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#8A3FFC" stopOpacity="0.10" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#216BFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8A3FFC" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Orbit ring */}
          <circle cx="200" cy="200" r={R} stroke="url(#orbitGrad)" strokeWidth="1" strokeDasharray="4 6" />

          {/* Connection lines from center to each node */}
          {satellites.map((s, i) => {
            const pos = toXY(s.angle, R);
            return (
              <motion.line
                key={i}
                x1="200" y1="200"
                x2={pos.x} y2={pos.y}
                stroke="url(#lineGrad)"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              />
            );
          })}
        </svg>

        {/* Center node */}
        <motion.div
          className="absolute"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center gap-1"
            style={{
              background: 'linear-gradient(135deg, rgba(33,107,255,0.15) 0%, rgba(138,63,252,0.12) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1.5px solid rgba(255,255,255,0.35)',
              boxShadow: '0 8px 32px rgba(33,107,255,0.18), inset 0 1px 0 rgba(255,255,255,0.3)',
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #216BFF, #8A3FFC)' }}
            >
              <Brain className="w-5 h-5 text-white" strokeWidth={1.8} />
            </div>
            <span className="text-[9px] font-bold text-navy/70 tracking-wide">META 360</span>
          </div>
        </motion.div>

        {/* Satellite nodes */}
        {satellites.map((sat, i) => {
          const pos = toXY(sat.angle, R);
          const Icon = sat.icon;
          // Convert SVG coords (0-400) to percentage
          const leftPct = (pos.x / 400) * 100;
          const topPct  = (pos.y / 400) * 100;

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 5,
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="flex flex-col items-center gap-1.5 p-3 rounded-2xl min-w-[88px]"
                style={{
                  background: 'rgba(255,255,255,0.70)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  border: '1px solid rgba(255,255,255,0.55)',
                  boxShadow: '0 4px 20px rgba(5,10,36,0.07), inset 0 1px 0 rgba(255,255,255,0.6)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: `${sat.color}18`, border: `1px solid ${sat.color}30` }}
                >
                  <Icon className="w-4 h-4" style={{ color: sat.color }} strokeWidth={1.8} />
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold text-navy leading-tight">{sat.label}</p>
                  <p className="text-[8.5px] text-navy/45 leading-tight mt-0.5">{sat.sub}</p>
                </div>
              </div>
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}