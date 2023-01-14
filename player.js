class Player {
  constructor(playerName) {
    this.name = playerName;
    this.token = undefined
    this.wins = 0;
    this.choice = '';
  }
  takeTurn(gameType) {
    var classicChoices = ['rock', 'paper', 'scissors'];
    var difficultChoices = ['rock', 'paper', 'scissors', 'lizard', 'ufo'];
    var randomClassic = getRandomIndex(classicChoices);
    var randomDifficult = getRandomIndex(difficultChoices);
    if (this.name === 'human') {
      return this.choice = targetId;
    } else if (gameType === 'classic') {
      return this.choice = randomClassic;
    } else if (gameType === 'difficult') {
      return this.choice = randomDifficult
    }
  
  }
  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
  }

}
