import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

// Ganti dengan URL & Key dari dashboard Supabase Master
const supabase = createClient(
  'URL_SUPABASE_MASTER',
  'ANON_KEY_SUPABASE_MASTER'
);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  // Kirim data ke gudang Supabase
  const { error } = await supabase
    .from('transaksi')
    .insert([data]);

  if (error) {
    return new Response(JSON.stringify({ message: "Gagal simpan" }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: "Berhasil disimpan ke awan!" }), { status: 200 });
};
