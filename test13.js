//string methods:
//1.String length
let name = "Shihab";

console.log(name.length);  //Ans: 6

//2.String slice()
console.log(name.slice(1, 3)); //Ans: hi

//slice() function works with one or more parameters which is actually the indeces of the given string.
//above example shows that slice() function will slice the string "Shihab" before 1 index to exactly before 3 index.not 3,before 3.

//we can give 1 index also:
console.log(name.slice(2)) //ihab

//this code printed the rest of the string except form 0 to 2.

//3.String replace()
let country = "Bangladesh"
console.log(country.replace("desh", " "));
//or
console.log(country.replace("Bangladesh", "Turkey"));

//replace() function is case sensitive.so if the given string doesn't match that won't probably work.
console.log(country.replace("bangladesh", "Turkey"));


//4.toUpperCase()
console.log(country.toUpperCase()); //Ans: BANGLADESH

//5.toLowerCase()
console.log(country.toLowerCase()); //Ans: bangladesh

//6.String concat()
let firstName = "Hanjala";
let lastName = "Shihab";

console.log(firstName.concat(lastName)); //Ans: HnajalaShihab

//or
console.log(firstName.concat(" is my first name and " + lastName + " is my last name"));

//concat() function sums up two or more strings together.

//7.String trim()
//trim() function trims the spaces before or after from a string.
let myName = "      Hanjala       ";
console.log(myName); //prints with space

//but 
console.log(myName.trim());