import React, { useEffect } from 'react';
import {
  X,
  Sliders,
  Sun,
  Moon,
  Key,
  Layers,
  Sparkles,
  Palette,
  Check,
} from 'lucide-react';
import { ACCENT_PRESETS, STYLE_MODES } from '../../config/theme.config';
import { presets } from '../../config/presets';
import { useFlexStore } from '../../lib/store';
import { Pill } from '../ui/Pill';

export const DevPanel: React.FC = () => {
  const {
    devPanelOpen,
    setDevPanelOpen,
    theme,
    toggleTheme,
    styleMode,
    setStyleMode,
    accentId,
    setAccent,
    activePreset,
    setActivePreset,
    userApiKey,
    setUserApiKey,
    showCopiedToast,
  } = useFlexStore();

  // Keyboard shortcut listener: backtick (`)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }
      if (e.key === '`') {
        e.preventDefault();
        setDevPanelOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setDevPanelOpen]);

  if (!devPanelOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-paper border-4 border-ink shadow-[12px_12px_0px_0px_var(--ink)] p-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b-4 border-ink">
          <div className="flex items-center gap-3">
            <div className="p-2 border-2 border-ink bg-accent text-accent-ink shadow-[2px_2px_0px_0px_var(--ink)]">
              <Sliders size={20} strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-black text-xl tracking-tight text-ink uppercase">
                  NEOFORGE DEV PANEL
                </h3>
                <Pill variant="accent">SYS_CTRL</Pill>
              </div>
              <p className="font-mono text-xs text-muted">
                Press <kbd className="px-1.5 py-0.5 border border-ink bg-paper-2 font-bold">`</kbd> (backtick) anytime to toggle
              </p>
            </div>
          </div>
          <button
            onClick={() => setDevPanelOpen(false)}
            className="p-1.5 border-2 border-ink bg-paper-2 hover:bg-accent text-ink shadow-[2px_2px_0px_0px_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
          >
            <X size={20} strokeWidth={3} />
          </button>
        </div>

        {/* Section: Themes & Modes */}
        <div className="space-y-6">
          {/* Theme Mode */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sun size={16} className="text-ink" />
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                Color Mode
              </label>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  if (theme !== 'light') toggleTheme();
                }}
                className={`flex items-center justify-center gap-2 p-3 font-mono text-xs font-black uppercase border-2 border-ink cursor-pointer transition-all ${
                  theme === 'light'
                    ? 'bg-accent text-accent-ink shadow-[3px_3px_0px_0px_var(--ink)]'
                    : 'bg-paper-2 text-ink hover:bg-paper'
                }`}
              >
                <Sun size={16} />
                LIGHT (NEWSPRINT CREAM)
              </button>
              <button
                type="button"
                onClick={() => {
                  if (theme !== 'dark') toggleTheme();
                }}
                className={`flex items-center justify-center gap-2 p-3 font-mono text-xs font-black uppercase border-2 border-ink cursor-pointer transition-all ${
                  theme === 'dark'
                    ? 'bg-accent text-accent-ink shadow-[3px_3px_0px_0px_var(--ink)]'
                    : 'bg-paper-2 text-ink hover:bg-paper'
                }`}
              >
                <Moon size={16} />
                DARK (HIGH-CONTRAST INK)
              </button>
            </div>
          </div>

          {/* Accent Color Presets */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Palette size={16} className="text-ink" />
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                Energy Accent Color
              </label>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {ACCENT_PRESETS.map((accent) => (
                <button
                  key={accent.id}
                  type="button"
                  onClick={() => {
                    setAccent(accent.id);
                    showCopiedToast(`ACCENT CHANGED: ${accent.name.toUpperCase()}`);
                  }}
                  className={`flex flex-col items-center justify-center p-3 border-2 border-ink font-mono text-xs font-black uppercase gap-1.5 cursor-pointer transition-all ${
                    accentId === accent.id
                      ? 'shadow-[4px_4px_0px_0px_var(--ink)] -translate-y-0.5'
                      : 'bg-paper-2 hover:bg-paper'
                  }`}
                  style={{
                    backgroundColor: accentId === accent.id ? accent.hex : undefined,
                    color: accentId === accent.id ? accent.ink : undefined,
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full border-2 border-ink shadow-[1px_1px_0px_0px_var(--ink)] flex items-center justify-center"
                    style={{ backgroundColor: accent.hex }}
                  >
                    {accentId === accent.id && <Check size={12} strokeWidth={3} />}
                  </span>
                  <span className="text-[10px] leading-none text-center">{accent.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Style Modes */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={16} className="text-ink" />
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                Design Hierarchy Mode
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {STYLE_MODES.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setStyleMode(mode.id)}
                  className={`p-3 text-left border-2 border-ink cursor-pointer transition-all ${
                    styleMode === mode.id
                      ? 'bg-ink text-paper shadow-[4px_4px_0px_0px_var(--accent)]'
                      : 'bg-paper-2 text-ink hover:bg-paper'
                  }`}
                >
                  <div className="font-mono font-black text-xs uppercase mb-1 flex items-center justify-between">
                    <span>{mode.name}</span>
                    {styleMode === mode.id && <Sparkles size={12} className="text-accent" />}
                  </div>
                  <div
                    className={`text-[11px] leading-tight ${
                      styleMode === mode.id ? 'text-paper/70' : 'text-muted'
                    }`}
                  >
                    {mode.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Preset Switcher */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-ink" />
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                Page Layout Preset
              </label>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(presets).map(([key, config]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActivePreset(key);
                    showCopiedToast(`PRESET LOADED: ${config.name}`);
                  }}
                  className={`p-2.5 text-left border-2 border-ink cursor-pointer font-mono text-xs font-black uppercase transition-all ${
                    activePreset === key
                      ? 'bg-accent text-accent-ink shadow-[3px_3px_0px_0px_var(--ink)]'
                      : 'bg-paper-2 text-ink hover:bg-paper'
                  }`}
                >
                  <div className="truncate">{config.name}</div>
                  <div className="text-[10px] font-normal opacity-80 truncate">{config.tagline}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Google AI Studio Gemini Key Override */}
          <div className="p-4 border-2 border-ink bg-paper-2">
            <div className="flex items-center gap-2 mb-2">
              <Key size={16} className="text-ink" />
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                Google AI Studio Gemini API Key (Client Override)
              </label>
            </div>
            <p className="font-mono text-[11px] text-muted mb-3">
              Defaults to server environment <code className="bg-paper px-1 border border-ink">GEMINI_API_KEY</code>. You can paste an AI Studio key to test client-direct requests.
            </p>
            <div className="flex gap-2">
              <input
                type="password"
                placeholder="AIzaSy..."
                value={userApiKey}
                onChange={(e) => setUserApiKey(e.target.value)}
                className="flex-1 px-3 py-2 bg-paper border-2 border-ink font-mono text-xs text-ink focus:outline-hidden focus:border-accent"
              />
              {userApiKey && (
                <button
                  type="button"
                  onClick={() => setUserApiKey('')}
                  className="px-3 py-2 font-mono text-xs font-bold uppercase border-2 border-ink bg-paper hover:bg-[#FF4D4D] hover:text-white"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Footer controls */}
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t-2 border-ink">
          <button
            type="button"
            onClick={() => setDevPanelOpen(false)}
            className="px-5 py-2 font-mono text-xs font-black uppercase border-2 border-ink bg-accent text-accent-ink shadow-[2px_2px_0px_0px_var(--ink)] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
          >
            CLOSE PANEL [ESC / `]
          </button>
        </div>
      </div>
    </div>
  );
};
