const codingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

// for...each loop example

codingLanguages.forEach(function(language) {
    console.log(language); // outputs each coding language in the array
});

codingLanguages.forEach((language) => {
    console.log(language); // outputs each coding language in the array
});

function printMe(item) {
    console.log(item);
}

codingLanguages.forEach(printMe); // outputs each coding language in the array

codingLanguages.forEach((language, index, array) => {
    console.log(`Index: ${index}, Language: ${language}, Array: ${array}`);
});

const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
]

myCoding.forEach((item) => {
    console.log(`Language Name: ${item.languageName}`); // outputs each language name from the objects in the array
});