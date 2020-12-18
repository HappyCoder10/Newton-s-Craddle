
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
//var roof;
var bobDiameter = 20;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  roof = new Roof (500,-350,400,20);
  rope1 = new rope(bobObject1,roof,bobDiameter*1,0);
  rope2 = new rope(bobObject2.body,roof.body,bobDiameter*2,0);
  rope3 = new rope(bobObject3.body,roof.body,bobDiameter*3,0);
  rope4 = new rope(bobObject4.body,roof.body,bobDiameter*4,0);
  rope5 = new rope(bobObject5.body,roof.body,bobDiameter*5,0);
  bobObject1 = new Bob(300,400,50,50);
	bobObject2 = new Bob(400,400,50,50);
	bobObject3 = new Bob (500,400,50,50);
	bobObject4 = new Bob (600,400,50,50);
  bobObject5 = new Bob (700,400,50,50);

  
}


function draw() {
  rectMode(CENTER);
  background(90);

  Engine.update(engine);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}
function keyPressed() {
  
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:100,y:-100});

  }
}



