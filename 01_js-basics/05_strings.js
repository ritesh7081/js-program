const name = "Ritesh Kumar";
const repoCount = "50";

// console.log(name + repoCount + " value"); // this is modern way of concatenation


// console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Cricket-abcd");

// console.log(gameName[0]); // C
// console.log(gameName.__proto__); // shows all the methods available for string

// console.log(gameName.length); // 12
// console.log(gameName.toUpperCase()); // CRICKET-ABCD
// console.log(gameName.charAt(2)); // i
// console.log(gameName.indexOf("c")); // 4

const newString = gameName.substring(0, 7); // Cricket
// console.log(newString);

const anotherString = gameName.slice(-7, 3); // cket
// console.log(anotherString);

const yetAnotherString = gameName.slice(-4); // abcd
// console.log(yetAnotherString);

const newStringOne = "   Ritesh Kumar   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // "Ritesh Kumar"

const url = "https://www.youtube.com/watch?v=abcdEFG1234";

console.log(url.replace("youtube", "vimeo")); // https://www.vimeo.com/watch?v=abcdEFG1234

console.log(url.includes("youtube")); // true

console.log(gameName.split("-")); // [ 'Cricket', 'abcd' ]