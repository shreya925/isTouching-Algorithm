var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(100, 300, 20, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect = createSprite(200, 100, 40, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
}

function draw() {
  background("black");  
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}