# CMDB Research Hub

A minimal React + Tailwind site for CMDB-related scientific projects.

## Local dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
```

## Deploy options

### Vercel
- Import this repo in Vercel.
- Framework: Vite (auto-detected), Build: `npm run build`, Output: `dist`.

### GitHub Pages (via Actions)
- Push to `main`. GitHub Actions workflow (`.github/workflows/pages.yml`) builds and deploys to Pages automatically.
- In your repo: Settings → Pages → set Source: **GitHub Actions**.

### Netlify
- Click “New site from Git” → pick this repo.
- Build command: `npm run build` ; Publish directory: `dist/`.
