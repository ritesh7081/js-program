const marvelHeroes = ["Spiderman", "Ironman", "Hulk", "Thor"];
const dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash"];

marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes); // Output: ["Spiderman", "Ironman", "Hulk", "Thor", ["Batman", "Superman", "Wonder Woman", "Flash"]]
// console.log(marvelHeroes.length); // Output: 5
// console.log(marvelHeroes[4][0]); // Output: "Batman"

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes); // Output: ["Spiderman", "Ironman", "Hulk", "Thor", "Batman", "Superman", "Wonder Woman", "Flash"]
// console.log(allHeroes.length); // Output: 8
// console.log(allHeroes[4]); // Output: "Batman"

const allHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allHeroes); // Output: ["Spiderman", "Ironman", "Hulk", "Thor", "Batman", "Superman", "Wonder Woman", "Flash"]
// console.log(allHeroes.length); // Output: 8
// console.log(allHeroes[4]); // Output: "Batman"


// Additional Examples:
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flattenedArray = anotherArray.flat(Infinity);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Ritesh")); // Output: false
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.from("Ritesh")); // Output: ['R', 'i', 't', 'e', 's', 'h']   
console.log(Array.from({name: "Ritesh"})); // Output: []

let score1 = 100;
let score2 = 200;
let score3 = 300;
const scores = Array.of(score1, score2, score3);
console.log(scores); // Output: [100, 200, 300]