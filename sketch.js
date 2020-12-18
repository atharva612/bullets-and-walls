var FixedRect;
var MovingRect;


function setup() {
  createCanvas(800,400);

  FixedRect=createSprite(400,200,50,80);
  FixedRect.shapecolor="red";
  FixedRect.debug=true;
  MovingRect=createSprite(800,800,80,50);
 MovingRect.shapecolor="orange";
 MovingRect.debug=true;
}

function draw() {
  background(255,255,255);
  MovingRect.x=Mouse.x;
MovingRect.y=Mouse.y;

  

  drawSprites();
}