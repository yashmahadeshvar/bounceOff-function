var fixedRect, movingRect;

var ob1, ob2, ob3;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue";
  fixedRect.debug=true;
  fixedRect.velocityY=2;

  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug=true;
  movingRect.velocityY=-2;

  ob1 = createSprite(100, 400 , 30 , 30);
  ob1.shapeColor="green";

  ob2 = createSprite(500, 400 , 30 , 30);
  ob2.shapeColor="white";

  ob3 = createSprite(800, 400 , 30 , 30);
  ob3.shapeColor="purple";
}

function draw() {
  background(0);  

  bounceOff(movingRect,fixedRect);

  drawSprites();
}

function bounceOff(object1,object2){

  if(object1.x - object2.x < object2.width/2 + object1.width/2  &&
    object2.x - object1.x < object2.width/2 + object1.width/2 ){

      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }

    if(object1.y - object2.y < object2.height/2 + object1.height/2  &&
    object2.y - object1.y < object2.height/2 + object1.height/2){
   
      object1.velocityY=object1.velocityY*(-1);
      object2.velocityY=object2.velocityY*(-1);

  }

}