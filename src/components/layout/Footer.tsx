import React from 'react';
import { ArrowUp, Zap, Shield, Terminal, Globe, Heart } from 'lucide-react';
import { Pill } from '../ui/Pill';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-ink text-paper border-t-8 border-ink pt-16 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Giant Brand Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b-4 border-paper/20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent text-accent-ink border-2 border-paper shadow-[3px_3px_0px_0px_#FFF] flex items-center justify-center font-black">
                <Zap size={22} strokeWidth={3} />
              </div>
              <span className="font-mono text-sm tracking-widest text-accent uppercase font-black">
                NEOFORGE ENGINE // PROD_BUILD
              </span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.85] text-paper">
              RAW IDEAS <br />
              <span className="text-accent underline decoration-4">TO VELOCITY</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="#studio"
              className="px-6 py-4 bg-accent text-accent-ink border-4 border-paper font-mono font-black text-sm uppercase tracking-wider shadow-[4px_4px_0px_0px_#FFF] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#FFF] active:translate-x-1 active:translate-y-1 transition-all"
            >
              FORGE CONTENT NOW ↵
            </a>
            <button
              onClick={scrollToTop}
              className="p-4 bg-paper/10 hover:bg-paper/20 text-paper border-2 border-paper/40 font-mono text-xs font-bold uppercase flex items-center gap-2 cursor-pointer transition-colors"
            >
              <ArrowUp size={18} strokeWidth={2.5} />
              TOP
            </button>
          </div>
        </div>

        {/* 4-Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b-2 border-paper/20 font-mono text-xs">
          <div>
            <div className="font-black text-accent uppercase tracking-widest mb-4">
              // CHANNELS
            </div>
            <ul className="space-y-2.5 text-paper/80 font-bold">
              <li>
                <a href="#studio" className="hover:text-accent hover:underline">
                  Viral X Thread Sequence
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-accent hover:underline">
                  LinkedIn Executive Essay
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-accent hover:underline">
                  Executive 1-Pager Memo
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-accent hover:underline">
                  Product Launch Brief
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-black text-accent uppercase tracking-widest mb-4">
              // ARCHITECTURE
            </div>
            <ul className="space-y-2.5 text-paper/80 font-bold">
              <li>
                <a href="#features" className="hover:text-accent hover:underline">
                  Zero Prompt Gymnastics
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-accent hover:underline">
                  Audience Vector Calibration
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-accent hover:underline">
                  Tone Sliders & Density
                </a>
              </li>
              <li>
                <a href="#telemetry" className="hover:text-accent hover:underline">
                  Dual-Engine (API + Fallback)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-black text-accent uppercase tracking-widest mb-4">
              // TELEMETRY
            </div>
            <ul className="space-y-2.5 text-paper/80 font-bold">
              <li className="flex justify-between">
                <span>Signal-to-Noise:</span>
                <span className="text-accent">98.4%</span>
              </li>
              <li className="flex justify-between">
                <span>Hook Velocity:</span>
                <span className="text-accent">4.9x</span>
              </li>
              <li className="flex justify-between">
                <span>Platform Fit:</span>
                <span className="text-accent">100%</span>
              </li>
              <li className="flex justify-between">
                <span>Synthesis Latency:</span>
                <span className="text-accent">&lt;800ms</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-black text-accent uppercase tracking-widest mb-4">
              // SPECIFICATION
            </div>
            <p className="text-paper/70 text-[11px] leading-relaxed mb-3">
              Strict Neo-Brutalist design language. Google AI Studio Gemini 2.0 Flash integration with deterministic fallback.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Pill variant="accent">REACT 19</Pill>
              <Pill variant="default">TAILWIND V4</Pill>
              <Pill variant="outline">GEMINI FLASH</Pill>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-paper/60">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} NEOFORGE CONTENT ENGINE. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-paper/80">
              <Terminal size={14} className="text-accent" />
              PRESS <kbd className="px-1 border border-paper/40 bg-paper/10 text-paper font-bold">`</kbd> FOR DEV PANEL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
