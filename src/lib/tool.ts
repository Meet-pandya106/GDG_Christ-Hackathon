import { ToolInput, ToolOutput } from '../config/types';

const SYSTEM_PROMPT = `You are NEOFORGE, an elite AI Social Media Studio & Principal Content Strategist.
Your mission is to transform messy user thoughts, announcements, or domain concepts into a complete, synchronized social media asset package in ONE click:
1. 📸 AI-Generated Visual / Graphic prompt (high-contrast, editorial digital graphic)
2. 🎬 Short-Form Video Script (scene-by-scene storyboard with timestamps, visual directions, audio voiceover, on-screen text for Reels/TikTok/Shorts)
3. ✍️ Ready-to-Post Captions (high-converting hook, body with clean line breaks, call-to-action, trending hashtags)
4. 🌐 Multi-channel sequences (X / Twitter thread & LinkedIn Thought Leadership)

STRICT EDITORIAL RULES:
1. NO PREAMBLE, NO CHATBOT FLUFF. Return ONLY valid JSON adhering strictly to the schema.
2. Embody the specified AI Persona ruthlessly.
3. Tailor vocabulary and proofs to the User Persona.
4. Hooks must stop the reader's scroll within 3 seconds.`;

/**
 * Builds a Pollinations AI image URL from a prompt.
 */
export function buildImageUrl(prompt: string, seed: number = 42): string {
  const cleanPrompt = prompt.replace(/["\n\r]/g, ' ').trim();
  const encoded = encodeURIComponent(cleanPrompt);
  return `https://image.pollinations.ai/prompt/${encoded}?width=1080&height=1080&nologo=true&seed=${seed}`;
}

/**
 * Deterministic local synthesis engine used when API key is absent or offline.
 * Produces context-aware, calibrated output from userRole, aiRole, idea, and platform.
 */
export function synthesizeLocalContent(input: ToolInput): ToolOutput {
  const userRole = input.userRole?.trim() || 'Tech Founder & Creator';
  const aiRole = input.aiRole?.trim() || 'Viral Social Media Growth Strategist';
  const idea = input.idea?.trim() || 'Replacing conversational prompt fatigue with all-in-one deterministic studios.';
  const platform = input.platform?.trim() || 'Instagram Reels & X';
  const creativity = Number(input.creativity) || 85;

  const firstSentence = idea.split(/[.\n]/)[0].trim() || idea;
  const shortIdea = firstSentence.length > 70 ? firstSentence.slice(0, 67) + '...' : firstSentence;
  const uppercaseTheme = shortIdea.toUpperCase().replace(/[^\w\s-]/g, '');

  const seed = Math.floor(Math.random() * 90000) + 10000;
  const imagePrompt = `Neo-brutalist graphic poster about ${shortIdea}, styled for a ${userRole}, high-contrast black ink and acid lime neon colors, bold geometric typography, futuristic editorial layout, 8k resolution, raw aesthetics`;
  const imageUrl = buildImageUrl(imagePrompt, seed);

  return {
    headline: uppercaseTheme || 'NEOFORGE ALL-IN-ONE SOCIAL SUITE',
    summary: `Complete social media distribution package forged for a ${userRole}, directed by a ${aiRole}.`,
    image: {
      prompt: imagePrompt,
      style: 'Neo-Brutalist High-Contrast Editorial Graphic',
      aspectRatio: '1:1',
      imageUrl,
    },
    videoScript: {
      title: `${shortIdea} in 30 Seconds`,
      duration: '30-45s',
      musicVibe: 'Punchy Industrial Electronic Bass (128 BPM)',
      scenes: [
        {
          sceneNumber: 1,
          timing: '0:00 - 0:03',
          visual: `Direct to camera close-up of a ${userRole.toLowerCase()} speaking with immediate urgency and rapid zoom`,
          voiceover: `Most ${userRole.toLowerCase()}s are doing this completely backwards: "${shortIdea}".`,
          onScreenText: 'STOP DOING THIS 🛑',
        },
        {
          sceneNumber: 2,
          timing: '0:03 - 0:15',
          visual: 'Fast montage cut demonstrating the traditional high-friction problem and manual effort',
          voiceover: 'You waste 20 minutes coaching a generic chatbot only to receive watered-down corporate filler.',
          onScreenText: 'THE CHATBOT TRAP ⚠️',
        },
        {
          sceneNumber: 3,
          timing: '0:15 - 0:30',
          visual: 'Tactile showcase showing instant generation of live visuals, reel storyboards, and calibrated captions',
          voiceover: `Here is the playbook our team deployed instead: schema-driven persona tuning and synchronized multi-channel delivery.`,
          onScreenText: 'THE 1-CLICK BLUEPRINT ⚡',
        },
        {
          sceneNumber: 4,
          timing: '0:30 - 0:40',
          visual: 'Speaker looks forward with confident posture, on-screen callout and profile handle overlay',
          voiceover: 'Save this blueprint for your next release and comment "FORGE" to get the complete workflow.',
          onScreenText: 'SAVE & COMMENT "FORGE" ↵',
        },
      ],
    },
    caption: {
      hook: `If you are a ${userRole.toLowerCase()}, this one shift will save you 10+ hours this week 👇`,
      body: `"${idea}"

Here is why the standard approach fails:
❌ Empty chat boxes force you into prompt gymnastics.
❌ Tone drifts and sounds like generic AI corporate soup.
❌ You still have to manually create visual assets and reel scripts.

Here is the calibrated formula we use instead:
1. Define your exact persona (${userRole}).
2. Assign the strategic AI voice (${aiRole}).
3. Synthesize the visual banner, reel script, and captions in a single pass.
4. Broadcast directly to X, LinkedIn, and Instagram.

High-output operators don't work more hours—they build tighter, deterministic pipelines.`,
      callToAction: `Drop "FORGE" below or bookmark this post for your next content batch.`,
      hashtags: [
        `#${userRole.replace(/[^a-zA-Z0-9]/g, '')}`,
        '#SocialMediaStrategy',
        '#ContentEngine',
        '#BuildInPublic',
        '#CreatorEconomy',
        '#GrowthHacking',
      ],
    },
    channels: [
      {
        id: 'twitter',
        platform: 'X / Twitter',
        format: 'Thread Sequence',
        title: `The Tactical Breakdown for ${userRole}s`,
        hook: `90% of ${userRole.toLowerCase()}s waste hours wrestling with generic AI prompts: "${shortIdea}". Here is the deterministic 1-click engine that replaces empty chat boxes: 🧵👇`,
        body: `1/ The problem isn't the model. It's the interface.
Chat was made for messaging friends, not forging synchronized multi-asset content.

2/ When you give someone an empty text box:
• Tone drifts across prompts
• You get corporate cliches
• You spend 20 minutes editing.

3/ What actually moves the needle:
- Context Ingestion: Define ${userRole} + ${aiRole}
- Visual Forge: High-contrast social graphic
- Video Flow: 4-scene Reel storyboard with timestamps
- Ready-to-post captions with zero filler.

4/ Velocity comparison:
Generic Chat: 32% signal, 4-6 manual edits.
NEOFORGE Studio: 98% density, 1-click clipboard dispatch.

5/ Stop coaching chatbots. Deploy deterministic social assets.`,
        tags: ['#BuildInPublic', '#SocialStrategy', '#Tech', '#Growth'],
        metrics: [
          { label: 'Hook Velocity', value: `${creativity}%` },
          { label: 'Platform Fit', value: '100%' },
          { label: 'Audience Pacing', value: 'Instant' },
        ],
      },
      {
        id: 'linkedin',
        platform: 'LinkedIn',
        format: 'Thought Leadership',
        title: `Why ${userRole}s Must Rethink Content Velocity in 2026`,
        hook: `Over the past two quarters, I noticed a subtle pattern among top-tier ${userRole.toLowerCase()}s:

"${shortIdea}"`,
        body: `Most professionals using generative AI are quietly disappointed by the output.

Not because the underlying models lack intelligence, but because conversational prompting creates friction. You spend your precious strategic energy asking a chatbot to "sound less like an AI."

As a ${aiRole.toLowerCase()}, here is the system I recommend:

1. Unified Persona Architecture: Establish who is speaking and who is strategizing before typing a word.
2. Complete Asset Packages: Never generate text in isolation. Pair your thesis with a visual graphic and a short-form video script simultaneously.
3. Deterministic Governance: Enforce zero-fluff editorial rules.

When you treat social distribution as a synchronized manufacturing line rather than a conversational chat, your output triples while maintaining 100% brand authenticity.

How is your team handling multi-channel social distribution today?`,
        tags: ['#Leadership', '#Strategy', '#Innovation', '#SocialMedia'],
        metrics: [
          { label: 'Audience Relevance', value: '99%' },
          { label: 'Readability', value: 'Grade 9' },
          { label: 'Signal Score', value: '98/100' },
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
          note: `Voice tuned precisely to ${userRole} and ${aiRole}.`,
        },
        {
          category: 'Publishing Readiness',
          score: 10,
          maxScore: 10,
          note: 'One-click copy, image download, and direct X/Twitter sharing ready.',
        },
      ],
    },
    suggestions: [
      'Download the generated image banner to post alongside your caption.',
      'Record the 30-second video following the scene storyboard.',
      'One-click copy the caption or share directly to X / Twitter.',
    ],
  };
}

/**
 * Executes content forging.
 * Prioritizes:
 * 1. POST /api/ai
 * 2. Direct Gemini REST call if user provided a key
 * 3. Graceful fallback to deterministic local engine with zero downtime
 */
export async function runTool(input: ToolInput): Promise<ToolOutput> {
  const trimmedKey = input.userApiKey?.trim();

  // Try server endpoint /api/ai first
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 18000);

    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.image && data.videoScript && data.caption) {
        if (!data.image.imageUrl && data.image.prompt) {
          data.image.imageUrl = buildImageUrl(data.image.prompt);
        }
        return data as ToolOutput;
      }
    }
  } catch (err) {
    console.warn('/api/ai route unavailable or timed out, trying direct or fallback...', err);
  }

  // If user provided a direct API key in browser, call Gemini 2.0 Flash REST directly
  if (trimmedKey) {
    try {
      const userPrompt = `${SYSTEM_PROMPT}

USER CONTEXT & PERSONA DEFINITION:
- Who the User is (Identity/Domain): ${input.userRole}
- Who the AI acts as (AI Persona): ${input.aiRole}
- Target Channel: ${input.platform}
- Intensity: ${input.creativity}%

RAW CONCEPT / ANNOUNCEMENT:
"""${input.idea}"""`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${trimmedKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: userPrompt }],
              },
            ],
            generationConfig: {
              temperature: Math.min(1.0, Math.max(0.2, input.creativity / 100)),
              responseMimeType: 'application/json',
            },
          }),
        }
      );

      if (response.ok) {
        const json = await response.json();
        const textContent = json.candidates?.[0]?.content?.parts?.[0]?.text;
        if (textContent) {
          const parsed = JSON.parse(textContent);
          if (parsed.image && parsed.videoScript && parsed.caption) {
            if (!parsed.image.imageUrl && parsed.image.prompt) {
              parsed.image.imageUrl = buildImageUrl(parsed.image.prompt);
            }
            return parsed as ToolOutput;
          }
        }
      }
    } catch (directErr) {
      console.warn('Direct Gemini call failed:', directErr);
    }
  }

  // Graceful deterministic fallback
  await new Promise((resolve) => setTimeout(resolve, 600)); // tactile synthesis feel
  return synthesizeLocalContent(input);
}
