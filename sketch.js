
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(500, 200, 500, 70);
	bob1 = new Bob(500, 400, 40);
	bob2 = new Bob(540, 400, 40);
	bob3 = new Bob(580, 400, 40);
	bob4 = new Bob(620, 400, 40);
	bob5 = new Bob(660, 400, 40);
	rope1 = new Chain(bob1.body, roof1.body, 80, 2);
	rope2 = new Chain(bob2.body, roof1.body, 80, 2);
	rope3 = new Chain(bob3.body, roof1.body, 80, 2);
	rope4 = new Chain(bob4.body, roof1.body, 80, 2);
	rope5 = new Chain(bob5.body, roof1.body, 80, 2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
}
