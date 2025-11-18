# BloomBoard

Demo React app (Vite + Tailwind + Framer Motion) prepared for deployment to Azure App Service.

## Local dev
1. `npm install`
2. `npm run dev`

## Build & run (production)
1. `npm run build`
2. `npm start` (starts an Express server serving the build on `process.env.PORT` or 3000)

## Deploy to Azure App Service
- Create a Linux Web App (Node 18+ recommended).
- Push this repository to GitHub.
- In Azure Portal, set deployment source to GitHub and pick this repo.
- Make sure Azure runs `npm install` and then `npm run build`. Configure App Service to run `npm start`.
- Alternatively, use GitHub Actions to build and deploy the `dist` output.

## Notes
- The UI uses TailwindCSS. Tailwind is configured in `tailwind.config.cjs`.
- The core component `src/App.jsx` includes the BloomBoard component you provided, adapted to Vite.
