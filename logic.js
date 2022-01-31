// LOGIC TO DETERMINE HOW THE GAME WILL OPERATE 

//This function runs the computers choice
function computerPlay() {
    let choices = ['Rock','Paper','Scissors'];
    let randomNum = Math.floor(Math.random()*3);
    
    return choices[randomNum]
}

function gameRound (player, computerPlay) {
    
    computerPlay = computerPlay()
    console.log(`Computer played ${computerPlay}! `)

    if (player.toLowerCase() == 'rock') {
        if (computerPlay.toLowerCase() == 'scissors') {
            return (`You Win! ${player.toUpperCase()} beats ${computerPlay.toUpperCase()}!`)
    
        } else if (computerPlay.toLowerCase() == 'paper') {
            return (`You lose. ${computerPlay.toUpperCase()} beats ${player.toUpperCase()}!`)
            
        } else if (computerPlay.toLowerCase() == 'rock') {
            return ('You tied')
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
            return ('You tied')
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
            return ('You tied')
        } else {
            return ('What?')
        }
    }

}

//This code is selecting all the buttons and for each button we need to listen for a click, 
//when a click occurs assign player choice to the class name and log the choice

function game() {
    
    let player_score = 0
    let computer_score = 0

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerChoice = button.className;
            console.log(`You played ${playerChoice}!`)
                
            round = gameRound(playerChoice , computerPlay)
            console.log(round)

            if (round[4] == 'W') {
                player_score += 1
                console.log(`The score is:\nPlayer: ${player_score} \nComputer: ${computer_score}`)
            } else if (round[4] == 'l') {
                computer_score += 1
                console.log(`The score is:\nPlayer: ${player_score} \nComputer: ${computer_score}`)
            } else {
                console.log(`The score remains:\nPlayer: ${player_score} \nComputer: ${computer_score}`)
            }

            if (player_score == 5) {
                console.log('You have won it all!')
            } else if (computer_score == 5) {
                console.log('You have lost it all!')
            }
            });
    });
    
};

game();
