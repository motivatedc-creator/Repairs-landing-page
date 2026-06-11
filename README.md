<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/010bd95b-8c69-41cf-926a-b75629561f6b

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy as an unlisted landing page (Meta Ads)

This is a static site (`npm run build` outputs to `dist/`), so the easiest way to
run it as an "unlisted" page on `drivermade.co` is to deploy it as its own
project on a subdomain — it never touches the main site's codebase or nav.

1. **Create a new project** on Vercel / Netlify / Cloudflare Pages and connect
   this repository (branch `main`).
   - Build command: `npm run build`
   - Output directory: `dist`
2. **Add a custom domain** to that project, e.g. `promo.drivermade.co` (pick
   any subdomain not used elsewhere).
3. **Add a DNS record** for that subdomain at your DNS provider, pointing to
   the value the host gives you (typically a `CNAME` to
   `cname.vercel-dns.com`, `<site>.netlify.app`, or `<project>.pages.dev`).
4. The page already includes `<meta name="robots" content="noindex, nofollow">`
   so it won't appear in search results, and it's safe to leave out of
   `drivermade.co`'s sitemap and navigation — share the URL directly in your
   Meta Ads campaign.
5. (Optional) Enable conversion tracking by uncommenting the Meta Pixel
   snippet in [index.html](index.html) and replacing `YOUR_PIXEL_ID` with your
   pixel ID from Events Manager.
