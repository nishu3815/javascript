// Perform the following operations to provide the implementation for a
// Rectangle class. The operations are:
// 1. Add an area() method to the Rectangle class.
// 2. Create a Square class that satisfies the following conditions:
//    It is a subclass of Rectangle.
//    It contains a constructor and no other methods.
//    It can use the Rectangle class' area method to print the area
//    of a Square object.

class Rectangle
{
    constructor(l,w)
    {
        this.length=l;
        this.width=w;
    }

    Area()
    {
        return this.length * this.width;
    }
}

class Square extends Rectangle
{
    constructor(s)
    {
        super(s,s);
    }
}

//driver code

let rectangle = new Rectangle(5,6);
console.log("Area of Rectangle = "+ rectangle.Area());

let square = new Square(5);
console.log("Area of Square = "+ square.Area());
