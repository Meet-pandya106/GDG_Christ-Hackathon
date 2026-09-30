import React from 'react';
import { SectionConfig } from '../config/types';
import { HeroSection } from '../components/sections/hero';
import { MarqueeSection } from '../components/sections/marquee';
import { ToolPanelSection } from '../components/sections/tool-panel';
import { ResultsPanelSection } from '../components/sections/results-panel';
import { FeatureGridSection } from '../components/sections/feature-grid';
import { SplitBandSection } from '../components/sections/split-band';
import { ProcessStepsSection } from '../components/sections/process-steps';
import { DashboardGridSection } from '../components/sections/dashboard-grid';
import { FaqSection } from '../components/sections/faq';
import { CtaBandSection } from '../components/sections/cta-band';

export type SectionComponentType = React.ComponentType<any>;

export const sectionRegistry: Record<string, SectionComponentType> = {
  hero: HeroSection,
  marquee: MarqueeSection,
  'tool-panel': ToolPanelSection,
  'results-panel': ResultsPanelSection,
  'feature-grid': FeatureGridSection,
  'split-band': SplitBandSection,
  'process-steps': ProcessStepsSection,
  'dashboard-grid': DashboardGridSection,
  faq: FaqSection,
  'cta-band': CtaBandSection,
};

export function renderSection(section: SectionConfig, index: number) {
  const Component = sectionRegistry[section.type];
  if (!Component) {
    console.warn(`Section type "${section.type}" not found in sectionRegistry.`);
    return null;
  }

  return (
    <Component
      key={`${section.id}-${index}`}
      id={section.id}
      badge={section.badge}
      title={section.title}
      subtitle={section.subtitle}
      content={section.content}
    />
  );
}
