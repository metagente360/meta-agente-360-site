import { motion } from 'framer-motion';
import GradientButton from './GradientButton';
import SecondaryButton from './SecondaryButton';

export default function CTASection({
  eyebrow,
  headline,
  body,
  primaryLabel = 'Falar com Especialista',
  primaryTo = '/contato',
  secondaryLabel,
  secondaryTo,
  dark = true,
}) {
  return (
    <section className={`py-20 ${dark ? 'bg-navy' : 'bg-brand-ice'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass-card-dark rounded-3xl p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Background halo */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-purple/8 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            {eyebrow && (
              <p className="eyebrow text-brand-blue mb-4">{eyebrow}</p>
            )}
            <h2 className="font-heading text-[1.75rem] sm:text-[2rem] font-semibold text-white leading-[1.2] tracking-tight mb-4">
              {headline}
            </h2>
            {body && (
              <p className="text-white/60 text-[1.0625rem] leading-[1.7] mb-8">
                {body}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <GradientButton to={primaryTo} size="lg">
                {primaryLabel}
              </GradientButton>
              {secondaryLabel && (
                <SecondaryButton to={secondaryTo} size="lg" dark>
                  {secondaryLabel}
                </SecondaryButton>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}