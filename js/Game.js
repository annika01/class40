class Game{
constructor(){

}

getState(){
    db.ref("gameState").on("value", function(data){
        gameState=data.val()
    })
}

updateState(state){
    db.ref("/").update({
        gameState: state
    })
}
start() {
    if(gameState=== 0){
        player=new Player();
player.getCount()
        form=new Form()
 form.display()

    }
    car1=createSprite(100,200)
    car1.addImage(carimg1)
    car2=createSprite(300,200)
    car2.addImage(carimg2)
    car3=createSprite(500,200)
    car3.addImage(carimg3)
    car4=createSprite(700,200)
    car4.addImage(carimg4)
cars= [car1,car2,car3,car4]

}
play(){
form.hide()
Player.getPlayerInfo()
player.getCar()
if(allPlayers!==undefined){
    background("brown")
    image(trackimg, 0, -displayHeight*4, displayWidth, displayHeight*5)
    var index=0
    var x=175
    var y 

    for(var plr in allPlayers){
        index=index+1
        x=x+200
        y=displayHeight-allPlayers[plr].distance
        cars[index-1].x=x
        cars[index-1].y=y
        if(index===player.index){
                    fill("red")
                    ellipse(x,y,60,60)
            camera.position.x=displayWidth/2
            camera.position.y= cars[index-1].y
        }
    }
}

if(keyDown(UP_ARROW)&& player.index!==null){
    player.distance+=50
    player.update()
}
if (player.distance>4500){
    gameState=2
    player.rank++
    rank=player.rank;
    Player.updateCar(player.rank)
}

drawSprites() 

}

end(){
    console.log("game ended")
    place=createElement("h1"," your rank is "+rank)
    place.position(width/2, 100)
}

}