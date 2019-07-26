$(document).ready(() => {
  $('#menu').on('click', () => {
    $('#MytopNav').toggleClass('responsive');
    $('#menu').toggleClass('toggle');
  });

  const height = $(window).height();

  function getAnimation() {
    if (($(window).scrollTop() + height) >= $('#animate2').offset().top) {
      $('#animate1 .animate-item').css({ visibility: 'visible' }).addClass('animated zoomIn');
    }
    if (($(this).scrollTop() + height) >= $('#animate-point1').offset().top) {
      $('#animate2 .animate-item').css({ visibility: 'visible' }).addClass('animated slideInLeft');
    }
    if (($(this).scrollTop() + height) >= $('#animate-point2').offset().top) {
      $('#animate3 .animate-item').css({ visibility: 'visible' }).addClass('animated slideInUp');
    }
    if (($(this).scrollTop() + height) >= $('#animate4').offset().top) {
      $('#animate4 .animate-item').css({ visibility: 'visible' }).addClass('animated revealText');
    }
    if (($(this).scrollTop() + height) >= $('#animate-point3').offset().top) {
      $('#animate5 .animate-item').css({ visibility: 'visible' }).addClass('animated flipInX');
      $('#animate-point3 .animate-item').css({ visibility: 'visible' }).addClass('animated flipInX');
    }
    if (($(this).scrollTop() + height) >= $('#animate6').offset().top) {
      $('#animate6').css({ visibility: 'visible' }).addClass('animated flipInY');
    }
  }

  function initStartOfAnimation() {
    if ($(window).width() >= '768') {
      $(window).scroll(getAnimation);
    } else {
      $('.animate-item').css({ visibility: 'visible' });
    }
  }
  initStartOfAnimation();
});
