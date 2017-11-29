function carFactory(carInfo){
  var car = {
    name: carInfo.name || 'bmw'
  }

  car.ignite = function(){
    console.log(this.name);
  }

  return car
}

var car1 = carFactory({name: 'volkswagon'});
var car2 = carFactory({name: 'ford'});

car1.ignite();

