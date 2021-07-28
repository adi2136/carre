var bg,car,ci
var path,pathImg
var obs,obsImg
var fu,fi
var score=100
var wall1,wall2
var g,gi
var gameState
var s
function preload(){
bg=loadImage("roadImage.jpg")
ci=loadImage("car.png")
obsImg=loadImage("barrier.png")
fi=loadImage("can.png")
gi=loadImage("game.png")
s=loadSound("sound.mp3")
}
function setup(){
 createCanvas(windowWidth,windowHeight)
 
 path=createSprite(800,500,1000,1000); 
 path.addImage(bg);
 path.velocityY=6
 path.scale=1.5
 car=createSprite(760,600,100,50)
 wall1=createSprite(250,600,10,2000)
 wall1.visible=false
 g=createSprite(800,300,10,2000)
 g.addImage(gi)
 g.scale=1.5
 g.visible=false
 wall2=createSprite(1350,600,10,2000)
 wall2.visible=false
 car.addImage(ci)
 car.scale=0.6
 car.setCollider("rectangle",0,0,200,500);
 score=100
 fu=new Group()
 obs=new Group()
}
function draw(){
  
    background("black")

   
  
   obs.setLifeTime=1
 
   if(score===0){
    gameState="END" 
 }
    if(keyIsDown(LEFT_ARROW)){
        car.x=car.x-8
    }
    if(keyIsDown(RIGHT_ARROW)){
        car.x=car.x+8
    }
    if(path.y > 1000 ){
        path.y= path.height/4; 
       }
   if(frameCount%3===0){
       score=score-1
   }
  if(frameCount%70===0){
      obs=createSprite(random(350,1250),-10,100,100)
      obs.addImage(obsImg)
      obs.scale=0.3
      obs.velocityY=6
  }
  if(frameCount%100===0){
    fu=createSprite(random(350,1250),-10,100,100)
    fu.addImage(fi)
    fu.scale=0.2
    fu.velocityY=6
}
if(fu.isTouching(car)){
  fu.destroy()
  score=100

}

 car.bounceOff(wall1)
 car.bounceOff(wall2)

if(obs.isTouching(car)){
    obs.destroy()
    gameState="END"
  
  }
    drawSprites()
    textSize(50)
    fill("black")
    text("fuel  :"+score,500,50)
if(gameState==="END"){
        car.visible=false
        fu.visible=false
        obs.visible=false
        fu.destroy()
        obs.destroy()
        path.velocityY=0
        score=0
        g.visible=true
        s.pause()
    }
}