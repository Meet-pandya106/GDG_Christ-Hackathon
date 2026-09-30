import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Video,
  FileText,
  Share2,
  Copy,
  Check,
  Download,
  ExternalLink,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Clock,
  Volume2,
  Eye,
  Type,
  Maximize2,
  Sliders,
  Smartphone,
} from 'lucide-react';
import { Section, Container } from '../layout/Section';
import { Heading } from '../ui/Heading';
import { Pill } from '../ui/Pill';
import { Button } from '../ui/Button';
import { Skeleton } from '../ui/Skeleton';
import { useTool, useFlexStore } from '../../lib/hooks';
import { MockupTab } from './mockup-tab';

interface ResultsPanelProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export const ResultsPanelSection: React.FC<ResultsPanelProps> = ({
  badge = 'COMPLETE ASSET PACKAGE',
  title = 'FORGED SOCIAL ASSET PACKAGE',
  subtitle = 'Live AI Graphic + 4-Scene Reel Script + High-Converting Caption + Instant Social Broadcast',
}) => {
  const { toolState, toolInput, toolOutput, activeChannel, copyFullMarkdown } = useTool();

  const activeTab = useFlexStore((s) => s.activeTab);
  const setActiveTab = useFlexStore((s) => s.setActiveTab);
  const showCopiedToast = useFlexStore((s) => s.showCopiedToast);

  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedSection(label);
      showCopiedToast(`COPIED ${label.toUpperCase()} TO CLIPBOARD!`);
      setTimeout(() => setCopiedSection(null), 2500);
    });
  };

  const handleDownloadImage = async (url?: string, filename = 'neoforge-banner.jpg') => {
    if (!url) return;
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
      showCopiedToast('IMAGE DOWNLOAD STARTED!');
    } catch (e) {
      // Fallback
      window.open(url, '_blank');
      showCopiedToast('IMAGE OPENED IN NEW TAB!');
    }
  };

  const getTwitterShareUrl = () => {
    if (!toolOutput) return '#';
    const text = `${toolOutput.caption.hook}\n\n${toolOutput.caption.body.slice(0, 180)}...\n\n${toolOutput.caption.hashtags.slice(0, 3).join(' ')}`;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  };

  return (
    <Section id="results" variant="paper" className="py-20 relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <Pill variant="accent">
                <Activity size={14} className="stroke-[3]" />
                {badge}
              </Pill>
              <Pill variant="ink">STAGE 02 // MULTI-ASSET OUTPUT</Pill>
            </div>
            <Heading as="h2" size="xl" className="mb-2">
              {title}
            </Heading>
            <p className="font-mono text-sm sm:text-base text-muted font-bold uppercase tracking-wider">
              {subtitle}
            </p>
          </div>

          {toolState === 'success' && toolOutput && (
            <div className="flex flex-wrap gap-2.5">
              <Button
                variant="primary"
                size="md"
                onClick={copyFullMarkdown}
                icon={<Copy size={16} strokeWidth={2.5} />}
              >
                COPY FULL BUNDLE (MD)
              </Button>
              <a
                href={getTwitterShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="dark"
                  size="md"
                  icon={<ExternalLink size={16} strokeWidth={2.5} className="text-accent" />}
                >
                  POST TO X / TWITTER ↵
                </Button>
              </a>
            </div>
          )}
        </div>

        {/* Loading State Skeleton */}
        {toolState === 'loading' && (
          <div className="bg-paper-2 border-4 border-ink p-8 sm:p-12 shadow-[8px_8px_0px_0px_var(--ink)]">
            <div className="flex items-center justify-between pb-6 mb-8 border-b-4 border-ink">
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 border-4 border-ink border-t-accent rounded-full animate-spin" />
                <span className="font-mono text-base font-black uppercase tracking-wider text-ink">
                  SYNTHESIZING GRAPHIC, REEL SCRIPT & CAPTIONS VIA GEMINI FLASH...
                </span>
              </div>
              <Pill variant="accent">COMPUTING TOKENS</Pill>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Skeleton className="h-80" />
              <Skeleton className="h-80" />
            </div>
            <Skeleton className="h-32 mb-6" />
          </div>
        )}

        {/* Success Output State */}
        {toolState === 'success' && toolOutput && (
          <div className="space-y-12">
            {/* Top Impact Quality Score Banner */}
            <div className="bg-paper-2 border-4 border-ink p-6 sm:p-8 shadow-[8px_8px_0px_0px_var(--ink)]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b-4 border-ink">
                <div>
                  <div className="font-mono text-xs font-black uppercase tracking-widest text-muted mb-1">
                    SYNTHESIZED THESIS // READY FOR DISTRIBUTION
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight uppercase leading-tight">
                    {toolOutput.headline}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-ink mt-2 font-medium">
                    {toolOutput.summary}
                  </p>
                </div>

                {/* Big Score Box */}
                <div className="shrink-0 flex items-center gap-4 bg-paper border-4 border-ink p-4 sm:p-5 shadow-[4px_4px_0px_0px_var(--ink)]">
                  <div className="text-right">
                    <div className="font-mono text-[10px] font-black uppercase text-muted">
                      CONTENT DENSITY
                    </div>
                    <div className="font-mono text-xs font-black text-[#10B981] uppercase">
                      HIGH SIGNAL-TO-NOISE
                    </div>
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent text-accent-ink border-2 sm:border-4 border-ink flex flex-col items-center justify-center font-display font-black leading-none shadow-[2px_2px_0px_0px_var(--ink)]">
                    <span className="text-2xl sm:text-3xl">{toolOutput.qualityScore.total}</span>
                    <span className="text-[10px] font-mono mt-0.5">/100</span>
                  </div>
                </div>
              </div>

              {/* 5-Item Telemetry Matrix Breakdown */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6">
                {toolOutput.qualityScore.items.map((item) => (
                  <div
                    key={item.category}
                    className="p-3 bg-paper border-2 border-ink shadow-[2px_2px_0px_0px_var(--ink)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between font-mono text-[11px] font-bold text-ink mb-1">
                        <span className="truncate">{item.category}</span>
                        <span className="font-black text-accent bg-ink px-1">
                          {item.score}/{item.maxScore}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-muted line-clamp-2 leading-tight">
                        {item.note}
                      </p>
                    </div>
                    <div className="w-full h-2 bg-paper-2 border border-ink mt-2 overflow-hidden">
                      <div
                        className="h-full bg-accent"
                        style={{ width: `${(item.score / item.maxScore) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Multi-Tab Social Studio Hub */}
            <div className="bg-paper border-4 border-ink shadow-[8px_8px_0px_0px_var(--ink)]">
              {/* Tab Switcher Navigation */}
              <div className="flex flex-wrap border-b-4 border-ink bg-paper-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('mockup')}
                  className={`px-5 py-4 font-mono text-xs sm:text-sm font-black uppercase tracking-wider border-r-2 sm:border-r-4 border-ink transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'mockup'
                      ? 'bg-paper text-ink -mb-1 pb-5 border-b-4 border-b-paper z-10'
                      : 'bg-paper-2 text-muted hover:text-ink hover:bg-paper'
                  }`}
                >
                  <Smartphone size={18} className={activeTab === 'mockup' ? 'text-accent' : ''} />
                  <span>📱 LIVE MOCKUP VIEW</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('image')}
                  className={`px-5 py-4 font-mono text-xs sm:text-sm font-black uppercase tracking-wider border-r-2 sm:border-r-4 border-ink transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'image'
                      ? 'bg-paper text-ink -mb-1 pb-5 border-b-4 border-b-paper z-10'
                      : 'bg-paper-2 text-muted hover:text-ink hover:bg-paper'
                  }`}
                >
                  <ImageIcon size={18} className={activeTab === 'image' ? 'text-accent' : ''} />
                  <span>📸 AI GRAPHIC BANNER</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('video')}
                  className={`px-5 py-4 font-mono text-xs sm:text-sm font-black uppercase tracking-wider border-r-2 sm:border-r-4 border-ink transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'video'
                      ? 'bg-paper text-ink -mb-1 pb-5 border-b-4 border-b-paper z-10'
                      : 'bg-paper-2 text-muted hover:text-ink hover:bg-paper'
                  }`}
                >
                  <Video size={18} className={activeTab === 'video' ? 'text-accent' : ''} />
                  <span>🎬 4-SCENE REEL SCRIPT</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('caption')}
                  className={`px-5 py-4 font-mono text-xs sm:text-sm font-black uppercase tracking-wider border-r-2 sm:border-r-4 border-ink transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'caption'
                      ? 'bg-paper text-ink -mb-1 pb-5 border-b-4 border-b-paper z-10'
                      : 'bg-paper-2 text-muted hover:text-ink hover:bg-paper'
                  }`}
                >
                  <FileText size={18} className={activeTab === 'caption' ? 'text-accent' : ''} />
                  <span>✍️ READY-TO-POST CAPTIONS</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('channels')}
                  className={`px-5 py-4 font-mono text-xs sm:text-sm font-black uppercase tracking-wider border-r-2 sm:border-r-4 border-ink transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'channels'
                      ? 'bg-paper text-ink -mb-1 pb-5 border-b-4 border-b-paper z-10'
                      : 'bg-paper-2 text-muted hover:text-ink hover:bg-paper'
                  }`}
                >
                  <Share2 size={18} className={activeTab === 'channels' ? 'text-accent' : ''} />
                  <span>🌐 THREAD & LINKEDIN</span>
                </button>
              </div>

              {/* TAB 1: 📸 AI-Generated Visual Banner */}
              {activeTab === 'image' && (
                <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-in fade-in duration-150">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-ink">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Pill variant="accent">LIVE GENERATED ASSET</Pill>
                        <Pill variant="default">{toolOutput.image.style}</Pill>
                      </div>
                      <h4 className="font-display font-black text-xl sm:text-2xl text-ink uppercase">
                        AI-GENERATED POST GRAPHIC
                      </h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => handleDownloadImage(toolOutput.image.imageUrl)}
                        icon={<Download size={18} strokeWidth={2.5} />}
                      >
                        DOWNLOAD IMAGE
                      </Button>
                    </div>
                  </div>

                  {/* Image Display & Prompt Card */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Visual Preview Box */}
                    <div className="lg:col-span-6">
                      <div className="border-4 border-ink bg-ink shadow-[6px_6px_0px_0px_var(--ink)] relative overflow-hidden aspect-square flex items-center justify-center">
                        {toolOutput.image.imageUrl ? (
                          <img
                            src={toolOutput.image.imageUrl}
                            alt={toolOutput.image.prompt}
                            className="w-full h-full object-cover transition-opacity duration-300"
                            loading="lazy"
                            onLoad={() => setImageLoaded(true)}
                          />
                        ) : (
                          <div className="p-8 text-center text-paper font-mono text-sm">
                            RENDERING HIGH-CONTRAST DIGITAL GRAPHIC...
                          </div>
                        )}
                        <div className="absolute bottom-3 right-3 bg-ink/90 text-accent font-mono text-[10px] font-bold px-2 py-1 border border-accent">
                          1080 × 1080 • HIGH-CONTRAST
                        </div>
                      </div>
                    </div>

                    {/* Metadata & Actions */}
                    <div className="lg:col-span-6 space-y-4">
                      <div className="p-5 bg-paper-2 border-2 sm:border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)]">
                        <span className="font-mono text-xs font-black uppercase text-muted mb-2 block">
                          // SYNTHESIZED IMAGE PROMPT
                        </span>
                        <p className="font-mono text-xs sm:text-sm text-ink leading-relaxed">
                          "{toolOutput.image.prompt}"
                        </p>
                        <div className="mt-4 pt-3 border-t-2 border-ink flex justify-between items-center">
                          <button
                            type="button"
                            onClick={() => handleCopy(toolOutput.image.prompt, 'image prompt')}
                            className="font-mono text-xs font-bold uppercase text-ink hover:text-accent flex items-center gap-1.5 cursor-pointer"
                          >
                            <Copy size={14} />
                            {copiedSection === 'image prompt' ? 'COPIED!' : 'COPY PROMPT'}
                          </button>
                          <span className="font-mono text-[10px] text-muted">
                            ENGINE: POLLINATIONS (FREE/UNLIMITED)
                          </span>
                        </div>
                      </div>

                      <div className="p-5 bg-accent/20 border-2 border-ink shadow-[4px_4px_0px_0px_var(--ink)] space-y-2">
                        <span className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                          <Zap size={14} className="fill-accent text-accent" />
                          PUBLISHING INSTRUCTIONS:
                        </span>
                        <ul className="font-mono text-xs text-ink/90 space-y-1 list-disc list-inside">
                          <li>Click "Download Image" to save to your camera roll or desktop.</li>
                          <li>Attach as the primary visual for Instagram carousel, X post, or LinkedIn banner.</li>
                          <li>Pair directly with the generated captions in Tab 3.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: 🎬 Video Reel Script (Storyboard) */}
              {activeTab === 'video' && (
                <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-in fade-in duration-150">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-ink">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Pill variant="accent">30-45S SHORT-FORM STORYBOARD</Pill>
                        <Pill variant="default">{toolOutput.videoScript.musicVibe}</Pill>
                      </div>
                      <h4 className="font-display font-black text-xl sm:text-2xl text-ink uppercase">
                        {toolOutput.videoScript.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button
                        variant="secondary"
                        size="md"
                        onClick={() => {
                          const scriptText = toolOutput.videoScript.scenes
                            .map(
                              (s) =>
                                `[${s.timing}] SCENE ${s.sceneNumber}\nVISUAL: ${s.visual}\nVOICEOVER: "${s.voiceover}"\nON-SCREEN TEXT: ${s.onScreenText}`
                            )
                            .join('\n\n');
                          handleCopy(scriptText, 'video script');
                        }}
                        icon={<Copy size={16} strokeWidth={2.5} />}
                      >
                        {copiedSection === 'video script' ? 'COPIED!' : 'COPY REEL SCRIPT'}
                      </Button>
                    </div>
                  </div>

                  {/* 4-Scene Storyboard Grid / Table */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {toolOutput.videoScript.scenes.map((scene) => (
                      <div
                        key={scene.sceneNumber}
                        className="bg-paper-2 border-2 sm:border-4 border-ink p-5 shadow-[4px_4px_0px_0px_var(--ink)] flex flex-col justify-between space-y-4"
                      >
                        <div>
                          {/* Scene Header */}
                          <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-ink">
                            <span className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                              <span className="w-5 h-5 bg-accent text-accent-ink border border-ink flex items-center justify-center font-bold">
                                {scene.sceneNumber}
                              </span>
                              SCENE {scene.sceneNumber}
                            </span>
                            <span className="font-mono text-xs bg-ink text-paper px-2 py-0.5 font-bold flex items-center gap-1">
                              <Clock size={12} />
                              {scene.timing}
                            </span>
                          </div>

                          {/* Visual Direction */}
                          <div className="mb-3">
                            <div className="font-mono text-[10px] font-black uppercase text-muted flex items-center gap-1 mb-1">
                              <Eye size={12} />
                              VISUAL DIRECTION:
                            </div>
                            <p className="font-sans text-xs sm:text-sm text-ink font-semibold">
                              {scene.visual}
                            </p>
                          </div>

                          {/* Voiceover Audio */}
                          <div className="mb-3 p-3 bg-paper border-2 border-ink">
                            <div className="font-mono text-[10px] font-black uppercase text-muted flex items-center gap-1 mb-1">
                              <Volume2 size={12} />
                              SPOKEN VOICEOVER:
                            </div>
                            <p className="font-mono text-xs sm:text-sm text-ink font-bold">
                              "{scene.voiceover}"
                            </p>
                          </div>
                        </div>

                        {/* On-Screen Text Overlay */}
                        <div className="pt-2 border-t border-ink">
                          <div className="font-mono text-[10px] font-black uppercase text-muted flex items-center gap-1 mb-1">
                            <Type size={12} />
                            ON-SCREEN TEXT OVERLAY:
                          </div>
                          <span className="inline-block bg-accent text-accent-ink px-2 py-1 font-mono text-xs font-black uppercase border border-ink shadow-[2px_2px_0px_0px_var(--ink)]">
                            {scene.onScreenText}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: ✍️ Ready-to-Post Captions */}
              {activeTab === 'caption' && (
                <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-in fade-in duration-150">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-ink">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Pill variant="accent">COPYWRITING ENGINE</Pill>
                        <Pill variant="default">HIGH CONVERSION</Pill>
                      </div>
                      <h4 className="font-display font-black text-xl sm:text-2xl text-ink uppercase">
                        READY-TO-POST SOCIAL CAPTION
                      </h4>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => {
                          const fullCaption = `${toolOutput.caption.hook}\n\n${toolOutput.caption.body}\n\n${toolOutput.caption.callToAction}\n\n${toolOutput.caption.hashtags.join(' ')}`;
                          handleCopy(fullCaption, 'social caption');
                        }}
                        icon={<Copy size={18} strokeWidth={2.5} />}
                      >
                        {copiedSection === 'social caption' ? 'COPIED!' : 'COPY CAPTION'}
                      </Button>

                      <a
                        href={getTwitterShareUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="dark"
                          size="md"
                          icon={<ExternalLink size={16} strokeWidth={2.5} className="text-accent" />}
                        >
                          POST TO X / TWITTER ↵
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Scroll-stopping Hook */}
                  <div className="p-5 sm:p-6 bg-accent/20 border-l-8 border-accent border-2 border-ink shadow-[4px_4px_0px_0px_var(--ink)]">
                    <span className="font-mono text-xs font-black uppercase text-ink block mb-1">
                      ⚡ THE SCROLL-STOPPING HOOK (FIRST 2 LINES):
                    </span>
                    <p className="font-sans text-base sm:text-lg text-ink font-bold leading-snug">
                      "{toolOutput.caption.hook}"
                    </p>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 bg-paper-2 border-2 sm:border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)] font-mono text-sm sm:text-base text-ink leading-relaxed whitespace-pre-wrap select-text">
                    {toolOutput.caption.body}
                  </div>

                  {/* Call to action & Hashtags */}
                  <div className="p-5 bg-paper border-2 sm:border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)] space-y-4">
                    <div>
                      <span className="font-mono text-xs font-black uppercase text-muted block mb-1">
                        CALL TO ACTION:
                      </span>
                      <p className="font-sans text-sm font-bold text-ink">
                        {toolOutput.caption.callToAction}
                      </p>
                    </div>

                    <div className="pt-3 border-t-2 border-ink">
                      <span className="font-mono text-xs font-black uppercase text-muted block mb-2">
                        TRENDING & NICHE HASHTAGS:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {toolOutput.caption.hashtags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-paper-2 border border-ink font-mono text-xs font-bold text-ink"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: 🌐 Multi-Channel Sequences (X Thread & LinkedIn) */}
              {activeTab === 'channels' && (
                <div className="p-6 sm:p-8 lg:p-10 space-y-8 animate-in fade-in duration-150">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-ink">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Pill variant="accent">OMNI-CHANNEL DISTRIBUTION</Pill>
                        <Pill variant="default">THREAD & ESSAY FORMATS</Pill>
                      </div>
                      <h4 className="font-display font-black text-xl sm:text-2xl text-ink uppercase">
                        MULTI-CHANNEL SEQUENCES
                      </h4>
                    </div>

                    <Button
                      variant="primary"
                      size="md"
                      onClick={copyFullMarkdown}
                      icon={<Copy size={18} strokeWidth={2.5} />}
                    >
                      COPY ALL CHANNELS
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {toolOutput.channels.map((channel) => (
                      <div
                        key={channel.id}
                        className="bg-paper-2 border-4 border-ink p-6 shadow-[6px_6px_0px_0px_var(--ink)] flex flex-col justify-between space-y-6"
                      >
                        <div>
                          <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-ink">
                            <span className="font-mono text-xs font-black uppercase text-ink">
                              {channel.platform}
                            </span>
                            <span className="font-mono text-[10px] bg-accent text-accent-ink px-2 py-0.5 font-bold">
                              {channel.format}
                            </span>
                          </div>

                          <h5 className="font-display font-black text-lg text-ink uppercase mb-3">
                            {channel.title}
                          </h5>

                          <div className="p-4 bg-paper border-2 border-ink font-mono text-xs text-ink leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto">
                            {channel.body}
                          </div>
                        </div>

                        <div className="pt-3 border-t-2 border-ink flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => handleCopy(channel.body, channel.platform)}
                            className="font-mono text-xs font-bold uppercase text-ink hover:text-accent flex items-center gap-1.5 cursor-pointer"
                          >
                            <Copy size={14} />
                            {copiedSection === channel.platform ? 'COPIED!' : 'COPY CHANNEL'}
                          </button>

                          {channel.id === 'twitter' && (
                            <a
                              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                                channel.hook
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-xs font-bold uppercase text-ink hover:underline flex items-center gap-1"
                            >
                              TWEET HOOK ↵
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: 📱 Live Social Media Mockup View */}
              {activeTab === 'mockup' && (
                <div className="p-6 sm:p-8 lg:p-10">
                  <MockupTab
                    toolOutput={toolOutput}
                    toolInput={toolInput}
                    onCopyCaption={() => {
                      const fullCaption = `${toolOutput.caption.hook}\n\n${toolOutput.caption.body}\n\n${toolOutput.caption.callToAction}\n\n${toolOutput.caption.hashtags.join(' ')}`;
                      handleCopy(fullCaption, 'social caption');
                    }}
                    onDownloadImage={() => handleDownloadImage(toolOutput.image.imageUrl)}
                    getTwitterShareUrl={getTwitterShareUrl}
                  />
                </div>
              )}
            </div>

            {/* Quick Actions Footer Card */}
            <div className="bg-paper-2 border-4 border-ink p-6 shadow-[4px_4px_0px_0px_var(--ink)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="font-mono text-xs text-ink font-bold">
                💡 <span className="underline">PRO TIP:</span> Pair the AI image with the caption for maximum algorithmic reach on Instagram, LinkedIn, and X.
              </div>
              <div className="flex gap-3">
                <a href="#studio">
                  <Button variant="secondary" size="sm" icon={<Sliders size={14} />}>
                    RE-TUNE CONTEXT & PERSONA
                  </Button>
                </a>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={copyFullMarkdown}
                  icon={<Copy size={14} />}
                >
                  COPY COMPLETE ASSET BUNDLE (MD)
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};
