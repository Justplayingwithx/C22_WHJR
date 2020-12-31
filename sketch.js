const engine = Matter.Engine
const world = Matter.World
const bodies = Matter.Bodies

var myengine
var myworld 

var ground;
var ball;

function setup() {
  createCanvas(600,600);
  
  myengine = engine.create();
  myworld = myengine.world;

  var ground_options = {
    isStatic:true
  }
  var ball_options = {
    restitution:1.0
  }
  ground = bodies.rectangle(0,596,600,3,ground_options);
  world.add(myworld,ground);
  
  
  
  ball = bodies.circle(300,300,20,ball_options);
world.add(myworld,ball);
  console.log(ball);
 
}

function draw() {
  background(255,255,255);  
  engine.update(myengine);


  rect(ground.position.x,ground.position.y,600,3)
  ellipse(ball.position.x,ball.position.y,40)
  drawSprites();
}