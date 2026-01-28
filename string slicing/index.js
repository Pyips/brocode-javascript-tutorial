// Pyips.dev

const fullName = "Pyips Dev";

// let firstName = fullName.slice(0, 5);
// let lastName = fullName.slice(6);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(" "));

// let lastName = fullName.slice(fullName.indexOf(" ") + 1); // +1 gets rid of the space between the words because it starts after one more index.

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

const email = "fake@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);
