// Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

function checkTriangle(a,b,c)
{
    if(a===b && b===c)
    return "Equilateral";

    else if(a===b || b===c || a===c)
    return "Isosceles";

    else
    return "Scalene";
}

//driver code
console.log(checkTriangle(1,1,1));
console.log(checkTriangle(1,2,1));
console.log(checkTriangle(3,1,1));
console.log(checkTriangle(1,2,3));

