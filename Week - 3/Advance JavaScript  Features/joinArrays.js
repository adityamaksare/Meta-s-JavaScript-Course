// Using the spread operator, it's easy to concatenate arrays and combining objects:

const fruits = ['apple','pear','plum']
const berries = ['blueberry', 'strawberry']
// joining two arryas:
const fruitsAndBerries = [...fruits, ...berries];
console.log(fruitsAndBerries);
//Output: [ 'apple', 'pear', 'plum', 'blueberry', 'strawberry' ]



//joining Objects:
const flying = {wings: 2}
const car = {wheels: 4}
const flyingCar = {...flying, ...car}
console.log(flyingCar) //{ wings: 2, wheels: 4 }



// adding members to existing array without using push() method:
let veggies = ['onion', 'parsley']
veggies = [...veggies, 'carrot', 'beetroot']
console.log(veggies); // [ 'onion', 'parsley', 'carrot', 'beetroot' ]



// converting string into arryas using spread operator:
const greeting = "Hello";
const arrayOfChars = [...greeting]
console.log(arrayOfChars);// [ 'H', 'e', 'l', 'l', 'o' ]



// copy an object into a completely separate object, using the spread operator:
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201;
console.log(car1.speed, car2.speed); //201 200



// completely separate array, also using the spread operator, like this:
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2) //['apples'] 'not' ['apples','pears']