---
noteId: "5f6d86005f7d11f1bf6bd3e2bd4220fb"
tags: []

---

# Daud Mohamud Portfolio

Professional portfolio website for Daud Mohamud, built with Next.js App Router, TypeScript, Tailwind CSS, React components, and Supabase-ready data/auth/contact workflows.

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Supabase Setup

1. Create a Supabase project.
2. Open the SQL editor and run `supabase/schema.sql`.
3. Add values to `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

4. In Supabase Auth, create an admin user with email and password.
5. The contact form writes to `contact_messages` when Supabase is configured. Without env vars, the app uses local fallback behavior so the site still runs.

## Deployment on Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Add the Supabase environment variables in Vercel Project Settings.
4. Deploy.

## Content Updates

Local fallback content lives in:

- `lib/data/projects.ts`
- `lib/data/certifications.ts`
- `lib/data/skills.ts`
- `lib/data/resume.ts`
- `lib/data/blog.ts`

Resume file location:

- `public/resume/Daud-Mohamud-Resume.pdf`

Certificate file location:

- `public/certificates/`

Project screenshots:

- `public/projects/`

## Main Routes

- `/`
- `/about`
- `/resume`
- `/skills`
- `/projects`
- `/projects/[slug]`
- `/certifications`
- `/blog`
- `/blog/[slug]`
- `/contact`
- `/admin/login`
- `/admin/dashboard`
- `/admin/projects`
- `/admin/certifications`
- `/admin/blog`
- `/admin/messages`
- `/admin/settings`
# Portfolio
