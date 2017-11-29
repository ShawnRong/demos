//Constructor Pattern
function Car(engine, color){
  this.engine = engine;
  this.color = color;
}

Car.prototype.engineType = function(){
  return this.engine;
}

var car = new Car('V8', 'red');
console.log(car);