class buah {
    constructor(warna, rasa, nama){
        this.warna = warna;
        this.rasa = rasa;
        this.nama = nama;
    }
    jenis(){
        console.log(`saya mempunyai buah bernama ${this.nama} rasanya ${this.rasa}
    berwarna ${this.warna}`);
    }
}

//clas turunan
class BuahJeruk extends buah {
    constructor(warna, rasa, nama, vitamin){
        super(warna, rasa, nama);//memanggil constructor dari class induk
        this.vitamin = vitamin;//parameter baru
    }
    kandungan(){
        console.log(`buah ${this.nama} mengandung vitamin C yang tinggi`);
    }
}

const jeruk = new BuahJeruk("Oranye","Manis","Jeruk Sunkist","Sedang");
jeruk.jenis();
jeruk.kandungan();