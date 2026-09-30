import { create } from 'zustand';
import {
  AccentPresetId,
  StyleMode,
  ThemeMode,
  ToolInput,
  ToolOutput,
  ToolState,
} from '../config/types';

export const INITIAL_SAMPLE_OUTPUT: ToolOutput = {
  headline: 'THE DEATH OF THE CHATBOT WRAPPER',
  summary:
    'High-velocity tech founders are ditching empty chat boxes for deterministic, persona-calibrated multi-asset studios.',
  image: {
    prompt:
      'Neo-brutalist graphic poster of a futuristic robotic forge stamping bold glowing typography on newsprint paper, high-contrast black and acid lime, cinematic lighting, sharp geometry, 8k resolution, raw editorial design',
    style: 'Neo-Brutalist High-Contrast Digital Graphic',
    aspectRatio: '1:1',
    imageUrl:
      'https://image.pollinations.ai/prompt/Neo-brutalist%20graphic%20poster%20of%20a%20futuristic%20robotic%20forge%20stamping%20bold%20glowing%20typography%20on%20newsprint%20paper%2C%20high-contrast%20black%20and%20acid%20lime%2C%20cinematic%20lighting%2C%20sharp%20geometry?width=1080&height=1080&nologo=true&seed=42',
  },
  videoScript: {
    title: 'Why 99% of AI Apps Will Die in 2026',
    duration: '30-45s',
    musicVibe: 'Punchy Industrial Electronic Bass (128 BPM)',
    scenes: [
      {
        sceneNumber: 1,
        timing: '0:00 - 0:03',
        visual: 'Direct to camera, high intensity, quick zoom in on speaker with neon glitch cut',
        voiceover: 'If your entire startup is just a chat wrapper on OpenAI, you are already dead in the water.',
        onScreenText: 'CHAT WRAPPERS ARE DEAD 💀',
      },
      {
        sceneNumber: 2,
        timing: '0:03 - 0:15',
        visual: 'Fast montage of users staring exhausted at blank cursor prompt boxes, typing then backspacing',
        voiceover: 'Because users are sick of "prompt fatigue." Nobody wants to spend 20 minutes coaching a bot to sound like an operator.',
        onScreenText: 'PROMPT FATIGUE = CHURN',
      },
      {
        sceneNumber: 3,
        timing: '0:15 - 0:30',
        visual: 'Screen capture of tactile sliders and persona switches generating graphic, video script and captions in 1 click',
        voiceover: 'The winners in 2026 give users deterministic control panels: persona vectors, scene-by-scene storyboards, and instant image generation in a single click.',
        onScreenText: 'SCHEMA > CHAT BUBBLES ⚡',
      },
      {
        sceneNumber: 4,
        timing: '0:30 - 0:40',
        visual: 'Speaker smiles, points toward camera, clean branding overlay with acid lime border',
        voiceover: 'Stop building chat wrappers. Start building tactile engines. Link in bio to test the studio live.',
        onScreenText: 'TEST NEOFORGE NOW ↵',
      },
    ],
  },
  caption: {
    hook: 'The era of generic AI chatbots is officially over. Here is what replaces them 👇',
    body: `Most creators and founders using AI are quietly giving up on chat interfaces.

Why? The "Prompt Fatigue Tax."
You paste raw notes.
You get bland corporate soup.
You spend 15 minutes typing correction prompts.
You end up rewriting it manually.

High-velocity operators are switching to tactile persona studios:
⚡ Persona-to-Persona Calibration (Founder ➔ Growth Strategist)
📸 Instant High-Impact Visuals & Posters
🎬 Scene-by-Scene Reel Storyboards with Timestamps
✍️ Ready-to-Post Captions with Zero Hallucination

Stop coaching chatbots. Start forging complete distribution packets in one click.`,
    callToAction: 'Save this post for your next launch and drop "FORGE" below to get early access.',
    hashtags: [
      '#TechFounder',
      '#BuildInPublic',
      '#ContentStrategy',
      '#SocialMediaMarketing',
      '#IndieHacker',
      '#AIWorkflow',
    ],
  },
  channels: [
    {
      id: 'twitter',
      platform: 'X / Twitter',
      format: 'Thread Sequence',
      title: 'Why Conversational Chat is Dying for Creators',
      hook: '99% of AI content fails because of "prompt fatigue." You spend 20 minutes coaxing a chatbot to sound like a human, only to get sanitized corporate fluff. Here is the architectural shift high-output operators are using instead: 🧵👇',
      body: `1/ The problem isn't the model. It's the interface.
Chat was designed for two humans exchanging text messages. It was NEVER designed for systematic, multi-channel editorial generation.

2/ When you give someone an empty text box:
• They don't know what parameters to specify
• Tone drifts across prompts
• Formatting requires endless iterations
• You end up doing conversational gymnastics.

3/ What high-output teams actually need is Schema-Driven Synthesis:
- Ingest raw domain brainstorms once
- Calibrate user identity & AI persona
- Generate Visual Banner + Video Storyboard + Caption simultaneously
- Zero conversational filler.

4/ Look at the signal-to-noise ratio:
Generic Chat: 32% signal, 68% pleasantries and preamble.
Schema-Driven Forge: 98% density, immediate copy-paste ready.

5/ The future isn't "talking to an AI."
It is feeding high-context raw data into deterministic transformation vectors.`,
      tags: ['#BuildInPublic', '#TechStrategy', '#SocialMedia', '#AIArchitecture'],
      metrics: [
        { label: 'Hook Velocity', value: '98%' },
        { label: 'Platform Fit', value: '100%' },
        { label: 'Read Time', value: '1.5 min' },
      ],
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      format: 'Thought Leadership',
      title: 'Prompt Fatigue is Killing Social Media Velocity',
      hook: 'Most enterprise founders using generative AI are quietly frustrated with standard chat tools. Not because the models are weak, but because prompt fatigue is real.',
      body: `Ask any founder or creator how they draft social content today, and they will describe the same loop:

1. Paste thoughts into an empty chat box.
2. Receive a response packed with corporate cliches ("In today's fast-paced digital landscape...").
3. Type three corrections ("Make it punchy, remove the buzzwords, sound like a founder").
4. Give up and manually rewrite.

This is the "Chat Interface Tax."

What high-performance operators need is a unified studio:
• Context Definition: Who you are + who the AI acts as.
• Complete Asset Bundle: Live graphics, scene-by-scene video scripts, and ready-to-post captions in a single pass.
• Instant Distribution: Direct X/Twitter broadcast and formatted clipboard copy.

When you replace conversational prompts with deterministic studios, production cycle time drops by 80%.

Are you still typing prompts into an empty text box, or using dedicated studios?`,
      tags: ['#Leadership', '#Strategy', '#ContentCreation', '#ArtificialIntelligence'],
      metrics: [
        { label: 'Audience Relevance', value: '99%' },
        { label: 'Readability', value: 'Grade 9' },
        { label: 'Tone Precision', value: 'Founder Authority' },
      ],
    },
  ],
  qualityScore: {
    total: 98,
    max: 100,
    items: [
      {
        category: 'Visual Appeal',
        score: 10,
        maxScore: 10,
        note: 'High-contrast neo-brutalist graphic concept rendered live.',
      },
      {
        category: 'Video Flow',
        score: 10,
        maxScore: 10,
        note: 'Paced 4-scene video storyboard with timestamps and text overlays.',
      },
      {
        category: 'Copy & Hook',
        score: 10,
        maxScore: 10,
        note: 'Engaging, scroll-stopping copy with zero corporate filler.',
      },
      {
        category: 'Persona Calibration',
        score: 9,
        maxScore: 10,
        note: 'Voice tuned precisely to user identity and AI persona.',
      },
      {
        category: 'Publishing Readiness',
        score: 10,
        maxScore: 10,
        note: 'One-click copy, image download, and direct X/Twitter sharing available.',
      },
    ],
  },
  suggestions: [
    'Download the generated image banner to pair with your post',
    'Record the 30-45s short-form video following the 4-scene storyboard',
    'Click "Post to X / Twitter" for instant social broadcast',
  ],
};

interface FlexState {
  theme: ThemeMode;
  styleMode: StyleMode;
  accentId: AccentPresetId;
  activePreset: string;
  devPanelOpen: boolean;
  toolState: ToolState;
  toolInput: ToolInput | null;
  toolOutput: ToolOutput;
  activeTab: 'image' | 'video' | 'caption' | 'channels' | 'mockup';
  activeChannelId: string;
  copiedToast: string | null;
  userApiKey: string;

  // Actions
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  setStyleMode: (mode: StyleMode) => void;
  setAccent: (id: AccentPresetId) => void;
  setActivePreset: (presetId: string) => void;
  setDevPanelOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  setToolState: (state: ToolState) => void;
  setToolInput: (input: ToolInput | null) => void;
  setToolOutput: (output: ToolOutput) => void;
  setActiveTab: (tab: 'image' | 'video' | 'caption' | 'channels' | 'mockup') => void;
  setActiveChannelId: (id: string) => void;
  showCopiedToast: (message: string) => void;
  setUserApiKey: (key: string) => void;
}

export const useFlexStore = create<FlexState>((set) => ({
  theme: 'light',
  styleMode: 'brutal',
  accentId: 'lime',
  activePreset: 'agency',
  devPanelOpen: false,
  toolState: 'success', // starts with sample output visible so user sees immediate value!
  toolInput: {
    userRole: 'Tech Founder & Builder',
    aiRole: 'Viral Social Media Growth Strategist',
    idea: 'Relying on empty conversational chat prompts produces generic fluff. High-velocity founders and creators are switching to schema-driven, all-in-one content studios that output visuals, reels, and captions simultaneously.',
    platform: 'Instagram Reels & X',
    creativity: 85,
    userApiKey: '',
  },
  toolOutput: INITIAL_SAMPLE_OUTPUT,
  activeTab: 'mockup',
  activeChannelId: 'twitter',
  copiedToast: null,
  userApiKey: typeof window !== 'undefined' ? localStorage.getItem('neoforge_gemini_key') || '' : '',

  setTheme: (theme) => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
    set({ theme });
  },
  toggleTheme: () =>
    set((state) => {
      const nextTheme = state.theme === 'light' ? 'dark' : 'light';
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      }
      return { theme: nextTheme };
    }),
  setStyleMode: (styleMode) => set({ styleMode }),
  setAccent: (accentId) => set({ accentId }),
  setActivePreset: (activePreset) => set({ activePreset }),
  setDevPanelOpen: (updater) =>
    set((state) => ({
      devPanelOpen: typeof updater === 'function' ? updater(state.devPanelOpen) : updater,
    })),
  setToolState: (toolState) => set({ toolState }),
  setToolInput: (toolInput) => set({ toolInput }),
  setToolOutput: (toolOutput) => set({ toolOutput }),
  setActiveTab: (activeTab) => set({ activeTab }),
  setActiveChannelId: (activeChannelId) => set({ activeChannelId }),
  showCopiedToast: (message) => {
    set({ copiedToast: message });
    setTimeout(() => {
      set((state) => (state.copiedToast === message ? { copiedToast: null } : state));
    }, 2800);
  },
  setUserApiKey: (userApiKey) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('neoforge_gemini_key', userApiKey);
    }
    set({ userApiKey });
  },
}));
