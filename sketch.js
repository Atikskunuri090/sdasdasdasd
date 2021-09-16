const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundimg, background;

var tower, towerimg, canon, canonimg;

var ball

var array = []

function preload(){
backgroundimg = loadImage("background.gif");
towerimg = loadImage("tower.png")
}

function setup(){
createCanvas(1200,600);
engine = Engine.create();
world = engine.world;
angleMode(DEGREES)
angle = 15
canon = new Canon(175,180,100,100,angle)
var hi = {isStatic : true}
tower = Bodies.rectangle(150,360,100,200,hi)
World.add(world,tower)
ball = new Canonball(175,180,30)
}

function draw(){
background(0);
Engine.update(engine);
image(backgroundimg, 0, 0, 1200, 600);
push();
imageMode(CENTER);
image(towerimg,tower.position.x,tower.position.y,100,300)
pop();
canon.method()
for (var i = 0; i<array.length; i++){
    displaying(array[i]);
}
}

function ballpressed(){
    if (keyIsDown(DOWN_ARROW)){
        array[array.length-1].shoot()
    }
    
}

function seperate(){
    if(keyIsDown(DOWN_ARROW)){
        var canonBalls = new Canonball(canon.x,canon.y); 
        Matter.Body.setAngle(canonBalls.body,canon.angle)
        array.push(cannonBalls)
    }
}

function displaying(ball){
    if(ball){
        ball.method();
        
    }
}

    


 