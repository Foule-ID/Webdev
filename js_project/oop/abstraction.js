class buah {
  constructor(nama) {
    this.nama = nama;
  }

  manfaat() {
    throw new Error("Method 'manfaat()' must be implemented.");
  }
}

class apel extends buah {
  constructor(nama, warna) {
    super(nama);
    this.warna = warna;
  }

  manfaat() {
    return `Apel ${this.nama} dengan warna ${this.warna} sangat baik untuk kesehatan.`;
  }
}

class pisang extends buah {
  constructor(nama, rasa) {
    super(nama);
    this.rasa = rasa;
  }

  manfaat() {
    return `Pisang ${this.nama} dengan rasa ${this.rasa} memberikan energi cepat.`;
  }
}

const Apel = new apel("Fuji", "Hijau");
const Pisang = new pisang("Cavendish", "Manis");

console.log(Apel.manfaat());
console.log(Pisang.manfaat());