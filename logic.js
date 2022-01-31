// LOGIC TO DETERMINE HOW THE GAME WILL OPERATE 

//This function runs the computers choice
function computerPlay() {
    let choices = ['Rock','Paper','Scissors'];
    let randomNum = Math.floor(Math.random()*3);
    
    return choices[randomNum]
}

function gameRound (player, computerPlay) {

    if (player.toLowerCase() == 'rock') {
        if (computerPlay.toLowerCase() == 'scissors') {
            return (`You Win! ${player.toUpperCase()} beats ${computerPlay.toUpperCase()}!`)
    
        } else if (computerPlay.toLowerCase() == 'paper') {
            return (`You lose. ${computerPlay.toUpperCase()} beats ${player.toUpperCase()}!`)
            
        } else if (computerPlay.toLowerCase() == 'rock') {
            return ('You tied...')
        } else {
            return ('What?')
        }
    }
    if (player.toLowerCase() == 'scissors') {
        if (computerPlay.toLowerCase() == 'paper') {
            return (`You Win! ${player.toUpperCase()} beats ${computerPlay.toUpperCase()}`)
    
        } else if (computerPlay.toLowerCase() == 'rock') {
            return (`You lose. ${computerPlay.toUpperCase()} beats ${player.toUpperCase()}!`)
            
        } else if (computerPlay.toLowerCase() == 'scissors') {
            return ('You tied...')
        } else {
            return ('What?')
        }
    }
    if (player.toLowerCase() == 'paper') {
        if (computerPlay.toLowerCase() == 'rock') {
            return (`You Win! ${player.toUpperCase()} beats ${computerPlay.toUpperCase()}`)
    
        } else if (computerPlay.toLowerCase() == 'scissors') {
            return (`You lose. ${computerPlay.toUpperCase()} beats ${player.toUpperCase()}!`)
            
        } else if (computerPlay.toLowerCase() == 'paper') {
            return ('You tied...')
        } else {
            return ('What?')
        }
    }

}

function game() {
    
    let player_score = 0
    let computer_score = 0

    const div = document.querySelector('.shoot'); //selects all divs
    div.style.whiteSpace = 'pre' // style needed to make a new line
    const scoreboard = document.querySelector('.scoreboard')

    const buttons = document.querySelectorAll('button'); //set const to button as we select all 3 buttons
    buttons.forEach((button) => {  //we cycle through the list of buttons, for each button we are listening for a click and if a click occurs we execute our function
    button.addEventListener('click', () => {

        if (player_score == 5) {
            alert('You have won it all!')
            return;
        } else if (computer_score == 5) {
            alert('You have lost it all!')
            return;
        }
        
        playerChoice = button.className;
        computer = computerPlay()         
        round = gameRound(playerChoice , computer)
        div.textContent = `You played ${playerChoice}!\r\nComputer played ${computer}!\r\n${round}` ///\r\n was needed to add a new line

        if (round[4] == 'W') {
            player_score += 1
            scoreboard.textContent = `The score is:\nPlayer: ${player_score} \nComputer: ${computer_score}`
        } else if (round[4] == 'l') {
            computer_score += 1
            scoreboard.textContent = `The score is:\nPlayer: ${player_score} \nComputer: ${computer_score}`
        } else {
            scoreboard.textContent = `The score remains:\nPlayer: ${player_score} \nComputer: ${computer_score}`
        }

    
        });
    });
    
};

game();
