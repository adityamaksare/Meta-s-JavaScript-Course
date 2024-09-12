// OOP
var purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax  // can use this.shoes instead on object name i.e purchase1
    console.log('Total price:', calculation)
  }
}  

var purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  totalPrice: function () {
    var calculation = this.shoes * this.stateTax  // can use this.shoes instead on object name i.e purchase2
    console.log('Total price:', calculation)
  }
}

purchase1.totalPrice() //120
purchase2.totalPrice() //60
