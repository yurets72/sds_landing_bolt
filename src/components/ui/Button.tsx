import type { ReactNode } from 'react';
import { ArrowUpRight } from './ArrowUpRight';

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  icon?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon = true,
}: ButtonProps) {
  const base =
    'btn inline-flex items-center justify-center gap-3 rounded-xl px-3 py-2 text-base font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]';
  const styles =
    variant === 'primary'
      ? 'bg-accent text-bg hover:bg-accent-soft hover:-translate-y-0.5 active:translate-y-px active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none'
      : 'border border-line bg-panel text-text hover:border-accent hover:text-accent';
  const isAnchor = href !== '' && !disabled;

  if (isAnchor) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`} onClick={onClick}>
        {children}
        {icon && <ArrowUpRight className="w-4 h-4" />}
      </a>
    );
  }
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${styles} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <ArrowUpRight className="w-4 h-4" />}
    </button>
  );
}