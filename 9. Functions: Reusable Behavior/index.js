// Funktsiooni deklareerimine ja väljakutsumine
function greet() {
    console.log("Hello!");
}

greet();

// name on parameeter, "Natalja" on argument
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

greetUser("Natalja");

// Parameetrile saab anda vaikimisi väärtuse
function greetPerson(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetPerson();
greetPerson("Anna");

// return tagastab funktsioonist väärtuse
function add(a, b) {
    return a + b;
}

const result = add(5, 3);
console.log(result);

// return annab väärtuse funktsioonist välja, 
// console.log() ainult kuvab väärtuse konsoolis
function multiply(a, b) {
    return a * b;
}

const answer = multiply(4, 5);
console.log(answer);

// Kui funktsioonil puudub return, tagastab see undefined
function showMessage() {
    console.log("Hi");
}

const value = showMessage();

console.log(value); // undefined