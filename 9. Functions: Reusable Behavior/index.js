function greet() {
    console.log("Hello!");
}

greet();


function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

greetUser("Natalja");

function greetPerson(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetPerson();
greetPerson("Anna");


function add(a, b) {
    return a + b;
}

const result = add(5, 3);
console.log(result);


function multiply(a, b) {
    return a * b;
}

const answer = multiply(4, 5);
console.log(answer);


function showMessage() {
    console.log("Hi");
}

const value = showMessage();

console.log(value); // undefined