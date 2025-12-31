# Roognis Backend (MVP)

Minimal Express API stub for team dev.

## Scripts
- `npm run dev` — nodemon local dev
- `npm start` — production start

## Endpoints
- `GET /api/health` — uptime check
- `GET /api/nudges` — mock AI nudges

## Env
Copy `.env.example` to `.env` and set values.

## Docker
- Build: `docker build -t roognis-api .`
- Run: `docker run -p 4000:4000 roognis-api`

## Deploy (suggested for MVP)
- Railway or Render: point to `npm start`
- Set env: `PORT`, `CORS_ORIGIN`
