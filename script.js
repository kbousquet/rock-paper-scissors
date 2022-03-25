// function that will randomly return 'Rock', 'Paper', or 'Scissors'
let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    const computerSelection = Math.floor(Math.random()*3);
    if (computerSelection === 1){
        return "rock";
    } else if (computerSelection === 2){
        return "paper";
    } else{
        return "scissors";
    }
}

// Function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    console.log('Computer: ' + computerSelection);
    console.log('Player: ' + playerSelection);
    if ((computerSelection === 'rock' && playerSelection === 'rock') || 
        (computerSelection === 'paper' && playerSelection === 'paper') || 
        (computerSelection === 'scissors' && playerSelection === 'scissors')){
        return 'It\'s a tie!';
    } else if ((computerSelection === 'rock' && playerSelection === 'paper') || 
        (computerSelection === 'paper' && playerSelection === 'scissors') || 
        (computerSelection === 'scissors' && playerSelection === 'rock')){
        playerScore ++;
        return 'Your point!';
    } else {
        computerScore ++;
        return 'Computer\'s point!';
    }
}

// Function that keeps score
function scoreKeeper(){    
    if (computerScore < playerScore){
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

// Function that calls playRound to play a 5 round game 
function game(){
    computerScore = 0;
    playerScore = 0;
    let roundCounter = 1;
    for (let i = 0; i < 5; i++){
        console.log('Round: ' + roundCounter);
        console.log(playRound(prompt('Round ' + roundCounter + ': Rock, Paper, or Scissors?'),computerPlay()));
        roundCounter ++;
    }
    console.log('Computer\'s final score: ' + computerScore);
    console.log('Your final score: ' + playerScore)
    
}
