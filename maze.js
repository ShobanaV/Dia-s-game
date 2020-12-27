var wall1 
var wall2
var wall3 
var wall4
var wall5 
var wall6 
var wall7 
var wall8
var wall9 
var wall10 
//var ibwall11 = createSprite(162,250,25,2);
var wall12 
var wall13 
var wall14 
var wall15 
var wall16
var wall17 
var wall18
var wall19 
var wall20 
var wall21 
var wall22 
var wall23 
var wall24 
var wall25 
var wall26 
var wall27 
var wall28 
var wall29 
var wall30 
var wall31 
var wall32 
var wall33 
var wall34 
var wall35 
var wall36 
var wall37 
var wall38 
var wall39 
var wall40
var wall41
var wall42
var ts1

var gameState = 1;

var trexRunning, trex;
var setUpTrex = true;
var ts1;




function setup() {
    if(gameState === 1) {
        createCanvas(400,400);
    wall1 = createSprite(200,2,400,5);
    wall2 = createSprite(2,200,5,400);
    wall3 = createSprite(398,200,5,400);
    wall4 = createSprite(100,398,200,5);
    wall5 = createSprite(330,398,200,5);
    wall6 = createSprite(200,340,2,230);
    wall7 = createSprite(212,225,25,5);
    wall8 = createSprite(225,200,5,50);
    
    wall9 = createSprite(200,175,50,5);
    wall10 = createSprite(175,200,5,50);
    // ibwall11 = createSprite(162,250,25,2);
    wall12 = createSprite(230,350,2,190);
    wall13 = createSprite(285,200,125,2);
    wall14 = createSprite(115,200,125,2);
    wall15 = createSprite(350,200,2,300);
    wall16 = createSprite(50,200,2,300);
    wall17 = createSprite(310,350,80,2);
    wall18 = createSprite(110,350,120,2);
    wall19 = createSprite(110,50,120,2);
    wall20 = createSprite(290,50,120,2);
    wall21 = createSprite(200,65,2,150);
    wall22 = createSprite(175,140,50,2);
    wall23 = createSprite(225,140,50,2);
    wall24 = createSprite(240,256,20,2);
    wall25 = createSprite(250,242,2,26);
    wall26 = createSprite(250,155,2,30);
    wall27 = createSprite(175,256,50,2);
    wall28 = createSprite(150,242,2,26);
    wall29 = createSprite(150,155,2,30);
    wall30 = createSprite(200,80,250,2);
    wall31 = createSprite(325,130,2,100);
    wall32 = createSprite(75,130,2,100);
    wall33 = createSprite(280,200,2,180);
    wall34 = createSprite(120,200,2,180);
    wall35 = createSprite(255,110,50,2);
    wall36 = createSprite(145,110,50,2);
    wall37 = createSprite(145,290,50,2);
    wall38 = createSprite(270,290,20,2);
    wall39 = createSprite(135,320,130,2);
    wall40 = createSprite(75,270,2,100);
    wall41 = createSprite(277,320,96,2);
    wall42 = createSprite(325,270,2,100);
    pc=createSprite(210,395,10,10);
    tresaure=createSprite(200,200,10,10);
    }

    ts1=new Screen();
  }
  
function draw(){ 
    background("white");
    if(gameState === 1) {
       
    
        
        if(keyDown(UP_ARROW)){
            pc.y=pc.y-5
        }
        if(keyDown(DOWN_ARROW)){
            pc.y=pc.y+5
        }
        if(keyDown(LEFT_ARROW)){
            pc.x=pc.x-5
        }
        if(keyDown(RIGHT_ARROW)){
            pc.x=pc.x+5
        }
        if(pc.isTouching(tresaure)){
            ts1.show();           
            hide();
            ts1.display()
            
            }

    pc.collide(wall1);
    pc.collide(wall2);
    pc.collide(wall3);
    pc.collide(wall4);
    pc.collide(wall5);
    pc.collide(wall6);
    pc.collide(wall7);
    pc.collide(wall8);
    pc.collide(wall9);
    pc.collide(wall10);
    //pc.collide(wall11);
    pc.collide(wall12);
    pc.collide(wall13);
    pc.collide(wall14);
    pc.collide(wall15);
    pc.collide(wall16);
    pc.collide(wall17);
    pc.collide(wall18);
    pc.collide(wall19);
    pc.collide(wall20);
    pc.collide(wall21);
    pc.collide(wall22);
    pc.collide(wall23);
    pc.collide(wall24);
    pc.collide(wall25);
    pc.collide(wall26);
    pc.collide(wall27);
    pc.collide(wall28);
    pc.collide(wall29);
    pc.collide(wall30);
    pc.collide(wall31);
    pc.collide(wall33);
    pc.collide(wall34);
    pc.collide(wall35);
    pc.collide(wall36);
    pc.collide(wall37);
    pc.collide(wall38);
    pc.collide(wall39);
    pc.collide(wall32);
    pc.collide(wall40);
    pc.collide(wall41);
    pc.collide(wall42);

    drawSprites();
        }

        if(gameState === 2 && setUpTrex) {
            setupTrexGame();
            setUpTrex = false;
        } 
        console.log("Game State : " + gameState)
        if(gameState === 2) {
            
            drawTrexGame();
        }

}


function hide()
{
    pc.visible=false
    tresaure.visible=false
     wall1.visible=false 
wall2.visible=false
 wall3.visible=false
 wall4.visible=false
 wall5.visible=false
 wall6.visible=false
 wall7.visible=false
 wall8.visible=false
 wall9.visible=false 
 wall10.visible=false 
//var ibwall11 = createSprite(162,250,25,2);
 wall12.visible=false 
 wall13.visible=false 
 wall14.visible=false 
 wall15.visible=false 
 wall16.visible=false
 wall17.visible=false 
 wall18.visible=false
 wall19.visible=false 
 wall20.visible=false 
 wall21.visible=false 
wall22.visible=false 
 wall23.visible=false 
 wall24.visible=false 
 wall25.visible=false 
 wall26.visible=false 
 wall27.visible=false 
 wall28.visible=false 
 wall29.visible=false 
 wall30.visible=false 
 wall31.visible=false 
 wall32.visible=false 
 wall33.visible=false 
 wall34.visible=false 
 wall35.visible=false 
 wall36.visible=false 
 wall37.visible=false 
 wall38.visible=false 
  wall39.visible=false
  wall40.visible=false
  wall41.visible=false
  wall42.visible=false
    
}