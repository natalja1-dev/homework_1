const names = ["Mari", "Muri", "Meri"];

console.log(names[0]);
console.log(names[1]);
console.log(names.length);

console.log(names.includes("Mari"));

names.push("Natalja");
console.log(names);

names.pop();
console.log(names);

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (const name of names) {
    console.log(name);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
