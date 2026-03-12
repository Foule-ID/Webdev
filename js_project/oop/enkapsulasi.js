class Buah {
    #stok; // private property
    constructor(nama, stok){
        this.nama = nama;
        this.stok = stok;   
    }

    getStok(){
        return this.#stok;
    }

    setStok(jumlah){
        if(jumlah < 0){
            console.log("Stok tidak boleh negatif");
        } else {
            this.#stok = jumlah;
        }   
    }
}

const apel = new Buah("Apel", 10);

apel.setStok(20);
console.log(`Stok ${apel.nama} adalah ${apel.getStok()}`);

