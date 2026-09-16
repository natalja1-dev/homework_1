const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 80 }
];

const productNames = products.map(product => product.name);
console.log(productNames);

const cheapProducts = products.filter(product => product.price < 100);
console.log(cheapProducts);

const foundProduct = products.find(product => product.name === "Mouse");
console.log(foundProduct);

const veryCheapProducts = products.filter(product => product.price < 10);
console.log(veryCheapProducts);

const missingProduct = products.find(product => product.name === "Phone");
console.log(missingProduct);