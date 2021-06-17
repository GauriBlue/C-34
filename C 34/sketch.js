const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, world;
var box;
var box1;
var box2;
var ball;
var string;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    ground= new Ground (400,380,800,20);
    box=new Box(500,320,70,50);
    box1=new Box(500,300,70,50);
    box2=new Box(500,250,70,50);
    box3=new Box(500,230,70,50);
    box4=new Box(500,180,70,50);
    box5=new Box(500,130,70,50);
    ball=new Ball(300,150,100);
    string= new String(ball.body,{x:300,y:50});



}

function draw() {
  background("lightblue");  
  Engine.update(engine);
  ground.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ball.display();
  string.display();

}

function mouseDragged(){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }