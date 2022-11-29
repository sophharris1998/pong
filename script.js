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

const ball = document.querySelector(".ball");
function moveBallX() {
  let rect = game.getBoundingClientRect();
  let ballRect = ball.getBoundingClientRect();
  let ballPositionX = (ballRect.left / rect.width) * 100;
  ball.style.left = ballPositionX + "vw";
  console.log(ballRect.left);
}

game.addEventListener("click", moveBallX);
