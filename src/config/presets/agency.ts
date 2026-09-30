import { PresetConfig } from '../types';

export const agencyPreset: PresetConfig = {
  id: 'agency',
  name: 'NEOFORGE STUDIO',
  tagline: 'AI Social Media Studio — Raw Ideas to Complete Asset Packages',
  description: 'The flagship AI Social Media Studio for tech founders, creators, coaches, and operators.',
  sections: [
    {
      id: 'hero',
      type: 'hero',
      badge: 'ALL-IN-ONE AI SOCIAL MEDIA STUDIO',
      title: 'AI SOCIAL MEDIA STUDIO',
      subtitle: 'RAW IDEAS TO COMPLETE ASSET PACKAGES',
      content: {
        description:
          'Define who you are (User Context) and who the AI acts as (AI Persona). With one click, forge live AI-rendered visual banners, a 4-scene video reel script with timestamps, ready-to-post captions with hashtags, and instant broadcast to X/Twitter.',
        primaryCta: 'LAUNCH SOCIAL STUDIO',
        primaryHref: '#studio',
        secondaryCta: 'INSPECT OUTPUT ASSETS',
        secondaryHref: '#results',
      },
    },
    {
      id: 'marquee',
      type: 'marquee',
      content: {
        text: '📸 AI GRAPHIC BANNER • 🎬 4-SCENE REEL SCRIPT • ✍️ READY-TO-POST CAPTIONS • 🚀 DIRECT X/TWITTER SHARE • ZERO CONVERSATIONAL PROMPT FATIGUE • 1-CLICK CLIPBOARD EXPORT •',
      },
    },
    {
      id: 'studio',
      type: 'tool-panel',
      badge: 'CONTEXT & PERSONA STUDIO',
      title: 'AI SOCIAL MEDIA STUDIO',
      subtitle: 'Define User Context + AI Persona ➔ Generate Graphic, Video Reel & Captions in 1 Click',
    },
    {
      id: 'results',
      type: 'results-panel',
      badge: 'COMPLETE ASSET PACKAGE',
      title: 'FORGED SOCIAL ASSET PACKAGE',
      subtitle: 'Live AI Graphic + 4-Scene Reel Script + High-Converting Caption + Instant Social Broadcast',
    },
    {
      id: 'features',
      type: 'feature-grid',
      badge: 'CORE PILLARS',
      title: 'BEYOND GENERIC CHAT WRAPPERS',
      subtitle: 'Four structural pillars replacing conversational prompt fatigue with complete asset packages',
    },
    {
      id: 'split',
      type: 'split-band',
      badge: 'THE MANIFESTO',
      title: 'WHY THE WORLD DOES NOT NEED ANOTHER EMPTY CHAT BOX',
      subtitle: 'Chat interfaces force users to guess prompts. NEOFORGE provides complete multi-asset packages.',
    },
    {
      id: 'process',
      type: 'process-steps',
      badge: 'THE PIPELINE',
      title: 'FROM RAW THESIS TO MULTI-CHANNEL PACKET',
      subtitle: 'Deterministic 4-phase transformation engine',
    },
    {
      id: 'telemetry',
      type: 'dashboard-grid',
      badge: 'TELEMETRY BENCHMARKS',
      title: 'SIGNAL-TO-NOISE BENCHMARKS',
      subtitle: 'Measurable content density and hook velocity metrics',
    },
    {
      id: 'faq',
      type: 'faq',
      badge: 'OPERATOR BRIEFING',
      title: 'FREQUENTLY ASKED QUESTIONS',
      subtitle: 'Context definition, Pollinations image engine, video reel storyboards, and Gemini integration',
    },
    {
      id: 'cta',
      type: 'cta-band',
      badge: 'ZERO SETUP REQUIRED',
      title: 'READY TO FORGE COMPLETE SOCIAL ASSET PACKAGES?',
      subtitle: 'Define your context and topic now. Live image rendering, video storyboard, and captions in one pass.',
    },
  ],
};
