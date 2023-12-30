//Program to find the sum using function
//This is a basic formation of function in JavaScript:
function myfunction(a, b, c) {
    return a + b + c;
}
console.log("The sum is: ", myfunction(4 , 4, 4,))

//Finding the average of 4 numbers:
function avg(a,b,c,d) {
    return (a + b + c + d) / 4;
}
console.log("The average of these numbers is: " + avg(6,3,5,7))

// ** One thing to remember "In JS,the division of two numbers may comes floating number.we don't have to convert the type."

//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

let x = prompt("x? ");
let n = prompt("n? ");

function pow(x, n) {
    let result = x;
    for ( let i = 1; i< n; i++) {
        result *= x;
    }

    return result;
}
 if( n < 1 ) {
    alert(`POwer ${n} is not supported,please enter a positive integer number`);
 }
 else {
    alert(pow(x, n));
 }