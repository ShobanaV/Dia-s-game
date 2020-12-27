//initiate Game STATEs
var PLAY = 1;
var END = 0;
var trexGameState = PLAY;
var trex, ground, invisibleGround, gameOver, restart, ObstaclesGroup, CloudsGroup  ;
var count;

var trexRunning, trexCollided;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var cloudImage, gameOverImage, restartImage, groundImage;


function preload() {
  trexRunning = loadAnimation("images/terx/trex1.png", "images/terx/trex3.png", "images/terx/trex4.png");
  trexCollided = loadAnimation("images/terx/trex_collided.png");
  obstacle1 = loadImage("images/terx/obstacle1.png");
  obstacle2 = loadImage("images/terx/obstacle2.png");
  obstacle3 = loadImage("images/terx/obstacle3.png");
   obstacle4 = loadImage("images/terx/obstacle4.png");
   obstacle5 = loadImage("images/terx/obstacle5.png");
   obstacle6 = loadImage("images/terx/obstacle6.png"); 
   cloudImage = loadImage("images/terx/cloud.png") ;
   gameOverImage = loadImage("images/terx/gameOver.png") ;
   groundImage = loadImage("images/terx/ground2.png");
   restartImage = loadImage("images/terx/restart.png") ;
   
}

    
function setupTrexGame() {       
  trex = createSprite(50, 150, 50, 50);
  trex.addAnimation("running", trexRunning);
  trex.addAnimation("collided", trexCollided);

  //set collision radius for the trex
  trex.setCollider("circle",0,0,30);

  //scale and position the trex
  trex.scale = 0.5;
  trex.x = 50;

  //create a ground sprite
  ground = createSprite(200,380,400,20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width /2;

  //invisible Ground to support Trex
  invisibleGround = createSprite(200,385,400,5);
  invisibleGround.visible = false;

  //create Obstacle and Cloud Groups
  ObstaclesGroup = new Group();
  CloudsGroup = new Group();

  //place gameOver and restart icon on the screen
  gameOver = createSprite(200,300);
  restart = createSprite(200,340);
  gameOver.addImage("gameOver", gameOverImage);
  gameOver.scale = 0.5;
  restart.addImage("restart", restartImage);
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;

  //score
  count = 0;

}

function drawTrexGame() {
  background("cyan");
    //display score
  text("Score: "+ count, 250, 100);  
  if(count === 30){
    hideTrex();
    trexGameState = END;
    textSize(20);
    text("Congratulations... ", 100, 200);
    text("You have completed the game", 200, 300)
  }
  console.log("here")
  if(trexGameState === PLAY){
    //move the ground
    ground.velocityX = -(6 + 3*count/100);
    //scoring
    count = count+ Math.round(getFrameRate()/60);
    
    if (count>0 && count%100 === 0){
      //playSound("checkPoint.mp3");
    }
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    console.log(trex.y)
     //jump when the space key is pressed
    if(keyDown("space") ){
      console.log("Pressing Space")
      trex.velocityY = -12 ;
      //playSound("jump.mp3");
    }
  
    //add gravity
    trex.velocityY = trex.velocityY + 0.8;
    
    //spawn the clouds
    spawnClouds();
  
    //spawn obstacles
    spawnObstacles();
    
    //End the game when trex is touching the obstacle
    if(ObstaclesGroup.isTouching(trex)){
      //playSound("jump.mp3");
      trexGameState = END;
      //playSound("die.mp3");
    }
  }
  
  else if(trexGameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    ObstaclesGroup.setVelocityXEach(0);
    CloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.changeAnimation("collided");
    
    //set lifetime of the game objects so that they are never destroyed
    ObstaclesGroup.setLifetimeEach(-1);
    CloudsGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart)) {
      reset();
    }
  }
  
    
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  drawSprites();
}

function reset(){
  trexGameState = PLAY; 
  gameOver.visible = false;
  restart.visible = false;
  ObstaclesGroup.destroyEach();
  CloudsGroup.destroyEach();
  trex.changeAnimation("running");
  count = 0;
  
}

function spawnObstacles() {
  console.log("obstacles")
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
    
    //generate random obstacles
    var rand = Math.round((1,6));
    switch(rand) {
      case 1 : obstacle.addImage("obstacle", obstacle1); break;
      case 2 : obstacle.addImage("obstacle", obstacle2); break;
      case 3 : obstacle.addImage("obstacle", obstacle3); break;
      case 4 : obstacle.addImage("obstacle", obstacle4); break;
      case 5 : obstacle.addImage("obstacle", obstacle5); break;
      case 6 : obstacle.addImage("obstacle", obstacle6); break;
    }
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}

function spawnClouds() {
  console.log("clouds")
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y = random(280,320);
    cloud.addImage("cloud", cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(cloud);
  }
  
}

function hideTrex() {
  trex.destroy();
  ground.destroy();
  invisibleGround.destroy();
  CloudsGroup.destroyEach();
}