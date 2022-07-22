const playerChoice = "PAPER";
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));


function getComputerChoice() {
  let plays = ["Rock", "Paper", "Scissors"];
  let compChoice = plays[Math.floor(Math.random() * plays.length)];
  console.log(compChoice);
  return compChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection.toLowerCase() == "rock") {
      return "It's a tie!";
    } else if (computerSelection.toLowerCase() == "paper") {
      return "You lose!";
    } else if (computerSelection.toLowerCase() == "scissors") {
      return "You win!";
    }
  } else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection.toLowerCase() == "rock") {
      return "You win!";
    } else if (computerSelection.toLowerCase() == "paper") {
      return "It's a tie!";
    } else if (computerSelection.toLowerCase() == "scissors") {
      return "You lose!";
    }
  } else { // Player selection is scissors
    if (computerSelection.toLowerCase() == "rock") {
      return "You lose!";
    } else if (computerSelection.toLowerCase() == "paper") {
      return "You win!";
    } else if (computerSelection.toLowerCase() == "scissors") {
      return "It's a tie!";
    }
  }

}