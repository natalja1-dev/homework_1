// Math.round(), Math.floor() ja Math.ceil() ümardavad arve erinevalt
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));

// Math.min() leiab väikseima ja Math.max() suurima väärtuse
console.log(Math.min(3, 7, 1, 9));
console.log(Math.max(3, 7, 1, 9));

// Math.random() annab juhusliku arvu vahemikus 0 kuni alla 1
console.log(Math.random());

// Juhusliku täisarvu genereerimine vahemikus 1 kuni 6
const number = Math.floor(Math.random() * 6) + 1;

console.log(number);