const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rectangle1;
var Stone;
var rubber;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,600,1200,20)
    hammer = new Hammer(10,100);
  Stone= new stone(600,200);
  
rectangle1=new Rectangle1(200,200)
rubber=new Rubber(900,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
rubber.display();

    plane.display();
    hammer.display();
    Stone.display();
 rectangle1.display();
}