console.log(5 === 5);
console.log(5 !== "5");
console.log(10 > 5);
console.log(3 < 7);
console.log(10 >= 10);
console.log(4 <= 8);

console.log("5" == 5);
console.log("5" === 5);

const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("hello"));

const age = 20;

if (age < 18) {
    console.log("Minor");
} else if (age < 65) {
    console.log("Adult");
} else {
    console.log("Senior");
}

const message = age >= 18 ? "Adult" : "Minor";

console.log(message);

if (age >= 18 && isLoggedIn) {
    console.log("Welcome!");
} else {
    console.log("Access denied");
}