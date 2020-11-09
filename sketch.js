function setup() {
  createCanvas(1000,600);
  FixedRect = createSprite(400, 100, 50, 50);
  FixedRect.velocityY = 3
  MovingRect = createSprite(400,200,50,50);
  MovingRect.velocityY = -3
  Rect3 = createSprite(200,200,50,50)
  Rect4 = createSprite(800,200,50,50)
}

function draw() {
  background(255,255,255);  
FixedRect.shapeColor = "green";
MovingRect.shapeColor = "green";
Rect3.shapeColor="green";
Rect4.shapeColor="green";

bounceOff(FixedRect,MovingRect);
if(isTouching(Rect3,MovingRect)){
  textSize(36)
text("Touching",300,300)
}
else{
  textSize(36)
  text("Not Touching",300,300)
}

  drawSprites();
}
