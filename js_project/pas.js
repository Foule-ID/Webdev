
let harga = 200000;
let diskon = 20;
let statusMember = true; 

let hargaSetelahDiskon = harga - (harga * diskon / 100);
let hargaAkhir;

console.log(`Harga awal barang : ${harga}`);
console.log(`Diskon utama : ${diskon}%`);
console.log(`Harga setelah diskon utama : ${hargaSetelahDiskon}`);

if (statusMember === true) {
  console.log(`Anda adalah member.`);
  console.log(`Anda mendapatkan diskon tambahan 10%`);
  let diskonTambahan = hargaSetelahDiskon * 0.10;      
  hargaAkhir = hargaSetelahDiskon - diskonTambahan;
  console.log(`Diskon tambahan : ${diskonTambahan}`);
  console.log(`Harga akhir : ${hargaAkhir}`);
} else {
  console.log(`Anda bukan member.`);
  console.log(`Anda tidak mendapatkan diskon tambahan.`);
  hargaAkhir = hargaSetelahDiskon;
  console.log(`Harga akhir : ${hargaAkhir}`);
}


