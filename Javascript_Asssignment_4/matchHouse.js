
function matchHouses(x)
{
    if(x<1)
    return 0;

    let matchstick = 6 + (x-1)*5;
    return matchstick;

}

//driver code
console.log(matchHouses(1));
console.log(matchHouses(4)); 
console.log(matchHouses(87));