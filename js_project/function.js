function salam(nama,mapel){
   console.log(`walah, ${nama}!,
    anda belajar mapel ${mapel} `);
}

// salam("Arhaqi","Javascript");

// function kelilingLingkaran(jariJari){
   // return 2 * 3.14 * jariJari;
// }

const kelilingLingkaran = (r) => 2 * 3.14 * r;

let r = 3
hasil = kelilingLingkaran(r);
console.log(`keliling lingkaran dengan jari-jari ${r} adalah ${hasil}`);