// Pyips.dev

// function happyBirthday(username, age) {
//   console.log("Happy birthday to you!");
//   console.log("Happy birthday to you!");
//   console.log(`Happy birthday dear ${username}!`);
//   console.log("Happy birthday to you!");
//   console.log(`You are ${age} years old!`);
// }

// happyBirthday("Pyips", 25);
// happyBirthday("SpongeBob", 30);
// happyBirthday("Patrick", 37);

// function add(x, y) {
//   let result = x + y;
//   return result;
// }

// let answer = add(2, 3);
// console.log(answer);

// function add(x, y) {
//   return x + y;
// }

// function subtract(x, y) {
//   return x - y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// function divide(x, y) {
//   return x / y;
// }

// console.log(add(27, 42));
// console.log(subtract(42, 27));
// console.log(multiply(2, 4));
// console.log(divide(8, 2));

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(8));

// function isEven(number) {
//   return number % 2 === 0 ? true : false;
// }

// console.log(isEven(13));

// function isValidEmail(email) {
//   if (email.includes("@")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isValidEmail("Pyips@Pyips.dev"));

function isValidEmail(email) {
  return email.includes("@") ? true : false;
}

console.log(isValidEmail("Pyips@Pyips.dev"));
console.log(isValidEmail("Pyips.dev"));
