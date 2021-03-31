
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/*function preload(){

	//paperImage = loadImage("paper.png");
}
*/

function setup() {
	createCanvas(1600, 600);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200,80,80);

	dustbin1 = new Dustbin(width-300,height-20,200,20);
	dustbin2 = new Dustbin(width-390,height-100,20,150);
	dustbin3 = new Dustbin(width-210,height-100,20,150);

	ground = new Ground(width/2,height,width,10);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(180);

	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();
  	keyPressed();
 
}

function keyPressed(){

if(keyCode == UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:7,y:-25});
}
if(keyCode == DOWN_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:10,y:25});
}
}

