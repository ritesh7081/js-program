// Imediately Invoked Function Expression (IIFE)
(function chai() { // Named IIFE
    console.log(`DB CONNECTED`);
})();

// Output:
// DB CONNECTED
// Global scope is polluted with only function name 'chai'
// So we can use IIFE to avoid polluting global scope

( () => {
    console.log(`DB CONNECTED using Arrow Function`);
} )();

// Output:
// DB CONNECTED using Arrow Function
// Global scope is not polluted at all

( (username) => {
    console.log(`DB CONNECTED for user: ${username}`);
} )("Ritesh");

// Output:
// DB CONNECTED for user: Ritesh