import React from 'react';
import { cn } from '../../lib/cn';

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'ink' | 'outline' | 'success';
}

export const Pill: React.FC<PillProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-paper-2 text-ink border-2 border-ink shadow-[2px_2px_0px_0px_var(--ink)]',
    accent: 'bg-accent text-accent-ink border-2 border-ink shadow-[2px_2px_0px_0px_var(--ink)]',
    ink: 'bg-ink text-paper border-2 border-ink shadow-[2px_2px_0px_0px_var(--accent)]',
    outline: 'bg-transparent text-ink border-2 border-ink',
    success: 'bg-[#10B981] text-white border-2 border-ink shadow-[2px_2px_0px_0px_var(--ink)]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider select-none rounded-none',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
