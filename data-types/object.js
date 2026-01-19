// ============================================
// 1. OBJECT LITERALS - Bentuk Dasar
// ============================================
let user = {
    name: "masrul hadi",
    age: 19,
};

console.log("perkenalkan nama saya", user.name);
alert(user.name);

// ============================================
// 2. MENGAKSES PROPERTY OBJECT
// ============================================
// Menggunakan dot notation
console.log(user.name); // masrul hadi
console.log(user.age); // 19

// Menggunakan bracket notation
console.log(user["name"]); // masrul hadi
console.log(user["age"]); // 19

// ============================================
// 3. MENAMBAH DAN MENGUBAH PROPERTY
// ============================================
user.city = "Jakarta"; // Menambah property baru
user.age = 20; // Mengubah property yang sudah ada

console.log(user);
// Output: { name: 'masrul hadi', age: 20, city: 'Jakarta' }

// ============================================
// 4. OBJECT DENGAN BERBAGAI TIPE DATA
// ============================================
let student = {
    name: "Andi",
    age: 18,
    isActive: true,
    gpa: 3.8,
    subjects: ["Matematika", "Fisika", "Kimia"], // Array di dalam object
    address: { // Object di dalam object (nested object)
        city: "Bandung",
        province: "Jawa Barat"
    }
};

console.log(student.name);
console.log(student.subjects[0]); // Matematika
console.log(student.address.city); // Bandung

// ============================================
// 5. OBJECT DENGAN METHOD (Fungsi di dalam Object)
// ============================================
let person = {
    firstName: "Budi",
    lastName: "Santoso",
    age: 25,
    
    // Method 1: Function declaration
    greet: function() {
        console.log("Halo, nama saya " + this.firstName);
    },
    
    // Method 2: Arrow function (ES6)
    getAge: () => {
        return 25;
    },
    
    // Method 3: Shorthand method (ES6)
    introduce() {
        return "Saya adalah " + this.firstName + " " + this.lastName;
    }
};

person.greet(); // Halo, nama saya Budi
console.log(person.introduce()); // Saya adalah Budi Santoso

// ============================================
// 6. CONSTRUCTOR FUNCTION
// ============================================
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    
    this.info = function() {
        return this.year + " " + this.brand + " " + this.model;
    };
}

let car1 = new Car("Toyota", "Avanza", 2020);
let car2 = new Car("Honda", "Civic", 2022);

console.log(car1.info()); // 2020 Toyota Avanza
console.log(car2.info()); // 2022 Honda Civic

// ============================================
// 7. CLASS (ES6) - Cara Modern
// ============================================
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
    getInfo() {
        return this.title + " oleh " + this.author;
    }
    
    isThick() {
        return this.pages > 300;
    }
}

let book1 = new Book("Harry Potter", "J.K. Rowling", 400);
let book2 = new Book("Laskar Pelangi", "Andrea Hirata", 200);

console.log(book1.getInfo()); // Harry Potter oleh J.K. Rowling
console.log(book1.isThick()); // true
console.log(book2.isThick()); // false

// ============================================
// 8. OBJECT.CREATE - Membuat Object dengan Prototype
// ============================================
let animalProto = {
    speak() {
        return this.name + " bersuara";
    }
};

let dog = Object.create(animalProto);
dog.name = "Buddy";
dog.breed = "Labrador";

console.log(dog.speak()); // Buddy bersuara

// ============================================
// 9. DESTRUCTURING OBJECT (ES6)
// ============================================
let employee = {
    id: 1,
    name: "Siti",
    position: "Developer",
    salary: 5000000
};

// Destructuring
const { name, position, salary } = employee;
console.log(name); // Siti
console.log(position); // Developer

// ============================================
// 10. SPREAD OPERATOR (...) UNTUK OBJECT
// ============================================
let user1 = {
    name: "Ahmad",
    age: 30
};

let user2 = {
    ...user1, // Copy semua property dari user1
    city: "Surabaya"
};

console.log(user2); // { name: 'Ahmad', age: 30, city: 'Surabaya' }

// ============================================
// 11. OBJECT.ASSIGN - Merge Object
// ============================================
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let merged = Object.assign({}, obj1, obj2);

console.log(merged); // { a: 1, b: 3, c: 4 }

// ============================================
// 12. LOOPING OBJECT
// ============================================
let product = {
    name: "Laptop",
    brand: "Asus",
    price: 8000000,
    stock: 15
};

// for...in loop
for (let key in product) {
    console.log(key + ": " + product[key]);
}

// Object.keys()
Object.keys(product).forEach(key => {
    console.log(key);
});

// Object.entries()
Object.entries(product).forEach(([key, value]) => {
    console.log(key + " = " + value);
});

// ============================================
// 13. OBJECT METHOD BERGUNA
// ============================================
let settings = {
    theme: "dark",
    language: "id",
    notifications: true
};

// Object.keys - mendapatkan key
console.log(Object.keys(settings)); // ['theme', 'language', 'notifications']

// Object.values - mendapatkan value
console.log(Object.values(settings)); // ['dark', 'id', true]

// Object.entries - mendapatkan [key, value] pair
console.log(Object.entries(settings));

// Object.freeze - mencegah perubahan
Object.freeze(settings);
settings.theme = "light"; // Tidak ada perubahan (strict mode: error)

// Object.seal - tidak bisa tambah/hapus tapi bisa ubah
let config = { api: "localhost" };
Object.seal(config);
config.api = "localhost:3000"; // OK
config.port = 8080; // Error atau tidak berpengaruh

// ============================================
// 14. COMPUTED PROPERTY NAMES
// ============================================
let propName = "username";
let obj = {
    [propName]: "john_doe",
    age: 25
};

console.log(obj.username); // john_doe

// ============================================
// 15. PROPERTY SHORTHAND (ES6)
// ============================================
let nama = "Rini";
let umur = 28;

let person2 = {
    nama,      // Sama dengan nama: nama
    umur,      // Sama dengan umur: umur
    greet() {  // Sama dengan greet: function()
        console.log("Halo");
    }
};

console.log(person2); // { nama: 'Rini', umur: 28, greet: [Function: greet] }