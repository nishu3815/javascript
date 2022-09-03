// Write a function using switch case to find the grade of a student based
// on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.

function checkGrade(marks)
{
    let grade;

    if(marks<0 || marks>100)
    return "Invalid Marks";
    else
    switch(parseInt(marks/10))
    {
        case 10:
        case 9:
            grade ="S";
            break;
        case 8:
            grade ="A";
            break;
        case 7:
            grade ="B";
            break;
        case 6:
            grade ="C";
            break;
         case 5:
            grade ="D";
            break;
        case 4:
            grade ="E";
            break;
        default:
            grade ="Failed";
    }
    return grade;
}

//driver Code

console.log(checkGrade(87));
console.log(checkGrade(101));
console.log(checkGrade(0));
console.log(checkGrade(-2));
console.log(checkGrade(54));