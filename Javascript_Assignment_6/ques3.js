// Write a JavaScript program which accept a number as input in the
// function parameter and insert dashes (-) between each two even
// numbers.
// For example if you accept 025468 as the output should be 0-254-6-8.
// computeDash(025468) -> 0-254-6-8.



function computeDash(input)
{
    let digits = input.toString().split("");
    let ans=digits[0];
    for(let i=1;i<digits.length;i++)
    {
        if( !(parseInt(digits[i])&1) && !(parseInt(digits[i-1])&1))
        ans+= ("-"+digits[i]);

        else
        ans+=digits[i];
    }
    return ans;
}
//driver code
console.log(computeDash(225468));

console.log(computeDash(123680));

