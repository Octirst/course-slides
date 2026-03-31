# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

course-slides is a Next.js 16 portal for serving Slidev-based course presentations. Students authenticate with their 10-digit student ID to access course materials. Deployed on Aliyun server via GitHub Actions.

## Common Commands

```bash
# Development
pnpm dev              # http://localhost:3000

# Build
pnpm build            # Next.js production build

# Production server
pnpm start            # Requires AUTH_SECRET env var

# Lint
pnpm lint
```

## Architecture

### Authentication (Next-Auth v5 Beta)

- **Provider**: Credentials (student ID + fixed password)
- **Student ID validation**: Exactly 10 digits (`/^\d{10}$/`)
- **Default password**: `zbti-ai-cs2026` (override via `STUDENT_PASSWORD` env var)
- **Session**: JWT-based, no database
- **Protected routes**: All routes except `/login`, `/api/*`, `/slides/*`, and static files

Key files:
- `src/auth.ts` - Next-Auth configuration with authorization callback
- `src/middleware.ts` - Route protection middleware (matcher excludes `/slides`)

### Course Configuration

Course metadata is centralized in `src/config/courses.ts`:

```typescript
interface CourseUnit {
  id: string;        // e.g., "unit01-lesson01"
  title: string;     // e.g., "第1次课：初识大数据"
  available: boolean; // Controls visibility to students
}
```

**Publishing a new unit**: Set `available: true` in courses.ts and push to main branch.

### Slidev Integration

Built Slidev presentations are served as static files from `public/slides/{courseId}/{unitId}/`:

- Next.js rewrites handle SPA routing for numeric slides (`/slides/:courseId/:unitId/:slideNum`)
- Presenter mode routes also rewrote to `index.html`
- Middleware explicitly excludes `/slides/*` from auth protection

### Deployment Pipeline

GitHub Actions workflow (`.github/workflows/deploy-to-aliyun.yml`):

1. Checkout + pnpm install
2. Build Next.js (`pnpm build`)
3. Build Slidev slides (`scripts/build-slides.sh`)
4. SSH upload tarball to Aliyun server
5. PM2 restart on server

**Manual deployment**: Run `scripts/deploy-to-aliyun.sh` with SSH credentials.

## Key Patterns

### signOut Redirect

Next-Auth v5 beta requires explicit `redirectTo` parameter:

```tsx
await signOut({ redirectTo: "/login" });
```

The CI workflow includes a sed fix as backup if source code is missing this.

### Course Detail Page Routing

Uses App Router with dynamic params and `generateStaticParams`:

```tsx
// src/app/courses/[courseId]/page.tsx
export async function generateStaticParams() {
  return courses.map((course) => ({ courseId: course.id }));
}
```

Units are grouped by unit number extracted from ID regex: `/unit(\d+)/`.

## Environment Variables

`.env.local` for development:

```
STUDENT_PASSWORD=zbti-ai-cs2026
AUTH_SECRET=<random-string>  # Required for production
```

## Related Documentation

Parent directory CLAUDE.md covers:
- Slidev source file locations (`25-2大数据/`, `25-2Javaweb/`)
- `deploy-slides.sh` for syncing slides to `public/slides/`
- Course progress tracking and teaching guidelines