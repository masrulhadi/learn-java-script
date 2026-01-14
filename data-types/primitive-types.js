// Tipe data mengacu pada jenis data yang dapat disimpan oleh variabel JavaScript. Ada tujuh tipe data primitif di JavaScript (Number, BigInt, String, Boolean, Null, Undefined dan Symbol).

const nama = "masrul hadi"
let usia = 19
let statuss = true
let statusKeluarga
let penghasilan = BigInt(12092139000001213123123091231924)
let tinggiBadan = null
let namaDepan = Symbol('masrul')

console.log(typeof nama)
console.log(typeof usia)
console.log(typeof statuss)
console.log(typeof statusKeluarga)
console.log(typeof penghasilan)
console.log(typeof tinggiBadan, tinggiBadan)
console.log(typeof namaDepan, namaDepan)

let data = "10" + 5;
let logic = "10" - 5;

console.log("Hasil 1:", data, "| Tipe:", typeof data);
console.log("Hasil 2:", logic, "| Tipe:", typeof logic);
// operator + punya dua kepribadian, jika yang di jumlahkan bertipe number maka akan dilakukan operasi matematika, namun jika ada pencampuran antara string dan number maka javascript akan mengenalinya sebagai string.