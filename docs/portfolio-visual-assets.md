# Portfolio visual assets

This note tracks the visuals used to distinguish product websites from the mobile apps they promote.

## Website landing captures

Use a clean browser capture of each published landing, without browser chrome. Keep the first viewport and the main product visual in frame. Save optimized WebP files here:

`public/projects/landing-previews/`

| Portfolio entry | Source | Suggested file | Visual direction observed |
| --- | --- | --- | --- |
| Cozy Pomodoro landing | https://cozy-pomodoro-landing.vercel.app/ | `cozy-pomodoro.webp` | Bright, warm page; product headline and a phone held in natural light. Keep enough of the theme selector visible if the crop allows it. |
| SafeBite landing | https://safe-bite-landing.vercel.app/es | `safebite.webp` | Pale background, mint-green headline, concise label-scanning message, and Google Play call to action. |
| Nox Notes landing | https://noxnotes-landing.vercel.app/ | `nox-notes.webp` | Dark plum background with a large white-to-purple headline and a focused download action. |
| GlowWords landing | https://glowwords-landing.vercel.app/ | `glowwords.webp` | Deep navy background, expressive headline, and a lavender quote card. The landing currently says the app is coming to stores. |

The four public pages were captured on 2026-10-25 and saved as optimized WebP files in `public/projects/landing-previews/`. The website cards and their case-study pages use these local assets; they do not depend on the source sites loading at viewing time. Recapture a page when its published design changes substantially.

## Mobile app screenshots

Keep app screenshots separate from landing captures. Use the user's original screenshots when available and name them by product and platform, for example `cozy-pomodoro-ios.webp` and `cozy-pomodoro-android.webp`. Do not present a product screenshot as a screenshot of its website.

## Adding files

When replacing a capture, keep the matching website project's `image` field and its mobile project's `productWebsite.image` pointed at `/projects/landing-previews/<filename>`. Keep the mobile project's own `image` field for the app itself. Update descriptive localized alt text if the visual changes.

## Aldha's Media Toolkit desktop captures

Desktop app captures saved on 2026-10-28 as optimized WebP files in `public/projects/aldhas-media-toolkit/screenshots/`:

| File | Content |
| --- | --- |
| `images-workspace.webp` | Image workspace with an image loaded and an Instagram post preset selected. |
| `image-crop-editor.webp` | Vertical story crop preview with draggable positioning and focus controls. |
| `video-vertical-export.webp` | Video conversion controls configured for TikTok, Reels, and Shorts (vertical 9:16). |
| `video-crop-preview.webp` | Video crop preview with the 9:16 frame and position controls. |
| `base64-video-to-text.webp` | Base64 tool ready to encode a video file as text. |

The app captures use temporary synthetic media for visual context. The source image and video files and any Base64 payload remain outside the portfolio repository; only the screenshots are included.
