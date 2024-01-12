let arr = [30,40,50,60,70];

function myFunction(value, index, array) {
    console.log(value,index,array);
    return value + 1;
}

let a = arr.map(myFunction);

console.log(a);

//

let arr2 = [400,500,300,650];

let a2 = arr2.map((value,index, array) => {
    console.log(value,index,array);
    return value + 1;
})

console.log(a2);



////////
const names = ["john", "Alex", "Victor", "Mary"];

let x = names.map((value,index) => {
    console.log(value);
})

console.log(x);