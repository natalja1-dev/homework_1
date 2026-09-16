console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
console.log(2 ** 3);

// Väärtuse muutmine += ja ++ abil
let score = 10;
score += 5;
console.log(score);

let count = 0;
count++;
count++;
console.log(count);

// Number() muudab väärtuse arvuks
const textNumber = "25";
const number = Number(textNumber);
console.log(number);
console.log(typeof number);

// String() muudab väärtuse tekstiks
const age = 20;
const textAge = String(age);
console.log(textAge);
console.log(typeof textAge);

// "5" + 2 liidab tekstina, Number("5") + 2 liidab arvudena
console.log("5" + 2);
console.log(Number("5") + 2);

// NaN tähendab "Not a Number" ehk väärtust ei saanud arvuks muuta
const value = Number("hello");

console.log(value);
console.log(typeof value);

console.log(Number("10"));
console.log(Number("10.5"));
console.log(Number("abc"));