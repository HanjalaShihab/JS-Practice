//Array toString()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let result = numbers.toString();

console.log(result);
console.log(typeof result); //get the type 

console.log(typeof numbers); //get the type


//Array length

const names = ["Zihad", "Shihab", "Rahman", "Rahim"];

console.log(names.length);


//Array join()
// The join() method also joins all array elements into a string.


//const names = ["Zihaz", "Shihab", "Rahman", "Rahim"];
console.log(names.join(" and ")); 
//or 
console.log(names.join(" * "));
//whatever we want to insert.

//typeof join();
let a = names.join(" and ");
console.log(typeof a);


//Array pop()

// // const names = ["Zihaz", "Shihab", "Rahman", "Rahim"];
// console.log(names.pop());
// //pops out the last element of the array.

// console.log(names);


//Array push()

// const names = ["Zihaz", "Shihab", "Rahman", "Rahim"];
let b = names.push("Hulalulu");

console.log(b); //return the lentgh of the new array.So basically push() function returns the length of the new array.
//And adds the element at the end of the array.
console.log(names);

//So pop() function excludes the last element of the array but push() adds the element at the end of the array.but just returns the length of the new array.


//Array shift()

// const names = ["Zihaz", "Shihab", "Rahman", "Rahim"];

console.log(names.shift());
// The shift() method removes the first array element and "shifts" all other elements to a lower index.and returns only the shifted element.

console.log(names); //"Zihad is not included."

//Array unshift()

const namess = ["Zihaz", "Rabbi", "Farhad", "Jalal","Rafiq"];

console.log(namess.unshift("Shihab")); //The unshift() method returns the new array length.
