// Objekti loomine omaduste ja väärtustega
const user = {
    name: "Natalja",
    age: 25,
    address: {
        city: "Järveküla"
    }
};

// Omaduste lugemine dot ja bracket notation abil
console.log(user.name);
console.log(user["age"]);

user.email = "natalja@example.com"; // uued omadused
user.age = 26; // uus vanus


console.log(user.email);
console.log(user.age);

// Nested objekti omaduse lugemine
console.log(user.address.city);

console.log(user.phone); // määramata

// ?. abil saab nested omadust turvaliselt lugeda
console.log(user.contact?.phone); // määramata

// ?? annab vaikimisi väärtuse ainult siis, kui väärtus on null või undefined
const phone = user.contact?.phone ?? "No phone number";
console.log(phone);

// ?? ja || käituvad erinevalt väärtustega 0, false ja ""
const score = 0;
const isAdmin = false;
const nickname = "";

console.log(score ?? 100);       // 0
console.log(score || 100);       // 100

console.log(isAdmin ?? true);    // false
console.log(isAdmin || true);    // true

console.log(nickname ?? "Guest"); // ""
console.log(nickname || "Guest"); // "Guest"

// Kasutaja profiili kuvamine koos puuduva info käsitlemisega
const profile = {
    name: "Natalja",
    age: null,
    address: {
        city: "Tallinn"
    }
};

console.log(`Name: ${profile.name}`);
console.log(`Age: ${profile.age ?? "Not provided"}`);
console.log(`City: ${profile.address?.city ?? "Not provided"}`);
console.log(`Phone: ${profile.contact?.phone ?? "Not provided"}`);