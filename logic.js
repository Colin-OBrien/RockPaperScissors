/** LOGIC TO DETERMINE HOW THE GAME WILL OPERATE */

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
            
        } else if (computerPlay.toLowerCase() == 'paper') {
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


function game() {
    
    player_score = 0
    computer_score = 0

    let keepGoing = true

    while (keepGoing) {

        let player_choice = prompt("Rock, Paper, or Scissors? ")

        round = gameRound(player_choice, computerPlay)
        console.log(round)

        if (round[4] == 'W') {
            player_score += 1
        } else if (round[4] == 'l') {
            computer_score += 1
        } else {}

        console.log(`The score is now:\nPlayer: ${player_score} \nComputer: ${computer_score}`)

        if (player_score == 3) {
            console.log("Player has Won!")
            keepGoing = false
        } else if (computer_score == 3) {
            console.log("Player has lost!")
            keepGoing = false
        }

        }
    }


game()