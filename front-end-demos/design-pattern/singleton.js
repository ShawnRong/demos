var Car = (function(){
  var instance;
  function init(engine){
    return {
      engine: engine
    }
  }
  return {
    createCar: function(engine){
      if(!instance){
        instance = init(engine);
      }
      return instance
    }
  }
})();

var car1 = Car.createCar('v8'); //{engine: "v8"}
var car2 = Car.createCar('v6'); //{engine: "v8"}