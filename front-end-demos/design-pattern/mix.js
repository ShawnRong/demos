//Mix Pattern
var Car = function(engine, color){
  this.engine = engine;
  this.color = color;
}

Car.prototype.engineType = function(){
  return this.engine;
}

var Sedan = function(engine, color, wheel){
  Car.call(this, engine, color);
  this.wheel = wheel;
}

//inherit
// Sedan.prototype = Object.create(Car.prototype);
Sedan.prototype = create(Car.prototype);
function create(parentObj){
  function F(){};
  F.prototype = parentObj;
  return new F();
}


Sedan.prototype.getWheels = function(){
  return this.wheel;
}

var bmw = new Sedan('2.0T', 'white', 4);

console.log(bmw);