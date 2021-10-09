var path
var runner

function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  RunnerImgs = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200)
  path.addImage(pathImg)
  path.velocityY = 4
  path.scale = 1.2

  runner = createSprite(180, 340, 30, 30)
  runner.addAnimation("running", RunnerImgs)
  runner.scale = 0.08

  left_boundary = createSprite(0, 0, 100, 800)
  left_boundary.visible = false;

  right_boundary = createSprite(410, 0, 100, 800)
  right_boundary.visible = false;
}

function draw() {
  background(0);

  
  if (path.y > 400){
    path.y = height/2
  }

runner.x = World.mouseX
runner.collide(left_boundary)
runner.collide(right_boundary)
drawSprites()
}
