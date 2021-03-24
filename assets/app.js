const moles = document.querySelectorAll("img");
const score = document.getElementById("score");
const timer = document.getElementById("timer");
const start = document.getElementById("start");
const game = document.getElementById("game");
const end = document.getElementById("end");
const endText = end.querySelector("h1");
const startBtn = document.getElementById("startBtn");

let moleScore = 0;
let milisec = 0;
let sec = 0;
let temp = 0;

function spawnMole() {
  temp = getRandomInt(0, 9);
  moles[temp].classList.add("active");
}

function despawnMole() {
  moles[temp].classList.remove("active");
  milisec = 99;
}

moles.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("active")) {
      moleScore++;
      despawnMole();
      updateScore();
    }
  });
});

function updateScore() {
  score.textContent = `Score: ${moleScore}`;
}

function updateTimer() {
  timer.textContent = `Timer: ${sec}`;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function startTimer() {
  setInterval(timeHandler, 10);
}

function timeHandler() {
  milisec++;
  if (milisec === 100) {
    sec++;
    spawnMole();
    updateTimer();
  }
  if (milisec === 180) {
    despawnMole();
  }
  if (sec === 60) {
    endGame();
  }
}

function endGame() {
  game.classList.add("invisible");
  end.classList.remove("invisible");
  endText.textContent = `Your Final Score: ${moleScore}`;
  end.addEventListener("click", () => {
    // alert("Starting over!");
    window.location.reload();
  });
}

function startGame() {
  start.style.display = "none";
  startBtn.classList.add("invisible");
  game.classList.remove("invisible");
  startTimer();
}

startBtn.addEventListener("click", startGame);
