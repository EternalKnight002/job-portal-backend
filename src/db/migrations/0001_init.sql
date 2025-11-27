CREATE TABLE users (
  id serial PRIMARY KEY,
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  full_name text,
  role text NOT NULL DEFAULT 'candidate',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE companies (
  id serial PRIMARY KEY,
  owner_id int REFERENCES users(id) ON DELETE SET NULL,
  name text NOT NULL,
  about text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE jobs (
  id serial PRIMARY KEY,
  company_id int REFERENCES companies(id),
  title text NOT NULL,
  description text,
  location text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE applications (
  id serial PRIMARY KEY,
  job_id int REFERENCES jobs(id),
  candidate_id int REFERENCES users(id),
  resume_url text,
  status text DEFAULT 'SUBMITTED',
  applied_at timestamptz DEFAULT now()
);
