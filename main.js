(function ($) {
  'use strict';

  // menu-slide
  $('.menu-icon').on('click', function () {
    $('.menu-slide').animate({ right: 0 });
  });

  $('.menu-slide ul li').on('click', function () {
    $(this).children('ul').slideToggle();
  });

  $('.menu-slide ul li a').on('click', function () {
    $(this).children('.rotate').toggleClass('up');
  });

  // menu-close
  $('.menu-close').on('click', function () {
    $('.menu-slide').animate({ right: -250 });
  });

  // portfolio-menu-slide
  $('.portfolio-menu-icon').on('click', function () {
    $('.portfolio-menu-slide').animate({ right: 0 });
  });

  // portfolio-menu-close
  $('.portfolio-menu-close').on('click', function () {
    $('.portfolio-menu-slide').animate({ right: -250 });
  });

  // scrollTop
  $(window).scroll(function () {
    let distance = $(window).scrollTop();
    if (distance > 1450) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });
  $('.top').on('click', function () {
    $('html').animate({
      scrollTop: 0,
    });
  });

  //  wow js
  var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();
})(jQuery);
