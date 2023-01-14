class Game {
  constructor(humanPlayer, computerPlayer, gameType) {
    this.human = new Player(humanPlayer);
    this.computer = new Player(computerPlayer);
    this.gameType = gameType;
    this.isADraw = null;
    this.humanChoice = '';
    this.computerChoice = '';
    this.winner = '';
    this.winnerMessage = '';
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
        }

  // 3. function to check the Game's board data for win conditions

        decideClassicWinner() {
          if (this.humanChoice === 'paper' && this.computerChoice === 'rock') {
            this.winner = 'human';
          } else if (this.humanChoice === 'rock' && this.computerChoice === 'scissors') {
            this.winner = 'human';
          } else if (this.humanChoice === 'scissors' && this.computerChoice === 'paper') {
            this.winner = 'human';
          } else {
            this.winner = 'computer'
          }
        }

        decideDifficultWinner() {
          if (this.humanChoice === 'rock' && this.computerChoice === 'scissors' || this.humanChoice === 'rock' && this.computerChoice === 'lizard') {
            this.winner = 'human';
            console.log('human won - rock vs scissors or lizard')
          } else if (this.humanChoice === 'paper' && this.computerChoice === 'rock' || this.humanChoice === 'paper' && this.computerChoice === 'ufo') {
            this.winner = 'human';
            console.log('human won - paper vs rock or ufo')
          } else if (this.humanChoice === 'scissors' && this.computerChoice === 'paper' || this.humanChoice === 'scissors' && this.computerChoice === 'lizard') {
            this.winner = 'human';
            console.log('human won - scissors vs paper or lizard')
          } else if (this.humanChoice === 'lizard' && this.computerChoice === 'paper' || this.humanChoice === 'lizard' && this.computerChoice === 'ufo') {
            this.winner = 'human';
            console.log('human won - lizard vs paper or ufo')
          } else if (this.humanChoice === 'ufo' && this.computerChoice === 'scissors' || this.humanChoice === 'ufo' && this.computerChoice === 'rock') {
            this.winner = 'human';
            console.log('human won - ufo vs scissors or rock')
          } else {
            this.winner = 'computer'
          }
        }

  // 4. function to detect when a game is a draw
      checkForDraw() {
        if (this.humanChoice === this.computerChoice) {
          this.winner = 'nobody';
          this.isADraw = true;
        } else {
          this.isADraw = false; 
        }
      }

  // 5. function to reset the Game's board to begin a new game.

      newGame() {
        this.humanChoice = '';
        this.computerChoice = '';
        this.winner = '';
        this.isADraw = null;
      }
  
  

  
}
