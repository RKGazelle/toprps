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