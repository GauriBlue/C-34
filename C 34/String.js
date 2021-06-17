class String{
    constructor(body1, point2){
        var options = {
            bodyA :body1,
            pointB :point2,
            stiffness : 0.1,
            length : 200
        }
    this.pointB=point2;
       this.string =  Constraint.create(options)
       World.add(world, this.string)
    }


display(){
    push();
    strokeWeight(3)
    stroke("black");
    line(this.string.bodyA.position.x, this.string.bodyA.position.y, this.pointB.x,this.pointB.y);
    pop();
}


}