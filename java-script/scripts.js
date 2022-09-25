//game();
//const buttons = document.querySelectorAll('button');
const rockButton = document.querySelector('#rock_button');
const paperButton = document.querySelector('#paper_button');
const scissorsButton = document.querySelector('#scissors_button');

//buttons.forEach(button => button.addEventListener('click', (e) => console.log(e)));


rockButton.addEventListener('click', () => {playRound('rock', getComputerChoice())});
paperButton.addEventListener('click', () => {playRound('paper', getComputerChoice())});
scissorsButton.addEventListener('click', () => {playRound('scissors', getComputerChoice())});

/*
function game(){    

    let playerScore = 0;
    let computerScore = 0;

    
        const result = playRound(getPlayerChoice(), getComputerChoice());
        
        if(result[0].includes('Win'))
            playerScore++;
        else if(result[0].includes('Lose'))
            computerScore++;

        console.log(`${result[1]}
        Your Score: ${playerScore} Computer's Score: ${computerScore}`);
        
        
    
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
} 
*/

function getComputerChoice(){
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
    
    return choice;
    
}
/*
function getPlayerChoice(){
    let choice;
    let proceed = true;
    do{
    choice = prompt('Choose your weapon; rock, paper, or scissors?');
    
    if (choice === null)
        throw new Error("Game stopped");

    //check if input is valid
    if(choice.toLocaleLowerCase() === 'rock')
        proceed = false;
    else if(choice.toLocaleLowerCase() === 'paper')
        proceed = false;
    else if (choice.toLocaleLowerCase() === 'scissors')
        proceed = false;

    } while(proceed);
    
    choice.toLocaleLowerCase;
    return choice;
}
*/

function playRound(playerSelection, computerSelection){

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
    
    console.log(`${decision[0]} ${decision[1]}`);
}

function choseRock(computerSelection){

    const paper = 'paper';
    const scissors = 'scissors';
    const winMessage = 'You Win!';
    const loseMessage = 'You Lose!';
    const tieMessage ='It\'s a Tie!';
    const message = [];
    switch(computerSelection)
    {
        case paper:
            message[0] = loseMessage 
            message[1] = 'Paper beats Rock';
            break;
        case scissors: 
            message[0] = winMessage
            message[1] = 'Rock beats Scissors';
            break;        
        default:
            message[0] = tieMessage;
            message[1] = tieMessage;
    }

    return message;
}

function chosePaper(computerSelection){

    const rock ='rock';
    const scissors = 'scissors';
    const winMessage = 'You Win!';
    const loseMessage = 'You Lose!';
    const tieMessage ="It's a Tie!";
    const message = [];
    switch(computerSelection)
    {
        case rock:
            message[0] = winMessage
            message[1] = 'Paper beats Rock';
            break;
        case scissors: 
            message[0] = loseMessage
            message[1] = 'Scissors beats Paper';
            break;        
        default:
            message[0] = tieMessage;
            message[1] = tieMessage;
    }

    return message;
}

function choseScissors(computerSelection){
    const rock = 'rock';
    const paper = 'paper';
    const winMessage = 'You Win!';
    const loseMessage = 'You Lose!';
    const tieMessage ="It's a Tie!";
    const message = [];
    switch(computerSelection)
    {   
        case rock:
            message[0] = loseMessage
            message[1] = 'Rock beats Scissors';
            break;
        case paper: 
            message[0] = winMessage 
            message[1] = 'Scissors beats Paper';
            break;        
        default:
            message[0] = tieMessage;
            message[1] = tieMessage;
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