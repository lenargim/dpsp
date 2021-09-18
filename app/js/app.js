// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import 'jquery';

$(document).ready(function(){
  const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 400,
    slidesPerView: 2,
    spaceBetween: 30,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      slideShadows: false,
      depth: 860,
      stretch: 0,
    },
    setWrapperSize: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });
});