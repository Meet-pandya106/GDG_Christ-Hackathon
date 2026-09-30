import React from 'react';
import { cn } from '../../lib/cn';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'colossal';
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size = 'lg',
  className,
  children,
  ...props
}) => {
  const sizes = {
    sm: 'text-lg sm:text-xl font-black uppercase tracking-tight',
    md: 'text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight',
    lg: 'text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none',
    xl: 'text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none',
    colossal: 'text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9]',
  };

  return (
    <Component
      className={cn('font-display text-ink', sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
