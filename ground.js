class ground{
   constructor(){
   var options = {
   isStatic: true
   }
   this.body = Bodies.rectangle(400,700,800,20,options);
   this.width = 800;
   this.height = 20;

   World.add(world,this.body);
   } 

display(){
var pos = this.body.position;
push();
translate(pos.x, pos.y);
fill("")
strokeWeight(5);
stroke(0);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();
}

};