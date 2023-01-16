class Game {
  constructor(gameType) {
    this.human = new Player('human','👱🏼‍♂️');
    this.computer = new Player('computer', '💻');
    this.gameType = gameType;
    this.isADraw = null;
    // this.humanChoice = '';
    // this.computerChoice = '';
    this.winner = '';
    this.winnerMessage = '';
    this.humanPickImage = '';
    this.computerPickImage = '';
  }
  // 1. function to keep track of data for game board
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


  // 2. function to keep track of selected game type

        addScore() {
          if (this.isADraw) {
            this.winnerMessage = 'It\'s a Draw!'
          } else if (this.winner === 'human') {
            this.human.wins++;
            this.winnerMessage = 'Human Wins!';
          } else if (this.winner === 'computer') {
            this.computer.wins++;
            this.winnerMessage = 'Computer Wins!';
          }
          this.updatePickImages();
          
        }


  // 3. function to check the Game's board data for win conditions

        decideClassicWinner() {
          if (this.human.choice === 'paper' && this.computer.choice === 'rock') {
            this.winner = 'human';
          } else if (this.human.choice === 'rock' && this.computer.choice === 'scissors') {
            this.winner = 'human';
          } else if (this.human.choice === 'scissors' && this.computer.choice === 'paper') {
            this.winner = 'human';
          } else {
            this.winner = 'computer'
          }
        }

        decideDifficultWinner() {
          if (this.human.choice === 'rock' && this.computer.choice === 'scissors' || this.human.choice === 'rock' && this.computer.choice === 'lizard') {
            this.winner = 'human';
            console.log('human won - rock vs scissors or lizard')
          } else if (this.human.choice === 'paper' && this.computer.choice === 'rock' || this.human.choice === 'paper' && this.computer.choice === 'ufo') {
            this.winner = 'human';
            console.log('human won - paper vs rock or ufo')
          } else if (this.human.choice === 'scissors' && this.computer.choice === 'paper' || this.human.choice === 'scissors' && this.computer.choice === 'lizard') {
            this.winner = 'human';
            console.log('human won - scissors vs paper or lizard')
          } else if (this.human.choice === 'lizard' && this.computer.choice === 'paper' || this.human.choice === 'lizard' && this.computer.choice === 'ufo') {
            this.winner = 'human';
            console.log('human won - lizard vs paper or ufo')
          } else if (this.human.choice === 'ufo' && this.computer.choice === 'scissors' || this.human.choice === 'ufo' && this.computer.choice === 'rock') {
            this.winner = 'human';
            console.log('human won - ufo vs scissors or rock')
          } else {
            this.winner = 'computer'
            console.log('computer wins')
          }
        }

  // 4. function to detect when a game is a draw
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

      

  // 5. function to reset the Game's board to begin a new game.

      // newGame() {
      //   this.humanChoice = '';
      //   this.computerChoice = '';
      //   this.winner = '';
      //   this.isADraw = null;
      //   this.winnerMessage = '';
      // }
  
  

  
}
