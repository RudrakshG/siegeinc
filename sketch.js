const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,ground2;
var platform;
var platform2;
var box1,box2,box3,box4;
var box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20;
var box21,box22,box23,box24;
var Polygon_img;
var slingshot;
function preload(){
  Polygon_img=loadImage("polygon.jpg");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  box1 = new Box(300,275,30,40);
	box2 = new Box(330,275,30,40);
	box3 = new Box(360,275,30,40);
	box4 = new Box(390,275,30,40);
	box5 = new Box(420,275,30,40);
	box6 = new Box(450,275,30,40);
	box7 = new Box(480,275,30,40);

	box8 = new Box(330,235,30,40);
	box9 = new Box(360,235,30,40);
	box10 = new Box(390,235,30,40);
	box11 = new Box(420,235,30,40);
	box12 = new Box(450,235,30,40);
  
	box13 = new Box(360,195,30,40);
	box14 = new Box(390,195,30,40);
	box15 = new Box(420,195,30,40);
  
	box16 = new Box(390,155,30,40);

	box17 = new Box(630,165,30,40);
	box18 = new Box(660,165,30,40);
	box19 = new Box(690,165,30,40);
	box20 = new Box(720,165,30,40);
	box21 = new Box(750,165,30,40);	

	box22 = new Box(660,125,30,40);
	box23 = new Box(690,125,30,40);
	box24 = new Box(720,125,30,40);
  
  Polygon=Bodies.circle(60,200,50);
  World.add(world,Polygon);
	box25 = new Box(690,85,30,40);
 ground=new Ground(500,400,250,40);
 ground2=new Ground(700,220,200,20);
 slingshot=new SlingShot(this.Polygon,{x:100, y:200});
}

function draw() {
  background(255,255,255); 
  box1.display(); 
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box18.display();
  box12.display();
 box10.display();
 
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box9.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  imageMode(CENTER)
  image(Polygon_img,Polygon,200,200,40,40);
  ground.display();
  ground2.display();
  slingshot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.Polygon,{x:mouseX ,y: mouseY});
}
//mouse released function.
function mouseReleased(){
  //fly function from slingshot class.
  slingshot.fly();
}
