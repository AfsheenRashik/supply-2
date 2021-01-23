var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box1Sprite;
var box2,box2Sprite;
var box3,box3prite
var myEngine, myWorld;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//box1 = createSprite(400,height-50,200,20);

	//box1 = new Box (400,200,200,20);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	myEngine= Engine.create();
	myWorld = myEngine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true}  );
	World.add(myWorld,packageBody);

	
	
	
	    box1Sprite= createSprite(width/2-100,610,20,100)
		box1Sprite.shapeColor = "red";

		box2Sprite= createSprite(width/2,650,200,20)
		box2Sprite.shapeColor = "red";


		box3Sprite= createSprite(width/2+100,610,20,100)
		box3Sprite.shapeColor = "red";


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(myWorld,ground);

   box1 = Bodies.rectangle(width/2, 670, 200, 20 , {isStatic:true} );
	World.add(myWorld,box1);

	box2 = Bodies.rectangle(width/2, 635, 200, 20 , {isStatic:true} );
	World.add(myWorld,box2);

	box3 = Bodies.rectangle(width/2+80, 610, 20, 100 , {isStatic:true} );
	World.add(myWorld,box3);


	Engine.run(myEngine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  //box1.display();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode   ===  DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody, false);
	
  }
  
  
}



