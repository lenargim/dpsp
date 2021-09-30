import 'jquery';
import 'jquery-mask-plugin'
import datepicker from 'js-datepicker'

$(document).ready(function () {
  $('.tel').mask('+7(Z00) 000-00-00', {translation: {'Z': {pattern: /[0-79]/}}});

  let d = new Date();

  let month = d.getMonth();
  let day = d.getDate();
  let year = d.getFullYear();

  const picker = datepicker('#datepicker', {
    alwaysShow: true,
    showAllDates: true,
    minDate: new Date(year, month, day),
    customDays: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    formatter: (input, date, instance) => {
      const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
      const value = date.toLocaleDateString('ru-RU', options);
      input.value = value
    },
    onSelect: (instance, date) => {
      const options1 = { month: 'long', day: 'numeric'};
      const options2 = {weekday: 'long'};
      let value1 = date.toLocaleDateString('ru-RU', options1);
      let dayOfWeek = new Intl.DateTimeFormat('ru-RU', options2).format(date);
      let value2 = dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1);
      $('.register__detail-time-title').text(`${value1}, ${value2}`);
      $('.register__detail-time').addClass('active')
    },
  });

  $('.register__detail-time-item').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    let time = $(this).text();
    $('.register__detail-time-input').val(time);
  });

  const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 400,
    spaceBetween: 30,
    effect: 'coverflow',
    setWrapperSize: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        coverflowEffect: {
          rotate: 0,
          slideShadows: false,
          depth: 0,
          stretch: 0,
        },
      },
      1024: {
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 0,
          slideShadows: false,
          depth: 860,
          stretch: 0,
        },
      },
    }
  });

  const reviews = new Swiper('.reviews__slider', {
    speed: 400,
    loop: true,
    breakpoints: {
      320: {
        spaceBetween: 15,
        navigation: false,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
      },
      768: {
        spaceBetween: 15,
        slidesPerView: 2,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
      },
      1280: {
        spaceBetween: 30,
        slidesPerView: 3,
        pagination: false,
        navigation: {
          nextEl: '.reviews__button-next',
          prevEl: '.reviews__button-prev',
        },
      }
    }
  });

  const news = new Swiper('.news__slider', {
    speed: 400,
    loop: true,
    watchSlidesProgress: false,
    navigation: {
      nextEl: '.news__button-next',
      prevEl: '.news__button-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 15,
        navigation: false,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
      },
      768: {
        spaceBetween: 15,
        slidesPerView: 2,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
      },
      1280: {
        spaceBetween: 30,
        slidesPerView: 3,
        pagination: false,
      }
    }
  });

  let select = $('.select');

  select.on('click', '.select__title, .select__input:checked + .select__label', function () {
    select = $(this).parents('.select');
    if (select.hasClass('select_city')) {
      $('.select_address').removeClass('active')
    } else if (select.hasClass('select_address')) {
      $('.select_city').removeClass('active')
    }
    select.hasClass('active') ? select.removeClass('active') : select.addClass('active')
  });

  select.on('change', '.select__input', function () {
    select.removeClass('active');
  });

  $('.open-modal').on('click', function () {
    $('.overlay-callback').addClass('active');
    $('.modal-callback').addClass('active')
  });

  $('.modal__close').on('click', function () {
    $('.overlay').removeClass('active');
    $('.modal').removeClass('active')
  });

  $('.open-register').on('click', function () {
    $('main').toggleClass('blur');
    $('header').toggleClass('blur');
    $('.register').toggleClass('active');
  });

  $('.register-next').submit(function (e) {
    e.preventDefault();
    let form = $(this);
    let detail = form.parent('.register__detail');
    form.find('input').each(function (index, value) {
      let name = $(this).attr('name');
      let type = $(this).attr('type');
      let val = $(this).val();
      if (type == 'radio') {
        if ($(this).prop('checked') == true) {
          let mainInput = $('.register__mainform').find(`input[name=${name}]`);
          mainInput.val(val);
        }
      } else {
        let mainInput = $('.register__mainform').find(`input[name=${name}]`);
        mainInput.val() == '' ? mainInput.val(val) : mainInput.val(mainInput.val() + `, ${val}`)
      }
    });
    $('.register__mainform-field.active').removeClass('active').next().addClass('active');
    detail.hide();
    detail.next('.register__detail').slideDown(400);
  });

  $('.register-last').submit(function (e) {
    e.preventDefault();
    let form = $(this);
    $('.register__detail').hide();
    let date = form.find('#datepicker').val();
    let time = form.find('.register__detail-time-input').val();
    $('#mainform-time').val(date+' '+time);
    form.find('active').removeClass('active');
    form.find('qs-active').removeClass('qs-active')
    $('.register__mainform-field.active').removeClass('active');
    //$('.blur').removeClass('blur');
  });

  $('.register__detail-back').one('click', function () {
    let block = $(this).parents('.register__detail');
    block.hide();
    block.prev('.register__detail').slideDown(400);
  })

  $('.choose-specialist').on('change', function () {
    let detail = $(this).parents('.register__detail');
    detail.hide();
    detail.next('.register__detail').slideDown(400);
    let name = $(this).attr('name');
    let val = $(this).val();
    $('.register__mainform').find(`input[name=${name}]`).val(val);
    $('.register__mainform-field.active').removeClass('active').next().addClass('active');
  });

  $('.register__mainform-field').on('click', function () {
    if ( !$(this).hasClass('active') ) {
      $('.register__mainform-field').removeClass('active');
      $(this).addClass('active');
      let index = $(this).index();
      $('.register__detail').hide();
      $('.register__detail').eq(index).slideDown(400);
    }
  });

  if ( $('main').attr('class').includes('news') ) {
    $('.header__menu-news').addClass('open')
  } else if ( $('main').attr('class').includes('studios') ) {
    $('.header__menu-studios').addClass('open')
  } else if ( $('main').attr('class').includes('service') ) {
    $('.header__menu-services').addClass('open')
  } else if ( $('main').attr('class').includes('actions') ) {
    $('.header__menu-actions').addClass('open')
  } else if ( $('main').attr('class').includes('about') ) {
    $('.header__menu-about').addClass('open')
  }

  const specialists = new Swiper('.studios-detailed__spec-slider', {
    speed: 400,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 22,
    breakpoints: {
      320: {
        spaceBetween: 16,
        navigation: false,
        slidesPerView: 'auto',
        centeredSlides: true,
      },
      768: {
        spaceBetween: 22,
        slidesPerView: 3,
      },
      1280: {
        spaceBetween: 22,
        slidesPerView: 4,
        navigation: {
          nextEl: '.studios-detailed__spec-next',
          prevEl: '.studios-detailed__spec-prev',
        },
      }
    }
  });

  // let services = new Swiper('.service__slider', {
  //   speed: 400,
  //   loop: true,
  //   navigation: false,
  //   init: true,
  //   breakpoints: {
  //     320: {
  //       spaceBetween: 16,
  //       slidesPerView: 1,
  //       pagination: {
  //         el: '.swiper-pagination',
  //         type: 'bullets',
  //         clickable: true,
  //       },
  //     },
  //   }
  // });

  function servicesInit() {
    new Swiper('.service__slider', {
      speed: 400,
      loop: true,
      navigation: false,
      init: true,
      breakpoints: {
        320: {
          spaceBetween: 16,
          slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        },
      }
    });
  }

  if (window.innerWidth < 767) servicesInit();
  // $(window).resize( function () {
  //   if (window.innerWidth > 767) {
  //     services.destroy();
  //   } else {
  //     let services = new Swiper('.service__slider', {
  //       speed: 400,
  //       loop: true,
  //       navigation: false,
  //       init: true,
  //       breakpoints: {
  //         320: {
  //           spaceBetween: 16,
  //           slidesPerView: 1,
  //           pagination: {
  //             el: '.swiper-pagination',
  //             type: 'bullets',
  //             clickable: true,
  //           },
  //         },
  //       }
  //     });
  //   }
  // });


  $('.open-vakansy').on('click', function () {
    $('.overlay-vakansy').addClass('active');
    $('.modal-vakansy').addClass('active');
    let position = $('#vakansy-position');
    if ( !$(this).hasClass('open-vakansy_another') ) {
      $('.modal-vakansy-head').addClass('active');
      position.val($('h1').text());
    } else {
      position.attr('readonly', false);
      position.val('');
    }
  });

  $('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('open');
    $('.header').toggleClass('open');
  })
});
