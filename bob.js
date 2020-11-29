class Bob {
    constructor(x,y,r){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 0.5
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.Bob = Bodies.circle(x,y,r,options);
        World.add(world,this.Bob);
    }
    display () {
        var pos =this.Bob.position;
        var angle = this.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        pop();
    }
};