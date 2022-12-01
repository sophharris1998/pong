//calling functions
function gameLoop() {
  paddlePrimaryCollision();
  moveBallX();
  moveBallY();
  movingPaddleSecondary();
  requestAnimationFrame(gameLoop);
}

//PRIMARY PADDLE
//querySelectory gets div from html
const game = document.querySelector(".game");
const paddlePrimary = document.querySelector(".paddlePrimary");
const ball = document.querySelector(".ball");

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

// function moveBallX gets the size of the game and the ball, if the balls poisition smaller than 0 it should move to the right
function moveBallX() {
  let rect = game.getBoundingClientRect(); //gets the size of the game
  let ballRect = ball.getBoundingClientRect(); //gets the size of the ball
  let paddleSecondaryRect = paddleSecondary.getBoundingClientRect(); //gets the size of the computer paddle
  //resetting the ball if computer scores
  if (ballRect.left < 0) {
    //if the ball passes the 0 on X axis
    ball.style.left = rect.width / 2 + "px"; //middle of page
    ball.style.top = rect.height / 2 + "px"; //middle of page
    ballRect = ball.getBoundingClientRect();

    goingLeft = false; //ball will be going right
    pointScores(); //adds onto computer score by 1
  }

  //if the ball has gone passed (is bigger than) the secondary/computer paddle. -ballRect.width / 2 means that the ball will hit the paddle and not go over it
  if (ballRect.left > paddleSecondaryRect.x - ballRect.width / 2) {
    goingLeft = true; //go left
  }

  // ballRect gets the position of the ball on the X axis,
  let ballPositionX = ballRect.x;
  if (goingLeft == true) {
    ball.style.left = ballPositionX - 25 + "px"; // - makes the ball go left 25px at a time if I wanted to increase the speed increase the number and vice versa
  } else {
    ball.style.left = ballPositionX + 25 + "px";
  }
}

//score
const score = document.querySelector(".score");
const scorePrimary = document.querySelector(".scorePrimary");
const scoreSecondary = document.querySelector(".scoreSecondary");

//function for scoring points changes the inner text of score secondary +1 each time
function pointScores() {
  scoreSecondary.innerText = parseInt(scoreSecondary.innerText) + 1;
}

//move ball y
//vars
let speedY = 1;
let goingUp = true;

function moveBallY() {
  let rect = game.getBoundingClientRect();
  let ballRect = ball.getBoundingClientRect();

  if (ballRect.top < 0) {
    //if the balls position on the y axis is smaller than 0 the ball will move down
    goingUp = false;
  }
  if (ballRect.top > rect.height - ballRect.height / 2) {
    //if the balls position on the y axis is bigger than the height of the screen then the ball moves up
    goingUp = true;
  }

  let ballPositionY = ballRect.y;
  if (goingUp == false) {
    ball.style.top = ballPositionY + 25 + "px";
  } else {
    ball.style.top = ballPositionY - 25 + "px"; //ball moves down at 25px a loop
  }
}

//paddle "AI"
const paddleSecondary = document.querySelector(".paddleSecondary");
function movingPaddleSecondary() {
  let rect = game.getBoundingClientRect(); //getting size of game div

  let ballRect = ball.getBoundingClientRect();
  let paddlePositionSecondary = (ballRect.y / rect.height) * 100; //balls y position divided by the height of game times 100 which will give the paddles vh
  paddleSecondary.style.top = paddlePositionSecondary + "vh"; //getting the paddleSecondary top and setting it to the above
}

//function for ball paddle collision paddle primary

function paddlePrimaryCollision() {
  let ballRect = ball.getBoundingClientRect();
  let paddlePrimaryRect = paddlePrimary.getBoundingClientRect();

  //if the ball is gone past the paddlePrimary...
  if (ballRect.x < paddlePrimaryRect.x + paddlePrimaryRect.width) {
    // checking if the ball is inline with paddlePrimary. 1st if its below and 2nd checks if its it above
    if (
      ballRect.y < paddlePrimaryRect.y + paddlePrimaryRect.height &&
      ballRect.y > paddlePrimaryRect.y
    )
      //tells the ball to go right
      goingLeft = false;
  }
}

//STARTS GAME LOOP... at the bottom as everything is declared
requestAnimationFrame(gameLoop);
