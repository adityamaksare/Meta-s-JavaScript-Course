/*
BUG:
when a bug happens program keeps running, but not in intended way.

ERROR:
when a error happens program stops running.

*/

// this is example of a bug
function addNums(a, b) {
    console.log(a + b);
}
addNums("1" + 2); // = "12" string




//this is example for a reference error:
console.log(c + d);  // this will throw a reference error because variable are declared first.
console.log("this line never runs");  


// this example for a syntax error - code that JS cannot read.
// console.log("hello); missing double inverted coma

