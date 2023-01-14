
var classicGameButton = document.getElementById('classic')
var difficultGameButton = document.getElementById('difficult')
var rockButton = document.getElementById('rock')
var paperButton = document.getElementById('paper')
var scissorsButton = document.getElementById('scissors')
var ufoButton = document.getElementById('ufo')
var lizardButton = document.getElementById('lizrd')
var classicGameBoard = document.querySelector('.classic-buttons')
var difficultGameBoard = document.querySelector('.difficult-buttons')
var gameSelectionContainer = document.querySelector('.game-selection-container')
var changeGameButton = document.querySelector('.change-game')
var instructions = document.querySelector('.instructions')

classicGameButton.addEventListener('click', displayClassicGame)
difficultGameButton.addEventListener('click', displayDifficultGame)
changeGameButton.addEventListener('click', changeGame)


function displayClassicGame() {
  gameSelectionContainer.classList.add('hidden');
  classicGameBoard.classList.remove('hidden')
  changeGameButton.classList.remove('hidden')
  instructions.innerText = 'Choose Your Weapon!'
}

function displayDifficultGame() {
  gameSelectionContainer.classList.add('hidden');
  difficultGameBoard.classList.remove('hidden')
  classicGameBoard.classList.remove('hidden')
  changeGameButton.classList.remove('hidden')
  instructions.innerText = 'Choose Your Weapon!'
}

function changeGame() {
  gameSelectionContainer.classList.remove('hidden')
  classicGameBoard.classList.add('hidden')
  difficultGameBoard.classList.add('hidden')
  changeGameButton.classList.add('hidden')
  instructions.innerText = 'Choose your game!'
}