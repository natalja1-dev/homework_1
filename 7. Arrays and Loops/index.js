// Massiivi loomine ja elementidele ligipääs indeksiga
const names = ["Mari", "Muri", "Meri"];

// Indeksid algavad nullist ja .length näitab elementide arvu
console.log(names[0]);
console.log(names[1]);
console.log(names.length);

// .includes() kontrollib, .push() lisab ja .pop() eemaldab viimase elemendi
console.log(names.includes("Mari"));

names.push("Natalja");
console.log(names);

names.pop();
console.log(names);

// for-tsükkel käib massiivi elemendid indeksite abil läbi
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// for...of käib otse kõik massiivi väärtused läbi
for (const name of names) {
    console.log(name);
}

// break lõpetab tsükli enne selle tavapärast lõppu
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
