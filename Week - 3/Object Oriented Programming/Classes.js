//The constructor will be used to build properties on the future object instance of the Train class.
class train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    getself() {
        console.log(this)
    }
}

// instances for train class:
var myFirstTrain = new train("red", "false")
var myThirdTrain = new train("blue", "true")
var myFourthTrain = new train("green", "false")

// console.log(myFirstTrain);  // color:red , lightOn:false
console.log(train.getself)