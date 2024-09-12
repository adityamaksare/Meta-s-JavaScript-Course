// Spread Operator:

// used to spread array items and join objects togeather..

let top3 = [
    "The Colossem",
    "Trevi Fountain",
    "The Vatican City"
]

function showItinerary(place1, place2, place3) {
    console.log("Visit " + place1);
    console.log("Then Visit " + place2);
    console.log("Finish with a visit to " + place3);
}

showItinerary(top3[0], top3[1], top3[2]);
/*
output:
Visit The Colossem
Then Visit Trevi Fountain
Finish with a visit to The Vatican City
 */


//instead use this technique to reduce the code using three dots brfore array 
// You don't need to list individual member of the array that you want to pass to the function
showItinerary(...top3);  // SPREAD OPERATOR

/*
output:
Visit The Colossem
Then Visit Trevi Fountain
Finish with a visit to The Vatican City
 */