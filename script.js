// function that will randomly return 'Rock', 'Paper', or 'Scissors'
function computerPlay(){
    const randInt = Math.floor(Math.random()*3) + 1
    if (randInt === 1){
        return "rock";
    } else if (randInt === 2){
        return "paper";
    } else{
        return "scissors";
    }
}

// Function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    console.log('Computer: ' + computerSelection);
    console.log('Player: ' + playerSelection);
    if (computerSelection === 'rock' && playerSelection === 'rock'){
        return 'It\'s a tie!';
    } else if (computerSelection === 'paper' && playerSelection === 'paper'){
        return 'It\'s a tie!';
    } else if (computerSelection === 'scissors' && playerSelection === 'scissors'){
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

game()
