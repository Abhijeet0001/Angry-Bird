const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , Pig1 , Log1 , box3,box4;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(220,380,50,50);
    box2 = new Box(290,380,50,50);
    Pig1 = new Pig(250,380)
    Log1 = new Log(250,370,200,PI/2)
    ground = new Ground(400,height,800,20)
    box3 = new Box(220,360,50,50)
    box4 = new Box(280,360,50,50)
    Pig2 = new Pig(250,360)
    Log2 = new Log(250,350,200,PI/2)
    box5 = new Box(250,340,50,50)
    Log3 = new Log(224,340,90,PI/7)
    Log4 = new Log(275,340,90,-PI/7)
    Bird = new Bird(100,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    Pig1.display();
    Log1.display();
    box3.display();
    box4.display();
    Pig2.display();
    Log2.display();
    box5.display();
    Log3.display();
    Log4.display();
    Bird.display();
}