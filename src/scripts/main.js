'use strict';

const $ = window.$;

$('.burger-menu-wrapper').click(() => {
  if ($('.header__sidebar').hasClass('show')) {
    $('.header__sidebar').removeClass('show');
    $('.header__nav-wrapper').removeClass('show');
    $('.burger-menu').removeClass('burger-hide');
    $('.burger-menu-line').removeClass('line-hide');
    $('.burger-menu-close').removeClass('close-show');
    $('.burger-menu-close-line').removeClass('close-line-show');
  } else {
    $('.header__sidebar').addClass('show');
    $('.header__nav-wrapper').addClass('show');
    $('.burger-menu').addClass('burger-hide');
    $('.burger-menu-line').addClass('line-hide');
    $('.burger-menu-close').addClass('close-show');
    $('.burger-menu-close-line').addClass('close-line-show');
  }
});

$('.nav__item').click(() => {
  if ($('.header__sidebar').hasClass('show')) {
    $('.header__sidebar').removeClass('show');
    $('.header__nav-wrapper').removeClass('show');
    $('.burger-menu').removeClass('burger-hide');
    $('.burger-menu-line').removeClass('line-hide');
    $('.burger-menu-close').removeClass('close-show');
    $('.burger-menu-close-line').removeClass('close-line-show');
  }
});

// ---------  Carousel  --------

// ---- animation  -----
setInterval(() => {
  let position = 0;

  const headerContentWidth = $('.header__content').css('width');

  const width = parseInt(headerContentWidth);
  const left = Math.round(parseInt($('.header-carousel__list')
    .css('margin-left')));

  if (left === 0) {
    position = 1;
  }

  if (left > -width - 4 && left < -width + 4) {
    position = 2;
  }

  if (left > -width * 2 - 4 && left < -width * 2 + 4) {
    position = 3;
  }

  switch (position) {
    case 1: {
      $('.header-carousel__list').css('margin-left', '-100%');

      $('.header__switch-item--active')
        .removeClass('header__switch-item--active')
        .next().addClass('header__switch-item--active');
      break;
    }

    case 2: {
      $('.header-carousel__list').css('margin-left', '-200%');

      $('.header__switch-item--active')
        .removeClass('header__switch-item--active')
        .next().addClass('header__switch-item--active');
      break;
    }

    case 3: {
      $('.header-carousel__list').css('margin-left', '0');

      $('.header__switch-item--active')
        .removeClass('header__switch-item--active')
        .prev().prev().addClass('header__switch-item--active');
      break;
    }
  }
}, 3000);

// ---- right arrow ----
$('.header__arrow-next').click(() => {
  let position = 0;

  const headerContentWidth = $('.header__content').css('width');

  const width = parseInt(headerContentWidth);
  const left = Math.round(parseInt($('.header-carousel__list')
    .css('margin-left')));

  if (left === 0) {
    position = 1;
  }

  if (left > -width - 4 && left < -width + 4) {
    position = 2;
  }

  if (left > -width * 2 - 4 && left < -width * 2 + 4) {
    position = 3;
  }

  switch (position) {
    case 1: {
      $('.header-carousel__list').css('margin-left', '-100%');

      $('.header__switch-item--active')
        .removeClass('header__switch-item--active')
        .next().addClass('header__switch-item--active');
      break;
    }

    case 2: {
      $('.header-carousel__list').css('margin-left', '-200%');

      $('.header__switch-item--active')
        .removeClass('header__switch-item--active')
        .next().addClass('header__switch-item--active');
      break;
    }

    case 3: {
      $('.header-carousel__list').css('margin-left', '0');

      $('.header__switch-item--active')
        .removeClass('header__switch-item--active')
        .prev().prev().addClass('header__switch-item--active');
      break;
    }
  }
});

// ---- left arrow ----
$('.header__arrow-prev').click(() => {
  let position = 0;

  const headerContentWidth = $('.header__content').css('width');

  const width = parseInt(headerContentWidth);
  const left = Math.round(parseInt($('.header-carousel__list')
    .css('margin-left')));

  if (left === 0) {
    position = 1;
  }

  if (left > -width - 4 && left < -width + 4) {
    position = 2;
  }

  if (left > -width * 2 - 4 && left < -width * 2 + 4) {
    position = 3;
  }

  switch (position) {
    case 1: {
      $('.header-carousel__list').css('margin-left', '-200%');

      $('.header__switch-item--active')
        .removeClass('header__switch-item--active')
        .next().next().addClass('header__switch-item--active');
      break;
    }

    case 2: {
      $('.header-carousel__list').css('margin-left', '0');

      $('.header__switch-item--active')
        .removeClass('header__switch-item--active')
        .prev().addClass('header__switch-item--active');
      break;
    }

    case 3: {
      $('.header-carousel__list').css('margin-left', '-100%');

      $('.header__switch-item--active')
        .removeClass('header__switch-item--active')
        .prev().addClass('header__switch-item--active');
      break;
    }
  }
});
