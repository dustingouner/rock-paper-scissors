class Game {
  constructor(humanPlayer, computerPlayer, gameType) {
    this.human = new Player(humanPlayer);
    this.computer = new Player(computerPlayer);
    this.gameType = gameType;
    this.isADraw = null;


  }
  
}
