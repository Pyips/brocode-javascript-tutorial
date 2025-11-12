// Pyips.dev

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);

// NOTE: padStart and padEnd overwrite each other, so you can only have one at a time.

phoneNumber = phoneNumber.padStart(13, "0");
console.log(phoneNumber);

//phoneNumber = phoneNumber.padEnd(13, "0");
//console.log(phoneNumber);

/*
let userName = " Pyips .dev    ";

startResult = userName.startsWith(" ");
console.log(startResult);

if (startResult) {
  console.log("Your username can't begin with an empty space");
} else {
  console.log(userName);
}

endResult = userName.endsWith(" ");
console.log(endResult);

if (endResult) {
  console.log("Your username can't end with an empty space");
} else {
  console.log(userName);
}

includeResult = userName.includes(" ");
console.log(includeResult);

if (includeResult) {
  console.log("Your username can't contain any spaces");
  // I did this part below, not part of the tutorial
  userName = userName.replaceAll(" ", "");
} else {
  console.log(userName);
}

userName = "  Pyips.dev    ";

userName = userName.trim();
console.log(userName);

console.log(userName.charAt(3));
console.log(userName.indexOf("p"));
console.log(userName.lastIndexOf("p"));

console.log(userName.length);

userName = userName.toLowerCase();
console.log(userName);

userName = userName.toUpperCase();
console.log(userName);

let newUserName = "Pyips.dev ";
newUserName = newUserName.repeat(3);
console.log(newUserName);
*/
