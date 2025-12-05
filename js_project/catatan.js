// ===========================
// |   CATATAN JAVASCRIPT    |
// |   DARI AWAL SAMPAI FUNCTION
// ===========================

// 1. Console
// -----------
// console.log("Halo world");
// console.error("Error!");
// console.warn("Warning!");

// 2. Variabel
// -----------
// let a = 10;       // bisa berubah
// const b = 20;     // tetap
// var c = 30;       // jadul

// 3. Tipe Data
// ------------
// let angka = 10;              // number
// let teks = "Halo";           // string
// let bool = true;             // boolean
// let kosong = null;           // null
// let gaAda = undefined;       // undefined
// let list = [1, 2, 3];        // array
// let obj = {nama:"Arhaqi"};   // object

// 4. Operator
// ------------
// Aritmatika: + - * / %
// Perbandingan: == === != !== > < >= <=
// Logika: && || !

// 5. If Else
// -----------
// let nilai = 75;
// if (nilai >= 75) {
//     console.log("Lulus");
// } else {
//     console.log("Tidak lulus");
// }

// 6. Switch Case
// ---------------
// switch(hari) {
//   case 1: console.log("Senin"); break;
//   case 2: console.log("Selasa"); break;
//   default: console.log("Gak ada");
// }

// 7. Looping
// ------------
// For:
// for (let i = 1; i <= 5; i++) { console.log(i); }

// While:
// let i = 1;
// while (i <= 5) { console.log(i); i++; }

// Do While:
// let x = 1;
// do { console.log(x); x++; } while (x <= 5);

// For of (array):
// for (let angka of [10, 20, 30]) console.log(angka);

// 8. Array
// ---------
// let arr = [10, 20, 30];
// arr.push(40);     // tambah belakang
// arr.pop();        // hapus belakang
// arr.shift();      // hapus depan
// arr.unshift(5);   // tambah depan

// console.log(arr[1]); // akses index

// 9. Object
// ----------
// let siswa = {
//   nama: "Arhaqi",
//   umur: 15,
//   nilai: 98
// };

// console.log(siswa.nama);
// console.log(siswa["nilai"]);

// 10. Function
// -------------
// Function biasa:
// function tambah(a, b) {
//     return a + b;
// }

// Arrow function:
// const kali = (a, b) => a * b;

// 11. Function dengan input
// --------------------------
// function luasSegitiga(a, t) {
//     return 0.5 * a * t;
// }

// let hasil = luasSegitiga(10, 5);
// console.log(hasil);

// 12. DOM (HTML Interaction)
// ---------------------------
// document.getElementById("judul");
// document.querySelector(".box");

// Ubah teks:
// document.getElementById("judul").innerText = "Halo";

// Ubah style:
// document.getElementById("judul").style.color = "red";

// 13. Event Listener
// -------------------
// document.getElementById("btn").addEventListener("click", () => {
//     alert("Diklik!");
// });

// 14. Input User
// ---------------
// prompt:
// let nama = prompt("Masukkan nama:");

// input HTML:
// let nilai = document.getElementById("nilai").value;

// 15. Template Literal (Backtick)
// --------------------------------
// let nama = "Arhaqi";
// console.log(`Halo aku ${nama}`);

// 16. Try - Catch
// ----------------
// try {
//     throw "Error woy!";
// } catch(e) {
//     console.log(e);
// }

// 17. JSON
// ---------
// let data = '{"nama":"Arhaqi","umur":15}';

// let obj = JSON.parse(data);     // JSON → JS Object
// let jsonBaru = JSON.stringify(obj); // Object → JSON

