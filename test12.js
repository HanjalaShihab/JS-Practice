//Fucntion Declaration and Function Expression:

//Function Declation:
function sum(a, b) {
    return a + b;
}

console.log(sum(1,2));


//Functin expression:
let sum = function(a, b) {
    return a + b;
}

console.log(sum(4,6));


// But the thing is function declaration supports Hoistin but function expression dosen't.
// Hoisting is JavaScript's default behavior of moving declarations to the top.
//A Function Declaration is only visible inside the code block in which it resides.
//For Instance:

console.log(sum(1,4));

let sum = function(a, b) {
    return a + b;
}
//This function expression will not be executed.

//But for declaration:
console.log(sum(4,6));

function sum(a, b) {
    return a + b;
}