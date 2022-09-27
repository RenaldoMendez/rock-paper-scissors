

//const buttons = document.querySelectorAll('button');
const rockButton = document.querySelector('#rock_button');
const paperButton = document.querySelector('#paper_button');
const scissorsButton = document.querySelector('#scissors_button');
let playerScore = 0;
let computerScore = 0;
let continueGame = true;
//buttons.forEach(button => button.addEventListener('click', (e) => console.log(e)));
   
    while(continueGame){
    rockButton.addEventListener('click', () => {playRound('rock')});
    paperButton.addEventListener('click', () => {playRound('paper')});
    scissorsButton.addEventListener('click', () => {playRound('scissors')});
    //check if game ends
    decideWinner();
    }

function decideWinner(){  
    
    //decide winner of the game
    if(playerScore >= 5 || computerScore >= 5){

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

        const paragraphTwo = document.createElement('p');
        paragraphTwo.TextContent = gameResult;
        div.appendChild(paragraphTwo);
        //stop the game
        continueGame = false;
    }else 
        return;
} 

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

function playRound(playerSelection){

    const computerSelection = getComputerChoice().toLowerCase();;
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
    
    
    if(decision[0].includes('Win'))
    playerScore++;
    else if(decision[0].includes('Lose'))
    computerScore++;

    const div = document.querySelector('#results');
    const paragraph = document.createElement('p');
    paragraph.textContent = `${decision[1]}
    Your Score: ${playerScore} Computer's Score: ${computerScore}`;
    div.appendChild(paragraph);
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