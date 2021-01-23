class Box {

  constructor(x,y,width,height){
   var    boxOptions={
     isStatic:true
   }

   
  this.body=Bodies.rectangle(x,y,width,height,boxOptions);
  this.width = width;
  this.height = height;
  
  World.add(myWorld,this.body);
  
  
  
  }
  
  display(){
  
  var pos = this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  rectMode(CENTER);
  strokeWeight(4);
  stroke("green");
  fill("yellow");
  
  rect(0,0,this.width,this.height);
  pop();
  
  
  
  }
  
  
  }