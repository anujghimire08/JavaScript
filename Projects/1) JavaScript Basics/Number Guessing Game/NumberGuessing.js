let randomNum;
const Result = document.getElementById("message");
const Attempt = document.getElementById("attempt");
let UserAttempt;
start();
function start() {
  UserAttempt = 10;
  randomNum = Math.floor(Math.random() * 100) + 1;
  Attempt.innerText = `Attempt: ${UserAttempt}`;
}

function check() {
  if (UserAttempt === 0) return;
  const userGuess = Number(document.getElementById("number").value);
  UserAttempt--;
  Attempt.innerText = `Attempt: ${UserAttempt}`;
  if (userGuess === randomNum) {
    Result.textContent = `🎉 Correct! You guessed the number!`;
    endgame();
  } else if (UserAttempt === 0) {
    Result.textContent = `❌ Game Over! Number was ${randomNum}. Restart Game`;
    endgame();
  } else if (userGuess > randomNum) {
    Result.textContent = `📈 Too High!`;
  } else if (userGuess < randomNum) {
    Result.textContent = `📉 Too Low!`;
  }
}
function restart() {
  const userGuess = document.getElementById("number");
  userGuess.value = ``;
  Attempt.innerText = ``;
  Result.innerText = ``;
  userGuess.disabled = false;
  document.getElementById("check").disabled = false;
  start();
}

function endgame() {
  const userGuess = document.getElementById("number");
  userGuess.disabled = true;
  document.getElementById("check").disabled = true;
}
