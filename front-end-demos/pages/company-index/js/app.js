requirejs.config({
  base: './js',
  paths: {
      jquery: 'libs/jquery-1.12.4-min',
      carousel: 'components/carousel',
      backToTop: 'components/backToTop',
      loadMore: 'components/loadMore'
  }
});

requirejs(['jquery', 'carousel', 'backToTop', 'loadMore'],
function($, carousel, goTop, loadMore){
  carousel.init($('.carousels'));
  goTop.init($('body'), $('<a href="#" class="backToTop">TOP</a>'));
  loadMore.init($('.waterfall'), $('<a href="#" class="loadMore">LOAD MORE</a>'));
});
