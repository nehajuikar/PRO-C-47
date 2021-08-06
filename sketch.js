var thiefImg , manImg ,  cone , box , backGroundImg ;


function preload(){
  backGroundImg = loadImage("roadImg.jpg");
  thiefImg = loadImage("man.png");
  coneImg = loadImage("cone2.png");
  boxImg = loadImage("Box1.png");
  manImg = loadImage("men.png");
}

function setup() {
  createCanvas(400,600);
  bg = createSprite(200,300,400,600);
  bg.addImage(backGroundImg);
  bg.scale = 1.3;

  thief = createSprite(200, 250, 0, 0);
  thief.addImage(thiefImg);
  thief.scale = 0.1;

  coneGroups = createGroup();
  boxGroups = createGroup();

  man = createSprite(200, 450, 0, 50);
  man.addImage(manImg);
  man.scale = 0.3;

}

function draw() {
  background(0); 

  bg.velocityY = 1.5;
  if(bg.y>300 ){
    bg.y = 270;
  }
  spawnCone();
  spawnBox();

  drawSprites();
}

function spawnCone(){
  if(frameCount % 100 === 0){
    cone = createSprite(0,-10,50,50);
    cone.x = Math.round(random(10,350));
    coneGroups.add(cone);
    cone.addImage(coneImg);
    cone.scale = 0.1;
    cone.velocityY = 2;
  }
}

function spawnBox(){
  if(frameCount % 160 === 0){
    box = createSprite(100,80,20,20);
    box.x = Math.round(random(50,300));
    box.addImage(boxImg);
    box.scale = 0.2;
    box.velocityY = 3;
  }
}