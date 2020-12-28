
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base;
var rock;
var t, b;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload(){
t = loadImage("tree.png");	
b = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
base = new ground();
rock = new stone(200,200,50);
rope = new catapults_rubber_rope(rock.body,{x: 200,y: 500});
mango1 = new mango(600,300,50);
mango2 = new mango(550,300,50);
mango3 = new mango(740,375,50);
mango4 = new mango(698,260,50);
mango5 = new mango(480,350,50);
mango6 = new mango(550,400,50);
mango7 = new mango(575,426,50);

tree = createSprite(700,450,0.1,0.1);
tree.addImage(t);
tree.scale = 0.4;

boy = createSprite(250,640);
boy.addImage(b);
boy.scale = 0.1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100,200,255);
  Engine.update(engine);
  drawSprites();
 base.display();
 rock.display();
 rope.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();

 /*hitted_mango(rock.body, mango1.body);
 hitted_mango(rock.body, mango2.body);
 hitted_mango(rock.body, mango3.body);
 hitted_mango(rock.body, mango4.body);
 hitted_mango(rock.body, mango5.body);
 hitted_mango(rock.body, mango6.body);
 hitted_mango(rock.body, mango7.body);
 */
 }

function mouseDragged(){
Matter.Body.setPosition(rock.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){
rope.fly();
}

function keyPressed(){
if(keyCode === 32){
rope.attach(rock.body);
Matter.Body.setPosition(rock.body,{x: 200,y: 200});
}
}

function hitted_mango(body1, body2){
pos1 = body1.body.position;
pos2 = body2.body.position;

var distance = dist(pos1.x, pos1.y, pos2.x, pos2.y);
if(distance <= body1.radius + body2.radius){
  Matter.Body.setStatic(body2.body, false);
}
}