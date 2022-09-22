function getComputerChoice(){
    //return a randum integer from 1 to 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choice;
    switch(randomNumber){
        case 1: choice = 'rock';
        break;
        case 2: choice = 'paper';
        break;
        default: choice = 'scissors';
    }
    return choice;
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';
    const winMessage = 'You Win!';
    const loseMessage =;
    const tieMessage =;
    
    if ((computerSelection === rock) &&  (playerSelection === rock)){
       return "Its a tie!";
    }else if((computerSelection === rock) &&  (playerSelection === paper)){
        return "You Win! Paper beats Rock."
    }else if((computerSelection === rock) &&  (playerSelection=== scissors)){
        return "You Lose! Rock beats Scissors";
    }else if((computerSelection === paper) &&  (playerSelection === paper)){
        return "Its a tie!";
    }else if((computerSelection=== paper) &&  (playerSelection=== rock)){
        return "You Lose! Rock beats Scissors";
    }else if((computerSelection === paper) &&  (playerSelection === scissors)){
        return "You Win! Scissors beats paper."
    }else if((computerSelection === scissors) &&  (playerSelection === scissors)){
        return "It's a tie!"
    }else if((computerSelection === scissors) &&  (playerSelection === rock)){
        return "You Win! Rock beats Scissors."
    }else if((computerSelection === scissors) &&  (playerSelection === paper)){
        return "You Lose! Scissors beats Paper."
    }
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

/*
check player selection

rock
if rock and scissors win
if rock and paper lose
else tie

paper
if paper and scissors lose
if paper and rock win
else tie

scissors
if scissors and rock lose
if scissors and paper win
else tie
*/