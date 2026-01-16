const score = 100;
console.log(score); // 100

const balance = new Number(500); // Number Object
console.log(balance); // [Number: 500]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 500.00

const otherNumber = 123.89666;

console.log(otherNumber.toPrecision(4)); // 123.9

const hundereds = 10000000000000;
console.log(hundereds.toLocaleString("en-IN")); // 10,00,00,00,00,00,000


// ************************ Math Object *****************************

console.log(Math); // Object [Math] {}
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5  
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10
console.log((Math.random() * 10) + 1); // random number between 1 and 10
console.log(Math.floor((Math.random() * 10) + 1)); // random integer between 1 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random integer between 10 and 20