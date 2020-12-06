var pc
var tresaure
var ts1
var gameState = 1;

function setup() {
  createCanvas(400,400);
  pc=createSprite(400, 200, 50, 50);
  tresaure=createSprite(200, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  console.log(gameState);

  if(gameState === 1) {
    pc.x=mouseX
    pc.y=mouseY
    if(pc.isTouching(tresaure)){
      ts1=new Screen();
      pc.visible=false
      tresaure.visible=false
      ts1.display()

    }
  } else if(gameState === 2) {

  }


  

  drawSprites();
}