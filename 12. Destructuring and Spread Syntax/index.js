const user = {
    name: "Natalja",
    age: 25,
    address: {
        city: "Tallinn"
    }
};

const colors = ["red", "green", "blue"];

const { name, age } = user;
console.log(name);
console.log(age);

const [firstColor, secondColor] = colors;
console.log(firstColor);
console.log(secondColor);

const copiedColors = [...colors];
console.log(copiedColors);

const copiedUser = { ...user };
console.log(copiedUser);

const otherColors = [...colors, "yellow"];
console.log(otherColors);

const updatedUser = {
    ...user,
    age: 26
};
console.log(updatedUser);


user.name = "Anna";
console.log(user);

const userCopy = { ...user };
userCopy.address.city = "Tartu";
console.log(user.address.city);
console.log(userCopy.address.city); 