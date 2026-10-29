# KubeCompass showcase

A standalone static showcase for KubeCompass, a Go-based RAG assistant for Kubernetes documentation. Uses the same root-level HTML/CSS/JavaScript and GitHub Pages setup as o11ycare-showcase.

## Local preview

```sh
python3 -m http.server 8765
```

Open http://localhost:8765. No dependencies or build step are required.

## Files

- `index.html`: product story, architecture, capabilities, and builder links
- `style.css`: responsive layout and o11ycare-inspired branding
- `app.js`: three interactive, authored sample answers
- `compass.svg`: brand icon
- `social.png`: LinkedIn preview image
- `.nojekyll`: serve files directly on GitHub Pages

## Deployment

GitHub Pages serves the root directory of the `main` branch. Push changes to `main` to update the site.

Public URL: https://mritunjaybhardwaj.github.io/kubecompass-showcase/

## Scope

Only showcase assets belong in this repository. The Go application, database, credentials, and model services are not included. The demo is illustrative and does not call a live LLM or Kubernetes cluster. No measured accuracy or business-impact claims are made.
