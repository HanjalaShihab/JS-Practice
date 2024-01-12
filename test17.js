//Basic of function.
let name = "Harry";
let name1 = "Shihab"
let name2 = "Kabir";
let greeting = "Good bye";

let greet = (names, greeting) => {            //Arrow function
    console.log(names + ", hello what\'s up! " + greeting);
}

greet(name, greeting);
greet(name1, greeting);
greet(name2, greeting);

greet("John wick", greeting);
