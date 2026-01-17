let score = "33";

// console.log(typeof (score));

let valueInNumber = Number(score);

// console.log(typeof (valueInNumber));

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Ritesh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

let floatNumber = 33.3434;
// console.log(typeof(floatNumber));


// ************************************* Operations *********************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello";
let str2 = " Ritesh";

let str3 = str1 + str2;
// console.log(str3);

console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"

console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0
// console.log(true+); // error

let gameCounter = 100; // 100
gameCounter++; // 101
console.log(gameCounter); // 101