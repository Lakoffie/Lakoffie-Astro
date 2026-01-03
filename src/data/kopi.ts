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
    slug: 'robusta-temanggung',
    nama: 'Robusta Temanggung', 
    karakter: 'Pahit Seimbang , Manis Gula Jawa', 
    harga: 'Rp 18.000', 
    hargaPromo: 'Rp 15.000', 
    image: '/img/lakoffie-robusta-temanggung.png',
    isNew: true,
    deskripsi: 'Dipanen dari kawasan temanggung,Robusta kami menawarkan sensasi gula jawa alami dengan tingkat kekentalan (body) yang mantap. Cocok bagi Anda penikmat kopi susu atau kopi hitam yang kuat tanpa rasa asam berlebih.'
  },
  { 
    id: 2, 
    slug: 'lokal-salatiga',
    nama: 'Lokal Salatiga', 
    karakter: 'Pahit Dengan Sensasi Asam', 
    harga: 'Rp 18.000', 
    hargaPromo: 15000,
    image: '/img/lakoffie-lokal-salatiga.png',
    isNew: false,
    deskripsi: 'Satu varian biji kopi asli sekitar salatiga, menawarkan rasa pahit yang seimbang dengan sentuhan akhir asam yang tersembunyi di akhir sesapan, menjadikannya pilihan sempurna untuk metode seduh manual (V60) atau pecinta kopi hitam ringan.'
  },
  {
    id: 3, 
    slug: 'robusta-lampung-king',
    nama: 'Robusta Lampung Gold', 
    karakter: 'Full Body, Pahit Nendang & Earthy', 
    harga: 'Rp 18.000', 
    hargaPromo: 'Rp 15.000',
    image: '/img/lakoffie-robusta-lampung.png',
    isNew: true,
    deskripsi: 'Representasi sejati dari tanah Lampung untuk penikmat kopi yang mencari intensitas maksimal. Hadir dengan body yang sangat kental dan sensasi pahit "nendang" tanpa basa-basi, ditutup dengan aroma earthy yang pekat. Inilah pilihan mutlak bagi pejuang kafein atau campuran base susu yang ingin karakter kopinya tetap dominan.'
},
{
    id: 4, 
    slug: 'cold-brew-bag',
    nama: 'Cold Brew Celup', 
    karakter: 'Lebih Praktis Tanpa Ampas', 
    harga: 'Rp 30.000', 
    hargaPromo: 'Rp 20.000',
    image: '/img/lakoffie-cold-brew.jpg',
    isNew: true,
    deskripsi: 'Solusi es kopi susu ala cafe dari dapur sendiri tanpa perlu alat seduh rumit. Menggunakan teknologi kantong celup khusus yang menjamin hasil seduhan bersih tanpa ampas (zero residue), namun tetap menghasilkan ekstrak kopi hitam yang bold dan kental. Cukup rendam semalam, tambahkan susu favorit, dan nikmati kesegaran kopi premium dengan cara paling efisien.'
},
{
    id: 5, 
    slug: 'lakoffie-gula-aren',
    nama: 'Lakoffie Gula Aren', 
    karakter: 'Kopi Murni Plus Gula Aren', 
    harga: 'Rp 25.000', 
    hargaPromo: 'Rp 20.000',
    image: '/img/lakoffie-gula-aren.jpg',
    isNew: false,
    deskripsi: 'Lebih dari sekadar manis, varian ini adalah jawaban kalian yang melek kesehatan namun tak ingin kehilangan momen ngopi. Menggunakan gula aren murni sebagai pemanis alami yang lebih kaya mineral dan memiliki indeks glikemik lebih rendah dibanding gula pasir biasa. Perpaduan sempurna antara espresso bold dengan legitnya aren, memberikan energi yang lebih stabil tanpa rasa bersalah.'
}
];
