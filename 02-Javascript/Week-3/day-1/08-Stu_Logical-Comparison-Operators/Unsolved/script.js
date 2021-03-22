var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b === e); //true
var expression2 = (e > d); //higher than from less than

// Use comparison operators so all expressions below log to the console as true
console.log(a == b); // dont check type only value
console.log(b == e); //change from being 'not equal' to equal.
console.log(c > b); // change to higher than
console.log(d == 0); // d is == to 0

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && expression2);
console.log( !expression1 || expression2);
  
