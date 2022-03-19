// function that will randomly return 'Rock', 'Paper', or 'Scissors'
function computerPlay(){
    let computerSelection = ''
    let randInt = Math.floor(Math.random()*3) + 1
    console.log(computerSelection)
    if (randInt === 1){
        let computerSelection = "rock";
    } else if (randInt === 2){
        let computerSelection = "paper";
    } else{
        let computerSelection = "scissors"
    }
    return computerSelection;
}

// Function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    
}

// Function that calls playRound to play a 5 round game 
function game(){

}


