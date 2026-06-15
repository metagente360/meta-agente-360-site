import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function SecondaryButton({
  children,
  href,
  to,
  onClick,
  className = '',
  size = 'md',
  dark = false,
}) {
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-sm',
  };

  const cls = cn(
    'inline-flex items-center gap-2 font-medium',
    'border rounded-xl transition-all duration-300',
    'min-h-[44px]',
    dark
      ? 'border-white/20 text-white hover:border-white/40 hover:bg-white/5'
      : 'border-brand-grey text-navy hover:border-brand-blue/40 hover:bg-brand-blue/4',
    'focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2',
    sizes[size],
    className
  );

  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
}