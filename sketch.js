var balloon;
var backgroundImage;
var balloonImage;
var database;

function preload(){
  backgroundImage  = loadImage("Hot Air Ballon-01.png");
  balloonImage = loadImage("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air ballon-04.png");
}
function setup() {
  createCanvas(1000,700);
  //database = firebase.database();

 balloon = createSprite(100,500, 5, 5);
  balloon.addImage(balloonImage);
  balloon.scale = 0.9;
console.log(balloon.x);
console.log(balloon.y);
}

function draw() {
  
  background(backgroundImage); 
  if (keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
  }
  else if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }
  else if (keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
  }
  balloon.display();
  drawSprites();
}