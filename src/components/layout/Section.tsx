import React from 'react';
import { cn } from '../../lib/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  variant?: 'paper' | 'paper-2' | 'ink' | 'accent';
  bordered?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  variant = 'paper',
  bordered = true,
  className,
  children,
  ...props
}) => {
  const variants = {
    paper: 'bg-paper text-ink',
    'paper-2': 'bg-paper-2 text-ink',
    ink: 'bg-ink text-paper',
    accent: 'bg-accent text-accent-ink',
  };

  return (
    <section
      id={id}
      className={cn(
        'w-full py-16 sm:py-24 relative overflow-hidden transition-colors',
        variants[variant],
        bordered && 'border-b-4 border-ink',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  );
};
