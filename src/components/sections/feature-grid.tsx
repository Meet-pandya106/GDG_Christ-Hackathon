import React from 'react';
import {
  Sliders,
  Share2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Target,
  FileCheck,
} from 'lucide-react';
import { Section, Container } from '../layout/Section';
import { Heading } from '../ui/Heading';
import { Pill } from '../ui/Pill';

interface FeatureGridProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

const PILLARS = [
  {
    num: '01',
    title: 'AUDIENCE VECTOR TUNING',
    icon: Target,
    highlight: 'Deterministic Vocabulary & Risk Calibration',
    desc: 'Never receive a bland middle-ground summary. Calibrate specifically for Technical Leads (hard architecture proofs), C-Suite Executives (quantifiable ROI), or Indie Hackers (tactical speed).',
    tags: ['VOCABULARY MATRIX', 'PROOF ANCHORS', 'STAKEHOLDER FIT'],
  },
  {
    num: '02',
    title: 'CHANNEL-SPECIFIC ARCHITECTURE',
    icon: Share2,
    highlight: 'Hard Pacing & Constraint Enforcement',
    desc: 'Each channel demands fundamentally different narrative pacing. NEOFORGE synchronizes viral X thread sequences with tweet hooks, LinkedIn executive essays, and formal 1-pagers simultaneously.',
    tags: ['THREAD SEQUENCING', 'HOOK PACING', 'READABILITY GRADES'],
  },
  {
    num: '03',
    title: 'RAW CONTEXT INGESTION',
    icon: Cpu,
    highlight: 'Zero Conversational Gymnastics',
    desc: 'Ingest raw brainstorm notes, chaotic PRD bullets, or architectural decisions directly. No need to spend 20 minutes crafting prompts or coaching a bot to sound human.',
    tags: ['SCHEMA-FIRST', 'NO PROMPT FATIGUE', 'HIGH-DENSITY'],
  },
  {
    num: '04',
    title: 'VOICE INTENSITY SLIDERS',
    icon: Sliders,
    highlight: 'From Boardroom Precision to Neo-Brutalist',
    desc: 'Deterministic temperature and tone sliders allow you to dial rhetoric from conservative enterprise governance to high-energy contrarian public statements with precision.',
    tags: ['CONTRARIAN VECTORS', 'BRAND GOVERNANCE', 'NO AI CLICHES'],
  },
];

export const FeatureGridSection: React.FC<FeatureGridProps> = ({
  badge = 'CORE PILLARS',
  title = 'BEYOND GENERIC CHAT WRAPPERS',
  subtitle = 'Architected specifically to kill conversational prompt fatigue and generic AI slop',
}) => {
  return (
    <Section id="features" variant="paper-2" className="py-20">
      <Container>
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Pill variant="accent">
              <Zap size={14} className="stroke-[3]" />
              {badge}
            </Pill>
            <Pill variant="ink">ARCHITECTURAL SPECIFICATION</Pill>
          </div>
          <Heading as="h2" size="xl" className="mb-4">
            {title}
          </Heading>
          <p className="font-mono text-sm sm:text-base text-muted font-bold uppercase tracking-wider">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-paper border-4 border-ink p-8 shadow-[8px_8px_0px_0px_var(--ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_var(--ink)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b-2 border-ink">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent text-accent-ink border-2 border-ink flex items-center justify-center font-display font-black text-xl shadow-[2px_2px_0px_0px_var(--ink)]">
                        <Icon size={24} strokeWidth={2.5} />
                      </div>
                      <span className="font-mono text-xs font-black uppercase text-muted tracking-widest">
                        PILLAR // {pillar.num}
                      </span>
                    </div>
                    <span className="font-display font-black text-3xl text-ink/20">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl text-ink uppercase tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <div className="inline-block bg-accent/20 border border-ink px-2.5 py-0.5 font-mono text-xs font-bold text-ink mb-4">
                    {pillar.highlight}
                  </div>
                  <p className="font-sans text-sm sm:text-base text-ink leading-relaxed font-medium mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-ink flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-paper-2 border border-ink font-mono text-[10px] font-bold text-ink uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
