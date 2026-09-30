import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { synthesizeLocalContent, buildImageUrl } from './src/lib/tool.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const SYSTEM_PROMPT = `You are NEOFORGE, an elite AI Social Media Studio & Principal Content Strategist.
Your mission is to transform messy user thoughts, announcements, or domain concepts into a complete, synchronized social media asset package in ONE click:
1. 📸 AI-Generated Visual / Graphic prompt (high-contrast, bold digital graphic for the post)
2. 🎬 Short-Form Video Script (scene-by-scene storyboard with timestamps, visual directions, audio voiceover, on-screen text for Reels/TikTok/Shorts)
3. ✍️ Ready-to-Post Captions (high-converting hook, body with clean line breaks, call-to-action, trending hashtags)
4. 🌐 Multi-channel sequences (X / Twitter thread & LinkedIn Thought Leadership)

STRICT EDITORIAL RULES:
1. NO PREAMBLE, NO CHATBOT FLUFF. Return ONLY valid JSON adhering strictly to the schema.
2. Embody the specified AI Persona ruthlessly.
3. Tailor vocabulary and proofs to the User Persona.
4. Hooks must stop the reader's scroll within 3 seconds.`;

// API endpoint: /api/ai
app.post('/api/ai', async (req: Request, res: Response) => {
  const { userRole, aiRole, idea, platform, creativity, userApiKey } = req.body || {};

  if (!idea) {
    res.status(400).json({ error: 'Missing idea field' });
    return;
  }

  const effectiveUserRole = userRole || req.body.audience || 'Tech Founder & Builder';
  const effectiveAiRole = aiRole || req.body.tone || 'Viral Social Media Growth Strategist';
  const effectivePlatform = platform || 'Instagram Reels & X';
  const effectiveCreativity = Number(creativity) || 85;

  // Priority: userApiKey > process.env.GEMINI_API_KEY > process.env.GOOGLE_API_KEY > process.env.AI_API_KEY
  const apiKey =
    (userApiKey && typeof userApiKey === 'string' && userApiKey.trim()) ||
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.AI_API_KEY;

  if (apiKey) {
    try {
      const userPrompt = `${SYSTEM_PROMPT}

USER CONTEXT & PERSONA DEFINITION:
- Who the User is (Identity/Domain): ${effectiveUserRole}
- Who the AI acts as (AI Persona): ${effectiveAiRole}
- Target Channel: ${effectivePlatform}
- Intensity: ${effectiveCreativity}%

RAW CONCEPT / ANNOUNCEMENT:
"""${idea}"""

SCHEMA REQUIRED:
{
  "headline": "SHORT ALL-CAPS HEADLINE",
  "summary": "1 sentence positioning statement",
  "image": {
    "prompt": "Detailed cinematic prompt for AI image generation without quotes, high-contrast digital art",
    "style": "High-contrast bold digital art",
    "aspectRatio": "1:1"
  },
  "videoScript": {
    "title": "Hooky Video Title",
    "duration": "30-45s",
    "musicVibe": "Punchy upbeat beat",
    "scenes": [
      {
        "sceneNumber": 1,
        "timing": "0:00 - 0:03",
        "visual": "Close-up hook shot looking into camera with text pop",
        "voiceover": "Hook audio sentence spoken out loud",
        "onScreenText": "TEXT OVERLAY IN CAPS"
      },
      {
        "sceneNumber": 2,
        "timing": "0:03 - 0:15",
        "visual": "Screen recording or demonstration visual",
        "voiceover": "Explain the core problem or insight",
        "onScreenText": "STEP 1"
      },
      {
        "sceneNumber": 3,
        "timing": "0:15 - 0:30",
        "visual": "Visual proof or solution reveal",
        "voiceover": "Deliver the tactical secret or solution",
        "onScreenText": "THE SOLUTION"
      },
      {
        "sceneNumber": 4,
        "timing": "0:30 - 0:40",
        "visual": "Call to action visual, pointing or smiling",
        "voiceover": "Call to action to comment or share",
        "onScreenText": "SAVE & FOLLOW"
      }
    ]
  },
  "caption": {
    "hook": "Attention-stopping opening hook",
    "body": "Full caption body with clean line breaks and emojis",
    "callToAction": "Save this post or comment below",
    "hashtags": ["#ContentCreator", "#Productivity", "#Viral", "#BuildInPublic"]
  },
  "channels": [
    {
      "id": "twitter",
      "platform": "X / Twitter",
      "format": "Post / Thread",
      "title": "Viral X Thread",
      "hook": "Punchy tweet hook",
      "body": "1/ Hook\\n\\n2/ Proof\\n\\n3/ Takeaway\\n\\n4/ CTA link",
      "tags": ["#Thread", "#Tech"],
      "metrics": [{"label": "Hook Velocity", "value": "97%"}]
    },
    {
      "id": "linkedin",
      "platform": "LinkedIn",
      "format": "Thought Leadership",
      "title": "Executive Story",
      "hook": "Executive opening line",
      "body": "Full essay with professional lessons and discussion question",
      "tags": ["#Leadership"],
      "metrics": [{"label": "Audience Fit", "value": "99%"}]
    }
  ],
  "qualityScore": {
    "total": 98,
    "max": 100,
    "items": [
      {"category": "Visual Appeal", "score": 10, "maxScore": 10, "note": "High-impact visual concept ready to render."},
      {"category": "Video Flow", "score": 10, "maxScore": 10, "note": "Paced 4-scene video storyboard with strong hook."},
      {"category": "Copy & Hook", "score": 10, "maxScore": 10, "note": "Engaging social copy with zero corporate filler."},
      {"category": "Persona Calibration", "score": 9, "maxScore": 10, "note": "Voice precisely tuned to user persona."},
      {"category": "Publishing Readiness", "score": 10, "maxScore": 10, "note": "One-click copy and image download available."}
    ]
  },
  "suggestions": [
    "Download the generated image to post alongside your caption.",
    "Record the 30-second video following the scene storyboard.",
    "One-click copy the caption or share directly to X/Twitter."
  ]
}`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
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
              temperature: Math.min(1.0, Math.max(0.1, effectiveCreativity / 100)),
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
            res.json(parsed);
            return;
          }
        }
      } else {
        const errText = await response.text();
        console.warn('Gemini API returned error response:', response.status, errText);
      }
    } catch (err) {
      console.warn('Gemini API call failed, using deterministic fallback:', err);
    }
  }

  // Graceful fallback to deterministic local synthesis
  const fallback = synthesizeLocalContent({
    userRole: effectiveUserRole,
    aiRole: effectiveAiRole,
    idea,
    platform: effectivePlatform,
    creativity: effectiveCreativity,
  });

  res.json(fallback);
});

// Setup Vite in development or serve static in production
const isProduction = process.env.NODE_ENV === 'production';

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`[NEOFORGE] Studio Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
