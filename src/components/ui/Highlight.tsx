import React from 'react';
import { cn } from '../../lib/cn';

interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'ink' | 'outline';
}

export const Highlight: React.FC<HighlightProps> = ({
  className,
  variant = 'accent',
  children,
  ...props
}) => {
  const variants = {
    accent: 'bg-accent text-accent-ink px-2 py-0.5 border-2 border-ink shadow-[2px_2px_0px_0px_var(--ink)] font-black inline-block -rotate-1',
    ink: 'bg-ink text-paper px-2 py-0.5 border-2 border-ink font-bold inline-block',
    outline: 'border-2 border-ink bg-transparent px-2 py-0.5 inline-block font-bold',
  };

  return (
    <span className={cn(variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
