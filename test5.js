// Printing values,indeces and array of an array: 
//For printing values of an array:
const numbers = [10,20,40,50,30,80];
for(let a in numbers) {
    console.log(numbers[a]);
}
// Output: 
//         10
//         20
//         40
//         50
//         30
//         80

//For printing indeces of an array:
const numbers2 = [3045,34,45,22,7677];
for(let b in numbers2) {
    console.log(b);
}
//Output: 
        //    0
        //    1
        //    2
        //    3
        //    4

//For printing array of an array:
const numbers3 = [23,5676,243,434,655];
console.log(numbers3);

//Printing values,indices and array of an array using function:"
// "forEach() function will be used.this function is a callback function.
//Takes three arguments - 1/ Value
                    //    2/ Index
                    //    3/ Array
const numbers4 = [235,566,2463,4534,6575];

numbers4.forEach(myFunction);

function myFunction(value,index,array) {
    console.log(value);
    console.log(index);
    console.log(array);
}