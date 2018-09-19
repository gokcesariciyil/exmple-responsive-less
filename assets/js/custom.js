$(window).on('resize', function (){
  if ($(window).width() > 768) {
    $('.topmenu-links').show();
  } else {
    $('.topmenu-links').hide();
  }
});

$('#search_button').click(function(){
  $('.topmenu-search-box').toggle();
});

$('.topmenu-mobile-button').click(function () {
  $('.topmenu-links').toggle();
});



/* SLIDER JQUERY */

var sliderLinks = $('.home-slider-links li');
var sliderImageHeight = $('.home-slider-images li').height(); // 358
var lastElem = sliderLinks.length-1;

$(window).on('resize', function (){
  sliderImageHeight = $('.home-slider-images li').height();
});

sliderLinks.click(function(){
  sliderResponse($(this).data('id') - 1);
  resetTiming();
});

function sliderResponse(target){
  var slidePosition = target * sliderImageHeight;
  $('.home-slider-images').animate({'top':'-'+ slidePosition +'px'}, 300);
  sliderLinks.removeClass('active');
  $('.home-slider-links li[data-id='+(target+1)+']').addClass('active');
}

function sliderTiming() {
  var target = $('.home-slider-links li.active').data('id') - 1;
  target === lastElem ? target = 0 : target = target + 1;
  sliderResponse(target);
}

var timingRun = setInterval(function() { sliderTiming(); },5000);

function resetTiming() {
  clearInterval(timingRun);
  timingRun = setInterval(function() { sliderTiming(); },5000);
}