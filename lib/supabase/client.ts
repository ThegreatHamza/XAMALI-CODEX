export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  async function query(path: string, init?: RequestInit) {
    if (!url || !anon) throw new Error('Supabase environment variables are missing.');
    const response = await fetch(`${url}/rest/v1/${path}`, {
      ...init,
      headers: {
        apikey: anon,
        Authorization: `Bearer ${anon}`,
        'Content-Type': 'application/json',
        ...(init?.headers ?? {})
      }
    });
    if (!response.ok) throw new Error(`Supabase request failed: ${response.status}`);
    return response.json();
  }

  return { query };
}
