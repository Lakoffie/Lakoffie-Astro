export interface Artikel {
  slug: string;
  judul: string;
  kategori: 'Tips' | 'Edukasi' | 'Trending';
  excerpt: string;
  konten: string;
  image: string;
  tanggal: string;
  ctaText: string;
}

export const daftarArtikel: Artikel[] = [
  {
    slug: 'tips-menyeduh-kopi-murni',
    judul: '5 Tips Menyeduh Kopi Murni Agar Aroma Cafe Keluar Maksimal',
    kategori: 'Tips',
    excerpt: 'Menyeduh kopi murni tanpa ampas butuh teknik khusus. Mulai dari suhu air hingga rasio kopi yang pas.',
    konten: `Menyeduh kopi murni di rumah seringkali hasilnya berbeda dengan di cafe. Rahasianya ada pada tiga hal: Suhu air, ukuran gilingan, dan rasio. 
    Pertama, pastikan suhu air berada di kisaran 90-93 derajat Celcius. Air mendidih justru akan membakar bubuk kopi dan menghilangkan aroma aslinya. 
    Kedua, gunakan rasio 1:15 (1 gram kopi untuk 15ml air). Dengan teknik yang benar, kopi murni akan mengeluarkan rasa manis alami (sweetness) yang tersembunyi.`,
    image: '/img/blog/seduh-kopi.png',
    tanggal: '01 Jan 2026',
    ctaText: 'Sudah tahu tipsnya? Yuk praktikkan dengan Lakoffie Fine Robusta yang punya body tebal dan aroma cokelat alami.'
  },
  {
    slug: 'kopi-pahit-vs-specialty',
    judul: 'Kopi Pahit vs Specialty: Mengapa Kopi Murni Tidak Harus Pahit?',
    kategori: 'Edukasi',
    excerpt: 'Banyak yang mengira kopi asli harus pahit pekat. Padahal, kopi berkualitas punya rasa buah dan bunga.',
    konten: `Budaya minum kopi di Indonesia lama didominasi oleh persepsi bahwa "kopi itu pahit". Padahal, rasa pahit yang berlebihan biasanya muncul karena proses sangrai yang gosong atau adanya campuran jagung/esens. 
    Kopi Specialty atau kopi murni berkualitas tinggi justru menawarkan spektrum rasa yang luas. Ada rasa kacang-kacangan, karamel, bahkan aroma buah-buahan seperti jeruk atau beri. Ini disebut sebagai karakter asli dari tanah tempat kopi itu tumbuh.`,
    image: '/img/blog/specialty-coffee.png',
    tanggal: '02 Jan 2026',
    ctaText: 'Mau merasakan kopi murni yang tidak cuma pahit? Coba varian Arabica kami yang memiliki karakter asam elegan dan fruity.'
  },
  {
    slug: 'sejarah-budaya-kopi-indonesia',
    judul: 'Sejarah Panjang Budaya Minum Kopi di Nusantara',
    kategori: 'Edukasi',
    excerpt: 'Dari zaman kolonial hingga era kopi gelombang ketiga (Third Wave), kopi telah menjadi identitas bangsa.',
    konten: `Kopi masuk ke Indonesia pada tahun 1696 dibawa oleh Belanda ke Batavia. Sejak saat itu, Indonesia menjadi produsen kopi utama dunia. 
    Budaya minum kopi kita berevolusi, dari sekadar "kopi tubruk" di pagi hari bersama gorengan, hingga kini menjadi gaya hidup urban di coffee shop modern. Namun, satu yang tidak berubah: kecintaan masyarakat terhadap kemurnian rasa kopi asli tanah air yang kaya akan rempah dan body yang kuat.`,
    image: '/img/blog/sejarah-kopi.png',
    tanggal: '03 Jan 2026',
    ctaText: 'Jadilah bagian dari pelestari budaya kopi murni Nusantara. Lakoffie hadir untuk menjaga keaslian rasa kopi petani lokal kita.'
  }
];
