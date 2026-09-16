// const – väärtust ei määrata hiljem ümber
const username = "Mari";
//const username = "Muri"; --siin tuleks error, sest const väärtust ei saa muuta

console.log("Kasutaja:", username);


// let – väärtus muutub
let score = 0;

score = 10;
score = score + 5;

console.log("Punktid:", score);


// block scope
if (score >= 10) {
    const message = "Tubli tulemus!";
    let result = 5;

    console.log(message);
    console.log("Tulemus:", result);
}


// var ei ole block scoped
if (true) {
    var oldVariable = "Olen var muutuja";
}

console.log(oldVariable);





