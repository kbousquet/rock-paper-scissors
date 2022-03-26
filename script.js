const choiceButtons = document.querySelectorAll('.choice-button');
const rounds = document.querySelector('.round');
const resultText = document.querySelector('.result-text');
const buttonPlayAgain = document.querySelector('.play-again');

let computerPoints = 0;
let playerPoints = 0;
let round = 0;

// Keep track of the current round number
function countRounds() {
    round += 1;
    rounds.innerText = `Round: ${round}`;
    return round;
  }

// Assign computer's choice
function computerPlay(){
    const choices = ['rock','paper','scissors'];
    const computerSelection = choices[Math.floor(Math.random()*choices.length)];
    const computerIcon = document.getElementById('computer-icon');
    
    if (computerSelection === 'rock'){
        computerIcon.src = "images/rock.png";
    } else if (computerSelection === 'paper'){
        computerIcon.src = "images/paper.png";
    } else if (computerSelection === 'scissors'){
        computerIcon.src = "images/scissors.png";
    }

    return computerSelection;
}


// Function that plays a single round
function playRound(playerSelection, computerSelection){
    const gameoutput = document.querySelector('.game-output');
    const computerPlayDiv = document.querySelector('.computer-play-div');

    switch (true){
        case (computerSelection === playerSelection):
            resultText.innerText = `You both chose ${playerSelection}, no point was gained.`;
            break;
        case (computerSelection === 'rock' && playerSelection === 'paper'):
        case (computerSelection === 'paper' && playerSelection === 'scissors'):
        case (computerSelection === 'scissors' && playerSelection === 'rock'): 
            resultText.innerText = `Impressive! Your ${playerSelection} crushed the computer's ${computerSelection} and you gain a point!`;
            playerPoints += 1;
            break;
        default:
            resultText.innerText = `Unfortunately the computer's ${computerSelection} beat your ${playerSelection} and it gains a point.`
            computerPoints += 1;
            break;
    }

    const points = document.querySelector('.points');
    points.innerText = `Your Points: ${playerPoints} | Computer's Points: ${computerPoints}`;
}


function endGame(playerScore, computerScore){
    if (playerScore === 5 || computerScore === 5){
        choiceButtons.forEach((button) => {
            button.setAttribute('disabled','');
            button.style.opacity = '0.5';
        });
        
        const computerIcon = document.querySelector('#computer-icon');
        computerIcon.style.opacity = '0.5';

        const gameEndText = document.querySelector('.game-end-text');
        if (playerScore > computerScore) {
          resultText.innerText = 'You destroyed the enemy computer by reaching 5 points first.';
          gameEndText.textContent = 'Mankind has won this day!';
        } else {
          resultText.innerText = 'Oh no! The computer reached 5 points first and the Machines are now plotting to take over the world!';
          gameEndText.textContent = 'Mankind is doomed!';
        }
        buttonPlayAgain.style.visibility = 'visible';
    }
}

// add a way to reset the game
function resetGame(){
    buttonPlayAgain.addEventListener('click', () => {
        window.location.reload();
    });
}

// Function that calls playRound to play a 5 round game 
function playGame(){
    let playerSelection;
    choiceButtons.forEach((choice) => {
        choice.addEventListener('click',() => {
            const choiceButtons = document.querySelectorAll('.choice-button');
            if (choice.classList.contains('rock-button')){
                playerSelection = 'rock';
            } else if (choice.classList.contains('paper-button')){
                playerSelection = 'paper';
            } else {
                playerSelection = 'scissors';
            }
            countRounds();
            playRound(playerSelection, computerPlay());
            endGame(playerPoints, computerPoints);
            resetGame();
        });

    });
  
}

playGame();
