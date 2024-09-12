// OBJECTS

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}


// Adding properties to an existing object using dot-notation
assistantManager.nextAchivement = "get promoted";

console.log(assistantManager);  // OUTPUT- all values and added values 



console.log(assistantManager.socialSkills); //30
console.log(assistantManager.health);  // 40




// Adding properties to an existing object using bracket-notation
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;

console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}