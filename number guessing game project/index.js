// Pyips.dev

const minNum = 1;
const maxNum = 1;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess) || guess < minNum || guess > maxNum) {
    window.alert("please enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Too LOW! try again...");
    } else if (guess > answer) {
      window.alert("Too HIGH! try again...");
    } else {
      window.alert(
        `You got it! the number was ${answer}. You took ${attempts} tries.`,
      );

      // my extra fun, just ignore
      if (attempts <= 1) {
        window.alert("AMAZING! ONE GUESS!? How did you do that?");
        window.alert("Here's your special prize...");
        window.alert(`ULTIMATE CHAMPION!
                🏆
            💰💰💰
            💎💎💎
            `);
      } else if (attempts <= 4) {
        window.alert("Wow! You're great at this!");
      } else if (attempts >= 5 && attempts <= 10) {
        window.alert("Hey, You're pretty good at this.");
      } else {
        window.alert("Geez... that was a lot of attempts...");
        window.alert("Maybe just go play Fortnite or sometime dawg...");
      }
      // stop ignoring

      running = false;
    }
  }
}
