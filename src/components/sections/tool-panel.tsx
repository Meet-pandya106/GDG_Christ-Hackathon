import React, { useState, useEffect } from 'react';
import {
  Zap,
  Sparkles,
  Sliders,
  Send,
  Key,
  User,
  Bot,
  Layers,
  Check,
  FileText,
  Share2,
  Video,
  Image as ImageIcon,
} from 'lucide-react';
import { Section, Container } from '../layout/Section';
import { Heading } from '../ui/Heading';
import { Pill } from '../ui/Pill';
import { Button } from '../ui/Button';
import { useTool, useFlexStore } from '../../lib/hooks';

interface ToolPanelProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

const PERSONA_TEMPLATES = [
  {
    label: 'Tech Founder // AI Studio Launch',
    userRole: 'Tech Founder & AI Builder',
    aiRole: 'Viral Social Media Growth Strategist',
    idea: 'Announcing NEOFORGE: an all-in-one AI Social Media Studio that replaces conversational chat prompt fatigue with 1-click generation of visual banners, 4-scene video reels, and ready-to-post captions.',
    platform: 'Instagram Reels & X',
    creativity: 90,
  },
  {
    label: 'Fitness Coach // Fat Loss Myth',
    userRole: 'Fitness Coach & Health Specialist',
    aiRole: 'Bold Direct Response Copywriter',
    idea: 'Debunking the myth that you need to do 2 hours of cardio every day to lose stubborn belly fat. Why heavy progressive compound lifting and a 300-calorie deficit beats endless running.',
    platform: 'TikTok / Shorts & Instagram',
    creativity: 85,
  },
  {
    label: 'E-commerce // Limited Drop',
    userRole: 'E-commerce Brand Owner',
    aiRole: 'High-Energy Creative Director',
    idea: 'Dropping our limited-edition heavyweight acid-wash brutalist hoodies. Only 150 pieces produced, zero restocks, custom metal aglets and heavyweight French terry.',
    platform: 'Instagram Reels & TikTok',
    creativity: 80,
  },
  {
    label: 'Indie Game Dev // Physics Engine Fix',
    userRole: 'Indie Game Developer',
    aiRole: 'Authentic Storyteller & Documentary Host',
    idea: 'We spent 3 weeks tracking down a bizarre physics bug where characters catapulted into orbit when stepping on stairs. Here is how we rewrote the collision raycaster in C#.',
    platform: 'X / Twitter & YouTube Shorts',
    creativity: 85,
  },
];

const USER_ROLES = [
  'Tech Founder & AI Builder',
  'Fitness Coach & Health Specialist',
  'E-commerce Brand Owner',
  'Indie Game Developer',
  'Content Creator & Youtuber',
  'B2B SaaS Marketing Lead',
];

const AI_ROLES = [
  'Viral Social Media Growth Strategist',
  'Bold Direct Response Copywriter',
  'Authentic Storyteller & Documentary Host',
  'High-Energy Creative Director',
  'Minimalist Technical Operator',
];

const PLATFORMS = [
  'Instagram Reels & X',
  'TikTok / Shorts & Instagram',
  'X / Twitter Viral Thread',
  'LinkedIn Thought Leadership',
];

export const ToolPanelSection: React.FC<ToolPanelProps> = ({
  badge = 'ALL-IN-ONE SOCIAL MEDIA STUDIO',
  title = 'AI SOCIAL MEDIA STUDIO',
  subtitle = 'Define User Context + AI Persona ➔ Generate Graphic, Video Reel & Captions in 1 Click',
}) => {
  const { toolState, run } = useTool();
  const globalApiKey = useFlexStore((s) => s.userApiKey);
  const setGlobalApiKey = useFlexStore((s) => s.setUserApiKey);

  const [userRole, setUserRole] = useState('Tech Founder & AI Builder');
  const [aiRole, setAiRole] = useState('Viral Social Media Growth Strategist');
  const [idea, setIdea] = useState(
    'Relying on empty conversational chat prompts produces generic fluff. High-velocity founders and creators are switching to schema-driven, all-in-one content studios that output visuals, reels, and captions simultaneously.'
  );
  const [platform, setPlatform] = useState('Instagram Reels & X');
  const [creativity, setCreativity] = useState(85);
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [localApiKey, setLocalApiKey] = useState(globalApiKey || '');

  useEffect(() => {
    setLocalApiKey(globalApiKey);
  }, [globalApiKey]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!idea.trim()) return;

    if (localApiKey !== globalApiKey) {
      setGlobalApiKey(localApiKey);
    }

    run({
      userRole,
      aiRole,
      idea,
      platform,
      creativity,
      userApiKey: localApiKey.trim(),
    });

    const resultsElem = document.getElementById('results');
    if (resultsElem) {
      setTimeout(() => {
        resultsElem.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const loadTemplate = (tmpl: (typeof PERSONA_TEMPLATES)[0]) => {
    setUserRole(tmpl.userRole);
    setAiRole(tmpl.aiRole);
    setIdea(tmpl.idea);
    setPlatform(tmpl.platform);
    setCreativity(tmpl.creativity);
  };

  return (
    <Section id="studio" variant="paper-2" className="py-20 relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <Pill variant="accent">
              <Sparkles size={14} className="stroke-[3]" />
              {badge}
            </Pill>
            <Pill variant="ink">CONTEXT & PERSONA ENGINE</Pill>
          </div>
          <Heading as="h2" size="xl" className="mb-4">
            {title}
          </Heading>
          <p className="font-mono text-sm sm:text-base text-muted font-bold uppercase tracking-wider">
            {subtitle}
          </p>
        </div>

        {/* Studio Card Container */}
        <div className="bg-paper border-4 border-ink shadow-[8px_8px_0px_0px_var(--ink)] p-6 sm:p-8 lg:p-10 relative">
          {/* Quick-load Persona & Industry Templates */}
          <div className="mb-8 pb-6 border-b-2 border-ink">
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <span className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                <FileText size={14} />
                LOAD PERSONA TEMPLATE:
              </span>
              <span className="font-mono text-[11px] text-muted">
                1-click context configuration
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {PERSONA_TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.label}
                  type="button"
                  onClick={() => loadTemplate(tmpl)}
                  className="px-3 py-2 text-left bg-paper-2 hover:bg-accent hover:text-accent-ink border-2 border-ink font-mono text-xs font-bold uppercase transition-colors shadow-[2px_2px_0px_0px_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer truncate"
                >
                  ⚡ {tmpl.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1 & 2: User Persona & AI Persona Definition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-6 bg-paper-2 border-2 sm:border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)]">
              {/* 1. Who the User is */}
              <div>
                <label
                  htmlFor="user-role-select"
                  className="block font-mono text-xs font-black uppercase tracking-wider text-ink mb-2"
                >
                  <span className="text-accent bg-ink px-1.5 py-0.5 mr-1.5 font-bold">1</span>
                  WHO YOU ARE (YOUR IDENTITY / DOMAIN):
                </label>
                <div className="relative">
                  <select
                    id="user-role-select"
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value)}
                    className="w-full p-3.5 bg-paper border-2 sm:border-4 border-ink font-mono text-xs sm:text-sm font-bold text-ink uppercase shadow-[2px_2px_0px_0px_var(--ink)] focus:outline-hidden focus:border-accent cursor-pointer"
                  >
                    {USER_ROLES.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="font-mono text-[10px] text-muted mt-1.5 font-semibold">
                  Supplies domain context, credibility proofs, and target audience language.
                </p>
              </div>

              {/* 2. Who the AI acts as */}
              <div>
                <label
                  htmlFor="ai-role-select"
                  className="block font-mono text-xs font-black uppercase tracking-wider text-ink mb-2"
                >
                  <span className="text-accent bg-ink px-1.5 py-0.5 mr-1.5 font-bold">2</span>
                  WHO THE AI ACTS AS (AI PERSONA):
                </label>
                <div className="relative">
                  <select
                    id="ai-role-select"
                    value={aiRole}
                    onChange={(e) => setAiRole(e.target.value)}
                    className="w-full p-3.5 bg-paper border-2 sm:border-4 border-ink font-mono text-xs sm:text-sm font-bold text-ink uppercase shadow-[2px_2px_0px_0px_var(--ink)] focus:outline-hidden focus:border-accent cursor-pointer"
                  >
                    {AI_ROLES.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="font-mono text-[10px] text-muted mt-1.5 font-semibold">
                  Determines video storyboard pacing, rhetorical tension, and hook velocity.
                </p>
              </div>
            </div>

            {/* Step 3: Raw Concept / Topic Notes Textarea */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="idea-input"
                  className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-ink flex items-center gap-2"
                >
                  <span className="w-6 h-6 rounded-none bg-accent text-accent-ink border border-ink flex items-center justify-center font-bold text-xs">
                    3
                  </span>
                  RAW TOPIC, THOUGHT, OR PRODUCT ANNOUNCEMENT:
                </label>
                <span className="font-mono text-xs text-muted font-bold">
                  PRESS <kbd className="px-1 border border-ink bg-paper-2">CTRL+ENTER</kbd> TO FORGE
                </span>
              </div>
              <textarea
                id="idea-input"
                rows={4}
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your rough idea, messy notes, gym tips, software release, or announcement..."
                className="w-full p-4 bg-paper-2 border-2 sm:border-4 border-ink font-mono text-sm sm:text-base text-ink focus:outline-hidden focus:bg-paper focus:border-accent shadow-[4px_4px_0px_0px_var(--ink)] leading-relaxed resize-y min-h-[120px]"
                required
              />
            </div>

            {/* Target Platform & Intensity Slider */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Target Channel */}
              <div className="md:col-span-6">
                <label
                  htmlFor="platform-select"
                  className="block font-mono text-xs font-black uppercase tracking-wider text-ink mb-2"
                >
                  <span className="text-accent bg-ink px-1.5 py-0.5 mr-1.5 font-bold">4A</span>
                  PRIMARY CHANNEL ECOSYSTEM:
                </label>
                <select
                  id="platform-select"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full p-3.5 bg-paper-2 border-2 sm:border-4 border-ink font-mono text-xs sm:text-sm font-bold text-ink uppercase shadow-[4px_4px_0px_0px_var(--ink)] focus:outline-hidden focus:border-accent cursor-pointer"
                >
                  {PLATFORMS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Intensity Slider */}
              <div className="md:col-span-6 p-4 bg-paper-2 border-2 sm:border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                    <Sliders size={14} />
                    VOICE INTENSITY / CREATIVITY:
                  </span>
                  <span className="font-display font-black text-xl text-ink">
                    {creativity}%
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={creativity}
                  onChange={(e) => setCreativity(Number(e.target.value))}
                  className="w-full h-3 bg-paper border-2 border-ink accent-ink cursor-pointer"
                />
                <div className="flex justify-between font-mono text-[9px] text-muted font-bold mt-1">
                  <span>CONSERVATIVE</span>
                  <span>BALANCED</span>
                  <span>UNFILTERED CONTRARIAN</span>
                </div>
              </div>
            </div>

            {/* Optional Custom Gemini Key */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowKeyInput(!showKeyInput)}
                className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-ink font-bold cursor-pointer transition-colors"
              >
                <Key size={14} />
                <span>
                  {showKeyInput
                    ? '[-] HIDE GEMINI API KEY OVERRIDE'
                    : '[+] OPTIONAL: CONFIGURE CUSTOM GEMINI API KEY'}
                </span>
                {localApiKey && <Pill variant="accent">KEY ACTIVE</Pill>}
              </button>

              {showKeyInput && (
                <div className="mt-3 p-4 bg-paper-2 border-2 border-ink space-y-2">
                  <label
                    htmlFor="gemini-key-input"
                    className="block font-mono text-xs font-bold uppercase text-ink"
                  >
                    Google AI Studio Gemini API Key:
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="gemini-key-input"
                      type="password"
                      placeholder="Paste your AI Studio key (AIzaSy...)"
                      value={localApiKey}
                      onChange={(e) => setLocalApiKey(e.target.value)}
                      className="flex-1 px-3 py-2 bg-paper border-2 border-ink font-mono text-xs text-ink focus:outline-hidden focus:border-accent"
                    />
                    <button
                      type="button"
                      onClick={() => setGlobalApiKey(localApiKey)}
                      className="px-4 py-2 bg-ink text-paper font-mono text-xs font-bold uppercase border-2 border-ink hover:bg-accent hover:text-accent-ink cursor-pointer"
                    >
                      SAVE
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Action Dispatch Button Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t-4 border-ink">
              <div className="font-mono text-xs text-muted font-bold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block animate-pulse" />
                <span>ALL-IN-ONE PIPELINE: IMAGE + VIDEO SCRIPT + CAPTION + TWEET</span>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="xl"
                isLoading={toolState === 'loading'}
                icon={<Zap size={22} strokeWidth={3} />}
                className="w-full sm:w-auto"
              >
                FORGE COMPLETE PACKAGE ↵
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
};
