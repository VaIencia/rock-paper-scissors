const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const pscore = document.querySelector(".player-score p")
const cscore = document.querySelector(".computer-score p")
let userChoice
let computerChoice
let result

let playerscore = 0;
let computerscore = 0;


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "it's a draw!"
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
    playerscore++;
    pscore.textContent = playerscore;
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lose!'
    computerscore++;
    cscore.textContent = computerscore;
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
    playerscore++;
    pscore.textContent = playerscore;
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
    computerscore++;
    cscore.textContent = computerscore;
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
    playerscore++;
    pscore.textContent = playerscore;
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
    computerscore++;
    cscore.textContent = computerscore;
  }
  resultDisplay.innerHTML = result
}