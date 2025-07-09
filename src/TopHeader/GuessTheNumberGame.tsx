export const GuessTheNumberGame = () => {
  const target = Math.floor(Math.random() * 100) + 1;
  let attempts = 10;

  while (attempts > 0) {
    const input = prompt(
      `🎯 Guess a number between 1 and 100\nAttempts left: ${attempts}`
    );
    if (input === null) return;
    const guess = parseInt(input);

    if (isNaN(guess)) {
      alert("⛔ Please enter a valid number!");
      continue;
    }

    if (guess === target) {
      alert(`🎉 Correct! You guessed it in ${11 - attempts} tries!`);
      return;
    } else if (guess < target) {
      alert("📉 Too low!");
    } else {
      alert("📈 Too high!");
    }

    attempts--;
  }

  alert(`❌ Out of tries! The correct number was ${target}`);
};
