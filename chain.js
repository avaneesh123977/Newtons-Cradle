class Chain
{
    constructor(bodyA, bodyB, offsetX, offsetY ){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:offsetX, y:offsetY},
            stiffness:0.04,
            length:10
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
       
        
    }
    fly(){
        this.chain.bodyA = null;
    }
}