// Object Oriented Programming (OOP) - using objects to group related data.

//Object

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {  // Functions inside objects are called methods
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total Price:', calculation);
    }
}

purchase1.totalPrice(); //120

// accessing object data using dot-notation
console.log(purchase1.shoes); //100
console.log(purchase1.stateTax); // 1.2
