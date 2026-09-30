import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/cn';

interface CircleArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
}

export const CircleArrowButton: React.FC<CircleArrowButtonProps> = ({
  size = 'md',
  className,
  ...props
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 26,
  };

  return (
    <button
      className={cn(
        'rounded-full border-2 border-ink bg-accent text-accent-ink flex items-center justify-center shadow-[2px_2px_0px_0px_var(--ink)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer shrink-0',
        sizes[size],
        className
      )}
      {...props}
    >
      <ArrowUpRight size={iconSizes[size]} strokeWidth={3} />
    </button>
  );
};
