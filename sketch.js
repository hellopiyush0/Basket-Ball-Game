const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

var score = 0;

function preload(){

  hookimg = loadImage("hook.png");

  win = loadSound("win.mp3");

}

function setup(){

  createCanvas(1366, 625);

  engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 625, 1366, 20);

  right = new Ground(1366, 625/2, 20, 1366);
  left = new Ground(0, 625/2, 20, 1366);

  ball = new Ball(200, 200);

  hook1 = new Hook(1235, 140);
  hook2 = new Hook(1325, 140);
  hook3 = new Hook(1310, 190);
  hook4 = new Hook(1250, 190);

}

function draw(){

  background("black");

  Engine.update(engine);

  textSize(20);
  fill("red")
  text("Score: "+ score,30,50);

  ball.display();

  hook1.display();
  hook2.display();
  hook3.display();
  hook4.display();

  image(hookimg, 1230, 100, 130, 130);

  ground.display();
  right.display();
  left.display();

  if(ball.body.position.x>1235 && ball.body.position.x<1325 && ball.body.position.y>170 && ball.body.position.y<173){

    score = score + 1;
    win.play();

  }

  //textSize(20);
  //fill("red")
  //text(mouseX + ',' + mouseY, 400 , 45);

  drawSprites();

}

function keyPressed(){

	if(keyCode === UP_ARROW){

	  Matter.Body.applyForce(ball.body, ball.body.position, {	x : 70, y : -103 });

	}
  
}