var nama = "masrul hadi"
console.log(nama)

// variable var tidak boleh digunakan jika variable tersebut dipakai berulang kali dan melewati banyak eksekusi, karena nilai dari variable akan bocor. contohnya:
var price = 100000;
var isMember = true;

if (isMember) {
    var price = 50000; // Niatnya membuat variabel diskon di dalam sini
    console.log("Harga member:", price);
}

// Di luar blok IF
console.log("Harga akhir:", price);