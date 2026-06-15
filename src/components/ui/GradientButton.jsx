import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GradientButton({
  children,
  href,
  to,
  onClick,
  className = '',
  size = 'md',
  icon = true,
  type = 'button',
  external = false,
}) {
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-sm',
  };

  const cls = cn(
    'inline-flex items-center gap-2 font-semibold text-white',
    'bg-gradient-to-r from-brand-blue to-brand-purple',
    'rounded-xl transition-all duration-300',
    'hover:shadow-lg hover:shadow-brand-blue/25 hover:-translate-y-0.5',
    'focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2',
    'min-h-[44px]',
    sizes[size],
    className
  );

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-3.5 h-3.5" />}
    </>
  );

  if (to) {
    return <Link to={to} className={cls}>{content}</Link>;
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {content}
    </button>
  );
}