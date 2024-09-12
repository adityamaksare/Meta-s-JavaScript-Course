// for loops for objects

// for loops can not be used on directly on objects

// to use for loops on object built in methods are used:
// Object.key() ,  Object.values() and  Object.entries() 


// use of Object.key
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']



// use of Object.values
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']


//use of Object.entries()
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); //[ ['speed', 400], ['color', 'magenta'] ]