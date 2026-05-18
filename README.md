# MILLENNIAL ACADEMY KIDS

Production-ready foundation for a modern digital learning ecosystem for MILLENNIAL ACADEMY KIDS, a private physical school in Madagascar.

This repository intentionally prepares the architecture only. It does not implement the full product or generate fake school data.

## Stack

- Frontend: Next.js App Router, TypeScript, Tailwind CSS, shadcn-style component foundations, Framer Motion, Zustand-ready, React Hook Form, Zod
- Backend: Node.js, Express.js, Prisma ORM, PostgreSQL, Socket.io
- Auth: Clerk
- Storage: Cloudinary
- Monitoring: Sentry, PostHog-ready frontend environment
- Deployment: Vercel for frontend, Railway for backend and PostgreSQL

## Structure

```txt
frontend/  Next.js application, route groups, dashboard shell, auth pages, UI primitives
backend/   Express API, versioned routes, middleware, Prisma schema, Socket.io, integrations
shared/    Shared TypeScript contracts and validation helpers
```

## Setup

```bash
npm install
cp .env.example .env
npm run dev:frontend
npm run dev:backend
```

Configure Clerk, PostgreSQL, Cloudinary, Sentry, and PostHog values in environment variables before production use.

## Architecture Decisions

- Monorepo layout keeps frontend, backend, and shared contracts coordinated without coupling deployments.
- Feature-based backend modules support lessons, assignments, communication, grading, analytics, and notifications as the platform grows.
- Prisma schema starts with core school entities: users, roles, lessons, assignments, submissions, announcements, schedules, and notifications.
- Clerk handles identity while the database stores school-specific role/profile data.
- Dashboard shell is mobile-first, dark-mode, low-bandwidth friendly, and intentionally minimal.

## Deployment Strategy

- Deploy `frontend` to Vercel with `NEXT_PUBLIC_*`, Clerk, PostHog, and Sentry variables.
- Deploy `backend` to Railway with PostgreSQL, Clerk secret keys, Cloudinary keys, and Sentry DSN.
- Run Prisma migrations from Railway or CI before production releases.

## Next Development Phases

1. Complete role onboarding and Clerk webhook user sync.
2. Build lesson and assignment CRUD with teacher permissions.
3. Add student submissions, grading, and progress tracking.
4. Add announcements, schedules, notifications, and real-time communication.
5. Add analytics dashboards and low-bandwidth/offline UX improvements.
