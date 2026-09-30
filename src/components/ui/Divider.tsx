import React from 'react';
import { cn } from '../../lib/cn';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  thickness?: 'thin' | 'medium' | 'heavy';
  variant?: 'ink' | 'accent' | 'dashed';
}

export const Divider: React.FC<DividerProps> = ({
  className,
  thickness = 'medium',
  variant = 'ink',
  ...props
}) => {
  const thicknesses = {
    thin: 'border-t-2',
    medium: 'border-t-4',
    heavy: 'border-t-8',
  };

  const variants = {
    ink: 'border-ink',
    accent: 'border-accent',
    dashed: 'border-ink border-dashed',
  };

  return (
    <hr
      className={cn(thicknesses[thickness], variants[variant], 'w-full my-6', className)}
      {...props}
    />
  );
};
