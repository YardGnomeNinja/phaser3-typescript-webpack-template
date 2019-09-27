import * as Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
    title: "Phaser 3 Typescript/Webpack Template",
    width: 800,
    height: 600,
    parent: "game"
};

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.onload = () => {
  var game = new Game(config);
};