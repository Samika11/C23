const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box=new Box(100,100,20,50)
    box2=new Box2(200,100,30,10)
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display()
    box2.display()
}