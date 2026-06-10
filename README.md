# Launchly Landing Page Docker Ready

## Fixed build issue

This version pins Tailwind to `3.4.17`, so the existing PostCSS config works correctly.
It also adds `"type": "module"` to `package.json` and uses `npm install` in Docker because this ZIP does not include a package-lock file.

## Run locally

```bash
npm install
npm run dev
```

## Run with Docker

```bash
docker build --no-cache -t landing-page .
docker run -p 8080:80 landing-page
```

Open `http://localhost:8080`.
