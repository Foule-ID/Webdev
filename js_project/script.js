//variabel
//let

let a = 10;
a = 20;

//let dapat diubah nilainya dan dapat ditimpal ulang

console.log("nilai a adalah " + a);

//const

const b = 30;
// constantan tidak dapat diubah nilainya dan juga tidak dapat ditimpal ulang
// b = 40; --- IGNORE ---
console.log("nilai b adalah " + b);

//type data
//string
const string = `ini adalah tipe data string`;
console.log(string);

//number
const number = 100;
console.log(`adalah tipe data number ${number}`);

//boolean
const boolean = true;
console.log(`adalah tipe data boolean ${boolean}`);

//null/undefined
let nope;
console.log(`adalah tipe data undefined ${nope}`);

//operator
//aritmatika
let tambah = 10 + 5;
let kurang = 10 - 5;
let kali = 10 * 5;
let bagi = 10 / 5;
let modulus = 10 % 3;

console.log(`hasil tambah adalah ${tambah}`);
console.log(`hasil kurang adalah ${kurang}`);
console.log(`hasil kali adalah ${kali}`);
console.log(`hasil bagi adalah ${bagi}`);
console.log(`hasil modulus adalah ${modulus}`);

//penugasan
let c = 10;
c += 5;
console.log(`hasil penugasan adalah ${c}`);

//perbandingan
let lebihBesar = 10 > 5;
let lebihKecil = 10 < 5;
let samaDengan = 10 == 10;
let tidakSamaDengan = 10 != 5;

//logika
let dan = false && false;
let atau = true || false;
let bukan = !true;

console.log(`hasil logika dan adalah ${dan}`);

const log1 = (60 - (70 - (20 +50))) >= 0 //
const log2 = (69 % "satu") <= 2 //
const logika = log1 || log2
console.log(`hasil logika ble ble ble adalah ${logika}`);

console.log(log2)
console.log(log1)