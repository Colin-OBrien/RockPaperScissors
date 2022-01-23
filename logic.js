/** LOGIC TO DETERMINE HOW THE GAME WILL OPERATE */

let player_choice = prompt("Rock, Paper, or Scissors? ")

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
            console.log(`You Win! ${player.toUpperCase()} beats ${computerPlay.toUpperCase()}!`)
    
        } else if (computerPlay.toLowerCase() == 'paper') {
            console.log(`Aw! You lost, ${computerPlay.toUpperCase()} beats ${player.toUpperCase()}!`)
            
        } else if (computerPlay.toLowerCase() == 'rock') {
            console.log('You tied')
        } else {
            console.log('What?')
        }
    }
    if (player.toLowerCase() == 'scissors') {
        if (computerPlay.toLowerCase() == 'paper') {
            console.log(`You Win! ${player.toUpperCase()} beats ${computerPlay.toUpperCase()}`)
    
        } else if (computerPlay.toLowerCase() == 'rock') {
            console.log(`Aw! You lost, ${computerPlay.toUpperCase()} beats ${player.toUpperCase()}!`)
            
        } else if (computerPlay.toLowerCase() == 'paper') {
            console.log('You tied')
        } else {
            console.log('What?')
        }
    }
    if (player.toLowerCase() == 'paper') {
        if (computerPlay.toLowerCase() == 'rock') {
            console.log(`You Win! ${player.toUpperCase()} beats ${computerPlay.toUpperCase()}`)
    
        } else if (computerPlay.toLowerCase() == 'scissors') {
            console.log(`Aw! You lost, ${computerPlay.toUpperCase()} beats ${player.toUpperCase()}!`)
            
        } else if (computerPlay.toLowerCase() == 'paper') {
            console.log('You tied')
        } else {
            console.log('What?')
        }
    }

}


gameRound(player_choice, computerPlay)