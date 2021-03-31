class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get Area(){
        return (Math.PI * Math.pow(this.radius , 2));
    }

    get Perimeter() {
        return (2 * Math.PI * this.radius);
    }

    info(){
        return `Area = ${this.Area}, Perimeter = ${this.Perimeter}` 
    }
}

let c = new Circle(3);
console.log(c.info());
