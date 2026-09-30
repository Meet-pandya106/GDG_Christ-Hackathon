import React from 'react';
import { ArrowDownRight, AlertOctagon, CheckCircle2, XCircle } from 'lucide-react';
import { Section, Container } from '../layout/Section';
import { Heading } from '../ui/Heading';
import { Pill } from '../ui/Pill';
import { Button } from '../ui/Button';

interface SplitBandProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export const SplitBandSection: React.FC<SplitBandProps> = ({
  badge = 'THE MANIFESTO',
  title = 'WHY THE WORLD DOES NOT NEED ANOTHER EMPTY CHAT BOX',
  subtitle = 'Chat interfaces force users to guess prompts. NEOFORGE provides deterministic levers.',
}) => {
  return (
    <Section variant="ink" className="py-24 text-paper relative overflow-hidden">
      {/* Decorative neon accent bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-accent" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Provocative Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <Pill variant="accent">
                <AlertOctagon size={14} className="stroke-[3]" />
                {badge}
              </Pill>
              <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
                PHILOSOPHY_01
              </span>
            </div>

            <Heading as="h2" size="xl" className="text-paper leading-none">
              {title}
            </Heading>

            <p className="text-lg sm:text-xl font-sans text-paper/80 leading-relaxed font-normal">
              {subtitle}
            </p>

            <div className="p-6 bg-paper/5 border-2 border-paper/30 space-y-3 font-sans text-sm sm:text-base text-paper/90">
              <p>
                In 2023, chat wrappers were novel. By 2026, they are a primary source of cognitive drain. Knowledge workers spend 30 minutes coaching chatbots with apologetic instructions, receiving tepid, sycophantic corporate prose.
              </p>
              <p className="font-bold text-accent">
                NEOFORGE replaces conversational ambiguity with an industrial control panel: explicit audience targets, platform constraints, and calibrated tone intensity.
              </p>
            </div>

            <div className="pt-2">
              <a href="#studio">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowDownRight size={20} strokeWidth={3} />}
                >
                  EXPERIENCE DETERMINISTIC SYNTHESIS
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Comparative Matrix Card */}
          <div className="lg:col-span-5">
            <div className="bg-paper text-ink border-4 border-paper shadow-[8px_8px_0px_0px_var(--accent)] p-6 sm:p-8">
              <div className="pb-4 mb-4 border-b-2 border-ink flex items-center justify-between">
                <span className="font-mono text-xs font-black uppercase tracking-wider">
                  SYSTEM COMPARISON
                </span>
                <span className="font-mono text-[10px] bg-accent px-2 py-0.5 font-bold">
                  HEAD-TO-HEAD
                </span>
              </div>

              {/* Bad: Generic Chat Wrappers */}
              <div className="mb-6 p-4 bg-[#FFE8E8] border-2 border-[#FF4D4D]">
                <div className="flex items-center gap-2 font-mono text-xs font-black text-[#D32F2F] uppercase mb-2">
                  <XCircle size={16} />
                  <span>GENERIC CHAT WRAPPER</span>
                </div>
                <ul className="font-mono text-xs text-ink/80 space-y-1.5 list-disc list-inside">
                  <li>Blank text input requiring prompt engineering</li>
                  <li>"Sure! In today's digital landscape..." cliches</li>
                  <li>Conversational tone drift across prompts</li>
                  <li>Manual reformatting for Twitter vs LinkedIn</li>
                </ul>
              </div>

              {/* Good: NEOFORGE */}
              <div className="p-4 bg-[#E8FFE8] border-2 border-[#10B981]">
                <div className="flex items-center gap-2 font-mono text-xs font-black text-[#047857] uppercase mb-2">
                  <CheckCircle2 size={16} />
                  <span>NEOFORGE ENGINE</span>
                </div>
                <ul className="font-mono text-xs text-ink space-y-1.5 list-disc list-inside font-semibold">
                  <li>Schema-driven audience and tone vectors</li>
                  <li>Zero preamble fluff, 100% substantive signal</li>
                  <li>Multi-channel synchronized deployment passes</li>
                  <li>Quality telemetry and instant clipboard markdown</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
