import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GradientButton from './GradientButton';

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
    <section className="py-20" style={{ background: '#050A1A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[20px] md:rounded-3xl px-6 py-10 md:py-16 md:px-20 text-center overflow-hidden mx-0 md:mx-12"
          style={{
            background: 'linear-gradient(135deg, rgba(27,63,191,0.18) 0%, rgba(107,79,216,0.22) 50%, rgba(27,63,191,0.14) 100%)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(107,79,216,0.25)',
          }}
        >
          {/* Decorative orb */}
          <div
            className="absolute pointer-events-none z-0"
            style={{
              top: -80,
              right: -80,
              width: 320,
              height: 320,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(107,79,216,0.2) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {eyebrow && (
              <p
                className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4"
                style={{ color: 'rgba(165,184,255,0.8)' }}
              >
                {eyebrow}
              </p>
            )}
            <h2
              className="font-heading text-[1.75rem] sm:text-[2rem] font-semibold leading-[1.2] tracking-tight mb-4"
              style={{ color: '#F0F4FF' }}
            >
              {headline}
            </h2>
            {body && (
              <p
                className="text-[1.0625rem] leading-[1.7] mb-8"
                style={{ color: 'rgba(240,244,255,0.6)' }}
              >
                {body}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <GradientButton to={primaryTo} size="lg">
                {primaryLabel}
              </GradientButton>
              {secondaryLabel && secondaryTo && (
                <Link
                  to={secondaryTo}
                  className="inline-flex items-center justify-center gap-2 text-base font-semibold rounded-full px-8 py-4 transition-all duration-200 min-h-[44px]"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'rgba(255,255,255,0.85)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}