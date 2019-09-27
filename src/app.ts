import * as Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    title: "Phaser 3 Typescript/Webpack Template",
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

function preload ()
{
    console.log('preload');
}

function create ()
{
    console.log('create');
}

function update ()
{
    //console.log('update');
}

window.onload = () => {
  let game = new Phaser.Game(config);
};