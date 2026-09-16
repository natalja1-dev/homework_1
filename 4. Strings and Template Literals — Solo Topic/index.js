// Stringe saab luua ülakomade, jutumärkide ja backtickidega
const first = 'Hello';
const second = "Hello";
const third = `Hello`;

console.log(first);
console.log(second);
console.log(third);

// .length näitab stringi pikkust
const text = "Natalja";
console.log(text.length);

// .trim() eemaldab tühikud algusest ja lõpust
const name = "   Natalja   ";
console.log(name);
console.log(name.trim());

// .toLowerCase() muudab teksti väikesteks tähtedeks
const text1 = "HELLO WORLD";
console.log(text1.toLowerCase());

// .includes() kontrollib, kas string sisaldab kindlat teksti
const sentence = "My name is Natalja";
console.log(sentence.includes("natalja"));
console.log(sentence.includes("Natalja"));

// ${variable} abil saab väärtuse stringi sisse lisada
const name1 = "Natalja";
console.log(`Hello, ${name1}!`);

// Nime puhastamine ja tervituse loomine
const username = "   Natalja   ";
const cleanedUsername = username.trim().toLowerCase();
const greeting = `Hello, ${cleanedUsername}!`;
console.log(greeting);