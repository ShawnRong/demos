//pubSub pattern
var EventCenter = (function(){
  var events = {};

  function on(evt, handler){
    events[evt] = events[evt] || [];
    events[evt].push({
      handler: handler
    });
  }

  function trigger(evt, args){
    if(!events[evt]) return
    for(var i=0; i<events[evt].length; i++){
      events[evt][i].handler(args);
    }
  }

  function off(evt){
    delete events[evt];
  }

  return {
    on: on,
    off: off,
    trigger: trigger
  }
})();

EventCenter.on('sayHello', function(){
  console.log('hello');
})
EventCenter.on('sayHello', function(){
  console.log('Yeah');
})

// EventCenter.off('sayHello');
EventCenter.trigger('sayHello');

