let randomNumber = parseInt(Math.random()*100+1)

const userInput = document.querySelector('#guessField')
const lowOrHi = document.querySelector('.lowOrHi')
const guessSlot = document.querySelector('.guesses')
const guessRemaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')
const submit = document.querySelector('#subt')

const span = document.createElement('span')
let previousGuess = [];
let guessNum = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid number')
    }
    else if (guess<1){
        alert('Please Enter a number more than 1')
    }
    else if(guess>100){
        alert('Please Enter a number less than 100')
    }
    else{
        previousGuess.push(guess)
        if(guessNum>9){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endgame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess<randomNumber){
        displayMessage(`Number is Toooo Low.`)
    }
    else if(guess>randomNumber){
        displayMessage(`Number is Toooo High.`)
    }
    else{
        displayMessage(`You Guessed it Right.`)
        endgame()
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`
    guessNum++
    guessRemaining.innerHTML = `${11-guessNum}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    span.classList.add('button') 
    span.innerHTML = `<h2 id = "newGame">Start New Game</h2>`
    startOver.appendChild(span)
    playGame=false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1)
        previousGuess=[]
        guessNum = 1
        guessSlot.innerHTML=''
        guessRemaining.innerHTML=`${11-guessNum}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(span)
        playGame=true
    })
}