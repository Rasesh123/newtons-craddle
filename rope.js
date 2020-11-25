class Rope{
    constructor(bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            lenght:10
        }
        this.rope1=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope1.bodyA.position
        var pointB=this.rope1.bodyB.position
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}