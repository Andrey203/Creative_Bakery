'use strict';

const $ = window.$;

$('.burger-menu-wrapper').click(() => {
  const navTopState = $('.header__sidebar').css('top');

  if (navTopState !== '0px') {
    $('.header__nav-wrapper')
      .css('top', '0');

    $('.header__sidebar')
      .css('top', '0');

    $('.burger-menu-line')
      .css('transform', 'translate(-30px)');

    $('.burger-menu')
      .css('transform', 'translate(30px)');

    $('.burger-menu-close')
      .css('transform', 'rotate(45deg) translate(0px)');

    $('.burger-menu-close-line')
      .css('transform', 'rotate(-45deg) translate(0px)');
  } else {
    $('.header__nav-wrapper')
      .css('top', '-100%');

    $('.header__sidebar')
      .css('top', '-100%');

    $('.burger-menu-close-line')
      .css('transform', 'rotate(-45deg) translate(30px)');

    $('.burger-menu-close')
      .css('transform', 'rotate(45deg) translate(30px)');

    $('.burger-menu')
      .css('transform', 'translate(0px)');

    $('.burger-menu-line')
      .css('transform', 'translate(0px)');
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
