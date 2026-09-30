import React, { useEffect } from 'react';
import { useFlexStore } from './lib/store';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { DevPanel } from './components/layout/DevPanel';
import { PageRenderer } from './components/layout/PageRenderer';

export default function App() {
  const theme = useFlexStore((s) => s.theme);
  const accentId = useFlexStore((s) => s.accentId);
  const styleMode = useFlexStore((s) => s.styleMode);

  useEffect(() => {
    // Sync theme class to document root
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      document.documentElement.setAttribute('data-accent', accentId);
      document.documentElement.setAttribute('data-style', styleMode);
    }
  }, [theme, accentId, styleMode]);

  return (
    <div
      data-accent={accentId}
      data-style={styleMode}
      className="min-h-screen bg-paper text-ink transition-colors flex flex-col selection:bg-accent selection:text-accent-ink"
    >
      <Header />
      <PageRenderer />
      <Footer />
      <DevPanel />
    </div>
  );
}
