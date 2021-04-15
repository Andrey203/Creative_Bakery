'use strict';

const $ = window.$;

$('.burger-menu-wrapper').click(() => {
  const navTopState = $('.header__sidebar').css('top');

  if (navTopState !== '0px') {
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
