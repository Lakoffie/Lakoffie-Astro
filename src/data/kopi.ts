export interface Kopi {
  id: number;
  slug: string;
  nama: string;
  karakter: string;
  harga: string;
  hargaPromo: string | null;
  image: string;
  alt?: string;
  isNew: boolean;
  deskripsi: string;
  // Tambahkan properti kategori di bawah ini
  kategori: "Biji Kopi" | "Kopi Bubuk" | "Cemilan" | "Alat Seduh";
}

export const varianKopi: Kopi[] = [
  { 
    id: 1, 
    slug: 'robusta-temanggung',
    nama: 'Robusta Temanggung', 
    karakter: 'Pahit Seimbang, Manis Gula Jawa', 
    harga: 'Rp 18.000', 
    hargaPromo: 'Rp 15.000', 
    image: '/img/lakoffie-robusta-temanggung.png',
    alt: 'Kopi Robusta Temanggung Lakoffie - Biji Kopi Pahit dengan Aroma Khas Gula Jawa Asli',
    isNew: false,
    deskripsi: 'Dipanen dari kawasan temanggung, Robusta kami menawarkan sensasi gula jawa alami dengan tingkat kekentalan (body) yang mantap.',
    kategori: "Biji Kopi"
  },
  { 
    id: 2, 
    slug: 'lokal-salatiga',
    nama: 'Lokal Salatiga', 
    karakter: 'Pahit Dengan Sensasi Asam', 
    harga: 'Rp 18.000', 
    hargaPromo: 'Rp 15.000',
    image: '/img/lakoffie-lokal-salatiga.png',
    alt: 'Kopi Lokal Salatiga Lakoffie - Perpaduan Rasa Pahit dan Sensasi Asam Segar Khas Pegunungan',
    isNew: true,
    deskripsi: 'Satu varian biji kopi asli sekitar salatiga, menawarkan rasa pahit yang seimbang dengan sentuhan akhir asam yang tersembunyi.',
    kategori: "Biji Kopi"
  },
  { 
    id: 3, 
    slug: 'robusta-lampung-king',
    nama: 'Robusta Lampung Gold', 
    karakter: 'Full Body, Pahit Nendang & Earthy', 
    harga: 'Rp 18.000', 
    hargaPromo: 'Rp 15.000',
    image: '/img/lakoffie-robusta-lampung.png',
    alt: 'Kopi Robusta Lampung Lakoffie - Body Mantap dan Earthy',
    isNew: false,
    deskripsi: 'Representasi sejati dari tanah Lampung untuk penikmat kopi yang mencari intensitas maksimal.',
    kategori: "Kopi Bubuk"
  },
  {
    id: 4, 
    slug: 'cold-brew-bag',
    nama: 'Cold Brew Celup', 
    karakter: 'Lebih Praktis Tanpa Ampas', 
    harga: 'Rp 30.000', 
    hargaPromo: 'Rp 20.000',
    image: '/img/lakoffie-cold-brew.jpg',
    alt: 'Lakoffie Cold Brew Coffee - Kopi Kantong Praktis',
    isNew: false,
    deskripsi: 'Solusi es kopi susu ala cafe dari dapur sendiri tanpa perlu alat seduh rumit.',
    kategori: "Kopi Bubuk"
  },
  {
    id: 5, 
    slug: 'lakoffie-gula-aren',
    nama: 'Lakoffie Gula Aren', 
    karakter: 'Kopi Murni Plus Gula Aren', 
    harga: 'Rp 25.000', 
    hargaPromo: 'Rp 20.000',
    image: '/img/lakoffie-gula-aren.jpg',
    alt: 'Lakoffie Gula Aren Premium - Pemanis Alami Rendah Glikemik',
    isNew: false,
    deskripsi: 'Menggunakan gula aren murni sebagai pemanis alami yang lebih kaya mineral.',
    kategori: "Kopi Bubuk"
  },
  // --- CONTOH TAMBAHAN UNTUK KATEGORI LAIN ---
  {
    id: 6, 
    slug: 'v60-dripper-set',
    nama: 'V60 Coffee Maker Set', 
    karakter: 'Material Kaca Borosilikat Tahan Panas', 
    harga: 'Rp 150.000', 
    hargaPromo: 'Rp 125.000',
    image: '/img/v60-set.jpg',
    alt: 'Alat Seduh V60 Lakoffie',
    isNew: true,
    deskripsi: 'Satu set alat seduh manual untuk hasil kopi yang bersih dan menonjolkan acidity.',
    kategori: "Alat Seduh"
  },
  {
    id: 7, 
    slug: 'cookies-kopi',
    nama: 'Coffee Butter Cookies', 
    karakter: 'Renyah dengan Aroma Kopi Murni', 
    harga: 'Rp 35.000', 
    hargaPromo: null,
    image: '/img/cookies.jpg',
    alt: 'Cemilan Teman Ngopi Lakoffie',
    isNew: false,
    deskripsi: 'Cookies mentega renyah yang dibuat dengan campuran bubuk kopi asli Lakoffie.',
    kategori: "Cemilan"
  }
];
