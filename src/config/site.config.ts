import { NavLink } from './types';

export const siteConfig = {
  name: 'NEOFORGE',
  tagline: 'AI Social Media Studio — Raw Ideas to Complete Asset Packages',
  description:
    'Define User Context + AI Persona ➔ Generate Graphic Banners, 4-Scene Reel Scripts, and High-Converting Captions in 1 Click.',
  navLinks: [
    { label: 'STUDIO', href: '#studio', badge: 'LIVE' },
    { label: 'OUTPUT PACKET', href: '#results' },
    { label: 'PILLARS', href: '#features' },
    { label: 'WORKFLOW', href: '#process' },
    { label: 'TELEMETRY', href: '#telemetry' },
    { label: 'FAQ', href: '#faq' },
  ] as NavLink[],
  activePreset: 'agency',
  stats: [
    { label: 'ASSET SYNC', value: '4-in-1', change: 'Graphic + Reel + Caption + X' },
    { label: 'HOOK VELOCITY', value: '4.9x', change: '+320% vs generic LLMs' },
    { label: 'SIGNAL-TO-NOISE', value: '98%', change: 'Zero conversational filler' },
    { label: 'TIME TO POST', value: '<30s', change: 'Direct X & clipboard copy' },
  ],
};
