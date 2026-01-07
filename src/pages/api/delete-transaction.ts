import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const DELETE: APIRoute = async ({ request }) => {
  const supabase = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY
  );

  try {
    const { id } = await request.json();

    const { error } = await supabase
      .from('transaksi')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return new Response(JSON.stringify({ message: 'Terhapus' }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};
