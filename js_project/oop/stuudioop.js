function mobil() {
    
}

class Mobil {
    constructor(merk, jenis, cc, hp) {
        this.merk = merk;
        this.jenis = jenis;
        this.cc = cc;
        this.hp = hp;
    }

    spesifikasi() {
        console.log(`Saya mempunyai mobil merk ${this.merk}, berjenis ${this.jenis}, 
        dengan cc ${this.cc} dan horsepower ${this.hp}`);
    }
}

const mobil1 = new Mobil("koenisegg","jesko absolut","5000 cc","1280 hp");
const mobil2 = new Mobil("bugatti","chiron","8000 cc","1500 hp");
const mobil3 = new Mobil("lamborghini","aventador","4500","1300");
const mobil4 = new Mobil("ferrari","SF9XX","3500","1100");
const mobil5 = new Mobil("porsche","GT4","3000","1000");
const mobil6 = new Mobil("aston martin","DBS","3200","1050");
const mobil7 = new Mobil("mclaren","artura","3300","1075");
const mobil8 = new Mobil("pagani","huayra","3600","1150");

mobil1.spesifikasi();
mobil2.spesifikasi();
mobil3.spesifikasi();
mobil4.spesifikasi();
mobil5.spesifikasi();
mobil6.spesifikasi();
mobil7.spesifikasi();
mobil8.spesifikasi();