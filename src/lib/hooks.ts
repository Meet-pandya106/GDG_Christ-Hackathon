import { useCallback } from 'react';
import { ToolInput } from '../config/types';
import { useFlexStore } from './store';
import { runTool } from './tool';

export { useFlexStore };

export function useTool() {
  const toolState = useFlexStore((s) => s.toolState);
  const toolInput = useFlexStore((s) => s.toolInput);
  const toolOutput = useFlexStore((s) => s.toolOutput);
  const activeChannelId = useFlexStore((s) => s.activeChannelId);
  const setToolState = useFlexStore((s) => s.setToolState);
  const setToolInput = useFlexStore((s) => s.setToolInput);
  const setToolOutput = useFlexStore((s) => s.setToolOutput);
  const setActiveChannelId = useFlexStore((s) => s.setActiveChannelId);
  const showCopiedToast = useFlexStore((s) => s.showCopiedToast);

  const run = useCallback(
    async (input: ToolInput) => {
      setToolInput(input);
      setToolState('loading');
      try {
        const result = await runTool(input);
        setToolOutput(result);
        setToolState('success');
        if (result.channels && result.channels.length > 0) {
          setActiveChannelId(result.channels[0].id);
        }
      } catch (err) {
        console.error('Forge run error:', err);
        setToolState('error');
      }
    },
    [setToolInput, setToolState, setToolOutput, setActiveChannelId]
  );

  const activeChannel =
    toolOutput?.channels.find((c) => c.id === activeChannelId) ||
    toolOutput?.channels[0] ||
    null;

  const copyChannelToClipboard = useCallback(
    (channelId?: string) => {
      const target = channelId
        ? toolOutput?.channels.find((c) => c.id === channelId)
        : activeChannel;
      if (!target) return;

      const fullText = `${target.title.toUpperCase()}
[${target.platform} • ${target.format}]

${target.hook}

${target.body}

${target.tags.join(' ')}`;

      navigator.clipboard.writeText(fullText).then(() => {
        showCopiedToast(`COPIED "${target.platform.toUpperCase()}" TO CLIPBOARD!`);
      });
    },
    [activeChannel, toolOutput, showCopiedToast]
  );

  const copyFullMarkdown = useCallback(() => {
    if (!toolOutput) return;

    let md = `# ${toolOutput.headline}\n\n`;
    md += `> ${toolOutput.summary}\n\n`;
    md += `---\n\n`;

    // 1. AI Graphic Asset
    md += `## 📸 1. AI GRAPHIC BANNER\n\n`;
    md += `**PROMPT:** "${toolOutput.image.prompt}"\n\n`;
    md += `**STYLE:** ${toolOutput.image.style} (${toolOutput.image.aspectRatio})\n\n`;
    if (toolOutput.image.imageUrl) {
      md += `**IMAGE URL:** ${toolOutput.image.imageUrl}\n\n`;
    }
    md += `---\n\n`;

    // 2. Video Storyboard
    md += `## 🎬 2. SHORT-FORM VIDEO SCRIPT (REELS / SHORTS / TIKTOK)\n\n`;
    md += `### ${toolOutput.videoScript.title} (${toolOutput.videoScript.duration})\n`;
    md += `**MUSIC VIBE:** ${toolOutput.videoScript.musicVibe}\n\n`;
    toolOutput.videoScript.scenes.forEach((scene) => {
      md += `#### SCENE ${scene.sceneNumber} (${scene.timing})\n`;
      md += `- **Visual:** ${scene.visual}\n`;
      md += `- **Voiceover:** "${scene.voiceover}"\n`;
      md += `- **On-Screen Text:** ${scene.onScreenText}\n\n`;
    });
    md += `---\n\n`;

    // 3. Ready-to-Post Captions
    md += `## ✍️ 3. READY-TO-POST SOCIAL CAPTION\n\n`;
    md += `**HOOK:** ${toolOutput.caption.hook}\n\n`;
    md += `${toolOutput.caption.body}\n\n`;
    md += `**CALL TO ACTION:** ${toolOutput.caption.callToAction}\n\n`;
    md += `**HASHTAGS:** ${toolOutput.caption.hashtags.join(' ')}\n\n`;
    md += `---\n\n`;

    // 4. Multi-Channel Sequences
    md += `## 🌐 4. MULTI-CHANNEL SEQUENCES\n\n`;
    toolOutput.channels.forEach((ch, idx) => {
      md += `### Channel ${idx + 1}: ${ch.platform} (${ch.format}) — ${ch.title}\n\n`;
      md += `**HOOK:**\n${ch.hook}\n\n`;
      md += `**BODY:**\n${ch.body}\n\n`;
      md += `**TAGS:** ${ch.tags.join(' ')}\n\n`;
      md += `**METRICS:** ${ch.metrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}\n\n`;
      md += `---\n\n`;
    });

    // 5. Quality Score
    md += `### Quality Assessment (Score: ${toolOutput.qualityScore.total}/${toolOutput.qualityScore.max})\n\n`;
    toolOutput.qualityScore.items.forEach((item) => {
      md += `- **${item.category}** (${item.score}/${item.maxScore}): ${item.note}\n`;
    });

    navigator.clipboard.writeText(md).then(() => {
      showCopiedToast('FULL SOCIAL ASSET BUNDLE (MD) COPIED!');
    });
  }, [toolOutput, showCopiedToast]);

  return {
    toolState,
    toolInput,
    toolOutput,
    activeChannelId,
    activeChannel,
    run,
    setActiveChannelId,
    copyChannelToClipboard,
    copyFullMarkdown,
  };
}
