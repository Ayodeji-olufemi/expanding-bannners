const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
      return userInput
    } else {
      console.log('abeg type correct thing');
    }
  }
  
  function getComputerChoice () {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'scissors';
      break;
      case 2:
      return 'paper';
      break;
    }
  }
  
  function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'the game is a tie';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'you lost';
      } else {
        return 'you won';
      }
    }
      if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'you won';
      } else {
        return 'you lost';
      }
    }
      if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'you won';
      } else {
        return 'you lost';
      }
    }
  }
  function playGame() {
    userChoice = getUserChoice('rock');
    computerChoice = getComputerChoice()
    console.log(`you threw ${userChoice}`);
    console.log(`the computer threw ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame ()