//modular pattern
var Car = (function(){
  var engine = 'V8';
  function ignite(){
    console.log('engine start!!!!');
  }
  return  {
    engine: engine,
    ignite: ignite
  }
})()

console.log(Car.engine);
console.log(Car.ignite());