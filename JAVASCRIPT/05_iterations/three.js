// for of loop example

// ["", "", "", ""]
// [{}, {}, {}, {}]


let myArray = ['cat', 'dog', 'rabbit', 'hamster'];
for (let pet of myArray) {
    console.log(pet); // outputs each pet in the array
}

const greetings = "Hello, World!";
for (let char of greetings) {
    console.log(char); // outputs each character in the string
}

// map iteration example

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('FR', 'France');
map.set('IN', 'India'); // duplicate key, will overwrite previous 'IN' entry
console.log(map);

for (let [key, value] of map) {
    console.log(`${key} : ${value}`); // outputs each key-value pair in the map
}

const myObject = {
    game1: 'chess',
    game2: 'football',
    game3: 'tennis'
};

for (let [key, value] of myObject) {
    console.log(`${key} : ${value}`); // This will throw an error since objects are not iterable
}