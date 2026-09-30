import React from 'react';
import { ArrowDownRight, Zap, Sparkles } from 'lucide-react';
import { Section, Container } from '../layout/Section';
import { Heading } from '../ui/Heading';
import { Pill } from '../ui/Pill';
import { Button } from '../ui/Button';

interface CtaBandProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export const CtaBandSection: React.FC<CtaBandProps> = ({
  badge = 'ZERO SETUP REQUIRED',
  title = 'READY TO FORGE MULTI-CHANNEL VELOCITY?',
  subtitle = 'Input your raw concept now. Works instantly with Gemini 2.0 Flash or deterministic offline synthesis.',
}) => {
  return (
    <Section variant="accent" className="py-24 text-accent-ink border-b-8 border-ink relative overflow-hidden">
      {/* Background brutalist hatch pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#0A0A0A_2px,transparent_2px)] [background-size:16px_16px]" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <Pill variant="ink">
              <Zap size={14} className="stroke-[3] text-accent fill-accent" />
              {badge}
            </Pill>
            <Pill variant="default">IMMEDIATE BROWSER EXECUTION</Pill>
          </div>

          <Heading as="h2" size="colossal" className="text-accent-ink leading-none">
            {title}
          </Heading>

          <p className="text-lg sm:text-2xl font-mono text-accent-ink/90 font-bold max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="#studio">
              <Button
                variant="dark"
                size="xl"
                icon={<ArrowDownRight size={22} strokeWidth={3} className="text-accent" />}
              >
                OPEN CONTENT STUDIO ↵
              </Button>
            </a>
          </div>

          <div className="pt-4 font-mono text-xs text-accent-ink/80 font-bold">
            NO CREDIT CARD • NO CHATBOT WRAPPER FLUFF • 100% SIGNAL DENSITY
          </div>
        </div>
      </Container>
    </Section>
  );
};
