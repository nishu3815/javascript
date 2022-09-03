// Write a program to find whether a given number is special number or
// not?
// If the sum of the factorial of digits of a number (N) is equal to the
// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 145

function factorial(x)
{
    let fact=1;

    for(let i=1;i<=x;i++)
    fact*=i;

    return fact;
}

function CcheckSpecialNumber(x)
{
    let sum=0;
    let num=x;
    while(num>0)
    {
        sum+=factorial(num%10);
        num=parseInt(num/10);
    }
    if(sum===x)
    console.log(x + " is a Special Number.");
    else
    console.log(x + " is not a Special Number.");
}

//driver code
CcheckSpecialNumber(145);
CcheckSpecialNumber(234);