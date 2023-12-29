// Creating this array with "const"
const obj = {
    harry: 50,
    shihab: 40,
    hanjala: 60,
    faysal: 50,
    rakib: 90
}

for(let a in obj)
{
    console.log("The marks of " + a + " are " + obj[a])
}


// creating this array with "let"

let obj2 = {
    harry: 50,
    shihab: 40,
    hanjala: 60,
    faysal: 50,
    rakib: 90
}

for(let a in obj)
{
    console.log("The marks of " + a + " are " + obj[a]);
}


//Question: Write a program to print the marks of the students using for loop:
const marks = {
    shihab: 50,
    hanjala: 60,
    faysal: 80,
    rakib: 70
}

for( let i = 0; i < Object.keys(marks).length; i++) {
    console.log(Object.keys(marks)[i] + " has got " + marks[Object.keys(marks)[i]])
}