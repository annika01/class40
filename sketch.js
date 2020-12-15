var form,player;
var db,gameState=0;
var playerCount, game;
var allPlayers
var car1,car2,car3,car4,cars
var carimg1, carimg2, carimg3, carimg4, trackimg
var place, rank;


function preload( ) {
carimg1= loadImage("img/car1.png")
carimg2= loadImage("img/car2.png")
carimg3= loadImage("img/car3.png")
carimg4= loadImage("img/car4.png")
trackimg= loadImage("img/track.jpg")
}

function setup(){
db=firebase.database();
  createCanvas(displayWidth-20, displayHeight-30);
game=new Game()
 game.getState()
game.start()



}

function draw(){
  if(playerCount===4){
    game.updateState(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
  if (gameState===2){
    game.end()
  }
}

