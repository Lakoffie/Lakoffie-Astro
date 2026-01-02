// src/data/kopi.ts
export interface Kopi {
  id: number;
  slug: string;
  nama: string;
  karakter: string;
  harga: string;
  hargaPromo: string | null;
  image: string;
  isNew: boolean;
  deskripsi: string;
}

export const varianKopi: Kopi[] = [
  { 
    id: 1, 
    slug: 'fine-robusta',
    nama: 'Fine Robusta', 
    karakter: 'Chocolate, Nutty, Heavy Body', 
    harga: 'Rp 15.000', 
    hargaPromo: 'Rp 13.000', 
    image: '/img/lakoffie-robusta-temanggung.png',
    isNew: true,
    deskripsi: 'Dipanen dari lereng gunung Temanggung, Fine Robusta kami menawarkan sensasi rasa cokelat alami dengan tingkat kekentalan (body) yang mantap. Cocok bagi Anda penikmat kopi susu atau kopi hitam yang kuat tanpa rasa asam berlebih.'
  },
  { 
    id: 2, 
    slug: 'arabica-special',
    nama: 'Arabica Special', 
    karakter: 'Citrus, Caramel, Light Acid', 
    harga: 'Rp 15.000', 
    hargaPromo: null,
    image: '/img/lakoffie-lokal-salatiga.png',
    isNew: false,
    deskripsi: 'Varian Arabica Special kami menghadirkan kesegaran aroma buah (citrus) dan sentuhan karamel manis di akhir sesapan. Karakter asam yang elegan menjadikannya pilihan sempurna untuk metode seduh manual (V60) atau pecinta kopi hitam ringan.'
  }
];
