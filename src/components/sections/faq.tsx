import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Section, Container } from '../layout/Section';
import { Heading } from '../ui/Heading';
import { Pill } from '../ui/Pill';

interface FaqProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

const FAQS = [
  {
    q: 'HOW DOES NEOFORGE ELIMINATE PROMPT FATIGUE?',
    a: 'Traditional chat interfaces present an empty text input that places the entire burden of parameter specification, tone calibration, and platform formatting onto the user. NEOFORGE provides deterministic tactile levers (Audience Profile, Tone Vector, Platform Constraints, and Intensity Sliders). You supply the raw domain context once; the engine handles all multi-channel structuring deterministically.',
  },
  {
    q: 'WHICH AI ENGINE POWERS THE FORGE?',
    a: 'NEOFORGE integrates directly with Google AI Studio using Gemini 2.0 Flash for sub-second generation and structured JSON compliance. It also includes an offline deterministic local synthesis engine that produces contextual, audience-tuned content if no API key is provided, ensuring zero downtime.',
  },
  {
    q: 'CAN I USE MY OWN GOOGLE AI STUDIO GEMINI API KEY?',
    a: 'Yes. While the system operates out-of-the-box via the server environment or built-in local synthesis, you can expand the optional API key field in the Studio or the Dev Panel (press backtick `) to inject your personal Gemini key directly from the browser.',
  },
  {
    q: 'WHAT PLATFORMS ARE CURRENTLY SUPPORTED FOR EXPORT?',
    a: 'Every execution pass synthesizes three synchronized assets simultaneously: (1) Viral X/Twitter Thread Sequence with high-tension tweet pacing, (2) LinkedIn Thought Leadership Executive Essay with whitespace formatting and tactical takeaways, and (3) Executive 1-Pager Briefing Memorandum structured with problem, solution, ROI, and next steps.',
  },
  {
    q: 'HOW IS THE 98/100 QUALITY TELEMETRY CALCULATED?',
    a: 'Output is audited across five quantifiable vectors: Hook Velocity (opening scroll-stop tension), Audience Calibration (domain vocabulary & proof anchors), Platform Fit (channel pacing constraints), Content Density (signal-to-noise ratio free from corporate filler), and Structural Clarity (numbering, logical flow, and takeaways).',
  },
];

export const FaqSection: React.FC<FaqProps> = ({
  badge = 'OPERATOR BRIEFING',
  title = 'FREQUENTLY ASKED QUESTIONS',
  subtitle = 'Architecture, Gemini integration, and output calibration',
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <Section id="faq" variant="paper" className="py-20">
      <Container>
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Pill variant="accent">
              <HelpCircle size={14} className="stroke-[3]" />
              {badge}
            </Pill>
            <Pill variant="ink">KNOWLEDGE MATRIX</Pill>
          </div>
          <Heading as="h2" size="xl" className="mb-4">
            {title}
          </Heading>
          <p className="font-mono text-sm sm:text-base text-muted font-bold uppercase tracking-wider">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={faq.q}
                className="bg-paper-2 border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-mono text-sm sm:text-base font-black text-ink uppercase tracking-tight cursor-pointer hover:bg-paper transition-colors select-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-accent bg-ink px-1.5 py-0.5 text-xs font-bold">
                      0{i + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <span className="w-8 h-8 rounded-none border-2 border-ink bg-paper flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <Minus size={16} strokeWidth={3} />
                    ) : (
                      <Plus size={16} strokeWidth={3} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 border-t-2 border-ink font-sans text-sm sm:text-base text-ink leading-relaxed font-medium bg-paper">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
