let a = prompt("Whats you age?");
a = Number.parseInt(a);

if (a < 0 || a == 0)
{
    alert("Invalid Age!");
}

else if(a > 0 && a < 18)
{
    alert("You are not eligible for driving");
}
else if ( a >= 18 ) {
    alert("You are eligible for driving");
}