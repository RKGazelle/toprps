//initialize variables & event listener constants
const buttonBox = document.querySelector('.buttonBox');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
const resultsDiv = document.querySelector('#results');
const introP = document.querySelector('.intro');
const rockButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const paperButton = document.createElement('button');

rockButton.setAttribute('id', 'rock');
rockButton.textContent = "Rock";
scissorsButton.setAttribute('id', 'scissors');
scissorsButton.textContent = "Scissors";
paperButton.setAttribute('id', 'paper');
paperButton.textContent = "Paper";

let playerScore = 0;
let compScore = 0;
let result = "";
let outcome = 0;

startButton.addEventListener('click', initGame);

rockButton.addEventListener('click', function() {
  result = playRound("rock",getComputerChoice());
  outcome = updateScore(result);
});
paperButton.addEventListener('click', function() {
  result = playRound("paper",getComputerChoice());
  outcome = updateScore(result);
});
scissorsButton.addEventListener('click', function() {
  result = playRound("scissors",getComputerChoice());
  outcome = updateScore(result);
});

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
      compScore+=1;
      return "You lose!";
    } else if (computerSelection.toLowerCase() == "scissors") {
      playerScore += 1;
      return "You win!";
    }
  } else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection.toLowerCase() == "rock") {
      playerScore += 1;
      return "You win!";
    } else if (computerSelection.toLowerCase() == "paper") {
      return "It's a tie!";
    } else if (computerSelection.toLowerCase() == "scissors") {
      compScore += 1;
      return "You lose!";
    }
  } else { // Player selection is scissors
    if (computerSelection.toLowerCase() == "rock") {
      compScore += 1;
      return "You lose!";
    } else if (computerSelection.toLowerCase() == "paper") {
      playerScore += 1;
      return "You win!";
    } else if (computerSelection.toLowerCase() == "scissors") {
      return "It's a tie!";
    }
  }

}

function updateScore(result) {
  if(playerScore < 5 && compScore < 5) {
    resultsDiv.textContent = `${result} Current Score - Player ${playerScore} | Computer ${compScore}`;
    return 0; // Game() Continues
    } else if (playerScore === 5) {
      resultsDiv.textContent = `YOU WIN!!! Final Score - Player: ${playerScore} | Computer: ${compScore}`;
      resultsDiv.style.cssText = 'background: white; border: 5px solid green; color: green; padding: 20px; text-align: center;';
      resetGame();
      return 1; // Player Wins!
    } else if (compScore === 5) {
      resultsDiv.textContent = `You lost... Final Score - Player: ${playerScore} | Computer: ${compScore}`;
      resultsDiv.style.cssText = 'background: white; border: 5px solid red; color: red; padding: 20px; text-align: center;';
      resetGame();
      return 2; // Computer Wins!
    }
}

function initGame() {
  resultsDiv.textContent = "Current Score - Player 0 | Computer 0";
  playerScore = 0;
  compScore = 0;

  startButton.remove();
  buttonBox.append(rockButton, paperButton, scissorsButton);
  resultsDiv.style.cssText = 'background: gray; color: white; padding: 20px; font-size: 20px; text-align: center;'

  introP.textContent = `W: ${wins} L: ${losses}`;

  if(outcome === 1) {
    wins++;
  } else if (outcome === 2) {
    losses++;
  } 



  return;
}

function resetGame() {
  rockButton.remove();
  scissorsButton.remove();
  paperButton.remove();
  buttonBox.append(startButton);

  return;
}

