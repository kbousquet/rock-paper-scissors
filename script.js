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
    } else if (computerSelection === 'rock' && playerSelection === 'paper'){
        return 'You win! Paper beats rock!';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        return 'You lose! Rock beats scissors!'
    } else if (computerSelection === 'paper' && playerSelection === 'rock'){
        return 'You lose! Paper beats rock!'
    } else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        return 'You win! Scissors beats paper!'
    } else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        return 'You win! Rock beats scissors!'
    } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        return 'You lose! Scissors beats paper!'
    }
}

// Function that calls playRound to play a 5 round game 
function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound(prompt("Rock, Paper, or Scissors?"),computerPlay()))
        
    }
}