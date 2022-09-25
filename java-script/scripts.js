game();

function game(){    
    console.log('game executed');
    const playerSelection = "paper";

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        const result = playRound(playerSelection, getComputerChoice());
        
        if(result.includes('Win'))
            playerScore++;
        else if(result.includes('Lose'))
            computerScore++;

        console.log(`Your Score: ${playerScore} Computer's Score: ${computerScore}`);
        
        
    }
    const winner = 'Congratulations, you win!';
    const loser = 'Game Over, you lost!';
    const tieGame = 'Its a Tie!';
    let gameResult;
    if(playerScore > computerScore)
        gameResult = winner;
    else if(playerScore < computerScore)
        gameResult = loser;
    else   
        gameResult = tieGame;

    console.log(gameResult);
    console.log('game execution finished');
}

function getComputerChoice(){
    console.log('getComputerChoice executed');
    //return a random integer from 1 to 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let choice;
    switch(randomNumber){
        case 1: choice = 'rock';
        break;
        case 2: choice = 'paper';
        break;
        default: choice = 'scissors';
    }
    
    console.log(`The random number is ${randomNumber}, computer chose ${choice}`);
    return choice;
    
}


function playRound(playerSelection, computerSelection){
    console.log('playRound executed');

    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    const rock = 'rock';
    const paper = 'paper';
    let decision;

    switch(playerSelection)
    {
        case rock: 
            decision = choseRock(computerSelection);
            break;
        case paper:
            decision = chosePaper(computerSelection);
            break;
        default:
            decision = choseScissors(computerSelection);
    }
    
    return decision;
}

function choseRock(computerSelection){

    const paper = 'paper';
    const scissors = 'scissors';
    const winMessage = 'You Win!';
    const loseMessage = 'You Lose!';
    const tieMessage ="It's a Tie!";

    switch(computerSelection)
    {
        case paper:
            message = `${loseMessage} Paper beats Rock`;
            break;
        case scissors: 
            message = `${winMessage} Rock beats Scissors`;
            break;        
        default:
            message = tieMessage;
    }

    return message;
}

function chosePaper(computerSelection){

    const rock ='rock';
    const scissors = 'scissors';
    const winMessage = 'You Win!';
    const loseMessage = 'You Lose!';
    const tieMessage ="It's a Tie!";

    switch(computerSelection)
    {
        case rock:
            message = `${winMessage} Paper beats Rock`;
            break;
        case scissors: 
            message = `${loseMessage} Scissors beats Paper`;
            break;        
        default:
            message = tieMessage;
    }

    return message;
}

function choseScissors(computerSelection){
    const rock = 'rock';
    const paper = 'paper';
    const winMessage = 'You Win!';
    const loseMessage = 'You Lose!';
    const tieMessage ="It's a Tie!";

    switch(computerSelection)
    {   
        case rock:
            message = `${loseMessage} Rock beats Scissors`;
            break;
        case paper: 
            message = `${winMessage} Scissors beats Paper`;
            break;        
        default:
            message = tieMessage;
    }

    return message;
}


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