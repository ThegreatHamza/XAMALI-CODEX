import { createClient } from './server';

export async function getCurrentUserRole() {
  const supabase = await createClient();
  if (!supabase.token) return null;

  const [user] = await supabase.query('users?select=role&limit=1');
  return (user?.role as 'worker' | 'employer' | 'admin' | undefined) ?? null;
}
