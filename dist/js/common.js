'use strict';
$('.welcome__descr').slick({
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 6000
});

$('.slider').slick({
  dots: true,
  arrows: false,
  appendDots: $('.slider-toggles'),
  autoplaySpeed: 2000
});

