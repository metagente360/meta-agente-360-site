import { motion } from 'framer-motion';
import { Users, Zap, Globe, BookOpen, MessageCircle, Brain, Network, Star } from 'lucide-react';

const nodes = [
  { id: 'center', icon: Brain, label: 'Meta Agente', x: 50, y: 50, size: 'lg', color: 'from-brand-blue to-brand-purple', delay: 0 },
  { id: 'saude', icon: Star, label: 'Saúde', x: 20, y: 22, size: 'md', color: 'from-emerald-400 to-emerald-600', delay: 0.15 },
  { id: 'edu', icon: BookOpen, label: 'Educação', x: 78, y: 18, size: 'md', color: 'from-violet-400 to-violet-600', delay: 0.2 },
  { id: 'global', icon: Globe, label: 'Mercado', x: 82, y: 68, size: 'md', color: 'from-cyan-400 to-cyan-600', delay: 0.25 },
  { id: 'comm', icon: MessageCircle, label: 'Comunidade', x: 15, y: 72, size: 'md', color: 'from-pink-400 to-rose-500', delay: 0.3 },
  { id: 'net', icon: Network, label: 'Agentes', x: 50, y: 14, size: 'sm', color: 'from-orange-400 to-amber-500', delay: 0.35 },
  { id: 'users', icon: Users, label: 'Produtores', x: 85, y: 42, size: 'sm', color: 'from-brand-blue to-indigo-500', delay: 0.4 },
  { id: 'zap', icon: Zap, label: 'Automação', x: 12, y: 46, size: 'sm', color: 'from-yellow-400 to-orange-400', delay: 0.45 },
];

const connections = [
  ['center', 'saude'],
  ['center', 'edu'],
  ['center', 'global'],
  ['center', 'comm'],
  ['center', 'net'],
  ['center', 'users'],
  ['center', 'zap'],
  ['saude', 'comm'],
  ['edu', 'net'],
  ['global', 'users'],
];

function getNode(id) {
  return nodes.find((n) => n.id === id);
}

const sizeMap = {
  lg: { outer: 72, inner: 40, icon: 20, label: true },
  md: { outer: 56, inner: 32, icon: 16, label: true },
  sm: { outer: 44, inner: 26, icon: 14, label: false },
};

export default function EcossistemaIllustration() {
  return (
    <div className="relative w-full h-full select-none" style={{ minHeight: 420 }}>
      {/* Glow background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-brand-purple/10 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-emerald-400/8 rounded-full blur-2xl" />
      </div>

      {/* SVG connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map(([a, b], i) => {
          const nodeA = getNode(a);
          const nodeB = getNode(b);
          return (
            <motion.line
              key={i}
              x1={`${nodeA.x}%`} y1={`${nodeA.y}%`}
              x2={`${nodeB.x}%`} y2={`${nodeB.y}%`}
              stroke="url(#lineGrad)"
              strokeWidth="0.4"
              strokeOpacity="0.35"
              strokeDasharray="1.5 1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 + i * 0.06, ease: 'easeOut' }}
            />
          );
        })}
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#216BFF" />
            <stop offset="100%" stopColor="#8A3FFC" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      {nodes.map((node) => {
        const s = sizeMap[node.size];
        const Icon = node.icon;
        const isCenter = node.id === 'center';

        return (
          <motion.div
            key={node.id}
            className="absolute"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: isCenter ? 10 : 5,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: node.delay, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={isCenter
                ? { scale: [1, 1.04, 1], boxShadow: ['0 0 24px rgba(33,107,255,0.3)', '0 0 40px rgba(33,107,255,0.5)', '0 0 24px rgba(33,107,255,0.3)'] }
                : { y: [0, -4, 0] }
              }
              transition={{ duration: isCenter ? 3 : 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: node.delay + 0.5 }}
              className="relative flex flex-col items-center"
            >
              {/* Outer ring */}
              <div
                className="relative rounded-2xl flex items-center justify-center"
                style={{
                  width: s.outer,
                  height: s.outer,
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 4px 24px rgba(5,10,36,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
                }}
              >
                {/* Inner gradient circle */}
                <div
                  className={`bg-gradient-to-br ${node.color} rounded-xl flex items-center justify-center`}
                  style={{ width: s.inner, height: s.inner }}
                >
                  <Icon strokeWidth={1.8} color="white" style={{ width: s.icon, height: s.icon }} />
                </div>
              </div>

              {/* Label */}
              {s.label && (
                <div
                  className="mt-1.5 px-2 py-0.5 rounded-lg text-[10px] font-semibold text-navy/80 whitespace-nowrap"
                  style={{
                    background: 'rgba(255,255,255,0.65)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.5)',
                    fontSize: isCenter ? 11 : 9,
                  }}
                >
                  {node.label}
                </div>
              )}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute rounded-full bg-brand-blue/25"
          style={{
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            left: `${15 + i * 13}%`,
            top: `${20 + (i % 4) * 18}%`,
          }}
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        />
      ))}
    </div>
  );
}