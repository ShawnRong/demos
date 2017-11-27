//app.js
import('../css/main.css');
var goTop = require('./components/backToTop');
var carousel = require('./components/carousel');
var loadMore = require('./components/loadMore');
var $ = require('jquery');


carousel().init($('.carousels'));
goTop().init($('body'), $('<a href="#" class="backToTop">TOP</a>'));
loadMore().init($('.waterfall'), $('<a href="#" class="loadMore">LOAD MORE</a>'));
// requirejs(['jquery', 'carousel', 'backToTop', 'loadMore'],
// function($, carousel, goTop, loadMore){
//   carousel.init($('.carousels'));
//   goTop.init($('body'), $('<a href="#" class="backToTop">TOP</a>'));
//   loadMore.init($('.waterfall'), $('<a href="#" class="loadMore">LOAD MORE</a>'));
// });
