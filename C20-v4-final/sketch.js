const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();

  world = engine.world;

  var options = {
    isStatic: true,
  }

  ball = Bodies.circle(100,100,20, options);
  World.add(world, ball);
    
}


function draw() {
  background(51);
  
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y,20);
  
}

