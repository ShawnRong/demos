// define carousel.js
module.exports = function(){
  var $ = require('jquery');
  function carousel($ct){
    this.$ct = $ct;
    this.init();
    this.bind();
  }

  carousel.prototype.init = function() {
    var $imgs = this.$imgs = this.$ct.find('.imgs>li');
    var $imgCt = this.$imgCt = this.$ct.find('.imgs');

    var $prevBtn = this.$prevBtn = this.$ct.find('.prev');
    var $nextBtn = this.$nextBtn = this.$ct.find('.next');
    // var $bullets = this.$bullets = this.$ct.find('.bullet li');

    this.imgWidth = $imgs.width();
    this.isAnimate = false;
    this.pageIndex = 0;


    $imgCt.append($imgs.first().clone());
    $imgCt.prepend($imgs.last().clone());
    // console.log(this.imgWidth);
    $imgCt.width(($imgs.length + 2) * this.imgWidth);
    $imgCt.css({
      left: -this.imgWidth
    });
  }

  carousel.prototype.bind = function() {
    var _this = this;
    this.$prevBtn.on('click', function(e){
      e.preventDefault();
      _this.playPrev(1);
    })

    this.$nextBtn.on('click', function(e){
      e.preventDefault();
      _this.playNext(1);
    })

    // this.$bullets.on('click', function(){
    //   var index = $(this).index();
    //   if(index > _this.pageIndex){
    //     _this.playNext(index - _this.pageIndex);
    //   }else if(index < _this.pageIndex){
    //     _this.playPrev(_this.pageIndex - index);
    //   }
    // })
  }

  carousel.prototype.playNext = function(len) {
    var _this = this;
    if (this.isAnimate) return;
    this.isAnimate = true;
    this.$imgCt.animate({
      left: '-=' + len * _this.imgWidth
    },function(){
      _this.pageIndex += len;
      if(_this.pageIndex == _this.$imgs.length){
        _this.pageIndex = 0;
        _this.$imgCt.css({left: -_this.imgWidth});
      }
      // _this.setBullet();
      _this.isAnimate = false;
    })
  }

  carousel.prototype.playPrev = function(len) {
    var _this = this;
    if (this.isAnimate) return;
    this.isAnimate = true;
    this.$imgCt.animate({
      left: "+=" + len * _this.imgWidth
    }, function(){
      _this.pageIndex -= len;
      if (_this.pageIndex < 0){
        _this.pageIndex = _this.$imgs.length - 1;
        _this.$imgCt.css({left: -_this.imgWidth * _this.$imgs.length});
      }
      // _this.setBullet();
      _this.isAnimate = false;
    })
  }

  // carousel.prototype.setBullet = function() {
  //   this.$bullets.removeClass('active')
  //       .eq(this.pageIndex)
  //       .addClass('active');
  // }

  return {
    init: function($ct) {
      $ct.each(function(index, node){
        new carousel($(node));
      })
    }
  }
};