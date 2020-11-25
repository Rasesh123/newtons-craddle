
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(250,300,25,25);
	bobObject2 = new Bob(300,300,25,25);
	bobObject3 = new Bob(350,300,25,25);
	bobObject4 = new Bob(400,300,25,25);
	bobObject5 = new Bob(450,300,25,25);
	roof = new Roof(350,100,275,10);
	rope1 = new Rope(bobObject1.body,roof.body);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
 
  
  drawSprites();
 
}



