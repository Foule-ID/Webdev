class Mobil{
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

class MobilSport extends Mobil{
    constructor(merk, jenis, cc, hp, kecepatanMaksimal){
        super(merk, jenis, cc, hp);
        this.kecepatanMaksimal = kecepatanMaksimal;
    }
    
    torsi(){
        console.log(`Mobil sport merk ${this.merk} memiliki torsi yang tinggi dan 
        kecepatan maksimal hingga ${this.kecepatanMaksimal} km/h`);
    }
}

const mobil = new MobilSport("koenisegg","jesko absolut","5000 cc","1280 hp","482");
mobil.spesifikasi();
mobil.torsi();