// Pyips.dev

/*
let age = 13;

if (age >= 18) {
  console.log("You are old enough!");
} else {
  console.log("You are too young!");
}
  */
/*
let time = 14;

if (time < 12) {
  console.log("Good Morning!");
} else {
  console.log("Good Afternoon!");
}
*/
/*
let isStudent = true;

if (isStudent) {
  console.log("You are a student.");
} else {
  console.log("You are NOT a student.");
}
*/
/*
let age = 25;
let hasLicense = true;

if (age >= 16) {
  console.log("You are old enough to drive.");
  if (hasLicense) {
    console.log("You have your license.");
  } else {
    console.log("You don't have a license yet.");
  }
} else {
  console.log("You must be at least 16 to drive");
}
*/

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = `Congrats on beating death!`;
  } else if (age >= 18) {
    resultElement.textContent = `You are old enough to enter this site`;
  } else if (age == 0) {
    resultElement.textContent = `You can't enter, you were just born`;
  } else if (age <= 0) {
    resultElement.textContent = `Please enter a number greater than 0`;
  } else {
    resultElement.textContent = `You must be 18+ to enter`;
  }
};
