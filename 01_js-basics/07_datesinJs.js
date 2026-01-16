let myDate = new Date();
console.log(myDate); // current date and time
console.log(myDate.toString()); // current date and time as a string
console.log(myDate.toDateString()); // current date as a string
console.log(myDate.toISOString()); // current date in ISO format
console.log(myDate.toLocaleString()); // current date and time in locale format
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2026, 0, 16);
// let myCreatedDate = new Date(2025, 0, 16, 5, 3);
let myCreatedDate = new Date("2023-01-16");
// console.log(myCreatedDate.toLocaleString()); // 16/1/2025, 5:03:00 am

let myTimeStamp = Date.now();
console.log(myTimeStamp); // current timestamp in milliseconds
console.log(myCreatedDate.getTime()); // timestamp of myCreatedDate in milliseconds
console.log(myCreatedDate.getFullYear()); // 2023
console.log(myCreatedDate.getMonth() + 1); // 1 (January, months are 0-indexed)
console.log(myCreatedDate.getDate()); // 16
console.log(myCreatedDate.getDay()); // 1 (Monday, days are 0-indexed starting from Sunday)
console.log(myCreatedDate.getHours()); // 0
console.log(myCreatedDate.getMinutes()); // 0
console.log(myCreatedDate.getSeconds()); // 0   

console.log(Math.floor(Date.now() / 1000)); // current timestamp in seconds



let newDate = new Date();
newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})
console.log(newDate); // e.g., "Monday, January 16, 2023"