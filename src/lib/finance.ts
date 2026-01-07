// src/lib/finance.ts

export function hitungAmortisasi(hargaPerolehan: number, tahun: number) {
  // Metode Garis Lurus (Sederhana)
  // Misal alat kopi masuk Kelompok 1 (Masa manfaat 4 tahun)
  const masaManfaat = 4;
  const penyusutanPerTahun = hargaPerolehan / masaManfaat;
  
  return {
    biayaPenyusutan: penyusutanPerTahun,
    nilaiBuku: hargaPerolehan - (penyusutanPerTahun * tahun)
  };
}

export function hitungLabaRugi(omzet: number, hpp: number, operasional: number) {
  const labaKotor = omzet - hpp;
  const labaBersih = labaKotor - operasional;
  return { labaKotor, labaBersih };
}
