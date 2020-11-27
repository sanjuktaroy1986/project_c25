
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine,myworld;
var cp,ground;
var db;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

    myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
	cp=new Paper(100,100,70);
	ground=new Ground(600,380,1200,20);
	//dbl=new Ground(900,320,20,100);
	//dbr=new Ground(1100,320,20,100);
	db=new Dustbin(1000,360)




	Engine.run(myengine);
  
}


function draw() {
  
  background("lightblue");
  
  
  cp.display();

  fill("yellow")
  ground.display();

  fill("white")
  noStroke();
  //dbl.display();
  //dbr.display();
  db.display();

 // cp.display();

 if(keyWentDown("UP_ARROW")){

  Body.applyForce(cp.body, cp.body.position, {x:120,y:-100});

 }
}



