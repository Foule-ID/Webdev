//oop polimorphism

class Kendaraan {
    bergerak() {
        console.log("Kendaraan bergerak");
    }
}

class Mobil extends Kendaraan {
    bergerak() {
        console.log("Mobil melaju di jalan raya");
    }
}

class motor extends Kendaraan {
    bergerak() {
        console.log("Motor melaju di jalanan");
    }
}

const mobil = new Mobil();
const motor1 = new motor();

mobil.bergerak(); 
motor1.bergerak();