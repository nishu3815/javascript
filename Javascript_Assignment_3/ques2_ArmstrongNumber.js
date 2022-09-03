// Write a program to find whether a given number is armstrong number or not?
// The Armstrong number is a number that is equal to the sum of cubes of
// its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
// numbers.

function CheckArmstrong(x)
{
    let sum=0;
    let num=x;

    while(num>0)
    {
        let r = num%10;
        
        sum+=(r*r*r);
        num = parseInt(num/10);
    }
    
    if(x===sum)
    console.log(x + " is an Armstrong Number.");

    else
    console.log(x + " is not an Armstrong Number.")
}

//driver code
CheckArmstrong(153);
CheckArmstrong(234);
CheckArmstrong(371);