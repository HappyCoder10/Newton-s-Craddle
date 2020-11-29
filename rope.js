class Rope {
    constructor(bobObject1, bobObject2, bobObject3, bobObject4, bobObject5){
        var options = {
            bobObject1: bobObject1,
            bobObject2: bobObject2,
            bobObject3: bobObject3,
            bobObject4: bobObject4,
            bobObject5: bobObject5,
            stiffness: 0.04,
            length: 10

        }
        this.sling = Constraint.create(options);
        World.add(world.this.sling);

    }
    display() {
        var point1 = this.sling.bobObject1.position;
        var point2 = this.sling.bobObject2.position;
        var point3 = this.sling.bobObject3.position;
        var point4 = this.sling.bobObject4.position;
        var point5 = this.sling.bobObject5.position;
        strokeWeight(4);
        line(point1.x, point1.y, point2.x, point2.y, point3.x, point3.y, point4.x, point4.y, point5.x, point5.y);



    }
}
