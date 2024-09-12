// Try  Catch

/*
benifit of using try-catch is: even if the code has an error 
it will not stop working, further code will be executed ! 
*/


//SYNTAX
try {
    console.log(c + d)

}  catch(err) {
    // do something here
}


// Throw example
try {

    throw new Error();

} catch(err) {

    console.log(err)
}
 
console.log('This line runs now');
