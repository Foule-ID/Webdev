//oop abstraction
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        throw new Error("Method 'startEngine()' must be implemented.");
    }
}

class Mobil extends Vehicle {
    startEngine() {
        return `${this.brand} ${this.model} adalah mobil impian saya`;
    }
}
class Motor extends Vehicle {
    startEngine() {
        return `${this.brand} ${this.model} itu motor impian`;
    }
}

const mobil = new Mobil("BMW", "M4 Competition");
const motor = new Motor("Yamaha", "YZF R1M");

console.log(mobil.startEngine());
console.log(motor.startEngine());

