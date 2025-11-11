// Pyips.dev

// let pi = 3.14159;
const PI = 3.14159;
let radius;
let circumference;

//pi = 420.69;
//PI = 420.69;

//radius = window.prompt("Enter the radius of a circle");
//radius = Number(radius);

//circumference = 2 * pi * radius;
//circumference = 2 * PI * radius;

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + "cm";
};
