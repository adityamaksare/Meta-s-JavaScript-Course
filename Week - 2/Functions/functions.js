/*

Running the same set of stored instructions repeatedly without
requiring you to adjust the settings every time.

*/

// Function without parameters
function myFunction() {
    console.log("Hello World !");
}

myFunction();  // Hello World !


//Functions with parameter
function addTwoNumbers(a, b) {
    var c = a + b;
    console.log(c);
}

addTwoNumbers(7, 3);  //10
addTwoNumbers(100, 300); // 400