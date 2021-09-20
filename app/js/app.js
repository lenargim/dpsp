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

  const reviews = new Swiper('.reviews__slider', {
    speed: 400,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    watchSlidesProgress: false,
    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
  });

  const news = new Swiper('.news__slider', {
    speed: 400,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    watchSlidesProgress: false,
    navigation: {
      nextEl: '.news__button-next',
      prevEl: '.news__button-prev',
    },
  })
});
