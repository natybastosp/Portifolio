let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("comp-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result > p");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");

function getComputerChoice() {
  const choices = {
    0: "rock",
    1: "paper",
    2: "scissors",
  };
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = `${userChoice} loses to ${computerChoice}. You lose!`;
}

function draw(userChoice, computerChoice) {
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = `${userChoice} equals ${computerChoice}. It's a draw!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win(userChoice, computerChoice);
      break;
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rockDiv.addEventListener("click", function () {
    game("rock");
  });

  paperDiv.addEventListener("click", function () {
    game("paper");
  });

  scissorsDiv.addEventListener("click", function () {
    game("scissors");
  });
}

main();
