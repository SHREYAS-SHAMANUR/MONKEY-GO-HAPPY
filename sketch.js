
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var PLAY=1;
var END=0;
var GameState=PLAY;
var SurvivalTime=0;
var Score=0;

function preload(){
  banana_Image=loadImage("banana.png");
  obstacleImage=loadImage("obstacle.png");
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  
}



function setup() {
 
  
  
  monkey=createSprite(30,300,10,10);
  monkey.addAnimation("MONKEY_RUNNING", monkey_running);
  monkey.scale=0.1;
  
   ground=createSprite(300,338,600,20);
  
   ObstaclesGroup= new Group();
   BananaGroup= new Group();
  
  SurvivalTime=0;
  Score=0;
}



function draw() {
   createCanvas(600,600);
   background("white");
  if(GameState===PLAY){
    
    SpawnBanana();
    SpawnObstacles();
  
    if(keyDown("space")&&monkey.y>=250){
   monkey.velocityY=-10;      
 }
 
    monkey.velocityY = monkey.velocityY+0.8
    
    
    if(BananaGroup.isTouching(monkey)){
      BananaGroup.destroyEach(); 
    Score=Score+2}
            
      if(ObstaclesGroup.isTouching(monkey)){
    GameState=END;
    
    ObstaclesGroup.destroyEach();
    BananaGroup.destroyEach();
    
    monkey.velocityY=0;  
    monkey.collide(ground);
  Score=0;}
    
    
  
  }
  
   
    
       
    monkey.collide(ground);
        
      
        
      
  
    
    

  
  
  
 
  
  drawSprites();
  SurvivalTime=Math.ceil(frameCount/frameRate())
    text("SURVIVAL TIME : "+SurvivalTime,300,50);
  
  text("SCORE : "+Score,500,50);
}


function SpawnBanana(){
  if(frameCount%100===0){
    banana=createSprite(300,300,10,10);
    banana.x=Math.round(random(550,600))
    banana.y=Math.round(random(180,290));
    banana.velocityX=-6;
    banana.addImage(bananaImage);
    banana.lifetime=100;
    BananaGroup.add(banana);
    banana.scale=0.1;
  }
}

function SpawnObstacles(){
  if(frameCount%100===50){
    obstacle=createSprite(340,310,10,10);
    obstacle.x=Math.round(random(550,600))
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-6;
    obstacle.lifetime=100;
    ObstaclesGroup.add(obstacle);
  }
}

