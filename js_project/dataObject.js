
//data object
const user = {
nama: "mas amba",
alamat: "ngawi",
"makanan favorit": "gak tau"
// jika datanya ada spasi maka menggunakan tanda ""
}

// destructuring object
const {nama,alamat, umur=15, "makanan favorit":makananFavorit } = user

console.log(`nama saya ${nama} saya berasal dari ${alamat} umur saya ${umur}
    makanan favorit saya adalah ${makananFavorit}`)