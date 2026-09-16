// Function expression – funktsioon salvestatakse muutujasse
const greet = function (name) {
    return `Hello, ${name}!`;
};

console.log(greet("Natalja"));


const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3));

const double = x => x * 2;

console.log(double(4));


const triple = x => {
    return x * 3;
};

console.log(triple(4));


function processUser(name, callback) {
    callback(name);
}

processUser("Natalja", name => {
    console.log(`Welcome, ${name}!`);
});

const names = ["Mari", "Muri", "Miri"];

names.forEach(name => {
    console.log(name);
});