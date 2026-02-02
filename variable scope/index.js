// Pyips.dev

// ILLEGAL
// let x = 1;
// let x = 2;

// LEGAL
// function function1() {
//   let x = 1;
//   console.log(x);
// }

// function function2() {
//   let x = 2;
//   console.log(x);
// }

// function1();
// function2();

// ILLEGAL
// function function1() {
//   let x = 1;
//   console.log(y);
// }

// function function2() {
//   let y = 2;
//   console.log(x);
// }

// function1();
// function2();

// LEGAL
// let x = 3; // outside of function scope (global scope)

// function function1() {
//   console.log(x);
// }

// function function2() {
//   console.log(x);
// }

// function1();
// function2();

let x = 3; // outside of function scope (global scope)

function function1() {
  let x = 1;
  console.log(x);
}

function function2() {
  let x = 2;
  console.log(x);
}

// local scope overrides global scope
function1(); // 1
function2(); // 2
