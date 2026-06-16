import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function GlassCard({
  children,
  className = '',
  dark = false,
  hover = true,
  onClick,
  delay = 0,
  animate = true,
}) {
  const base = dark
    ? 'bg-white/5 backdrop-blur-xl border border-white/10'
    : 'bg-white/60 backdrop-blur-xl border border-navy/10 shadow-sm shadow-navy/4';

  const hoverClass = hover && !dark
    ? 'hover:shadow-lg hover:shadow-navy/8 hover:border-brand-blue/20 hover:-translate-y-0.5 cursor-pointer'
    : hover && dark
    ? 'hover:bg-white/8 hover:border-white/20 cursor-pointer'
    : '';

  if (!animate) {
    return (
      <div
        className={cn(base, hoverClass, 'rounded-2xl transition-all duration-300', className)}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(base, hoverClass, 'rounded-2xl transition-all duration-300', className)}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}