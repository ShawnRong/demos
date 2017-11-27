//define backToTop.js
module.exports = function(){
  var $ = require('jquery');
  function goTop($ct, $target){
    this.$ct = $ct;
    this.$target = $target;
    this.createNode();
    this.bindEvent();
  }

  goTop.prototype.bindEvent = function(){
    var _target = this.$target;
    $(window).scroll(function() {
      if($('body').scrollTop() > 20 || $('html').scrollTop() > 20){
        $(_target).show();
      } else {
        $(_target).hide();
      }
    });

    this.$target.on('click', function(e){
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }

  goTop.prototype.createNode = function(){
    this.$ct.append(this.$target);
  }

  return {
    init: function($ct, $target){
      new goTop($ct, $target);
    }
  }
}