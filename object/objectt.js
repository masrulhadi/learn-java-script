// contoh typeof

let a = "Hello";
let b = 123;
let c = true;
let d = null;
let e = undefined;
let f = {};
let g = [];
let h = function(){};

console.log(typeof a); // Lu tebak: string
console.log(typeof b); // Lu tebak: number
console.log(typeof c); // Lu tebak: boolean
console.log(typeof d); // Lu tebak: object
console.log(typeof e); // Lu tebak: undefined
console.log(typeof f); // Lu tebak: object
console.log(typeof g); // Lu tebak: object
console.log(typeof h); // Lu tebak: function

// Bikin object 'motor' dengan properties:
// - merk: "Yamaha"
// - tipe: "Matic"
// - tahun: 2020
// - method: klakson() yang return "Beep beep!"

// Tulis code lu disini:
let motor = {
    merk: "yamaha",
    tipe: "matic",
    tahun: 2020,
    klakson: function(){
        return "Beep beep!"
    }
}

let mobil = {
    merek: "honda",
    tipe: "matic",
    servicenya: function(){
        return "ganti oli dong"
    }
}

// Test:
console.log(motor.merk);    // harusnya: "Yamaha"
console.log(motor.tahun);   // harusnya: 2020
console.log(motor.klakson()); // harusnya: "Beep beep!"

// 1. Pake Math.random() buat generate angka random antara 1-10
// 2. Bulatkan angka 7.8 ke bawah (floor)
// 3. Cari angka terbesar dari: 5, 12, 8, 130, 44
// 4. Buat tanggal hari ini, trus ambil tahunnya

// Jawab disini:
let randomNumber = Math.random();
console.log(randomNumber)
let bulatBawah = Math.floor(7.8)
console.log(bulatBawah)
let angkaTerbesar = Math.max(5, 12, 8, 130, 44)
console.log(angkaTerbesar)
let tahunSekarang = new Date().getFullYear()
console.log(tahunSekarang)