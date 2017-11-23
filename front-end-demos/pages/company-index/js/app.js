requirejs.config({
  baseUrl: 'libs',
  paths: {
      app: '../js/components',
      jquery: '../js/libs/jquery-1.12.4-min'
  }
});

requirejs(['jquery', 'app/carousel', 'app/backToTop'],
function($, carousel, goTop){
  console.log(carousel.getHello());
  goTop.init($('body'), $('<a href="#" class="backToTop">top</a>'));
});
