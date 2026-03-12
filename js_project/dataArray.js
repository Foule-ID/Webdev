//Data Array
let data =["adi",16,"kaliputu"]

let kotaAsal = data[2] // mengambil data kudus
data[1] = 17 // mengganti data 16 dan ke 17
data.push("ngegame")// menambah data di paling akhir array

data.splice(1, 2)// 1 adalah index/urutan ke-,2 adalah jumlah data yang di hapus
data.splice(0, 0, "10 PPLG 2")// 1 atau angka di paling depan/awal adalah index ke-,angka ke dua ( 0 ) adalah tidak ada data yag dihapus
//10 pplg 2 adalah yang di timpa

console.log(data)

console.log("---------------------------------------------------------------------")

console.log(`kota asal saya adalah ${kotaAsal }, umur saya bertambah menjadi ${data[1]}
            hobby saya adalah ${data[3]}`)

console.log("---------------------------------------------------------------------")

console.log(`kota asal saya adalah ${data[2]}`)

console.log("---------------------------------------------------------------------")

let nama = ["ARHAQI","FADILGAFFARI"]

let nickname = nama[0]

console.log(`nama saya adalah ${nickname}`)

console.log(nama)

nama.splice(0,0,"FouleRizky")

let alias = nama[0]

console.log(`selain ${nickname},saya juga bisa di panggil ${alias}`)

console.log(nama)

