
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bgi,boy,BOY
var ground;
var tree,treeI
var stone
var sling
var m1,m2,m3,m4,m5;
function preload()
{
	bgi=loadImage("bgi.jpg")
	BOY=loadImage("boy.png")
	treeI=loadImage("tree.png")
}

function setup() {
	createCanvas(1137,700 );

	tree=createSprite(width-300,height-340,50,50)
	tree.addImage(treeI)
	tree.scale=0.535


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	ground=new Ground(width/2,height,width,20)
	boy=createSprite(200,height-95,50,50)
	boy.addImage(BOY)
	boy.scale=0.135
	stone=new Stone(130,height-180,30)
	sling=new Sling(stone.body,{x:130,y:520})
	m1=new mangoe(width-300,height-440,30)
	m2=new mangoe(width-300,height-500,30)
	m3=new mangoe(width-200,height-500,30)
	m4=new mangoe(width-400,height-500,30)
	m5=new mangoe(width-300,height-400,30)

	
	Engine.run(engine);

    
}


function draw() {
  
  background(bgi);
  Engine.update(engine)
  drawSprites(); 
  ground.display();
  stone.display();
  sling.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  detectCollision(stone,m1)
  detectCollision(stone,m2)
  detectCollision(stone,m3)
  detectCollision(stone,m4)
  detectCollision(stone,m5)


}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	sling.fly()
}
function keyPressed(){
	if(keyCode === 32 ){
	    Matter.Body.setPosition(stone.body,{x:130,y:height-180})
	    sling.attach(stone.body)
	}
}
function detectCollision(object1,object2){
	
	object1BodyPosition=object1.body.position;
	object2BodyPosition=object2.body.position;
    var distance=dist(object1BodyPosition.x,object1BodyPosition.y,object2BodyPosition.x,object2BodyPosition.y)
    if(distance<=object1.r+object2.r){
		Matter.Body.setStatic(object2.body,false)
	}
	

}
