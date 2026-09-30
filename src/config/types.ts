export type ThemeMode = 'light' | 'dark';
export type StyleMode = 'brutal' | 'clean' | 'soft';
export type AccentPresetId = 'lime' | 'cyan' | 'punch' | 'orange' | 'violet';

export interface AccentColor {
  id: AccentPresetId;
  name: string;
  hex: string;
  ink: string;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface QualityScoreItem {
  category: string;
  score: number;
  maxScore: number;
  note: string;
}

export interface QualityScore {
  total: number;
  max: number;
  items: QualityScoreItem[];
}

export interface ChannelOutput {
  id: string;
  platform: string;
  format: string;
  title: string;
  hook: string;
  body: string;
  tags: string[];
  metrics: MetricItem[];
}

export interface ImageOutput {
  prompt: string;
  style: string;
  aspectRatio: string;
  imageUrl?: string;
}

export interface VideoScene {
  sceneNumber: number;
  timing: string;
  visual: string;
  voiceover: string;
  onScreenText: string;
}

export interface VideoScriptOutput {
  title: string;
  duration: string;
  musicVibe: string;
  scenes: VideoScene[];
}

export interface CaptionOutput {
  hook: string;
  body: string;
  callToAction: string;
  hashtags: string[];
}

export interface ToolOutput {
  headline: string;
  summary: string;
  image: ImageOutput;
  videoScript: VideoScriptOutput;
  caption: CaptionOutput;
  channels: ChannelOutput[];
  qualityScore: QualityScore;
  suggestions: string[];
}

export interface ToolInput {
  userRole: string;
  aiRole: string;
  idea: string;
  platform: string;
  creativity: number;
  userApiKey?: string;
  audience?: string;
  tone?: string;
}

export type ToolState = 'idle' | 'loading' | 'success' | 'error';

export interface SectionConfig {
  id: string;
  type: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  content?: Record<string, unknown>;
}

export interface PresetConfig {
  id: string;
  name: string;
  description: string;
  tagline: string;
  sections: SectionConfig[];
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}
