// Soal 1
// Bagaimana cara mendeklarasikan sebuah array di JavaScript? buatkan dengan contoh!
let namaSiswa = ["barra", "yasin", "faiq"];

// Soal 2
// diketahui sebuah variable berisikan array:
let fruits = ["Apple", "Banana", "Orange"];
// tuliskan baris kode untuk mengetahui berapa banyaknya item di dalam array tersebut. gunakan console.log!
console.log(fruits.length);

// Soal 3
// Bagaimana cara mengakses elemen/item tertentu di dalam sebuah array?
// Buatkan dengan contoh, dan console.log elemen tersebut!
console.log(namaSiswa[1]);

// Soal 4
// Bagaimana cara menambahkan sebuah item ke dalam sebuah array pada index terakhir?
// Buatkan dengan contoh!
namaSiswa.push("farhan");

// Soal 5
// Bagaimana cara menghapus elemen terakhir dari sebuah array?
// Buatkan dengan contoh!
namaSiswa.pop();

// Soal 6 (Wajib googling)
// Buatkan dengan contoh bagaimana Array.filter() bekerja!
console.log(fruits.filter((word) => word.length == 6)); // will select only if the word.length is equal to 6 (Arrow function ES6)

// You can also use a normal function instead of arrow function (ES6)
function checkWordLength(word) {
	return word.length == 6;
}
console.log(fruits.filter(checkWordLength));

// Soal 7
// Diketahui sebuah array:
const rukunIslam = ["Syahadatain", "Shalat", "Zakat", "Puasa di bulan Ramadhan", "Haji"];
// gabungkan semua item di dalam rukunIslam sehingga ketika di log pada console akan tertulis: "Rukun Islam ada 5 yaitu: Syahadatain,Shalat, Zakat,Puasa di Bulan Ramadhan,Haji."
console.log(`Rukun Islam ada 5 yaitu: ${rukunIslam.join(", ")}.`);

//Soal 8
// Diketahui sebuah array:
let olahraga = ["Sepakbola", "Badminton", "Volley", "Bowling", "Takraw", "Berenang", "Pingpong"];
// Buatkan sebuah varibel baru bernama olahragaFavorit yang akan berisi items: Volley, Bowling, dan Takraw menggunakan slice()
// Console log variabel baru tersebut
let olahragaFavorit = olahraga.slice(2, 5);
console.log(olahragaFavorit);

// Soal 9
// Bagaimana cara mengubah nilai elemen dalam sebuah array?
// Buatkan dengan contoh!
namaSiswa[2] = "ibad";

// Soal 10
// Bagaimana cara mendeklarasikan sebuah objek di JavaScript?
let myRig = {
	cpu: "Ryzen 7 6800H",
	gpu: "NVidia GeForce RTX 3060 6GB Mobile",
	ram: [32, 5], // 32GB DDR5
};

// Soal 11
// Bagaimana cara mengakses nilai dari sebuah properti dalam sebuah objek?
// Buatkan dengan contoh! Console log nilai yang diakses tersebut!
console.log(`My Laptop GPU: ${myRig.gpu}`);

// Soal 12
// Diketahui sebuah objek:
let car = {
	type: "Fiat",
	model: ["1200", "1500", "2000"],
	color: [
		{ category: "classic", options: ["white", "black"] },
		{ category: "metallic", options: ["blue", "red", "yellow"] },
	],
};
// console log sehingga hasil log nya adalah gabungan values di dalam object car sebagai berikut: "My favorite Fiat car is 1500 model with the paint of metallic yellow."
console.log(`My favorite ${car.type} car is ${car.model[1]} model with the paint of ${car.color[1].category} ${car.color[1].options[2]}`);

// Soal 13
// Bagaimana cara menambah properti baru ke dalam sebuah objek?
// Buatkan dengan contoh!
myRig.keyboard = "VortexSeries Xera 87";

// Soal 14
// Bagaimana cara mengakses semua kunci (keys) dalam sebuah objek?
// Buatkan dengan contoh!
console.log(Object.keys(myRig)); // results are in array forms
