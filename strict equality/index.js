// Pyips.dev

// ----- comparison

PI = 3.14; // should be a const but for simplicity I made it a variable so i can overwrite it.

if (PI == 3.14) {
  console.log("Found PI!");
} else {
  console.log("No PI for you!");
}

// ----- strict

PI = "3.14";

if (PI === 3.14) {
  console.log("Found PI!");
} else {
  console.log("No PI for you!");
}

// ----- inequality

PI = 3.14;

if (PI != "3.14") {
  console.log("No PI for you!");
} else {
  console.log("Found PI!");
}

// ----- strict inequality

PI = "3.14";

if (PI !== "3.14") {
  console.log("No PI for you!");
} else {
  console.log("Found PI!");
}
