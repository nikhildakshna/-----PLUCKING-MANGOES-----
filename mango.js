class mango{
    constructor(x,y,radius){

    var options = {
    isStatic: true,
    'restitution': 0.2,
    'friction': 0.8,
    'frictionAir': 0.004,
    'density': 1.5
    }
    
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
this.image = loadImage("mango.png");
World.add(world, this.body);

    }

display(){
var pos = this.body.position;
push();
translate(pos.x,pos.y);
fill("yellow");
imageMode(RADIUS);
image(this.image,0,0,this.radius,this.radius);
pop();
}
};