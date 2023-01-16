class Player {
  constructor(playerName, token) {
    this.name = playerName;
    this.token = token;
    this.wins = 0;
    this.choice = '';

  }
  takeTurn(gameType, targetId) {
    var classicChoices = ['rock', 'paper', 'scissors'];
    var difficultChoices = ['rock', 'paper', 'scissors', 'lizard', 'ufo'];
    var randomClassic = Math.floor(Math.random(classicChoices) * 3);
    var randomDifficult = Math.floor(Math.random(difficultChoices) * 5);
    if (this.name === 'human') {
      return this.choice = targetId;
    } else if (gameType === 'classic') {
      return this.choice = classicChoices[randomClassic];
    } else if (gameType === 'difficult') {
      return this.choice = difficultChoices[randomDifficult]
    }
  
  }
  // getRandomIndex(array) {
  //   return Math.floor(Math.random() * array.length)
  // }

}
