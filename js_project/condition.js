const tahunSekarang = 2025;
const tahunLahir = 2018;

const umur = tahunSekarang - tahunLahir;
const sisaUmurBuatKTP = 17 - umur;

if (umur >= 17) {
  console.log(`anda sudah bisa membuat KTP.`);
} else if (umur >10 && umur <17) {
  console.log(`anda belum bisa membuat KTP, tunggu selama ${sisaUmurBuatKTP} tahun lagi,karena umur anda ${umur} tahun.`);
} else {
  console.log(`untuk membuat ktp masih lama,karena umur anda ${umur} tahun.`);
}