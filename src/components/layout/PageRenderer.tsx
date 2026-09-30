import React from 'react';
import { presets } from '../../config/presets';
import { useFlexStore } from '../../lib/store';
import { renderSection } from '../../lib/registry';

export const PageRenderer: React.FC = () => {
  const activePresetKey = useFlexStore((s) => s.activePreset);
  const preset = presets[activePresetKey] || presets.agency;

  return (
    <main className="w-full min-h-screen flex flex-col">
      {preset.sections.map((section, idx) => renderSection(section, idx))}
    </main>
  );
};
