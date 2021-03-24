const moles = document.querySelectorAll("img");

let score = 0;
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
      score++;
      despawnMole();
      console.log(score);
    }
  });
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function startTimer() {
  setInterval(timeHandler, 10);
}

function timeHandler() {
  milisec++;
  if (milisec === 100) {
    spawnMole();
  }
  if (milisec === 150) {
    despawnMole();
  }
}

startTimer();
