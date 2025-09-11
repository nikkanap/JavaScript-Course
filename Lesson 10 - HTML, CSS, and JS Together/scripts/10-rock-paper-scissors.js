//bro that's krazy
let score = JSON.parse(localStorage.getItem('score')) 
||  {
        wins: 0,
        losses: 0,
        ties: 0
    }
updateScoreElement();

function playGame(playerMove, loseMove, winMove) {
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
    
    document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="rock image" class="move-icon"> <img src="images/${computerMove}-emoji.png" alt="rock image" class="move-icon"> Computer`;
    updateScoreElement();
}


function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`; 
}