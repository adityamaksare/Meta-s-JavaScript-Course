
let counter = 3;
function example() {
    console.log(counter)
    counter = counter - 1;
    if(counter === 0) return
    example();  // invoking function inside of itself
}

example()