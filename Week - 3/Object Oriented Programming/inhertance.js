var bird  = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
  }
  
  var eagle1 = Object.create(bird);
  console.log("eagle1: ",eagle1);
  
  console.log("eagle1 has wings: ", eagle1.hasWings)
  console.log("eagle1 ca fly: ", eagle1.canFly)
  console.log("eagle1 has feathers: ", eagle1.hasFeathers)
  
  
  var eagle2 = Object.create(bird);
  console.log("eagle2 has wings: ", eagle2.hasWings)
  
  
  var penguin1 = Object.create(bird);
  penguin1.canFly = false;   
  console.log("penguin1: ", penguin1);
  console.log("penguin1 has wings: ", penguin1.hasWings)  // these properties are inherited from the object bird
  console.log("penguin1 has feathers: ", penguin1.hasFeathers)
  console.log("penguin1 ca fly: ", penguin1.canFly) // this property will be overrided by the property: penguin1.canFly = false.
  
  