import React from 'react';

interface MarqueeProps {
  content?: {
    text?: string;
  };
}

export const MarqueeSection: React.FC<MarqueeProps> = ({ content }) => {
  const text =
    content?.text ||
    'NO CONVERSATIONAL PROMPT FATIGUE • DETERMINISTIC AUDIENCE CALIBRATION • INSTANT MARKDOWN EXPORT • VIRAL X THREADS • LINKEDIN ESSAYS • EXECUTIVE 1-PAGERS • QUALITY TELEMETRY 98/100 • DUAL-ENGINE SYNTHESIS •';

  return (
    <div className="w-full bg-accent text-accent-ink border-b-4 border-ink py-3.5 sm:py-4 overflow-hidden select-none">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-[marquee_25s_linear_infinite] shrink-0 font-display font-black text-xl sm:text-2xl md:text-3xl tracking-tight uppercase">
          <span className="mx-4">{text}</span>
          <span className="mx-4">{text}</span>
        </div>
        <div className="flex animate-[marquee_25s_linear_infinite] shrink-0 font-display font-black text-xl sm:text-2xl md:text-3xl tracking-tight uppercase" aria-hidden="true">
          <span className="mx-4">{text}</span>
          <span className="mx-4">{text}</span>
        </div>
      </div>
    </div>
  );
};
