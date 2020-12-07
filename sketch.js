var trex, start 
var clouds, cloudsGroup
var lives
var h1, h2, h3, heart, heartless
var score
var gameState = 0
var play, bg
var bgImg
function preload(){
    heart= loadImage("ASSETS/red.jpeg");
    heartless = loadImage("ASSETS/black.jpg");
    bgImg = loadImage("ASSETS/ff.png");
}
function setup(){
    createCanvas(1255, 600);
    bg = createSprite(650,450);
    bg.addImage("bg", bgImg);
    bg.scale = 5;
    trex = createSprite(100, 80, 10, 25);
    play = createSprite(50,50);
    trex.visible = false;
    start = createSprite(100, 100, 50, 10);
    start.visible = false
    cloudsGroup = new Group();
    lives = 3
    score = 0;
    h1 = createSprite(1000,50);
    h1.addImage("h",heart);
    h1.scale = 0.2;
    h2 = createSprite(1050,50);
    h2.addImage("h",heart);
    h2.scale = 0.2;
    h3 = createSprite(1100,50);
    h3.addImage("h",heart);
    h3.scale = 0.2;
    h1.visible = false;
    h2.visible = false;
    h3.visible = false;
}
function draw(){
    background(0, 200,20);
     if(gameState===0){
      if(mousePressedOver(play)){
       gameState = 1;
       play.visible = false;
      }
     }
     if(gameState===1){
         trex.visible = true;
         h1.visible = true;
         h2.visible = true;
         h3.visible = true;
         start.visible = true;


        var r = 0;
        if(trex.isTouching(cloudsGroup)){
            trex.velocityX = -4.5;
           r +=Math.round(getFrameRate()/58.9);
           if(r>=0&&r<=1){
               score+=r
           }
        }
        
        if(keyDown("space")&& (trex.collide(cloudsGroup)||trex.collide(start))){
            trex.velocityY = -10;
            trex.velocityX = 4.5;
        }
        trex.velocityY = trex.velocityY + 0.7;
    trex.collide(start);
    trex.collide(cloudsGroup);
    createClouds();
    if(trex.y>600 || trex.x< 0 || trex.x>1255){
        lives --
                
        trex.x = 100;
        trex.y = 85;
        trex.collide(start);
        trex.velocityX = 0;
        if(lives===2){
         h3.addImage("h",heartless)
         h3.scale = 0.2;
        }
        if(lives===1){
            h2.addImage("h",heartless)
            h2.scale = 0.2;
    }  
    if(lives===0){
        h1.addImage("h",heartless)
        h1.scale = 0.2;
}  
} 
textSize(22);
    text("score:"+score,1155,50);  
     }


     if(gameState===2){
        textSize(22);
        text("score:"+score,1155,50);
        trex.visible = false;
        cloudsGroup.destroyEach();
        
    }

   

  
    
    
   
    
    
    drawSprites();
    
}
function createClouds(){
    if(frameCount%75===0){
    var r = Math.round (random(180, 275));
    clouds = createSprite(1260, r, 70, 30);
    cloudsGroup.add(clouds);
    clouds.velocityX = -4.5;}
    
}





    


