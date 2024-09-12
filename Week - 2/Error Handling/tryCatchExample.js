// try-catch example

try {
    throw new ReferenceError();  // this throws a reference error
} catch(err) {
    console.log(err)
    console.log("There was an Refeerence error")
}

// Even though there is an error code doesn't stop to run.

console.log("My program does not stop");
