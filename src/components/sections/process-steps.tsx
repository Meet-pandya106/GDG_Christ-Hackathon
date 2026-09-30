import React from 'react';
import { ArrowRight, Cpu, Sliders, Zap, CheckCircle2 } from 'lucide-react';
import { Section, Container } from '../layout/Section';
import { Heading } from '../ui/Heading';
import { Pill } from '../ui/Pill';

interface ProcessStepsProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

const STEPS = [
  {
    num: '01',
    title: 'INGEST RAW THESIS',
    subtitle: 'Zero Prompt Crafting',
    desc: 'Paste messy engineering notes, bullet brainstorms, or changelog drafts. No prompt gymnastics or instructions required.',
    icon: Cpu,
  },
  {
    num: '02',
    title: 'CALIBRATE VECTORS',
    subtitle: 'Audience & Tone Sliders',
    desc: 'Select your recipient profile (C-Suite vs Engineers) and choose rhetorical intensity from Boardroom Precision to Neo-Brutalist.',
    icon: Sliders,
  },
  {
    num: '03',
    title: 'FORGE MULTI-CHANNEL',
    subtitle: 'Dual Synthesis Engine',
    desc: 'Gemini 2.0 Flash synthesizes formatted X thread sequences, LinkedIn executive essays, and formal 1-pagers in parallel.',
    icon: Zap,
  },
  {
    num: '04',
    title: 'ONE-CLICK DISPATCH',
    subtitle: 'Production Clipboard Delivery',
    desc: 'Inspect quality telemetry (98/100), copy individual channels or full markdown bundles directly to your distribution pipes.',
    icon: CheckCircle2,
  },
];

export const ProcessStepsSection: React.FC<ProcessStepsProps> = ({
  badge = 'THE PIPELINE',
  title = 'FROM MESSY BRAINSTORM TO BOARDROOM VELOCITY',
  subtitle = 'Deterministic 4-phase transformation engine',
}) => {
  return (
    <Section id="process" variant="paper" className="py-20">
      <Container>
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Pill variant="accent">
              <Zap size={14} className="stroke-[3]" />
              {badge}
            </Pill>
            <Pill variant="ink">DETERMINISTIC LIFECYCLE</Pill>
          </div>
          <Heading as="h2" size="xl" className="mb-4">
            {title}
          </Heading>
          <p className="font-mono text-sm sm:text-base text-muted font-bold uppercase tracking-wider">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-paper-2 border-4 border-ink p-6 shadow-[6px_6px_0px_0px_var(--ink)] flex flex-col justify-between relative group hover:translate-y-[-4px] transition-transform"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-ink">
                    <span className="font-display font-black text-4xl text-ink">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 bg-accent text-accent-ink border-2 border-ink flex items-center justify-center font-black">
                      <Icon size={20} strokeWidth={2.5} />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-xl text-ink uppercase tracking-tight mb-1">
                    {step.title}
                  </h3>
                  <div className="font-mono text-xs text-accent-ink bg-accent inline-block px-1.5 py-0.5 border border-ink font-bold mb-3">
                    {step.subtitle}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-ink leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t-2 border-ink flex items-center justify-between font-mono text-[10px] text-muted font-bold">
                  <span>STEP {idx + 1} OF 4</span>
                  {idx < 3 && <span className="text-ink">NEXT ➔</span>}
                  {idx === 3 && <span className="text-[#10B981]">READY ✓</span>}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
