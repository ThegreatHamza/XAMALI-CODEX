create type public.user_role as enum ('worker', 'employer', 'admin');

create table public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  role public.user_role not null,
  full_name text,
  phone text,
  locale text default 'en',
  created_at timestamptz default now()
);

create table public.worker_profiles (
  id uuid primary key references public.users(id) on delete cascade,
  trade text not null,
  years_experience int default 0,
  location text,
  languages text[] default '{}',
  bio text,
  expected_rate numeric,
  availability text,
  verified boolean default false
);

create table public.employer_profiles (
  id uuid primary key references public.users(id) on delete cascade,
  company_name text not null,
  contact_person text,
  company_type text,
  location text,
  description text
);

create table public.jobs (
  id uuid primary key default gen_random_uuid(),
  employer_id uuid not null references public.employer_profiles(id) on delete cascade,
  title text not null,
  description text not null,
  trade text,
  location text,
  salary text,
  contract_type text,
  experience_required text,
  status text default 'published',
  created_at timestamptz default now()
);

create table public.job_applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  worker_id uuid not null references public.worker_profiles(id) on delete cascade,
  status text default 'submitted',
  cover_note text,
  created_at timestamptz default now(),
  unique(job_id, worker_id)
);

create table public.saved_jobs (
  worker_id uuid references public.worker_profiles(id) on delete cascade,
  job_id uuid references public.jobs(id) on delete cascade,
  created_at timestamptz default now(),
  primary key(worker_id, job_id)
);

create table public.saved_workers (
  employer_id uuid references public.employer_profiles(id) on delete cascade,
  worker_id uuid references public.worker_profiles(id) on delete cascade,
  created_at timestamptz default now(),
  primary key(employer_id, worker_id)
);

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid not null references public.users(id),
  receiver_id uuid not null references public.users(id),
  body text not null,
  created_at timestamptz default now()
);

create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id),
  title text not null,
  body text,
  read boolean default false,
  created_at timestamptz default now()
);

create table public.certifications (
  id uuid primary key default gen_random_uuid(),
  worker_id uuid not null references public.worker_profiles(id) on delete cascade,
  name text not null,
  issuer text,
  file_path text
);

create table public.admin_actions (
  id uuid primary key default gen_random_uuid(),
  admin_id uuid not null references public.users(id),
  action text not null,
  metadata jsonb,
  created_at timestamptz default now()
);

alter table public.users enable row level security;
alter table public.worker_profiles enable row level security;
alter table public.employer_profiles enable row level security;
alter table public.jobs enable row level security;
alter table public.job_applications enable row level security;
alter table public.saved_jobs enable row level security;
alter table public.saved_workers enable row level security;
alter table public.messages enable row level security;
alter table public.notifications enable row level security;

create policy "users can view own profile" on public.users for select using (auth.uid() = id);
create policy "users can edit own profile" on public.users for update using (auth.uid() = id);
create policy "public can view worker profiles" on public.worker_profiles for select using (true);
create policy "workers edit own profile" on public.worker_profiles for all using (auth.uid() = id);
create policy "public view employer profiles" on public.employer_profiles for select using (true);
create policy "employers edit own profile" on public.employer_profiles for all using (auth.uid() = id);
create policy "public view jobs" on public.jobs for select using (true);
create policy "employers manage own jobs" on public.jobs for all using (auth.uid() = employer_id);
create policy "workers apply" on public.job_applications for insert with check (auth.uid() = worker_id);
create policy "view own applications" on public.job_applications for select using (auth.uid() = worker_id or auth.uid() in (select employer_id from public.jobs where id = job_id));
