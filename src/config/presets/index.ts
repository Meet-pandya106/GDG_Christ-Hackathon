import { PresetConfig } from '../types';

export const toolPreset: PresetConfig = {
  id: 'tool',
  name: 'TACTILE WORKBENCH',
  tagline: 'Focused Content Ingestion & Synthesis Engine',
  description: 'Pure utility view focused entirely on real-time content synthesis and clipboard delivery.',
  sections: [
    {
      id: 'marquee',
      type: 'marquee',
      content: {
        text: 'RAW CONCEPT INGESTION • MULTI-PLATFORM PACKETS • ZERO FILLER • LIVE QUALITY TELEMETRY •',
      },
    },
    {
      id: 'studio',
      type: 'tool-panel',
      badge: 'DIRECT INGESTION STUDIO',
      title: 'CONTENT SYNTHESIS FORGE',
      subtitle: 'Feed raw thoughts. Calibrate audience vectors. Deploy synchronized packets.',
    },
    {
      id: 'results',
      type: 'results-panel',
      badge: 'DISPATCH HUB',
      title: 'ACTIVE OUTPUT MATRIX',
      subtitle: 'One-click copy any channel or full markdown bundle',
    },
    {
      id: 'telemetry',
      type: 'dashboard-grid',
      badge: 'QUALITY METRICS',
      title: 'CONTENT DENSITY & HOOK TELEMETRY',
      subtitle: 'Real-time structural scoring across distribution channels',
    },
  ],
};

export const dashboardPreset: PresetConfig = {
  id: 'dashboard',
  name: 'TELEMETRY PULSE',
  tagline: 'Content Density, Velocity & Hook Performance Matrix',
  description: 'Analytics-first inspection of audience calibrations and multi-channel metrics.',
  sections: [
    {
      id: 'telemetry',
      type: 'dashboard-grid',
      badge: 'LIVE BENCHMARKS',
      title: 'EDITORIAL TELEMETRY & HOOK RATINGS',
      subtitle: 'Quantitative comparison between generic LLMs and NEOFORGE deterministic output',
    },
    {
      id: 'results',
      type: 'results-panel',
      badge: 'SAMPLE FORGE ASSETS',
      title: 'CALIBRATED ASSET INSPECTION',
      subtitle: 'Inspect live generated packet samples',
    },
    {
      id: 'features',
      type: 'feature-grid',
      badge: 'ENGINE SPECIFICATIONS',
      title: 'CORE TELEMETRY PILLARS',
      subtitle: 'How NEOFORGE scores hook velocity, readability, and content density',
    },
  ],
};

export const saasPreset: PresetConfig = {
  id: 'saas',
  name: 'ENTERPRISE ENGINE',
  tagline: 'Deterministic Multi-Channel Infrastructure for Modern Orgs',
  description: 'Scale executive communications, developer marketing, and product launches without hallucination.',
  sections: [
    {
      id: 'hero',
      type: 'hero',
      badge: 'ENTERPRISE CONTENT ARCHITECTURE',
      title: 'DETERMINISTIC CONTENT ENGINE',
      subtitle: 'ZERO GENERIC WRAPPERS. 100% SIGNAL.',
      content: {
        description:
          'Eliminate conversational prompting across your engineering, product, and leadership teams. Synchronize executive briefs, technical documentation, and viral social distributions with schema-driven precision.',
        primaryCta: 'ACCESS STUDIO',
        primaryHref: '#studio',
        secondaryCta: 'VIEW WORKFLOW',
        secondaryHref: '#process',
      },
    },
    {
      id: 'studio',
      type: 'tool-panel',
      badge: 'INTERACTIVE FORGE',
      title: 'SCHEMA-DRIVEN STUDIO',
      subtitle: 'Test enterprise audience calibration with live Gemini 2.0 Flash generation',
    },
    {
      id: 'results',
      type: 'results-panel',
      badge: 'SYNCHRONIZED OUTPUT',
      title: 'DEPLOYABLE ASSET BUNDLE',
      subtitle: 'Export to executive memos, developer channels, and investor briefings',
    },
    {
      id: 'split',
      type: 'split-band',
      badge: 'ENTERPRISE ADVANTAGE',
      title: 'REPLACE CONVERSATIONAL FATIGUE WITH PRECISE SLIDERS',
      subtitle: 'Deterministic tone vectors ensure zero brand deviation or generic chatbot tone.',
    },
    {
      id: 'cta',
      type: 'cta-band',
      badge: 'DEPLOY TODAY',
      title: 'READY TO UPGRADE YOUR EDITORIAL PIPELINE?',
      subtitle: 'Immediate browser-based execution with zero configuration hurdles.',
    },
  ],
};

export const eventPreset: PresetConfig = {
  id: 'event',
  name: 'LAUNCH BRIEFING',
  tagline: 'Live Product Announcement & Thought Leadership Summit',
  description: 'Specialized briefing layout for major releases and product keynotes.',
  sections: [
    {
      id: 'hero',
      type: 'hero',
      badge: 'GLOBAL LAUNCH BRIEFING',
      title: 'THE DEATH OF THE CHATBOT WRAPPER',
      subtitle: 'WELCOME TO SCHEMA-DRIVEN CONTENT FORGING',
      content: {
        description:
          'Join founders, lead engineers, and editorial directors using NEOFORGE to convert raw engineering notes into synchronized viral threads, executive memos, and launch briefs in milliseconds.',
        primaryCta: 'FORGE NOW',
        primaryHref: '#studio',
        secondaryCta: 'INSPECT ARCHITECTURE',
        secondaryHref: '#features',
      },
    },
    {
      id: 'studio',
      type: 'tool-panel',
      badge: 'LIVE DEMO ARENA',
      title: 'TRY THE FORGE LIVE',
      subtitle: 'Interactive studio with immediate multi-channel delivery',
    },
    {
      id: 'results',
      type: 'results-panel',
      badge: 'LIVE ASSETS',
      title: 'LAUNCH PACKET DISPATCH',
      subtitle: 'Instant markdown export ready for multi-channel broadcasting',
    },
    {
      id: 'cta',
      type: 'cta-band',
      badge: 'GET STARTED',
      title: 'TURN YOUR UNSTRUCTURED THOUGHTS INTO IMPACT',
      subtitle: 'High-contrast neo-brutalist execution engine powered by Gemini 2.0 Flash.',
    },
  ],
};

import { agencyPreset } from './agency';

export { agencyPreset };

export const presets: Record<string, PresetConfig> = {
  agency: agencyPreset,
  tool: toolPreset,
  dashboard: dashboardPreset,
  saas: saasPreset,
  event: eventPreset,
};
