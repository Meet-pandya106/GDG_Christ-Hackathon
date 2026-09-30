import React, { useState } from 'react';
import {
  Sliders,
  Sun,
  Moon,
  Zap,
  ArrowDownRight,
  Menu,
  X,
  Sparkles,
  Smartphone,
  Edit3,
  HelpCircle,
  BarChart3,
  Flame,
} from 'lucide-react';
import { useFlexStore } from '../../lib/store';
import { Button } from '../ui/Button';
import { Pill } from '../ui/Pill';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  description?: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'STUDIO',
    href: '#studio',
    icon: <Edit3 size={15} />,
    badge: 'CREATE',
    description: 'Input Persona & Raw Concept',
  },
  {
    label: 'MOCKUPS & ASSETS',
    href: '#results',
    icon: <Smartphone size={15} />,
    badge: 'NEW',
    description: 'Live 𝕏, IG, TikTok & LinkedIn Previews',
  },
  {
    label: 'WORKFLOW',
    href: '#process',
    icon: <Zap size={15} />,
    description: '4-Step Transformation Pipeline',
  },
  {
    label: 'BENCHMARKS',
    href: '#telemetry',
    icon: <BarChart3 size={15} />,
    description: 'Signal vs Noise Telemetry',
  },
  {
    label: 'FAQ',
    href: '#faq',
    icon: <HelpCircle size={15} />,
    description: 'Operator Questions & Answers',
  },
];

export const Header: React.FC = () => {
  const { theme, toggleTheme, setDevPanelOpen, setActiveTab } = useFlexStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#results') {
      // If clicking Mockups & Assets, ensure mockup tab is active
      setActiveTab('mockup');
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-paper border-b-4 border-ink transition-colors shadow-[0px_4px_0px_0px_rgba(0,0,0,0.06)]">
      {/* Top Helper Micro-ticker Bar */}
      <div className="bg-ink text-paper py-1 px-4 border-b-2 border-ink flex items-center justify-between text-[11px] font-mono uppercase tracking-wider overflow-hidden">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-accent font-black">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            STUDIO ONLINE
          </span>
          <span className="hidden sm:inline text-paper/80 font-semibold">
            ⚡ 1-CLICK: 📸 GRAPHICS + 🎬 4-SCENE REELS + ✍️ CAPTIONS + 📱 MOCKUPS
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavClick('#results')}
            className="hidden md:inline-flex items-center gap-1 text-paper/90 hover:text-accent font-bold cursor-pointer transition-colors"
          >
            <span>VIEW RECENT MOCKUPS ➔</span>
          </button>
          <button
            onClick={() => setDevPanelOpen(true)}
            className="flex items-center gap-1 text-accent hover:underline font-bold cursor-pointer"
          >
            <span>DEV_CTRL</span>
            <kbd className="px-1 border border-paper/40 bg-paper/10 text-[10px] rounded-none">`</kbd>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Identity */}
        <a
          href="/"
          className="group flex items-center gap-3 select-none shrink-0"
          aria-label="NEOFORGE Home"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent text-accent-ink border-2 sm:border-4 border-ink shadow-[3px_3px_0px_0px_var(--ink)] flex items-center justify-center font-display font-black text-xl sm:text-2xl group-hover:rotate-6 transition-transform">
            <Zap size={22} strokeWidth={3} className="fill-current" />
          </div>
          <div>
            <div className="font-display font-black text-xl sm:text-2xl tracking-tighter leading-none text-ink flex items-center gap-1.5">
              <span>NEOFORGE</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 border border-ink bg-accent text-accent-ink font-bold">
                STUDIO
              </span>
            </div>
            <span className="hidden sm:block font-mono text-[10px] tracking-wider uppercase text-muted font-bold mt-0.5">
              ALL-IN-ONE SOCIAL MEDIA ENGINE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="px-3 py-2 font-mono text-xs font-black uppercase tracking-wider text-ink hover:bg-paper-2 border-2 border-transparent hover:border-ink hover:shadow-[2px_2px_0px_0px_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer relative"
            >
              <span className="text-muted group-hover:text-ink">{item.icon}</span>
              <span>{item.label}</span>
              {item.badge && (
                <span className="px-1.5 py-0.2 bg-accent text-accent-ink text-[9px] border border-ink font-mono font-black shadow-[1px_1px_0px_0px_var(--ink)]">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Right Side Utility & CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Jump to Mockups Button (Tablet/Desktop) */}
          <button
            type="button"
            onClick={() => handleNavClick('#results')}
            className="hidden md:flex lg:hidden items-center gap-1.5 px-3 py-2 bg-paper-2 hover:bg-accent text-ink border-2 border-ink font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_0px_var(--ink)] cursor-pointer"
          >
            <Smartphone size={14} />
            <span>MOCKUPS</span>
          </button>

          {/* Theme Mode Toggle (Sun/Moon) */}
          <button
            type="button"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            className="p-2 sm:p-2.5 bg-paper-2 hover:bg-paper text-ink border-2 border-ink shadow-[2px_2px_0px_0px_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer transition-all"
          >
            {theme === 'light' ? (
              <Moon size={18} strokeWidth={2.5} />
            ) : (
              <Sun size={18} strokeWidth={2.5} className="text-accent" />
            )}
          </button>

          {/* Dev Panel Control Toggle */}
          <button
            type="button"
            onClick={() => setDevPanelOpen(true)}
            title="Open Controls (Shortcut: `)"
            className="p-2 sm:px-3 sm:py-2 bg-paper-2 hover:bg-accent text-ink border-2 border-ink shadow-[2px_2px_0px_0px_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 font-mono text-xs font-bold uppercase hidden sm:flex items-center gap-1.5 cursor-pointer transition-all"
          >
            <Sliders size={16} strokeWidth={2.5} />
            <span>DEV</span>
          </button>

          {/* Primary Action Button: Open Studio Form */}
          <button
            type="button"
            onClick={() => handleNavClick('#studio')}
            className="hidden sm:inline-flex items-center justify-center font-mono font-black uppercase tracking-wider bg-accent text-accent-ink border-2 sm:border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0px_0px_var(--ink)] active:translate-x-1 active:translate-y-1 active:shadow-none px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm gap-1.5 cursor-pointer transition-all"
          >
            <span>OPEN STUDIO</span>
            <ArrowDownRight size={16} strokeWidth={3} />
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 bg-paper-2 hover:bg-accent text-ink border-2 sm:border-4 border-ink shadow-[2px_2px_0px_0px_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 lg:hidden cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X size={22} strokeWidth={3} />
            ) : (
              <Menu size={22} strokeWidth={3} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-paper border-t-4 border-ink p-4 sm:p-6 shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)] animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-2 mb-4">
            <span className="font-mono text-[10px] font-black uppercase text-muted tracking-wider block px-1">
              // QUICK NAVIGATION
            </span>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="w-full p-3 bg-paper-2 hover:bg-accent hover:text-accent-ink border-2 border-ink shadow-[2px_2px_0px_0px_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 font-mono text-xs font-black uppercase flex items-center justify-between text-left cursor-pointer transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <span className="p-1 bg-paper border border-ink text-ink">
                    {item.icon}
                  </span>
                  <div>
                    <div className="text-ink">{item.label}</div>
                    {item.description && (
                      <div className="text-[10px] font-normal text-muted normal-case">
                        {item.description}
                      </div>
                    )}
                  </div>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 bg-ink text-paper text-[10px] font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Bottom Actions */}
          <div className="pt-3 border-t-2 border-ink flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => handleNavClick('#studio')}
              className="w-full p-3 bg-accent text-accent-ink border-4 border-ink shadow-[4px_4px_0px_0px_var(--ink)] font-mono text-xs font-black uppercase flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>LAUNCH CONTENT STUDIO NOW</span>
              <ArrowDownRight size={16} strokeWidth={3} />
            </button>

            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2.5 bg-paper-2 border-2 border-ink font-mono text-xs font-bold uppercase flex items-center gap-2 text-ink"
              >
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                <span>{theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDevPanelOpen(true);
                }}
                className="p-2.5 bg-paper-2 border-2 border-ink font-mono text-xs font-bold uppercase flex items-center gap-1.5 text-ink"
              >
                <Sliders size={16} />
                <span>DEV CONTROLS [ ` ]</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
