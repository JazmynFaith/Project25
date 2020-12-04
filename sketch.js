
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

 
var ball,dustbin;
var engine,world;
var ground,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(200,200,40)
	ground = new Ground(width/2,height, width, 20);
	dustbin = new Dustbin(1200,680)
	Engine.run(engine);
  
}


function draw() {
  background(200,100,250);
  //Engine.update(engine)
  rectMode(CENTER);
 // console.log(ball.position.x,ball.position.y)
 ground.display()
 dustbin.display()
  ball.display()
  
  
  
 

  
  drawSprites();
	
  
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.position,{x: 85,y:-85})
	}
}


