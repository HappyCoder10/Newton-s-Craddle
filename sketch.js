
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(300,200,50,50);
	bobObject2 = new Bob(400,200,50,50);
	bobObject3 = new Bob (500,200,50,50);
	bobObject4 = new Bob (600,200,50,50);
	bobObject5 = new Bob (700,200,50,50);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}



