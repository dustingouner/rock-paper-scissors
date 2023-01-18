class Game {
  constructor(gameType) {
    this.human = new Player('human','👱🏼‍♂️');
    this.computer = new Player('computer', '💻');
    this.gameType = gameType;
    this.isADraw = null;
    this.winner = '';
    this.winnerMessage = '';
    this.humanPickImage = '';
    this.computerPickImage = '';
  }
  selectedGame() {
    if (this.isADraw) {
    return this.addScore();
    } else if (this.gameType === 'classic') {
      this.decideClassicWinner();
    } else if (this.gameType === 'difficult') {
      this.decideDifficultWinner();
    }
    this.addScore();
  }
  addScore() {
    if (this.isADraw) {
      this.winnerMessage = 'It\'s a Draw!'
    } else if (this.winner === 'human') {
      this.human.wins++;
      this.winnerMessage = '😃 Human Wins! 😃';
    } else if (this.winner === 'computer') {
      this.computer.wins++;
      this.winnerMessage = '😡 Computer Wins! 😡';
    }
    this.updatePickImages();
  }
  decideClassicWinner() {
    if (this.human.choice === 'paper' && this.computer.choice === 'rock') {
      this.winner = 'human';
    } else if (this.human.choice === 'rock' && this.computer.choice === 'scissors') {
      this.winner = 'human';
    } else if (this.human.choice === 'scissors' && this.computer.choi=== 'paper') {
      this.winner = 'human';
    } else {
      this.winner = 'computer'
    }
  }
  decideDifficultWinner() {
    if (this.human.choice === 'rock' && this.computer.choice === 'scissors' || this.human.choice === 'rock' && this.computer.choice === 'lizard') {
      this.winner = 'human';
    } else if (this.human.choice === 'paper' && this.computer.choice === 'rock' || this.human.choice === 'paper' && this.computer.choice === 'ufo') {
      this.winner = 'human';
    } else if (this.human.choice === 'scissors' && this.computer.choice === 'paper' || this.human.choice === 'scissors' && this.computer.choice === 'lizard') {
      this.winner = 'human';
    } else if (this.human.choice === 'lizard' && this.computer.choice === 'paper' || this.human.choice === 'lizard' && this.computer.choice === 'ufo') {
      this.winner = 'human';
    } else if (this.human.choice === 'ufo' && this.computer.choice === 'scissors' || this.human.choice === 'ufo' && this.computer.choice === 'rock') {
      this.winner = 'human';
    } else {
      this.winner = 'computer'
      
    }
  }
  checkForDraw() {
    if (this.human.choice === this.computer.choice) {
      this.winner = 'nobody';
      this.isADraw = true;
    } else {
      this.isADraw = false; 
    }
  }
  updatePickImages() {
    this.humanPickImage = `./assets/${this.human.choice}.png`;
    this.computerPickImage = `./assets/${this.computer.choice}.png`
  }
  newGame() {
    this.humanChoice = '';
    this.computerChoice = '';
    this.winner = '';
    this.isADraw = null;
    this.winnerMessage = '';
  }
}
