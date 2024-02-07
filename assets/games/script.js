const gameArea = document.getElementById('game-area');
const smiley = document.getElementById('smiley');
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');

let score = 0;
let timeLeft = 30;
let gameInterval;

function moveSmiley() {
  const x = Math.random() * (gameArea.clientWidth - smiley.clientWidth);
  const y = Math.random() * (gameArea.clientHeight - smiley.clientHeight);
  smiley.style.left = x + 'px';
  smiley.style.top = y + 'px';
}

function scorePoint() {
  score++;
  scoreDisplay.textContent = score;
  moveSmiley();
}

function countdown() {
  timeLeft--;
  timeLeftDisplay.textContent = timeLeft;
  if (timeLeft === 0) {
    clearInterval(gameInterval);
    smiley.style.display = 'none';
    alert(`Time's up! Your score is ${score}.`);
  }
}

function startGame() {
  moveSmiley();
  gameInterval = setInterval(countdown, 1000);
}

startGame();