const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

const scoreCount = document.getElementById("score");
const highScoreCount = document.getElementById("highscore");

let primary = "#011627";
let secondary = "#AE17DB";
let highscore = 0;
let nameHighScore = "";
let timer;
let sec = 0;

const grid = 32; //size of 1 cell
let count = 0; //to manipulate frames per sec
let score = 0;

let moles = {
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
  ctx.fillRect(moles.x, moles.y, grid - 1, grid - 1);
  moles.x = getRandomInt(0, 24) * grid;
  moles.y = getRandomInt(0, 14) * grid;
  console.log(getRelativeCoords(onclick));
}

function getRelativeCoords(event) {
  return { x: event.offsetX, y: event.offsetY };
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function relMouseCoords(event) {
  var totalOffsetX = 0;
  var totalOffsetY = 0;
  var canvasX = 0;
  var canvasY = 0;
  var currentElement = this;

  do {
    totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
    totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
  } while ((currentElement = currentElement.offsetParent));

  canvasX = event.pageX - totalOffsetX;
  canvasY = event.pageY - totalOffsetY;

  return { x: canvasX, y: canvasY };
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

//starts the game
startTimer();
// requestAnimationFrame(startGame); //sets the fps to 60
