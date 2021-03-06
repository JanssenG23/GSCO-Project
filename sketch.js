var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  
  speed=random(25,120);
  weight=random(300,1700);

  wall=createSprite(1200,200,60,height/2);
  wall.shapeColor = "grey";
  
  car=createSprite(50,200,50,50);
  car.shapeColor = "white";
}

function draw() {
  background(0,0,0);  
  car.velocityX = speed;

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180)
  {
    car.shapeColor = "red"
  }  
  if(deformation<180)
  {
    car.shapeColor = "yellow"
  }  
  if(deformation<100)
  {
    car.shapeColor = "green"
  }  

  }

  drawSprites();
}