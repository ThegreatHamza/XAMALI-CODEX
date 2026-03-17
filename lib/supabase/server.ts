import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const token = cookieStore.get('sb-access-token')?.value;

  async function query(path: string, init?: RequestInit) {
    if (!url || !anon) throw new Error('Supabase environment variables are missing.');
    const response = await fetch(`${url}/rest/v1/${path}`, {
      ...init,
      headers: {
        apikey: anon,
        Authorization: `Bearer ${token ?? anon}`,
        'Content-Type': 'application/json',
        ...(init?.headers ?? {})
      },
      cache: 'no-store'
    });

    if (!response.ok) throw new Error(`Supabase request failed: ${response.status}`);
    return response.json();
  }

  return { query, token };
}
