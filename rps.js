const rockButton = document.querySelector('#rock');
const scissorsButton = document.querySelector('#scissors');
const paperButton = document.querySelector('#paper');
const resultsDiv = document.querySelector('#results');
let playerScore = 0;
let compScore = 0;
let result = "";

rockButton.addEventListener('click', function() {
  result = playRound("rock",getComputerChoice());
  resultsDiv.textContent = `${result} Current Score - Player ${playerScore} | Computer ${compScore}`;
});
paperButton.addEventListener('click', function() {
  result = playRound("paper",getComputerChoice());
  resultsDiv.textContent = `${result} Current Score - Player ${playerScore} | Computer ${compScore}`;
});
scissorsButton.addEventListener('click', function() {
  result = playRound("scissors",getComputerChoice());
  resultsDiv.textContent = `${result} Current Score - Player ${playerScore} | Computer ${compScore}`;
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

function game() {
  
  let playerScore = 0;
  let compScore = 0;

  for (i=0; i < 5; i++) {
    playerInput = prompt("Input your play:")
    result = playRound(playerInput.toLowerCase(), getComputerChoice());
    switch (result) {
      case "You win!":
        playerScore += 1;
        console.log(`You won! Your score is now ${playerScore}`)
        break;
      case "You lose!":
        compScore += 1;
        console.log(`You lost! Computer score is now ${compScore}`)
        break
      case "It's a tie!":
        console.log("It's a tie- no score change.")
        break
    }
  }

  if (playerScore > compScore) {
    console.log(`You win! Player Score: ${playerScore} | Computer Score: ${compScore}`);
  } else if (playerScore == compScore) {
    console.log(`It's a tie! Player Score: ${playerScore} | Computer Score: ${compScore}`)
  } else {
    console.log(`You lost... Player Score: ${playerScore} | Computer Score: ${compScore}`);
  }

  return playerScore;
}

