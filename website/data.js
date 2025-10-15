const nama = "arhaqi fadil gaffari";
let usia = 10;

let Biodata = document.getElementById(`biodata`);

function generateBiodata() {
    let generasi;

    if (usia > 12 && usia < 18) {
     generasi= "generasi remaja";
    } 
    else if (usia > 18 && usia < 40) {
     generasi= "generasi dewasa";
    } 
    else if (usia > 2 && usia < 12) {
     generasi= "generasi anak-anak";
    } 
    else if (usia > 40) {
     generasi= "generasi lansia";
    } else {
      generasi= "usia tidak valid"
    }
    return Biodata.innerHTML = generasi;
}
console.log(nama)
console.log(usia)

generateBiodata()