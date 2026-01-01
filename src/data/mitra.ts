export interface Mitra {
  id: string;
  nama: string;
  wilayah: string; // Kabupaten/Kota
  kecamatan: string;
  jenis: 'Toko' | 'Cafe';
  alamat: string;
  gmaps: string;
  image: string;
  lat: number; // Untuk fitur "Terdekat"
  lng: number;
}

export const daftarMitra: Mitra[] = [
  {
    id: 'kopi-kenangan-senja',
    nama: 'Kopi Kenangan Senja',
    wilayah: 'Pringsewu',
    kecamatan: 'Pringsewu Kota',
    jenis: 'Cafe',
    alamat: 'Jl. Jendral Sudirman No. 12',
    gmaps: 'https://goo.gl/maps/xxx',
    image: '/img/mitra/cafe1.jpg',
    lat: -5.358,
    lng: 105.055
  },
  // Tambahkan data lainnya di sini
  {
  id: 'minimarket-asa',
  nama: 'Minimarket Asa & Asa Cell',
  alamat: 'Jl. Kemiri III No.22, Kec. Sidorejo, Salatiga',
wilayah: 'Salatiga',
kecamatan: 'Sidorejo',
  jenis: 'Toko',
  image: '/img/mitra/minimarket-asa.png',
  gmaps: 'https://maps.app.goo.gl/Q6D3kbQQeQziaieV6?g_st=ac',
  lat: -7.3305,
  lng: 110.5084
},
{
  id: 'toko-solekah',
  nama: 'Toko Ibu Solekah',
  alamat: 'Jl. Karang Taruna, Kec. Sidorejo, Salatiga',
  wilayah: 'Salatiga',
  kecamatan: 'Sidorejo',
  image: '/img/mitra/warung-bu-solekah.png',
  gmaps: 'https://maps.app.goo.gl/8WpZ2RZDLrAdjMF27?g_st=ac',
  lat: 0,
  ling:0
},
];
