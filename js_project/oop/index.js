function pisang() {
   
}

class Pisang{
    constructor(nama,warna,rasa){
        this.nama = nama;
        this.warna = warna;
        this.rasa = rasa;
    }

    jenis(){ 
       console.log(`saya mempunyai pisang bernama ${pisang1.nama} rasanya ${pisang1.rasa}
    berwarna ${pisang1.warna}`);
    }
}



const pisang1 = new Pisang("Cavendish","Kuning","Manis");
const pisang2 = new Pisang("Raja","Hijau","Asam");
const pisang3 = new Pisang("Ambon","Kuning","Manis");
const pisang4 = new Pisang("Tanduk","Kuning","Manis");

pisang1.jenis();
pisang2.jenis();
pisang3.jenis();
pisang4.jenis();

