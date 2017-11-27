//define loadmore
module.exports = function(){
  var $ = require('jquery');
  function loadMore($ct, $target){
    this.$ct = $ct;
    this.$target = $target;
    this.init();
    this.bindEvent();
  }

  loadMore.prototype.init = function(){
    this.$ct.append(this.$target);
    this.colSumHeight = [];
    this.ctWidth = this.$ct.find('.contents').width();
    this.nodeWidth = this.$ct.find('li').outerWidth(true);
    for(var i = 0; i < parseInt(this.ctWidth / this.nodeWidth); i++) {
      this.colSumHeight.push(0)
    }
    this.getNodes(5)
  }

  loadMore.prototype.bindEvent = function(){
    var self = this;
    this.$target.on('click', function(e){
      e.preventDefault();
      self.getNodes(5);
    })
  }

  loadMore.prototype.getNodes = function(num){
    var self = this
    var urls = []
    var nodes = []
    var width
    var height

    self.isLoaded = false
    for(var i = 0; i < num; i++) {
        width = Math.floor(Math.random() * 100) + 200
        height = Math.floor(Math.random() * 100) + 200
        urls.push('https://picsum.photos/' + width + '/' + height)
    }
    $(urls).each(function(index, url) {
        var $imgLi = $('<li></li>')
        var $img = $('<img>')
        $img.attr('src', url)
        $imgLi.append($img)
        self.$ct.find('.contents').append($imgLi)
        $img.on('load', function() {
            self.putNode($imgLi)
        })
    })
  }

  loadMore.prototype.putNode = function($node){
    var minItem = Math.min.apply(null, this.colSumHeight)
    var minIndex = this.colSumHeight.indexOf(minItem)
    $node.css({
        top: minItem,
        left: this.nodeWidth * minIndex
    })

    this.colSumHeight[minIndex] += $node.outerHeight(true)
    this.$ct.find('.contents').height(Math.max.apply(null, this.colSumHeight))
  }

  return {
    init: function($ct, $target){
      new loadMore($ct, $target);
    }
  }
};