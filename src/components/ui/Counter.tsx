import React, { useEffect, useState } from 'react';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 1000,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = Math.floor(from + (to - from) * ease);
      setCurrent(val);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCurrent(to);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [from, to, duration]);

  return (
    <span className={className}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
};
