import React from 'react';
import {
  ArrowDownRight,
  Sparkles,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle,
  Video,
  Image as ImageIcon,
  Share2,
} from 'lucide-react';
import { Section, Container } from '../layout/Section';
import { Heading } from '../ui/Heading';
import { Pill } from '../ui/Pill';
import { Button } from '../ui/Button';
import { siteConfig } from '../../config/site.config';

interface HeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  content?: {
    description?: string;
    primaryCta?: string;
    primaryHref?: string;
    secondaryCta?: string;
    secondaryHref?: string;
  };
}

export const HeroSection: React.FC<HeroProps> = ({
  badge = 'ALL-IN-ONE AI SOCIAL MEDIA STUDIO',
  title = 'AI SOCIAL MEDIA STUDIO',
  subtitle = 'RAW IDEAS TO COMPLETE ASSET PACKAGES',
  content,
}) => {
  return (
    <Section variant="paper" className="pt-12 sm:pt-20 pb-20 relative">
      {/* Background brutalist decorative elements */}
      <div className="absolute top-8 right-8 hidden xl:block pointer-events-none opacity-20">
        <div className="w-64 h-64 border-4 border-ink grid grid-cols-4 grid-rows-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="border border-ink/40" />
          ))}
        </div>
      </div>

      <Container>
        {/* Top Meta Tag Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Pill variant="accent">
            <span className="w-2 h-2 rounded-full bg-ink inline-block" />
            {badge}
          </Pill>
          <Pill variant="ink">PERSONA-DRIVEN FORGE</Pill>
          <span className="hidden sm:inline font-mono text-xs text-muted font-bold">
            1-CLICK GRAPHIC + REEL STORYBOARD + CAPTIONS
          </span>
        </div>

        {/* Colossal Headline */}
        <div className="max-w-6xl mb-8">
          <Heading as="h1" size="colossal" className="mb-4">
            {title}
          </Heading>
          <div className="inline-block bg-accent text-accent-ink px-4 py-2 border-2 sm:border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)] -rotate-1">
            <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight">
              {subtitle}
            </h2>
          </div>
        </div>

        {/* Subhead narrative & Dual CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <p className="text-lg sm:text-2xl font-sans text-ink leading-relaxed font-medium mb-8 max-w-3xl">
              {content?.description ||
                'Tell us who you are (User Context) and who the AI acts as (AI Persona). With one click, forge live AI-rendered visual banners, a 4-scene video reel script with timestamps, ready-to-post captions with hashtags, and instant broadcast to X/Twitter.'}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href={content?.primaryHref || '#studio'}>
                <Button
                  variant="primary"
                  size="xl"
                  icon={<ArrowDownRight size={22} strokeWidth={3} />}
                >
                  {content?.primaryCta || 'LAUNCH SOCIAL STUDIO'}
                </Button>
              </a>
              <a href={content?.secondaryHref || '#results'}>
                <Button variant="secondary" size="xl">
                  {content?.secondaryCta || 'INSPECT ASSETS'}
                </Button>
              </a>
            </div>
          </div>

          {/* Right Floating Tactical Quick-Card */}
          <div className="lg:col-span-4">
            <div className="bg-paper-2 border-4 border-ink p-5 shadow-[8px_8px_0px_0px_var(--ink)] relative">
              <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-ink">
                <span className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                  <Zap size={14} className="text-accent fill-accent" />
                  1-CLICK ASSET PACKAGE
                </span>
                <span className="font-mono text-[10px] bg-ink text-paper px-2 py-0.5 font-bold">
                  SIMULTANEOUS
                </span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-2.5 bg-paper border-2 border-ink flex items-center justify-between">
                  <span className="text-muted font-bold flex items-center gap-1.5">
                    <ImageIcon size={14} className="text-accent" />
                    1. VISUAL:
                  </span>
                  <span className="font-bold text-ink">AI GRAPHIC BANNER</span>
                </div>
                <div className="p-2.5 bg-paper border-2 border-ink flex items-center justify-between">
                  <span className="text-muted font-bold flex items-center gap-1.5">
                    <Video size={14} className="text-accent" />
                    2. VIDEO:
                  </span>
                  <span className="font-bold text-ink">4-SCENE REEL STORYBOARD</span>
                </div>
                <div className="p-2.5 bg-accent text-accent-ink border-2 border-ink font-bold flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Share2 size={14} />
                    3. CAPTION:
                  </span>
                  <span>HOOK + BODY + HASHTAGS</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t-2 border-ink flex items-center justify-between text-[11px] font-mono">
                <span className="text-muted">READINESS:</span>
                <span className="font-bold text-ink flex items-center gap-1">
                  <CheckCircle size={14} className="text-[#10B981]" />
                  1-CLICK X/TWITTER & COPY
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-paper-2 border-2 sm:border-4 border-ink p-4 sm:p-5 shadow-[4px_4px_0px_0px_var(--ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
            >
              <div className="font-mono text-[10px] sm:text-xs font-black uppercase text-muted tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="font-display font-black text-3xl sm:text-4xl text-ink tracking-tight">
                {stat.value}
              </div>
              <div className="font-mono text-[11px] text-ink font-semibold mt-1">
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
