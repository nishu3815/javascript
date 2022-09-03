// Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

function checkPrime(x)
{
    if(x<2)
    return false;
    if(x<4)
    return true;
    if(x%2 ===0)
    return false;
    for(let i=3;i*i<x;i+=2)
    {
        if(x%i===0)
        return false;
    }
    return true;
}
function prime(low,high)
{
    let factorial=1;
    for(let i=1;i<low;i++)
    factorial*=i;

    for(let i=low;i<high;i++)
    {
        factorial*=i;
        if(checkPrime(i))
        console.log(i + " -> " + factorial);
    }
    
}

prime(1,20);