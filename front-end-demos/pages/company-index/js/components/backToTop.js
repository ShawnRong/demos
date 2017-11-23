//define backToTop.js
define(['jquery'], function($){
  function goTop($ct, $target){
    this.$ct = $ct;
    this.$target = $target;
    this.createNode();
    this.bindEvent();
  }

  goTop.prototype.bindEvent = function(){
    this.$target.on('click', function(e){
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    })
  }

  goTop.prototype.createNode = function(){
    this.$ct.append(this.$target);
  }

  return {
    init: function($ct, $target){
      new goTop($ct, $target);
    }
  }
})