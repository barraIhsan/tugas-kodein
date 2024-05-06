// First question
let quotes = 'Daripada hujan "emas" di negeri orang, lebih baik hujan "batu" di negeri sendiri.';

console.log(quotes);

// Second question
let qty = 7;
let price = 12;

let sentence = `Mom bought us ${qty} Croissant Almonds with \$${price} each. So mom spent total of \$${price*qty}`;
console.log(sentence);

// Third question
let trafficLight = "stop";
if (trafficLight == "stop") {
	console.log("red");
} else if (trafficLight == "slow") {
	console.log("yellow");
} else if (trafficLight == "go") {
	console.log("green");
} else {
	console.log("purple");
}

// Fourth question
let umur = 15;
if (umur > 20) {
	if (umur < 30) {
		console.log("Anda cukup umur");
	}
} else if (umur < 20) {
	if (umur % 2 == 1) {
		console.log("Umur Anda spesial");
	}
}
