var car1
var highway
var car1Image
var car2Image
var car3Image
var highwayImage 
var car2
var car3
var tire


function preload(){
  highwayImage= loadImage("highway image 2.jpg") 
  car1Image= loadImage("red playing car.png")
  car2Image= loadImage("light blue non playing car.png")
  car3Image= loadImage("yellow.png")

}
function setup() {
  createCanvas(displayWidth,displayHeight);
 highway= createSprite(displayWidth/2,displayHeight/2);
highway.addImage(highwayImage)
highway.velocityX= -2
highway.scale= 6.0
  car1= createSprite(100,200,20,20)
  car1.scale= 0.1
  car1.addImage(car1Image)
  



  
  
  
  
}

function draw() {
  background(255);  

if (keyDown(UP_ARROW)){
  car1.y= car1.y-8
}

 if (keyDown(DOWN_ARROW)){
   car1.y= car1.y+8
 }

 
  
  if(highway.x< 0 ){
    highway.x = highway.width/2 
  }
  obstacles();
  drawSprites();
}

function obstacles(){
  if(frameCount % 400 === 0){
    car2= createSprite(300,250,20,20)
    car2.y = Math.round(random(100,400))
    
    var greencar= Math.round(random(1,2))
    switch(greencar){
      case 1:car2.addImage(car2Image);
      break;
      case 2:car2.addImage(car3Image)
      break;
    }
    
    
    car2.scale= 0.3
    car2.velocityX=1
  }

  
}
