class mobil{
    #merk;
    #jenis;
    constructor(merk, jenis, cc, hp) {
        this.#merk = merk;
        this.#jenis = jenis;
        this.cc = cc;
        this.hp = hp;
    }
    get merk(){
        return this.#merk;
    }

    get jenis(){
        return this.#jenis;
    }


    setmerk(newMerk){
        this.#merk = newMerk;
    }

    setjenis(newJenis){
        this.#jenis = newJenis;
    }
}

const mobil1 = new mobil("koenisegg","jesko absolut","5000 cc","1280 hp");
mobil1.setjenis("supercar");

console.log(mobil1.merk);
console.log(mobil1.jenis);