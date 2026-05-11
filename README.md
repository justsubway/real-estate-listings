# Real estate website

Vite + React + Tailwind frontend in `frontend/`.

## Local development

```bash
cd frontend
npm install
npm run dev
```

## GitHub Pages

This repository includes a GitHub Actions workflow that builds the app and deploys the `frontend/dist` output to GitHub Pages.

1. In the GitHub repository, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to the `main` branch; the workflow **Deploy to GitHub Pages** will run automatically.

The site is published at:

**https://justsubway.github.io/real-estate-website/**

Production builds use `base: /real-estate-website/` in `frontend/vite.config.ts` so asset paths resolve on GitHub Pages.
