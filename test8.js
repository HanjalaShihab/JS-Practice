//To pring the values one by one of an object:

const person = {
    firstName: "Hanjala",
    lastName: "Shihab",
    roll: 1402
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.roll);

// For an array to print the values one by one:

const names = ["Hanjala", "Shihab", "Faysal", "Rakib", "Shakib"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

//Using Loop:
for(let a in names) {
    console.log(a + "th" + " is " + names[a]);
}