import React from 'react';
import { cn } from '../../lib/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'block' | 'text' | 'card';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'block',
  ...props
}) => {
  return (
    <div
      className={cn(
        'border-2 border-ink bg-paper-2 relative overflow-hidden animate-pulse',
        variant === 'text' && 'h-4 w-full my-1.5',
        variant === 'card' && 'h-48 w-full p-4',
        variant === 'block' && 'h-12 w-full',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
    </div>
  );
};
