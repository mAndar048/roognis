# Roognis MVP

Frontend: React (Vite).
Backend: Express stub for team integration.

## Frontend
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
- Env: set `VITE_API_BASE_URL`

## Backend
Located in `backend/`.
- Dev: `npm run dev` (nodemon)
- Start: `npm start`
- Env: see `backend/.env.example`

## CI
GitHub Actions builds frontend and backend.

## Deployment (MVP suggestion)
- Frontend: Vercel/Netlify (output `dist`)
- Backend: Railway/Render (port 4000)
- Later: S3+CloudFront / ECS or GCP Cloud Run
