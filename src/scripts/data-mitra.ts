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
  
];
