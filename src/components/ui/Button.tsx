import React from 'react';
import { cn } from '../../lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-mono font-black uppercase tracking-wider transition-all duration-150 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-accent text-accent-ink border-2 sm:border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--ink)] active:translate-x-1 active:translate-y-1 active:shadow-none',
      secondary:
        'bg-paper-2 text-ink border-2 sm:border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--ink)] active:translate-x-1 active:translate-y-1 active:shadow-none',
      dark:
        'bg-ink text-paper border-2 sm:border-4 border-ink shadow-[4px_4px_0px_0px_var(--accent)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--accent)] active:translate-x-1 active:translate-y-1 active:shadow-none',
      ghost:
        'bg-transparent text-ink border-2 border-transparent hover:border-ink hover:bg-paper-2 active:bg-paper',
      danger:
        'bg-[#FF4D4D] text-white border-2 sm:border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--ink)] active:translate-x-1 active:translate-y-1 active:shadow-none',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5',
      xl: 'text-lg px-8 py-4.5 gap-3 tracking-widest',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>FORGING...</span>
          </span>
        ) : (
          <>
            {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
