import React, { useState } from 'react';
import {
  Smartphone,
  Monitor,
  Heart,
  MessageCircle,
  Repeat2,
  Bookmark,
  Share2,
  MoreHorizontal,
  ExternalLink,
  Download,
  Copy,
  Check,
  Zap,
  Sparkles,
  Music,
  ThumbsUp,
  Lightbulb,
  Award,
} from 'lucide-react';
import { Pill } from '../ui/Pill';
import { Button } from '../ui/Button';
import { ToolOutput, ToolInput } from '../../config/types';
import { useFlexStore } from '../../lib/store';

interface MockupTabProps {
  toolOutput: ToolOutput;
  toolInput: ToolInput | null;
  onCopyCaption: () => void;
  onDownloadImage: () => void;
  getTwitterShareUrl: () => string;
}

type PlatformFilter = 'all' | 'twitter' | 'instagram' | 'tiktok' | 'linkedin';

export const MockupTab: React.FC<MockupTabProps> = ({
  toolOutput,
  toolInput,
  onCopyCaption,
  onDownloadImage,
  getTwitterShareUrl,
}) => {
  const [filter, setFilter] = useState<PlatformFilter>('all');
  const [likedTwitter, setLikedTwitter] = useState(false);
  const [likedInsta, setLikedInsta] = useState(false);
  const [likedTiktok, setLikedTiktok] = useState(false);
  const [likedLinkedIn, setLikedLinkedIn] = useState(false);
  const [showFullCaption, setShowFullCaption] = useState(false);

  const userRole = toolInput?.userRole || 'Tech Founder & Builder';
  const aiRole = toolInput?.aiRole || 'Viral Social Media Growth Strategist';
  const cleanHandle = userRole
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .slice(0, 16);

  const imageUrl =
    toolOutput.image.imageUrl ||
    `https://image.pollinations.ai/prompt/${encodeURIComponent(
      toolOutput.image.prompt
    )}?width=1080&height=1080&nologo=true`;

  return (
    <div className="space-y-8 animate-tab-fade">
      {/* Top Filter and Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-ink">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <Pill variant="accent">
              <span className="w-2 h-2 rounded-full bg-ink inline-block animate-ping" />
              LIVE FEED SIMULATOR
            </Pill>
            <Pill variant="default">HIGH-FIDELITY MOCKUPS</Pill>
            <span className="font-mono text-xs text-muted font-bold">
              POSTED VIA NEOFORGE
            </span>
          </div>
          <h4 className="font-display font-black text-xl sm:text-2xl text-ink uppercase tracking-tight">
            SOCIAL MEDIA MOCKUP PREVIEW
          </h4>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={onDownloadImage}
            icon={<Download size={14} />}
          >
            DOWNLOAD BANNER
          </Button>
          <a href={getTwitterShareUrl()} target="_blank" rel="noopener noreferrer">
            <Button
              variant="dark"
              size="sm"
              icon={<ExternalLink size={14} className="text-accent" />}
            >
              POST TO X ↵
            </Button>
          </a>
        </div>
      </div>

      {/* Platform Switcher Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`px-3.5 py-1.5 font-mono text-xs font-black uppercase border-2 border-ink cursor-pointer transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 ${
            filter === 'all'
              ? 'bg-ink text-paper shadow-[3px_3px_0px_0px_var(--accent)] -translate-y-0.5'
              : 'bg-paper-2 text-ink hover:bg-paper'
          }`}
        >
          ALL FEEDS (4 MOCKUPS)
        </button>
        <button
          type="button"
          onClick={() => setFilter('twitter')}
          className={`px-3.5 py-1.5 font-mono text-xs font-black uppercase border-2 border-ink cursor-pointer transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 ${
            filter === 'twitter'
              ? 'bg-accent text-accent-ink shadow-[3px_3px_0px_0px_var(--ink)] -translate-y-0.5'
              : 'bg-paper-2 text-ink hover:bg-paper'
          }`}
        >
          𝕏 / TWITTER FEED
        </button>
        <button
          type="button"
          onClick={() => setFilter('instagram')}
          className={`px-3.5 py-1.5 font-mono text-xs font-black uppercase border-2 border-ink cursor-pointer transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 ${
            filter === 'instagram'
              ? 'bg-accent text-accent-ink shadow-[3px_3px_0px_0px_var(--ink)] -translate-y-0.5'
              : 'bg-paper-2 text-ink hover:bg-paper'
          }`}
        >
          📸 INSTAGRAM POST
        </button>
        <button
          type="button"
          onClick={() => setFilter('tiktok')}
          className={`px-3.5 py-1.5 font-mono text-xs font-black uppercase border-2 border-ink cursor-pointer transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 ${
            filter === 'tiktok'
              ? 'bg-accent text-accent-ink shadow-[3px_3px_0px_0px_var(--ink)] -translate-y-0.5'
              : 'bg-paper-2 text-ink hover:bg-paper'
          }`}
        >
          🎬 TIKTOK / REELS MOBILE
        </button>
        <button
          type="button"
          onClick={() => setFilter('linkedin')}
          className={`px-3.5 py-1.5 font-mono text-xs font-black uppercase border-2 border-ink cursor-pointer transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 ${
            filter === 'linkedin'
              ? 'bg-accent text-accent-ink shadow-[3px_3px_0px_0px_var(--ink)] -translate-y-0.5'
              : 'bg-paper-2 text-ink hover:bg-paper'
          }`}
        >
          💼 LINKEDIN EXECUTIVE
        </button>
      </div>

      {/* Grid of Mockups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* ============================================================ */}
        {/* 1. X / TWITTER FEED POST MOCKUP */}
        {/* ============================================================ */}
        {(filter === 'all' || filter === 'twitter') && (
          <div className="bg-paper border-4 border-ink shadow-[6px_6px_0px_0px_var(--ink)] hover:shadow-[10px_10px_0px_0px_var(--ink)] hover:-translate-y-1 transition-all duration-200 p-5 sm:p-6 space-y-4">
            {/* Mockup Platform Header */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-ink">
              <span className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#000] inline-block" />
                𝕏 / TWITTER FEED POST
              </span>
              <span className="font-mono text-[10px] bg-accent text-accent-ink px-2 py-0.5 font-bold">
                POSTED VIA NEOFORGE
              </span>
            </div>

            {/* Tweet Author Row */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent text-accent-ink border-2 border-ink rounded-full flex items-center justify-center font-display font-black text-lg shadow-[2px_2px_0px_0px_var(--ink)] shrink-0">
                  {userRole.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-black text-sm text-ink leading-tight">
                      {userRole}
                    </span>
                    <span className="w-4 h-4 bg-[#1D9BF0] text-white rounded-full flex items-center justify-center text-[9px] font-bold">
                      ✓
                    </span>
                  </div>
                  <div className="font-mono text-xs text-muted">
                    @{cleanHandle} • 2m
                  </div>
                </div>
              </div>
              <MoreHorizontal size={18} className="text-muted" />
            </div>

            {/* Tweet Body */}
            <div className="font-sans text-sm sm:text-base text-ink leading-relaxed space-y-2">
              <p className="font-bold">{toolOutput.caption.hook}</p>
              <p className="text-sm font-normal text-ink/90 whitespace-pre-line line-clamp-3">
                {toolOutput.caption.body}
              </p>
              <div className="flex flex-wrap gap-1 font-mono text-xs text-[#1D9BF0] font-bold">
                {toolOutput.caption.hashtags.slice(0, 3).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* Embedded Post Image Banner */}
            <div className="border-2 sm:border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)] overflow-hidden relative group">
              <img
                src={imageUrl}
                alt={toolOutput.image.prompt}
                className="w-full aspect-16/9 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 bg-ink/90 text-accent font-mono text-[9px] font-bold px-1.5 py-0.5 border border-accent">
                POST GRAPHIC // 1080×1080
              </div>
            </div>

            {/* Tweet Engagement Metrics Bar */}
            <div className="pt-3 border-t-2 border-ink flex items-center justify-between font-mono text-xs text-muted select-none">
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-[#1D9BF0] active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle size={15} />
                <span>38</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-[#00BA7C] active:scale-95 transition-all cursor-pointer"
              >
                <Repeat2 size={16} />
                <span>242</span>
              </button>
              <button
                type="button"
                onClick={() => setLikedTwitter(!likedTwitter)}
                className={`flex items-center gap-1.5 cursor-pointer active:scale-90 transition-all ${
                  likedTwitter ? 'text-[#F91880]' : 'hover:text-[#F91880]'
                }`}
              >
                <Heart
                  size={15}
                  className={`${likedTwitter ? 'fill-current animate-heart-pop' : ''}`}
                />
                <span>{likedTwitter ? '1,843' : '1,842'}</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-[#1D9BF0] active:scale-95 transition-all cursor-pointer"
              >
                <Bookmark size={15} />
                <span>384</span>
              </button>
              <a
                href={getTwitterShareUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink font-bold hover:underline flex items-center gap-1 hover:text-accent transition-colors"
              >
                <Share2 size={14} />
                <span className="hidden sm:inline">POST</span>
              </a>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* 2. INSTAGRAM FEED POST MOCKUP */}
        {/* ============================================================ */}
        {(filter === 'all' || filter === 'instagram') && (
          <div className="bg-paper border-4 border-ink shadow-[6px_6px_0px_0px_var(--ink)] hover:shadow-[10px_10px_0px_0px_var(--ink)] hover:-translate-y-1 transition-all duration-200 p-5 sm:p-6 space-y-4">
            {/* Mockup Header */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-ink">
              <span className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E1306C] inline-block" />
                INSTAGRAM FEED POST
              </span>
              <span className="font-mono text-[10px] bg-paper-2 border border-ink px-2 py-0.5 font-bold">
                1:1 SQUARE
              </span>
            </div>

            {/* Profile Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full p-0.5 border-2 border-[#E1306C] flex items-center justify-center">
                  <div className="w-full h-full bg-accent text-accent-ink rounded-full flex items-center justify-center font-bold text-xs">
                    {userRole.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 font-mono text-xs font-black text-ink">
                    <span>{cleanHandle}</span>
                    <span className="text-[#1D9BF0]">●</span>
                  </div>
                  <div className="font-mono text-[10px] text-muted">
                    Original Audio • {toolOutput.videoScript.musicVibe.slice(0, 20)}...
                  </div>
                </div>
              </div>
              <MoreHorizontal size={18} className="text-muted" />
            </div>

            {/* Main Instagram Photo/Graphic */}
            <div className="border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)] overflow-hidden relative aspect-square bg-ink group">
              <img
                src={imageUrl}
                alt={toolOutput.image.prompt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-ink/90 text-accent border border-accent px-2 py-0.5 font-mono text-[9px] font-bold">
                NEOFORGE STUDIO
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setLikedInsta(!likedInsta)}
                  className={`cursor-pointer transition-all active:scale-90 ${
                    likedInsta ? 'text-[#FF3040]' : 'text-ink hover:text-[#FF3040]'
                  }`}
                >
                  <Heart
                    size={20}
                    className={`${likedInsta ? 'fill-current animate-heart-pop' : ''}`}
                  />
                </button>
                <button type="button" className="text-ink hover:opacity-75 active:scale-95 transition-all cursor-pointer">
                  <MessageCircle size={20} />
                </button>
                <button type="button" className="text-ink hover:opacity-75 active:scale-95 transition-all cursor-pointer">
                  <Share2 size={19} />
                </button>
              </div>
              <button type="button" className="text-ink hover:opacity-75 active:scale-95 transition-all cursor-pointer">
                <Bookmark size={20} />
              </button>
            </div>

            {/* Like Counter & Caption */}
            <div className="font-sans text-xs space-y-1.5">
              <div className="font-mono font-bold text-ink">
                Liked by <span className="font-black">growth_lead</span> and{' '}
                <span className="font-black">{likedInsta ? '4,821 others' : '4,820 others'}</span>
              </div>
              <div className="text-ink leading-relaxed">
                <span className="font-mono font-black mr-1.5">{cleanHandle}</span>
                <span className="font-bold">{toolOutput.caption.hook} </span>
                {showFullCaption ? (
                  <span className="whitespace-pre-line text-ink/90 font-normal">
                    {toolOutput.caption.body}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowFullCaption(true)}
                    className="text-muted font-mono hover:text-ink cursor-pointer ml-1 font-bold"
                  >
                    ...more
                  </button>
                )}
              </div>
              <div className="font-mono text-[11px] text-[#00376B] font-semibold flex flex-wrap gap-1">
                {toolOutput.caption.hashtags.map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </div>
              <div className="font-mono text-[10px] text-muted uppercase pt-1">
                View all 84 comments • 3 HOURS AGO
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* 3. TIKTOK / REELS MOBILE SMARTPHONE SHELL */}
        {/* ============================================================ */}
        {(filter === 'all' || filter === 'tiktok') && (
          <div className="bg-paper border-4 border-ink shadow-[6px_6px_0px_0px_var(--ink)] hover:shadow-[10px_10px_0px_0px_var(--ink)] hover:-translate-y-1 transition-all duration-200 p-5 sm:p-6 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-ink">
              <span className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                <Smartphone size={14} className="text-accent" />
                TIKTOK / REELS 9:16 VERTICAL SHELL
              </span>
              <span className="font-mono text-[10px] bg-ink text-paper px-2 py-0.5 font-bold">
                {toolOutput.videoScript.duration}
              </span>
            </div>

            {/* Smartphone Phone Frame Container */}
            <div className="mx-auto max-w-[340px] bg-ink border-4 border-ink rounded-3xl p-3 shadow-[8px_8px_0px_0px_var(--ink)] relative overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
              {/* Phone Notch */}
              <div className="w-24 h-4 bg-ink border border-paper/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-paper/30" />
              </div>

              {/* 9:16 Screen Viewport */}
              <div className="relative aspect-[9/16] bg-paper-2 rounded-2xl overflow-hidden border-2 border-paper/20 flex flex-col justify-between p-4">
                {/* Background visual banner with subtle overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={imageUrl}
                    alt={toolOutput.image.prompt}
                    className="w-full h-full object-cover opacity-85 transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/90" />
                </div>

                {/* Top Overlay: Audio & Status */}
                <div className="relative z-10 flex items-center justify-between text-paper font-mono text-[10px]">
                  <div className="bg-ink/70 px-2 py-1 border border-paper/30 rounded-full flex items-center gap-1">
                    <Music size={10} className="animate-spin" />
                    <span>ORIGINAL SOUND</span>
                  </div>
                  <span className="bg-accent text-accent-ink font-bold px-1.5 py-0.5">
                    {toolOutput.videoScript.duration}
                  </span>
                </div>

                {/* Center Dynamic Video Scene Caption Overlay */}
                <div className="relative z-10 my-auto text-center px-2">
                  <div className="inline-block bg-accent text-accent-ink px-3 py-1.5 border-2 border-ink shadow-[3px_3px_0px_0px_#000] font-display font-black text-sm uppercase -rotate-1 hover:rotate-0 transition-transform">
                    {toolOutput.videoScript.scenes[0]?.onScreenText || 'STOP DOING THIS 🛑'}
                  </div>
                  <div className="mt-2 bg-ink/85 text-paper border border-paper/30 p-2 text-xs font-mono font-bold">
                    "{toolOutput.videoScript.scenes[0]?.voiceover.slice(0, 90)}..."
                  </div>
                </div>

                {/* Right Side Floating TikTok Action Column */}
                <div className="absolute right-3 bottom-20 z-10 flex flex-col items-center gap-4 text-paper">
                  <div className="w-10 h-10 rounded-full bg-accent border-2 border-ink flex items-center justify-center font-bold text-xs text-accent-ink shadow-[2px_2px_0px_0px_#FFF]">
                    {userRole.charAt(0)}
                  </div>

                  <button
                    type="button"
                    onClick={() => setLikedTiktok(!likedTiktok)}
                    className="flex flex-col items-center gap-0.5 cursor-pointer active:scale-90 transition-transform"
                  >
                    <Heart
                      size={24}
                      className={likedTiktok ? 'fill-[#FE2C55] text-[#FE2C55] animate-heart-pop' : 'text-paper hover:text-[#FE2C55]'}
                    />
                    <span className="font-mono text-[10px] font-bold">
                      {likedTiktok ? '54.3K' : '54.2K'}
                    </span>
                  </button>

                  <div className="flex flex-col items-center gap-0.5 hover:text-accent transition-colors cursor-pointer">
                    <MessageCircle size={24} className="text-paper hover:text-accent" />
                    <span className="font-mono text-[10px] font-bold">1,824</span>
                  </div>

                  <div className="flex flex-col items-center gap-0.5 hover:text-accent transition-colors cursor-pointer">
                    <Bookmark size={24} className="text-paper hover:text-accent" />
                    <span className="font-mono text-[10px] font-bold">9,410</span>
                  </div>

                  <div className="flex flex-col items-center gap-0.5 hover:text-accent transition-colors cursor-pointer">
                    <Share2 size={24} className="text-paper hover:text-accent" />
                    <span className="font-mono text-[10px] font-bold">3,120</span>
                  </div>

                  {/* Spinning Audio Disc */}
                  <div className="w-9 h-9 rounded-full bg-ink border-2 border-accent flex items-center justify-center animate-[spin_4s_linear_infinite]">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                </div>

                {/* Bottom Left Creator Tag & Caption */}
                <div className="relative z-10 text-paper font-sans text-xs space-y-1 pr-12">
                  <div className="font-mono font-black text-sm text-accent">
                    @{cleanHandle}
                  </div>
                  <p className="line-clamp-2 text-[11px] leading-tight font-medium">
                    {toolOutput.videoScript.title} — {toolOutput.caption.hook}
                  </p>
                  <div className="font-mono text-[10px] text-paper/80 flex items-center gap-1">
                    <Music size={10} />
                    <span>{toolOutput.videoScript.musicVibe}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* 4. LINKEDIN THOUGHT LEADERSHIP MOCKUP */}
        {/* ============================================================ */}
        {(filter === 'all' || filter === 'linkedin') && (
          <div className="bg-paper border-4 border-ink shadow-[6px_6px_0px_0px_var(--ink)] hover:shadow-[10px_10px_0px_0px_var(--ink)] hover:-translate-y-1 transition-all duration-200 p-5 sm:p-6 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-ink">
              <span className="font-mono text-xs font-black uppercase text-ink flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0A66C2] inline-block" />
                LINKEDIN EXECUTIVE ESSAY
              </span>
              <span className="font-mono text-[10px] bg-accent text-accent-ink px-2 py-0.5 font-bold">
                THOUGHT LEADERSHIP
              </span>
            </div>

            {/* Author Card */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent text-accent-ink border-2 border-ink flex items-center justify-center font-display font-black text-lg shadow-[2px_2px_0px_0px_var(--ink)] shrink-0">
                  {userRole.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-display font-black text-sm text-ink">
                      {userRole}
                    </span>
                    <span className="font-mono text-[10px] text-muted">• 1st</span>
                  </div>
                  <div className="font-mono text-[11px] text-muted leading-tight">
                    Director of Strategy // Powered by NEOFORGE Studio
                  </div>
                  <div className="font-mono text-[10px] text-muted">
                    2h • Edited • 🌐
                  </div>
                </div>
              </div>
              <MoreHorizontal size={18} className="text-muted" />
            </div>

            {/* Post Essay Body */}
            <div className="font-sans text-xs sm:text-sm text-ink leading-relaxed space-y-2 whitespace-pre-line">
              <p className="font-bold">{toolOutput.caption.hook}</p>
              <p className="font-normal text-ink/90 line-clamp-4">
                {toolOutput.caption.body}
              </p>
              <div className="font-mono text-xs text-[#0A66C2] font-bold">
                {toolOutput.caption.hashtags.slice(0, 4).join(' ')}
              </div>
            </div>

            {/* Attached Graphic Card */}
            <div className="border-2 sm:border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)] overflow-hidden group">
              <img
                src={imageUrl}
                alt={toolOutput.image.prompt}
                className="w-full aspect-16/9 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="p-3 bg-paper-2 border-t-2 border-ink flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs font-black uppercase text-ink">
                    {toolOutput.headline}
                  </div>
                  <div className="font-mono text-[10px] text-muted">
                    neoforge.ai • 1 min read
                  </div>
                </div>
                <Button variant="primary" size="sm" onClick={onCopyCaption}>
                  VIEW
                </Button>
              </div>
            </div>

            {/* Reactions bar */}
            <div className="pt-2 border-t border-ink flex items-center justify-between font-mono text-xs text-muted">
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 bg-[#0A66C2] text-white rounded-full flex items-center justify-center text-[10px]">
                  👍
                </span>
                <span className="w-4 h-4 bg-[#057642] text-white rounded-full flex items-center justify-center text-[10px]">
                  👏
                </span>
                <span className="w-4 h-4 bg-[#DF704D] text-white rounded-full flex items-center justify-center text-[10px]">
                  💡
                </span>
                <span className="ml-1 text-ink font-bold">
                  {likedLinkedIn ? '843' : '842'} reactions
                </span>
              </div>
              <span>94 comments • 38 reposts</span>
            </div>

            {/* Interaction Buttons */}
            <div className="pt-2 border-t-2 border-ink flex items-center justify-between font-mono text-xs text-ink font-bold select-none">
              <button
                type="button"
                onClick={() => setLikedLinkedIn(!likedLinkedIn)}
                className={`flex items-center gap-1 cursor-pointer active:scale-95 transition-all ${
                  likedLinkedIn ? 'text-[#0A66C2]' : 'hover:text-[#0A66C2]'
                }`}
              >
                <ThumbsUp size={16} className={likedLinkedIn ? 'animate-heart-pop' : ''} />
                <span>Like</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#0A66C2] active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Comment</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#0A66C2] active:scale-95 transition-all cursor-pointer"
              >
                <Repeat2 size={16} />
                <span>Repost</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#0A66C2] active:scale-95 transition-all cursor-pointer"
              >
                <Share2 size={16} />
                <span>Send</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* 5. PREVIOUS MOCKUP SHOWCASE (POSTED VIA NEOFORGE) */}
      {/* ============================================================ */}
      <div className="mt-12 pt-8 border-t-4 border-ink space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-accent rounded-full animate-ping" />
              <span className="font-mono text-xs font-black uppercase text-ink">
                RECENT MOCKUPS POSTED VIA APPLICATION
              </span>
            </div>
            <p className="font-mono text-xs text-muted">
              Live multi-channel mockups forged and deployed by creators, founders & coaches
            </p>
          </div>
          <span className="font-mono text-[10px] bg-paper-2 border border-ink px-2 py-1 font-bold">
            PROD_FEED • EVAL_N=4
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Tech Founder */}
          <div className="bg-paper-2 border-2 sm:border-4 border-ink p-4 shadow-[4px_4px_0px_0px_var(--ink)] flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-ink">
                <span className="font-mono text-[10px] font-black uppercase text-ink bg-accent px-1.5 py-0.5">
                  𝕏 / TWITTER
                </span>
                <span className="font-mono text-[10px] text-muted">14.2K Likes</span>
              </div>
              <div className="aspect-video bg-ink border border-ink overflow-hidden mb-2">
                <img
                  src="https://image.pollinations.ai/prompt/Neo-brutalist%20graphic%20poster%20of%20a%20futuristic%20robotic%20forge%20stamping%20bold%20glowing%20typography%20on%20newsprint%20paper%2C%20high-contrast%20black%20and%20acid%20lime%2C%20cinematic%20lighting?width=600&height=340&nologo=true"
                  alt="Tech Founder Mockup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h5 className="font-display font-black text-xs text-ink uppercase leading-snug">
                THE DEATH OF THE CHATBOT WRAPPER
              </h5>
              <p className="font-mono text-[10px] text-muted mt-1">
                Author: Tech Founder & AI Builder
              </p>
            </div>
            <div className="pt-2 border-t border-ink flex items-center justify-between font-mono text-[10px]">
              <span className="text-[#10B981] font-bold">✓ 320K Views</span>
              <span className="font-bold text-ink">98% Fit</span>
            </div>
          </div>

          {/* Card 2: Fitness Coach */}
          <div className="bg-paper-2 border-2 sm:border-4 border-ink p-4 shadow-[4px_4px_0px_0px_var(--ink)] flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-ink">
                <span className="font-mono text-[10px] font-black uppercase text-ink bg-[#E1306C] text-white px-1.5 py-0.5">
                  INSTAGRAM
                </span>
                <span className="font-mono text-[10px] text-muted">4.8K Likes</span>
              </div>
              <div className="aspect-video bg-ink border border-ink overflow-hidden mb-2">
                <img
                  src="https://image.pollinations.ai/prompt/Neo-brutalist%20fitness%20and%20bodybuilding%20graphic%20poster%2C%20heavy%20iron%20barbells%20and%20bold%20typography%2C%20acid%20lime%20and%20black%20contrast%2C%20raw%20athletic%20power?width=600&height=340&nologo=true"
                  alt="Fitness Coach Mockup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h5 className="font-display font-black text-xs text-ink uppercase leading-snug">
                WHY 2 HOURS OF CARDIO IS FAILING YOU
              </h5>
              <p className="font-mono text-[10px] text-muted mt-1">
                Author: Fitness Coach & Health Specialist
              </p>
            </div>
            <div className="pt-2 border-t border-ink flex items-center justify-between font-mono text-[10px]">
              <span className="text-[#10B981] font-bold">✓ 1.2K Saves</span>
              <span className="font-bold text-ink">4-Scene Reel</span>
            </div>
          </div>

          {/* Card 3: E-commerce */}
          <div className="bg-paper-2 border-2 sm:border-4 border-ink p-4 shadow-[4px_4px_0px_0px_var(--ink)] flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-ink">
                <span className="font-mono text-[10px] font-black uppercase text-ink bg-ink text-paper px-1.5 py-0.5">
                  TIKTOK
                </span>
                <span className="font-mono text-[10px] text-muted">54.2K Likes</span>
              </div>
              <div className="aspect-video bg-ink border border-ink overflow-hidden mb-2">
                <img
                  src="https://image.pollinations.ai/prompt/Neo-brutalist%20streetwear%20fashion%20poster%2C%20heavyweight%20acid%20wash%20black%20hoodie%20with%20acid%20lime%20metal%20tags%2C%20high-fashion%20editorial%20lighting?width=600&height=340&nologo=true"
                  alt="Streetwear Mockup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h5 className="font-display font-black text-xs text-ink uppercase leading-snug">
                LIMITED 150-PIECE HOODIE DROP
              </h5>
              <p className="font-mono text-[10px] text-muted mt-1">
                Author: E-commerce Brand Owner
              </p>
            </div>
            <div className="pt-2 border-t border-ink flex items-center justify-between font-mono text-[10px]">
              <span className="text-[#10B981] font-bold">✓ Sold Out</span>
              <span className="font-bold text-ink">TikTok 9:16</span>
            </div>
          </div>

          {/* Card 4: Indie Game Dev */}
          <div className="bg-paper-2 border-2 sm:border-4 border-ink p-4 shadow-[4px_4px_0px_0px_var(--ink)] flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-ink">
                <span className="font-mono text-[10px] font-black uppercase text-white bg-[#0A66C2] px-1.5 py-0.5">
                  LINKEDIN
                </span>
                <span className="font-mono text-[10px] text-muted">842 Reactions</span>
              </div>
              <div className="aspect-video bg-ink border border-ink overflow-hidden mb-2">
                <img
                  src="https://image.pollinations.ai/prompt/Neo-brutalist%20indie%20game%20development%20graphic%2C%203D%20wireframe%20mesh%2C%20physics%20raycast%20vectors%2C%20glowing%20code%20terminal%2C%20acid%20lime%20geometry?width=600&height=340&nologo=true"
                  alt="Indie Game Dev Mockup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h5 className="font-display font-black text-xs text-ink uppercase leading-snug">
                PHYSICS RAYCASTER REWRITE IN C#
              </h5>
              <p className="font-mono text-[10px] text-muted mt-1">
                Author: Indie Game Developer
              </p>
            </div>
            <div className="pt-2 border-t border-ink flex items-center justify-between font-mono text-[10px]">
              <span className="text-[#10B981] font-bold">✓ 94 Comments</span>
              <span className="font-bold text-ink">Memo Attached</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
