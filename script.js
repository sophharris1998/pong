// =create index, sass, JS,
//score 1, score 2
// ball
// player paddle 1, player paddle 2
// paddle positions
//update loop for everytime something changes so it constantly runs, move ball, check for unputs, EVERYTHING
// onInput/onChange everytime you type in a box itll relate back to the id/class. up button makes paddle go up and down button makes it go down
// x and y
// different directions
// bounce from walls and paddles
//ball speeding up
//score changing

function gameLoop() {
  moveBallX();
  moveBallY();
}
setInterval(gameLoop, 33);

//PRIMARY PADDLE
//querySelectory gets div from html
const game = document.querySelector(".game");
const paddlePrimary = document.querySelector(".paddlePrimary");

// rect gets the size of game div, the position of the mouse Y divided by the height of rect to get the percentange of postition Y then times by 100 to get the VH value
function movingPaddlePrimary(mousePosition) {
  let rect = game.getBoundingClientRect();
  let paddlePosition = (mousePosition.clientY / rect.height) * 100;
  paddlePrimary.style.top = paddlePosition + "vh";
}

//event listener for when the mouse moves to run movingPaddlePrimary function
game.addEventListener("mousemove", movingPaddlePrimary);

//BALL
//vars
let speed = 1;
let goingLeft = true;

//query selector to find the div "ball"
const ball = document.querySelector(".ball");

// function moveBallX gets the size of the game and the ball, if the balls poisition smaller than 0 it should move to the right
function moveBallX() {
  let rect = game.getBoundingClientRect();
  let ballRect = ball.getBoundingClientRect();

  if (ballRect.left < 0) {
    goingLeft = false;
  }
  if (ballRect.left > rect.width) {
    goingLeft = true;
  }
  if (goingLeft == true) {
    speed = -1;
  } else {
    speed = 1;
  }

  // ballRect gets the position of the ball on the X axis,
  let ballPositionX = ballRect.left;
  if (goingLeft == true) {
    ball.style.left = parseInt(ballPositionX - 25) + "px";
  } else {
    ball.style.left = parseInt(ballPositionX + 25) + "px";
  }
}

//move ball y
//vars
let speedY = 1;
let goingUp = true;

function moveBallY() {
  let rect = game.getBoundingClientRect();
  let ballRect = ball.getBoundingClientRect();

  if (ballRect.top < 0) {
    goingUp = false;
  }
  if (ballRect.top > rect.height) {
    goingUp = true;
  }
  if (goingUp == true) {
    speedY = -5;
  } else {
    speedY = 5;
  }

  let ballPositionY = ballRect.top;
  if (speedY > 0) {
    ball.style.top = parseInt(ballPositionY + 25) + "px";
  } else {
    ball.style.top = parseInt(ballPositionY - 25) + "px";
  }

  console.log(speedY + "+" + ballPositionY);
}
