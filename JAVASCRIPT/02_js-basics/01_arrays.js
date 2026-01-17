// array

const myArray = [0, 1, 2, 3, 4, 5];
const myHeroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

const myArray2 = new Array(1, 2, 3, 4, 5);
console.log(myArray[0]); // 0

// Array Methods
// myArray.push(6); // add to the end
// myArray.push(7, 8, 9); // add multiple to the end
// myArray.pop(); // remove from the end
// myArray.unshift(-1); // add to the beginning
// myArray.shift(); // remove from the beginning
// console.log(myArray.includes(3)); // true
// console.log(myArray.indexOf(4)); // 4
// console.log(myArray.length); // 8
// console.log(myArray.indexOf(10)); // -1
const newArray = myArray.slice(1, 3); // returns a new array from index 1 to 3 (not including 3)
console.log(myArray); // [0, 1, 2, 3, 4, 5]
console.log(newArray); // [1, 2]
myArray.splice(1, 3); // remove 3 elements starting at index 1
console.log(myArray); // [0, 4, 5]
const newArray1 = myArray.join(); // join array elements into a string
console.log(myArray); // [0, 4, 5]
console.log(newArray1); // "0,4,5"
console.log(typeof newArray1); // string