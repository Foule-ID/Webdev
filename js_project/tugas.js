let nama = "Arhaqi Fadilgaffari";
let tahunSekarang = 2025;
let tahunLahir = 2018;

let umur = tahunSekarang - tahunLahir;
let bisaBuatKtp = umur >= 17;
let sisaTahun = 17 - umur;

if (bisaBuatKtp) {
  console.log(`Nama saya ${nama}, umur saya ${umur} tahun.`);
  console.log("Saya sudah bisa membuat KTP.");
} else {
  console.log(`Nama saya ${nama}, umur saya ${umur} tahun.`);
  console.log(`Saya akan bisa membuat KTP ${sisaTahun} tahun lagi.`);
}
