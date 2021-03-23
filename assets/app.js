// const canvas = document.querySelector("canvas");

// const context = canvas.getContext("2d");

// const grid = 32;

// let score = 0;
// let timer;
// let count = 0;
// let sec = 0;

// const primary = "#011627";

// let hitCount = 0;

// let mole = {
//   x: grid * 5,
//   y: grid * 5,
// };

// function startTimer() {
//   timer = setInterval(timeHandler, 1000);
// }

// function timeHandler() {
//   sec++;
// }

// function startGame() {
//   startTimer();
//   requestAnimationFrame(startGame);

//   if (++count < 12) {
//     return;
//   }

//   count = 0;

//   context.clearRect(0, 0, canvas.width, canvas.height);

//   context.fillStyle = primary;
//   context.fillRect(mole.x, mole.y, grid - 1, grid - 1);

//   while (sec <= 60) {
//     if (sec % 2 === 0) {
//       mole.x = getRandomInt(0, 24) * grid;
//       mole.y = getRandomInt(0, 24) * grid;
//     }
//   }
//   window.location.reload();
// }

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// requestAnimationFrame(startGame);

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

const scoreCount = document.getElementById("score");
const highScoreCount = document.getElementById("highscore");

// const upBtn = document.querySelector(".up");
// const leftBtn = document.querySelector(".left");
// const rightBtn = document.querySelector(".right");
// const downBtn = document.querySelector(".down");

let primary = "#011627";
let secondary = "#AE17DB";
let highscore = 0;
let nameHighScore = "";
let timer;
let sec = 0;

const grid = 32; //size of 1 cell
let count = 0; //to manipulate frames per sec
let score = 0;

let food = {
  x: grid * 10, //starting point of food
  y: grid * 10,
};

function startTimer() {
  timer = setInterval(timeHandler, 1000);
}

function timeHandler() {
  sec++;
  createMole();
}

function createMole() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = primary;
  ctx.fillRect(food.x, food.y, grid - 1, grid - 1);
  food.x = getRandomInt(0, 24) * grid;
  food.y = getRandomInt(0, 14) * grid;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//starts the game
startTimer();
// requestAnimationFrame(startGame); //sets the fps to 60
