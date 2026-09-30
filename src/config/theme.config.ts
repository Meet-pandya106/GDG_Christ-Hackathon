import { AccentColor, StyleMode } from './types';

export const ACCENT_PRESETS: AccentColor[] = [
  {
    id: 'lime',
    name: 'Acid Lime',
    hex: '#DFFF1F',
    ink: '#0A0A0A',
  },
  {
    id: 'cyan',
    name: 'Cyber Cyan',
    hex: '#00F0FF',
    ink: '#0A0A0A',
  },
  {
    id: 'punch',
    name: 'Hot Punch',
    hex: '#FF2A85',
    ink: '#FFFFFF',
  },
  {
    id: 'orange',
    name: 'Signal Orange',
    hex: '#FF5500',
    ink: '#FFFFFF',
  },
  {
    id: 'violet',
    name: 'Hyper Violet',
    hex: '#A855F7',
    ink: '#FFFFFF',
  },
];

export const STYLE_MODES: { id: StyleMode; name: string; description: string }[] = [
  {
    id: 'brutal',
    name: 'NEO-BRUTAL',
    description: 'Heavy 4px ink borders, 8px hard drop shadows, zero corner radius.',
  },
  {
    id: 'clean',
    name: 'EDITORIAL CLEAN',
    description: 'Crisp 2px borders, 4px shadows, high-legibility typographic hierarchy.',
  },
  {
    id: 'soft',
    name: 'TACTILE SOFT',
    description: 'Subtle borders, rounded corners, modern tactile interactive states.',
  },
];
