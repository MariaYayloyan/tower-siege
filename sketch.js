const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;

var block10,block12,block13,block14,block15,block16;

var polygon,slingShot;

var ballIMG
function preload(){
  ballIMG = loadImage("ball.png");
}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300,350,230,15);
  
  block1 = new Box(220,325,30,40);
  block2 = new Box(250,325,30,40);
  block3 = new Box(270,325,30,40);
  block4 = new Box(300,325,30,40);
  block5 = new Box(330,325,30,40);
  block6 = new Box(360,325,30,40);
  block7 = new Box(390,325,30,40);
  block8 = new Box(245,285,30,40);
  block9 = new Box(275,285,30,40);
  block10 = new Box(305,285,30,40);
  block11 = new Box(335,285,30,40);
  block12 = new Box(365,285,30,40);
  block13 = new Box(275,245,30,40);
  block14 = new Box(305,245,30,40);
  block15 = new Box(335,245,30,40);
  block16 = new Box(305,205,30,40);

  //polygon holder with slings
  var options = {
    density: 1.0
  }



  polygon = Bodies.circle(50,200,20,options);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();


  fill("white");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("blue");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("pink");
  block13.display();
  block14.display();
  block15.display();
  fill("yellow");
  block16.display();

  imageMode(CENTER)
  image(ballIMG,polygon.position.x,polygon.position.y,50,50);


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
