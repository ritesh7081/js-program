const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log('Accumulator:', accumulator, 'Current Value:', currentValue);
//     return accumulator + currentValue;
// }, 0);

const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue, 0);

console.log(myTotal); // outputs: 55

const shoppingCart = [
    { itemName: 'js course', price: 2999 },
    { itemName: 'css course', price: 1999 },
    { itemName: 'html course', price: 1499 },
    { itemName: 'react course', price: 3999 },
];

const cartTotal = shoppingCart.reduce( (accumulator, currentItem) => accumulator + currentItem.price, 0);

console.log(cartTotal); // outputs: 10496