
var classicGameButton = document.querySelector('.game-classic')
var difficultGameButton = document.querySelector('.game-difficult')
var rockButton = document.getElementById('rock')
var paperButton = document.getElementById('paper')
var scissorsButton = document.getElementById('scissors')
var ufoButton = document.getElementById('ufo')
var lizardButton = document.getElementById('lizard')
var classicGameBoard = document.querySelector('.classic-buttons')
var difficultGameBoard = document.querySelector('.difficult-buttons')
var gameSelectionContainer = document.querySelector('.game-selection-container')
var changeGameButton = document.querySelector('.change-game')
var instructions = document.querySelector('.instructions')
var humanWins = document.getElementById('humanWins')
var computerWins = document.getElementById('computerWins')
var humanPick = document.getElementById('humanPick')
var computerPick = document.getElementById('computerPick')
var gamePicks = document.querySelector('.game-picks')
var humanIcon = document.querySelector('.human-icon')
var currentGame;

classicGameButton.addEventListener('click', newGame)
difficultGameButton.addEventListener('click', newGame)
changeGameButton.addEventListener('click', changeGame)
rockButton.addEventListener('click', chooseWeapon)
paperButton.addEventListener('click', chooseWeapon)
scissorsButton.addEventListener('click', chooseWeapon)
ufoButton.addEventListener('click', chooseWeapon)
lizardButton.addEventListener('click', chooseWeapon)

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

function newGame(event) {
  currentGame = new Game(event.currentTarget.id);
  if (currentGame.gameType === 'classic') {
    displayClassicGame();
  } else if (currentGame.gameType === 'difficult') {
    displayDifficultGame();
  }
}

function chooseWeapon(event) {
  takeTurn('human', event.currentTarget.id);
  takeTurn('computer', event.currentTarget.id);
  currentGame.checkForDraw();
  currentGame.selectedGame();
  updateScore();
  showResults();
}

function takeTurn(player, eventId) {
  currentGame['${player}Choice'] = currentGame[player].takeTurn(currentGame.gameType, eventId);
}

function updateScore() {
  var humanScore = currentGame.human.wins;
  var computerScore = currentGame.computer.wins;
  humanWins.innerText = `Wins: ${humanScore}`;
  computerWins.innerText = `Wins: ${computerScore}`

}

function showResults() {
  gamePicks.classList.remove('hidden')
  classicGameBoard.classList.add('hidden')
  difficultGameBoard.classList.add('hidden')
  humanIcon.classList.remove('hidden')
  humanPick.src = currentGame.humanPickImage
  computerPick.src = currentGame.computerPickImage
  instructions.innerText = currentGame.winnerMessage
  setTimeout(function() {
    if (currentGame.gameType === 'classic') {
      displayClassicGame();
      gamePicks.classList.add('hidden')
      humanIcon.classList.add('hidden')
    } else if (currentGame.gameType === 'difficult') {
      displayDifficultGame();
      gamePicks.classList.add('hidden')
      humanIcon.classList.add('hidden')
    }
  }, 3500)
}









