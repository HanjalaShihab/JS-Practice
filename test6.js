let n = ["JavaScript","HTML", "CSS", "REACT"];
for(let a of n) {
    console.log(n[a]);
}

// the result is undefined.

let n2 = ["JavaScript","HTML", "CSS", "REACT"];
for(let a of n2) {
    console.log(a);
}


//printing the string index by index:
let name = "JavaScript";

for(let i = 0; i < name.length; i++) {
    console.log(name[i]);
}