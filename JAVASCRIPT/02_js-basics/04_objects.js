// const tinderUser = new Object(); // singleton object
const tinderUser = {}; // non-singleton object
tinderUser.id = "123abc";
tinderUser.name = "Ritesh";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); 
// Output: { id: '123abc', name: 'Ritesh', isLoggedIn: false }

const regularUser = {
    email: "ritesh@example.com",
    fullname: {
        userFullname: {
            firstName: "Ritesh",
            lastName: "Kumar"
        }
    },
    address: "India"
};

console.log(regularUser.fullname.userFullname.firstName); // Output: Ritesh


const obj1 = {1: "a", 2: "b"};  
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1, obj2}; // nested object
// console.log(obj3); 
// Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3 = Object.assign({}, obj1, obj2); // merging objects
// console.log(obj3); 
// Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3 = {...obj1, ...obj2}; // merging objects using spread operator
console.log(obj3); 
// Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        email: "ritesh@example.com"
    },
    {
        id: 2,
        email: "john@example.com"
    },
    {
        id: 3,
        email: "alice@example.com"
    }
];

users[1].email;
console.log(tinderUser); // Output: { id: '123abc', name: 'Ritesh', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // Output: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // Output: [ '123abc', 'Ritesh', false ]
console.log(Object.entries(tinderUser)); 
// Output: [ [ 'id', '123abc' ], [ 'name', 'Ritesh' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("name")); // Output: true

// Destructuring objects
const course = {
    courseName: "JavaScript Basics",
    price: 999,
    courseInstructor: "Ritesh Kumar"
};

// course.courseName;
const {courseInstructor: instructor} = course;
console.log(instructor); // Output: Ritesh Kumar

// ****************************** JASON API ******************************

// {
//     "name": "Ritesh",
//     "coursename": "JavaScript Basics",
//     "price": "free"
// }

[
    {},
    {},
    {}
]