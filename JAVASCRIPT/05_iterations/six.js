const coding = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

// const values = coding.forEach( (item) => {
//     console.log(item); // outputs each coding language in the array
// })

// console.log(values); // outputs: undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => num > 4);
// console.log(newNums); // outputs: [ 5, 6, 7, 8, 9, 10 ]

// const newNums = myNums.filter( (num) => {
//     num > 4;
// });
// console.log(newNums); // outputs: []

// Note: The forEach method does not return a new array, it returns undefined.
// The filter method returns a new array containing elements that pass the test implemented by the provided function.

// const newNums = myNums.filter( (num) => {
//     return num > 4;
// });
// console.log(newNums); // outputs: [ 5, 6, 7, 8, 9, 10 ]

// const newNums = [];
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// });
// console.log(newNums); // outputs: [ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//const userBooks = books.filter( (book) => book.genre === 'History');
const userBooks = books.filter( (book) => book.publish > 2000);
console.log(userBooks);