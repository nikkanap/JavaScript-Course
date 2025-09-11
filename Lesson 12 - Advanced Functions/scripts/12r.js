let score = JSON.parse(localStorage.getItem('score')) 
||  {
        wins: 0,
        losses: 0,
        ties: 0
    }
updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    const autoPlayButton = document.querySelector('.auto-play-button');
    if(!isAutoPlaying){
        autoPlayButton.innerHTML = "Stop Playing";
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;    
    } else {
        autoPlayButton.innerHTML = "Auto Play";
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function playGame(playerMove) {
    let winMove = '';
    let loseMove = '';
    if(playerMove === 'rock') {
        loseMove = 'paper';
        winMove = 'scissors';
    } else if (playerMove === 'paper') {
        loseMove = 'scissors';
        winMove = 'rock';
    } else {
        loseMove = 'rock';
        winMove = 'paper';
    }

    const computerMove = pickComputerMove();
    const result = getResult(playerMove, computerMove, loseMove, winMove);
    const scoreString = JSON.stringify(score);
    localStorage.setItem('score', scoreString);

    printResult(playerMove, computerMove, result);
}

function getResult(playerMove, computerMove, loseMove, winMove) {
    if(computerMove === playerMove){
        score.ties += 1;
        return 'Tie.';
    } else if (computerMove === loseMove){
        score.losses += 1;
        return 'You lose.';
    } else if (computerMove === winMove){
        score.wins += 1;
        return 'You win.';
    }
}

function pickComputerMove() {
    const randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 1/3){
        return 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        return 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1){
        return 'scissors';
    }
}

function confirmation() {
    const confirmationMessage = document.querySelector('.confirmation-message');
    confirmationMessage.innerHTML = `
        Are you sure you want to reset the score?
        <button class="yes-button">Yes</button>
        <button class="no-button">No</button>
    `;

    const yesButton = document.querySelector('.yes-button');
    yesButton.addEventListener('click', () => { resetScore(); confirmationMessage.innerHTML = ""});
    const noButton = document.querySelector('.no-button');
    noButton.addEventListener('click', () => confirmationMessage.innerHTML = "");
}

function resetScore(){
    // clear the game in the java memory
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    updateScoreElement();

    //then clear it from the localStorage
    localStorage.removeItem('score');
}

function printResult(playerMove, computerMove, result) {
    document.querySelector('.js-result').innerHTML = result;
    
    let imageSrcPlayer = '';
    let imageSrcComputer = '';
    
    document.querySelector('.js-moves').innerHTML = `You <img src="../images/${playerMove}-emoji.png" alt="rock image" class="move-icon"> <img src="../images/${computerMove}-emoji.png" alt="rock image" class="move-icon"> Computer`;
    updateScoreElement();
}


function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 
}

const rockButton = document.querySelector('.rock-button');
rockButton.addEventListener('click', () => playGame('rock'));

const paperButton = document.querySelector('.paper-button');
paperButton.addEventListener('click', () => playGame('paper'));

const scissorsButton = document.querySelector('.scissors-button');
scissorsButton.addEventListener('click', () => playGame('scissors'));

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r'){
        playGame('rock');
    } else if(event.key === 'p'){
        playGame('paper');
    } else if(event.key === 's'){
        playGame('scissors');
    } else if(event.key === 'a'){
        autoPlay();
    } else if(event.key === 'Backspace'){
        confirmation();
    }
});

const resetScoreButton = document.querySelector('.reset-score-button');
resetScoreButton.addEventListener('click', () => confirmation());

const autoPlayButton = document.querySelector('.auto-play-button');
autoPlayButton.addEventListener('click', () => autoPlay());