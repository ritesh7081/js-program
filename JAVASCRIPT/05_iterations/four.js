const myObject = {
    js: 'JavaScript',
    cpp: 'C++', 
    py: 'Python',
    rb: 'Ruby',
    swift: 'Swift by Apple'
};

// for in loop example

for (let key in myObject) {
    console.log(`${key} : ${myObject[key]}`); // outputs each key-value pair in the object
}

const programmingLanguages = ['js', 'cpp', 'py', 'rb', 'swift'];

for (let index in programmingLanguages) {
    console.log(`Index ${index} : ${programmingLanguages[index]}`); // outputs each index-value pair in the array
}

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('FR', 'France');
map.set('IN', 'India'); // duplicate key, will overwrite previous 'IN' entry

for (let key in map) {
    console.log(`${key} : ${map[key]}`); // This will not work as expected since Map is not an object
    // Maps should be iterated using for...of loop
}