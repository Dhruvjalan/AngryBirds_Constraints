class Chain {
    constructor (x,y){
        var options = {
            bodyA:x,
            bodyB:y,
            stiffness : 0.04,
            length:10,
        }
        this.body1 = Matter.Constraint.create(options);
        World.add(world, this.body1);

}

 display(){
    line (this.body1.bodyA.position.x,this.body1.bodyA.position.y,this.body1.bodyB.position.x,this.body1.bodyB.position.y); 
}
}