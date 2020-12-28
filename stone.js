class stone{
constructor(x,y,radius){
var options = {
    
    'restitution': 0.6,
    'friction': 1,
    'density': 0.5,
    'frictionAir':0.003
}
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
this.image = loadImage("stone.png");

World.add(world, this.body);
}

display(){
    var pos = this.body.position;

    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();
}
}