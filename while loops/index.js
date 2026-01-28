// Pyips.dev

// while

// let username = "";

// while (username === "" || username === null) {
//   username = window.prompt("Enter Your Name");
// }

// do while
// do {
//   username = window.prompt("Enter Your Name");
// } while (username === "" || username === null);

// console.log(`Hello ${username}`); // use backticks when adding a variable to a string!!

let loggedIn = false;
let username;
let password;

do {
  username = window.prompt("Enter your username");
  password = window.prompt("Enter your password");

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("You are logged in!");
  } else {
    console.log("Shoo!"); // if you want to see this message make sure you fail at least once before getting it right or the loop will close
  }
} while (!loggedIn);
