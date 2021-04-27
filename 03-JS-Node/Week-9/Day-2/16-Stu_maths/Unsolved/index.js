// TODO: Import `maths.js`
const math = require("./maths.js");
let mathDetails = new Array();

for (i=2; i < process.argv.length; i++)
{
 mathDetails.push(process.argv[i].toLowerCase());
}

switch ( mathDetails[0] )
{
case "sum":
    console.log(math.sum(Number(mathDetails[1]),Number(mathDetails[2])));
    break;
case "difference":
    console.log(math.difference(Number(mathDetails[1]),Number(mathDetails[2])));
    break;
case "product":
    console.log(math.product(Number(mathDetails[1]),Number(mathDetails[2])));
    break;
case "quotient":
    console.log(math.quotient(Number(mathDetails[1]),Number(mathDetails[2])));
    break;
default: 
    console.log("Invalid");
}


// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
