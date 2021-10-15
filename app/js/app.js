import 'jquery';
import 'jquery-mask-plugin'
import datepicker from 'js-datepicker'
import { Fancybox } from "@fancyapps/ui";

$(document).ready(function () {
  $('.tel').mask('+7(Z00) 000-00-00', {translation: {'Z': {pattern: /[0-79]/}}});


  Fancybox.bind("[data-fancybox]", {
    animated: false,
    Image: {
      zoom: false,
    },
    Toolbar: {
      display: ["close"],
    },
    groupAll : true, // Group all items
    Carousel: {
      Navigation: {
        prevTpl:
          '<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M8.53187 0.259107C8.85633 0.578996 8.88676 1.08447 8.62078 1.43913L8.54089 1.53187L3.05 7.1L17.1 7.1C17.5971 7.1 18 7.50294 18 8C18 8.45882 17.6567 8.83745 17.2129 8.89299L17.1 8.9H3.05L8.54089 14.4681C8.86078 14.7926 8.88404 15.2984 8.61306 15.6493L8.53187 15.7409C8.20741 16.0608 7.70155 16.084 7.3507 15.8131L7.25911 15.7319L0.259106 8.63187C-0.0575809 8.31066 -0.0839691 7.81089 0.179935 7.45992L0.259106 7.36813L7.25911 0.268133C7.60808 -0.0858223 8.17791 -0.0898636 8.53187 0.259107Z" fill="black"/>\n' +
          '</svg>',
        nextTpl:
          '<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<path d="M9.46813 0.259107C9.14367 0.578996 9.11324 1.08447 9.37922 1.43913L9.45911 1.53187L14.95 7.1L0.9 7.1C0.402944 7.1 0 7.50294 0 8C0 8.45882 0.343337 8.83745 0.787106 8.89299L0.9 8.9H14.95L9.45911 14.4681C9.13922 14.7926 9.11596 15.2984 9.38694 15.6493L9.46813 15.7409C9.79259 16.0608 10.2985 16.084 10.6493 15.8131L10.7409 15.7319L17.7409 8.63187C18.0576 8.31066 18.084 7.81089 17.8201 7.45992L17.7409 7.36813L10.7409 0.268133C10.3919 -0.0858223 9.82209 -0.0898636 9.46813 0.259107Z" fill="black"/>\n' +
          '</svg>',
      },
    },
  });

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
      const options = { month: 'long', day: 'numeric'};
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

  const actions = new Swiper('.actions__slider', {
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
        navigation: false,
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
        navigation: {
          nextEl: '.actions__slider-next',
          prevEl: '.actions__slider-prev',
        },
      },
    }
  });

  const reviews = new Swiper('.reviews__slider.swiper', {
    speed: 400,
    loop: true,
    watchSlidesProgress: true,
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

  function galleryInit() {
    new Swiper('.slider__wrap', {
      speed: 400,
      loop: true,
      watchSlidesProgress: false,
      spaceBetween: 15,
      navigation: false,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
    });
  }
  let myGallery = undefined;
  //if (window.innerWidth < 767) galleryInit();

  function initGallery() {
    var screenWidth = $(window).width();
    if(screenWidth < 768 && myGallery == undefined) {
      myGallery = new Swiper('.slider__wrap', {
        speed: 400,
        loop: true,
        watchSlidesProgress: false,
        spaceBetween: 15,
        navigation: false,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
      });
    } else if (screenWidth > 768 && myGallery != undefined) {
      myGallery.destroy();
      myGallery = undefined;
      jQuery('.slider__wrap .swiper-wrapper').removeAttr('style');
      jQuery('.slider__wrap .swiper-slide').removeAttr('style');
    }
  }

  let myServices = undefined;
  function initServices() {
    var screenWidth = $(window).width();
    if(screenWidth < 768 && myServices == undefined) {
      myServices = new Swiper('.service__slider', {
        speed: 400,
        loop: true,
        navigation: false,
        init: true,
        spaceBetween: 16,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });
    } else if (screenWidth > 768 && myServices != undefined) {
      myServices.destroy();
      myServices = undefined;
      jQuery('.service__slider .swiper-wrapper').removeAttr('style');
      jQuery('.service__slider .swiper-slide').removeAttr('style');
    }
  }

  $(window).on('resize', function(){
    initGallery();
    initServices();
  });
  initGallery();
  initServices();


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
    $('.modal').removeClass('active');
    $('.modal-thx__box-desc').text('');
    $('.register__detail-time').removeClass('active');
    $('.register__detail-time-item').removeClass('active');
    $('.register__mainform-field:first-of-type').click()
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
      } else if(type == 'checkbox'  ) {
        if ( $(this).prop('checked') ) {
          let mainInput = $('.register__mainform').find(`input[name=${name}]`);
          mainInput.val() == '' ? mainInput.val(val) : mainInput.val(mainInput.val() + `, ${val}`)
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
    $('#mainform-time').val(date+' в '+time);
    form.find('active').removeClass('active');
    form.find('qs-active').removeClass('qs-active');
    $('.register__mainform-field.active').removeClass('active');
    $('.register__mainform').submit()
  });

  $('.register__mainform').on('submit', function (event) {
    $('.blur').removeClass('blur');
    $('header').removeClass('blur');
    $('.register').removeClass('active');
    let array = $( this ).serializeArray();
    let name = array[0].value.substring(0,array[0].value.indexOf(","));
    let address = array[1].value;
    let service = array[2].value;
    let worker = array[3].value;
    let date = array[4].value;
    let box = $('.modal-thx');
    box.find('.modal-thx__name').text(name);
    box.find('.worker').text(worker);
    box.find('.service').text(service);
    box.find('.date').text(date);
    box.find('.address').text(address);
    event.preventDefault();
    $('.overlay-thx').addClass('active');
    box.addClass('active')
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
  });

  $('.service__item-buttonbox button, .service-banner__button').on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: 0}, 400);
    $('main').toggleClass('blur');
    $('header').toggleClass('blur');
    $('.register').toggleClass('active');
  });

  $('.studios-detailed__diarections').on('click', function(e) {
    e.preventDefault();
    let anchor = $(this).attr('href');
    $('html, body').animate({
      scrollTop:  $(anchor).offset().top - 30
    }, 600);
  });

  $('.header__city-main').on('click', function () {
    $(this).siblings('.header__city-confirm').slideToggle(150)
  });

  $('.header__city-true').on('click', function () {
    $(this).parents('.header__city-confirm').slideUp(150)
  });

  $('.header__city-false').on('click', function () {
    $('.overlay-city').addClass('active');
    $('.modal-city').addClass('active')
  });

  $('.modal-city__letter').on('click', function () {
    if ( !$(this).hasClass('active') ) {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      let index = $(this).index();
      $('.modal-city__list.open').removeClass('open');
      $('.modal-city__list').eq(index).addClass('open');
    }
  });

  $('.modal-city__item').on('click', function () {
    $('.modal-city__search').val($(this).text());
    $(this).parents('.modal-city').submit();
    $('.overlay').removeClass('active');
    $('.modal').removeClass('active')
  });

  $('.studios-page__switcher div').on('click', function () {
    if ( !$(this).hasClass('active') ) {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      let index = $(this).index();
      $('.studios-page__wrap').removeClass('open');
      $('.studios-page__wrap').eq(index).addClass('open');
    }
  });

  $('.about-contacts__city-title').on('click', function () {
    $(this).parent().toggleClass('open');
  });

  $('#city-modal').focus(function () {
    $(this).parents('.select_city').addClass('active')
  });

  $('#city-modal').blur(function () {
    $(this).parents('.select_city').removeClass('active')
  });

  $('.modal__form').submit(function (e) {
    e.preventDefault();
    $('.overlay').removeClass('active');
    $('.modal').removeClass('active');
    $('.overlay-send').addClass('active');
    $('.modal-send').addClass('active');
  })


  const csSelector = document.querySelector('#myCustomSelect'); // the input, svg and ul as a group
  const csInput = csSelector.querySelector('input');
  const csList = csSelector.querySelector('ul');
  const csOptions = csList.querySelectorAll('li');
  const aOptions = Array.from(csOptions);
  let csState = "initial";
  csSelector.setAttribute('role', 'combobox')
  csSelector.setAttribute('aria-haspopup', 'listbox')
  csSelector.setAttribute('aria-owns', 'custom-select-list') // container owns the list...
  csInput.setAttribute('aria-autocomplete', 'both')
  csInput.setAttribute('aria-controls', 'custom-select-list') // ...but the input controls it
  csList.setAttribute('role', 'listbox')
  csOptions.forEach(function(option) {
    option.setAttribute('role', 'option')
    option.setAttribute('tabindex', "-1")  // make li elements keyboard focusable by script only
  });
  const csSelector2 = document.querySelector('#city-modal'); // the input, svg and ul as a group
  const csInput2 = csSelector2.querySelector('input');
  const csList2 = csSelector2.querySelector('ul');
  const csOptions2 = csList2.querySelectorAll('li');
  const aOptions2 = Array.from(csOptions2);
  csSelector2.setAttribute('role', 'combobox')
  csSelector2.setAttribute('aria-haspopup', 'listbox')
  csSelector2.setAttribute('aria-owns', 'custom-select-list') // container owns the list...
  csInput2.setAttribute('aria-autocomplete', 'both')
  csInput2.setAttribute('aria-controls', 'custom-select-list') // ...but the input controls it
  csList2.setAttribute('role', 'listbox')
  csOptions2.forEach(function(option) {
    option.setAttribute('role', 'option')
    option.setAttribute('tabindex', "-1")  // make li elements keyboard focusable by script only
  });
  // EVENTS
  csSelector.addEventListener('click', function(e) {
    const currentFocus = findFocus();
    switch(csState) {
      case 'initial' : // if state = initial, toggleOpen and set state to opened
        toggleList('Open')
        setState('opened')
        break
      case 'opened':
        // if state = opened and focus on input, toggleShut and set state to initial
        if (currentFocus === csInput) {
          toggleList('Shut')
          setState('initial')
        } else if (currentFocus.tagName === 'LI') {
          // if state = opened and focus on list, makeChoice, toggleShut and set state to closed
          makeChoice(currentFocus)
          toggleList('Shut')
          setState('closed')
        }
        break
      case 'filtered':
        // if state = filtered and focus on list, makeChoice and set state to closed
        if (currentFocus.tagName === 'LI') {
          makeChoice(currentFocus)
          toggleList('Shut')
          setState('closed')
        } // if state = filtered and focus on input, do nothing (wait for next user input)

        break
      case 'closed': // if state = closed, toggleOpen and set state to filtered? or opened?
        toggleList('Open')
        setState('filtered')
        break
    }
  })
  csSelector.addEventListener('keyup', function(e) {
    doKeyAction(e.key)
  });
  csSelector2.addEventListener('click', function(e) {
    const currentFocus = findFocus();
    switch(csState) {
      case 'initial' : // if state = initial, toggleOpen and set state to opened
        toggleList2('Open')
        setState('opened')
        break
      case 'opened':
        // if state = opened and focus on input, toggleShut and set state to initial
        if (currentFocus === csInput) {
          toggleList2('Shut')
          setState('initial')
        } else if (currentFocus.tagName === 'LI') {
          // if state = opened and focus on list, makeChoice, toggleShut and set state to closed
          makeChoice2(currentFocus)
          toggleList2('Shut')
          setState('closed')
        }
        break
      case 'filtered':
        // if state = filtered and focus on list, makeChoice and set state to closed
        if (currentFocus.tagName === 'LI') {
          makeChoice2(currentFocus)
          toggleList2('Shut')
          setState('closed')
        } // if state = filtered and focus on input, do nothing (wait for next user input)

        break
      case 'closed': // if state = closed, toggleOpen and set state to filtered? or opened?
        toggleList2('Open')
        setState('filtered')
        break
    }
  })
  csSelector2.addEventListener('keyup', function(e) {
    doKeyAction2(e.key)
  });
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.custom-select')) {
      // click outside of the custom group
      toggleList('Shut')
      toggleList2('Shut')
      setState('initial')
    }
  });

  $('.select-css').on('input', function () {
    if ( $(this).val() == '' ) {
      $(this).parent().attr('aria-expanded', true);
      $(this).siblings('.custom-select-options').removeClass('hidden-all')
    }
  });

// FUNCTIONS
// /////////////////////////////////

  function toggleList(whichWay) {
    if (whichWay === 'Open') {
      csList.classList.remove('hidden-all')
      csSelector.setAttribute('aria-expanded', 'true')
    } else { // === 'Shut'
      csList.classList.add('hidden-all')
      csSelector.setAttribute('aria-expanded', 'false')
    }
  }

  // function toggleList2(whichWay) {
  //   if (whichWay === 'Open') {
  //     csList2.classList.remove('hidden-all')
  //     csSelector2.setAttribute('aria-expanded', 'true')
  //   } else { // === 'Shut'
  //     csList2.classList.add('hidden-all')
  //     csSelector2.setAttribute('aria-expanded', 'false')
  //   }
  // }

  function toggleList2(whichWay) {
    if (whichWay === 'Open') {
      $('#modal-select-list').removeClass('hidden-all').slideDown(200);
      $('#city-modal').attr('aria-expanded', 'true')
    } else {
      $('#modal-select-list').addClass('hidden-all').slideUp(200);
      $('#city-modal').attr('aria-expanded', 'false')
    }
  }

  function findFocus() {
    const focusPoint = document.activeElement
    return focusPoint
  }

  function moveFocus(fromHere, toThere) {
    // grab the currently showing options, which might have been filtered
    const aCurrentOptions = aOptions.filter(function(option) {
      if (option.style.display === '') {
        return true
      }
    })
    // don't move if all options have been filtered out
    if (aCurrentOptions.length === 0) {
      return
    }
    if (toThere === 'input') {
      csInput.focus()
    }
    // possible start points
    switch(fromHere) {
      case csInput:
        if (toThere === 'forward') {
          aCurrentOptions[0].focus()
        } else if (toThere === 'back') {
          aCurrentOptions[aCurrentOptions.length - 1].focus()
        }
        break
      case csOptions[0]:
        if (toThere === 'forward') {
          aCurrentOptions[1].focus()
        } else if (toThere === 'back') {
          csInput.focus()
        }
        break
      case csOptions[csOptions.length - 1]:
        if (toThere === 'forward') {
          aCurrentOptions[0].focus()
        } else if (toThere === 'back') {
          aCurrentOptions[aCurrentOptions.length - 2].focus()
        }
        break
      default: // middle list or filtered items
        const currentItem = findFocus()
        const whichOne = aCurrentOptions.indexOf(currentItem)
        if (toThere === 'forward') {
          const nextOne = aCurrentOptions[whichOne + 1]
          nextOne.focus()
        } else if (toThere === 'back' && whichOne > 0) {
          const previousOne = aCurrentOptions[whichOne - 1]
          previousOne.focus()
        } else { // if whichOne = 0
          csInput.focus()
        }
        break
    }
  }

  function moveFocus2(fromHere, toThere) {
    // grab the currently showing options, which might have been filtered
    const aCurrentOptions2 = aOptions2.filter(function(option) {
      if (option.style.display === '') {
        return true
      }
    })
    // don't move if all options have been filtered out
    if (aCurrentOptions2.length === 0) {
      return
    }
    if (toThere === 'input') {
      csInput2.focus()
    }
    // possible start points
    switch(fromHere) {
      case csInput2:
        if (toThere === 'forward') {
          aCurrentOptions2[0].focus()
        } else if (toThere === 'back') {
          aCurrentOptions2[aCurrentOptions2.length - 1].focus()
        }
        break
      case csOptions2[0]:
        if (toThere === 'forward') {
          aCurrentOptions2[1].focus()
        } else if (toThere === 'back') {
          csInput2.focus()
        }
        break
      case csOptions2[csOptions.length - 1]:
        if (toThere === 'forward') {
          aCurrentOptions2[0].focus()
        } else if (toThere === 'back') {
          aCurrentOptions2[aCurrentOptions2.length - 2].focus()
        }
        break
      default: // middle list or filtered items
        const currentItem = findFocus()
        const whichOne = aCurrentOptions2.indexOf(currentItem)
        if (toThere === 'forward') {
          const nextOne = aCurrentOptions2[whichOne + 1]
          nextOne.focus()
        } else if (toThere === 'back' && whichOne > 0) {
          const previousOne = aCurrentOptions2[whichOne - 1]
          previousOne.focus()
        } else { // if whichOne = 0
          csInput2.focus()
        }
        break
    }
  }

  function doFilter() {
    const terms = csInput.value
    const aFilteredOptions = aOptions.filter(function(option) {
      if (option.innerText.toUpperCase().startsWith(terms.toUpperCase())) {
        return true
      }
    })
    csOptions.forEach(option => option.style.display = "none")
    aFilteredOptions.forEach(function(option) {
      option.style.display = ""
    })
    setState('filtered')
  }

  function doFilter2() {
    const terms = csInput2.value
    const aFilteredOptions2 = aOptions2.filter(function(option) {
      if (option.innerText.toUpperCase().startsWith(terms.toUpperCase())) {
        return true
      }
    })
    csOptions2.forEach(option => option.style.display = "none")
    aFilteredOptions2.forEach(function(option) {
      option.style.display = ""
    })
    setState('filtered')
  }

  function makeChoice(whichOption) {
    const optionTitle = whichOption.querySelector('strong')
    csInput.value = optionTitle.textContent
    moveFocus(document.activeElement, 'input')
  }
  function makeChoice2(whichOption) {
    const optionTitle = whichOption.querySelector('strong')
    csInput2.value = optionTitle.textContent
    moveFocus2(document.activeElement, 'input')
  }

  function setState(newState) {
    switch (newState) {
      case 'initial':
        csState = 'initial'
        break
      case 'opened':
        csState = 'opened'
        break
      case 'filtered':
        csState = 'filtered'
        break
      case 'closed':
        csState = 'closed'
    }
  }

  function doKeyAction(whichKey) {
    const currentFocus = findFocus()
    switch(whichKey) {
      case 'Enter':
        if (csState === 'initial') {
          // if state = initial, toggleOpen and set state to opened
          toggleList('Open')
          setState('opened')
        } else if (csState === 'opened' && currentFocus.tagName === 'LI') {
          // if state = opened and focus on list, makeChoice and set state to closed
          makeChoice(currentFocus)
          toggleList('Shut')
          setState('closed')
        } else if (csState === 'opened' && currentFocus === csInput) {
          // if state = opened and focus on input, close it
          toggleList('Shut')
          setState('closed')
        } else if (csState === 'filtered' && currentFocus.tagName === 'LI') {
          // if state = filtered and focus on list, makeChoice and set state to closed
          makeChoice(currentFocus)
          toggleList('Shut')
          setState('closed')
        } else if (csState === 'filtered' && currentFocus === csInput) {
          // if state = filtered and focus on input, set state to opened
          toggleList('Open')
          setState('opened')
        } else { // i.e. csState is closed, or csState is opened/filtered but other focus point?
          // if state = closed, set state to filtered? i.e. open but keep existing input?
          toggleList('Open')
          setState('filtered')
        }
        break

      case 'Escape':
        // if state = initial, do nothing
        // if state = opened or filtered, set state to initial
        // if state = closed, do nothing
        if (csState === 'opened' || csState === 'filtered') {
          toggleList('Shut')
          setState('initial')
        }
        break

      case 'ArrowDown':
        if (csState === 'initial' || csState === 'closed') {
          // if state = initial or closed, set state to opened and moveFocus to first
          toggleList('Open')
          moveFocus(csInput, 'forward')
          setState('opened')
        } else {
          // if state = opened and focus on input, moveFocus to first
          // if state = opened and focus on list, moveFocus to next/first
          // if state = filtered and focus on input, moveFocus to first
          // if state = filtered and focus on list, moveFocus to next/first
          toggleList('Open')
          moveFocus(currentFocus, 'forward')
        }
        break
      case 'ArrowUp':
        if (csState === 'initial' || csState === 'closed') {
          // if state = initial, set state to opened and moveFocus to last
          // if state = closed, set state to opened and moveFocus to last
          toggleList('Open')
          moveFocus(csInput, 'back')
          setState('opened')
        } else {
          // if state = opened and focus on input, moveFocus to last
          // if state = opened and focus on list, moveFocus to prev/last
          // if state = filtered and focus on input, moveFocus to last
          // if state = filtered and focus on list, moveFocus to prev/last
          moveFocus(currentFocus, 'back')
        }
        break
      default:
        if (csState === 'initial') {
          // if state = initial, toggle open, doFilter and set state to filtered
          toggleList('Open')
          doFilter()
          setState('filtered')
        } else if (csState === 'opened') {
          // if state = opened, doFilter and set state to filtered
          doFilter()
          setState('filtered')
        } else if (csState === 'closed') {
          // if state = closed, doFilter and set state to filtered
          doFilter()
          setState('filtered')
        } else { // already filtered
          doFilter()
        }
        break
    }
  }

  function doKeyAction2(whichKey) {
    const currentFocus = findFocus()
    switch(whichKey) {
      case 'Enter':
        if (csState === 'initial') {
          // if state = initial, toggleOpen and set state to opened
          toggleList2('Open')
          setState('opened')
        } else if (csState === 'opened' && currentFocus.tagName === 'LI') {
          // if state = opened and focus on list, makeChoice and set state to closed
          makeChoice2(currentFocus)
          toggleList2('Shut')
          setState('closed')
        } else if (csState === 'opened' && currentFocus === csInput2) {
          // if state = opened and focus on input, close it
          toggleList2('Shut')
          setState('closed')
        } else if (csState === 'filtered' && currentFocus.tagName === 'LI') {
          // if state = filtered and focus on list, makeChoice and set state to closed
          makeChoice2(currentFocus)
          toggleList2('Shut')
          setState('closed')
        } else if (csState === 'filtered' && currentFocus === csInput2) {
          // if state = filtered and focus on input, set state to opened
          toggleList2('Open')
          setState('opened')
        } else { // i.e. csState is closed, or csState is opened/filtered but other focus point?
          // if state = closed, set state to filtered? i.e. open but keep existing input?
          toggleList2('Open')
          setState('filtered')
        }
        break

      case 'Escape':
        // if state = initial, do nothing
        // if state = opened or filtered, set state to initial
        // if state = closed, do nothing
        if (csState === 'opened' || csState === 'filtered') {
          toggleList('Shut')
          setState('initial')
        }
        break

      case 'ArrowDown':
        if (csState === 'initial' || csState === 'closed') {
          toggleList2('Open')
          moveFocus2(csInput2, 'forward')
          setState('opened')
        } else {
          toggleList2('Open')
          moveFocus2(currentFocus, 'forward')
        }
        break
      case 'ArrowUp':
        if (csState === 'initial' || csState === 'closed') {
          toggleList2('Open')
          moveFocus2(csInput, 'back')
          setState('opened')
        } else {
          moveFocus2(currentFocus, 'back')
        }
        break
      default:
        if (csState === 'initial') {
          toggleList2('Open')
          doFilter2()
          setState('filtered')
        } else if (csState === 'opened') {
          doFilter2()
          setState('filtered')
        } else if (csState === 'closed') {
          doFilter2()
          setState('filtered')
        } else {
          doFilter2()
        }
        break
    }
  }
});
