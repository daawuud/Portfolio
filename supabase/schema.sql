create extension if not exists "pgcrypto";

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  company text,
  subject text not null,
  message text not null,
  created_at timestamptz default now(),
  status text default 'new'
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  description text not null,
  tools text[],
  status text,
  image_url text,
  github_url text,
  live_url text,
  case_study text,
  featured boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.certifications (
  id uuid primary key default gen_random_uuid(),
  title text unique not null,
  issuer text not null,
  category text,
  provider text,
  completion_date date,
  description text,
  image_url text,
  certificate_url text,
  featured boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  category text,
  published boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value text,
  updated_at timestamptz default now()
);

alter table public.contact_messages enable row level security;
alter table public.projects enable row level security;
alter table public.certifications enable row level security;
alter table public.blog_posts enable row level security;
alter table public.site_settings enable row level security;

drop policy if exists "Public can submit contact messages" on public.contact_messages;
drop policy if exists "Admins can read contact messages" on public.contact_messages;
drop policy if exists "Admins can update contact messages" on public.contact_messages;
drop policy if exists "Admins can delete contact messages" on public.contact_messages;
drop policy if exists "Public can read projects" on public.projects;
drop policy if exists "Public can read certifications" on public.certifications;
drop policy if exists "Public can read published blog posts" on public.blog_posts;
drop policy if exists "Public can read site settings" on public.site_settings;
drop policy if exists "Admins can manage projects" on public.projects;
drop policy if exists "Admins can manage certifications" on public.certifications;
drop policy if exists "Admins can manage blog posts" on public.blog_posts;
drop policy if exists "Admins can manage site settings" on public.site_settings;

create policy "Public can submit contact messages"
on public.contact_messages
for insert
to anon
with check (true);

create policy "Admins can read contact messages"
on public.contact_messages
for select
to authenticated
using (true);

create policy "Admins can update contact messages"
on public.contact_messages
for update
to authenticated
using (true)
with check (true);

create policy "Admins can delete contact messages"
on public.contact_messages
for delete
to authenticated
using (true);

create policy "Public can read projects"
on public.projects
for select
to anon, authenticated
using (true);

create policy "Public can read certifications"
on public.certifications
for select
to anon, authenticated
using (true);

create policy "Public can read published blog posts"
on public.blog_posts
for select
to anon, authenticated
using (published = true or auth.role() = 'authenticated');

create policy "Public can read site settings"
on public.site_settings
for select
to anon, authenticated
using (true);

create policy "Admins can manage projects"
on public.projects
for all
to authenticated
using (true)
with check (true);

create policy "Admins can manage certifications"
on public.certifications
for all
to authenticated
using (true)
with check (true);

create policy "Admins can manage blog posts"
on public.blog_posts
for all
to authenticated
using (true)
with check (true);

create policy "Admins can manage site settings"
on public.site_settings
for all
to authenticated
using (true)
with check (true);
