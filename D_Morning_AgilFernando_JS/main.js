// contoh penggunaan If..else
let nilai = 75;

if (nilai >= 90) {
    console.log("Nilai A");
} else if (nilai >= 80) {
    console.log("Nilai B");
} else if (nilai >= 70) {
    console.log("Nilai C");
} else {
    console.log("Nilai D");
}

//contoh penggunaan swotch case

let Jours = "Lundi";

switch (Jours) {
    case "Lundi":
        console.log("c'est lundi");
        break;
    case "Mardi":
        console.log("c'est Mardi");
        break;
    case "Mercredi":
        console.log("c'est mercredi");
        break;
    case "jeudi":
        console.log("c'est jeudi");
        break;
    case "Vendredi":
        console.log("c'est vendredi");
        break;
    case "Samedi":
        console.log("c'est samedi");
        break;
    case "Dimanche":
        console.log("c'est dimanche");
        break;
    default:
        console.log("ce jours invalidite");
}

//contoh penggunaan Fro statement
let jumlah = 0;

for (let i = 1; i <= 5; i++) {
    jumlah += i;
}

console.log("Jumlah bilangan bulat dari 1 hingga 5 adalah: " + jumlah);

//contoh penggunaan while
let i = 1;

while (i <= 5) {
    console.log("Iterasi ke-" + i);
    i++;
}

//contoh pennggunaan while do
let j = 1;

do {
    console.log("Iterasi ke-" + j);
    j++;
} while (j <= 5);

//contoh penggunaan function
// Mendefinisikan fungsi untuk menghitung luas lingkaran
function hitungLuasLingkaran(jariJari) {
  let luas = Math.PI * Math.pow(jariJari, 2);
  return luas;
}

// Menggunakan fungsi dan mencetak hasilnya
let jariJariLingkaran = 5;
let luasLingkaran = hitungLuasLingkaran(jariJariLingkaran);
console.log("Luas lingkaran dengan jari-jari " + jariJariLingkaran + " adalah: " + luasLingkaran);