


class Cylinder 
{
    
    constructor(r,h)
    {
        this.radius = r;
        this.hieght = h;
    }

    getVolume()
    {
        return (Math.PI*this.radius*this.radius*this.hieght);
    }

}

class Sphere 
{
    constructor(r)
    {
        this.radius = r;
    }

    getVolume()
    {
        return (Math.PI*this.radius*this.radius*this.radius);
    }

}

class Cone 
{
    constructor(r,h)
    {
        this.radius = r;
        this.hieght = h;
    }

    getVolume()
    {
        return (Math.PI*this.radius*this.radius*this.hieght)/3;
    }

}

//driver Code

let cylinder = new Cylinder(7,28);
console.log("Volume of Cyclinder = " + cylinder.getVolume() );

let sphere = new Sphere(21);
console.log("Volume of sphere = "+ sphere.getVolume()); 

let cone = new Cone(7,21);
console.log("Volume of cone = "+ cone.getVolume()); 
