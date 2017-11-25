requirejs.config({
  baseUrl: 'libs',
  paths: {
      app: '../js/components',
      jquery: '../js/libs/jquery-1.12.4-min'
  }
});

requirejs(['jquery', 'app/carousel', 'app/backToTop', 'app/loadMore'],
function($, carousel, goTop, loadMore){
  carousel.init($('.carousels'));
  goTop.init($('body'), $('<a href="#" class="backToTop">TOP</a>'));
  loadMore.init($('.waterfall'), $('<a href="#" class="loadMore">LOAD MORE</a>'));
});
