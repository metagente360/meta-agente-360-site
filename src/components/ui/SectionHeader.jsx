import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  body,
  align = 'left',
  dark = false,
  className = '',
}) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right',
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn('max-w-2xl', alignClass, className)}
    >
      {eyebrow && (
        <p className="eyebrow mb-3 text-brand-blue">{eyebrow}</p>
      )}
      {headline && (
        <h2 className={cn(
          'font-heading text-[1.75rem] sm:text-[2rem] font-semibold leading-[1.2] tracking-tight mb-3',
          dark ? 'text-white' : 'text-navy'
        )}>
          {headline}
        </h2>
      )}
      {subheadline && (
        <p className={cn(
          'text-base font-medium leading-relaxed mb-3',
          dark ? 'text-white/70' : 'text-navy/70'
        )}>
          {subheadline}
        </p>
      )}
      {body && (
        <p className={cn(
          'text-[1.0625rem] leading-[1.7]',
          dark ? 'text-white/60' : 'text-navy/65'
        )}>
          {body}
        </p>
      )}
    </motion.div>
  );
}