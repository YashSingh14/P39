var canvas, backgroundImage;
var car1img, car2img, car3img, track, ground;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, startLine, finish1, finish2, finishImg;

function preload(){
  track = loadImage("images/track.png")
  car1img = loadImage("images/car1.png")
  car2img = loadImage("images/car2.png")
  car3img = loadImage("images/car3.png")
  ground = loadImage("images/ground.png")
  start = loadImage("images/start.png")
  finishImg = loadImage("images/Finish.png")
  bg = loadImage("images/back.jpeg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  startLine = createSprite(displayWidth/3, displayHeight-310);
  finish1 = createSprite(displayWidth-1250, -2970);
  finish2 = createSprite(displayWidth-150, -2970)
  finish1.addImage(finishImg)
  finish2.addImage(finishImg)
  finish2.scale = 0.28
  finish1.scale = 0.28
  startLine.addImage(start)
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
background(bg)
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
   game.end()
  }
}
