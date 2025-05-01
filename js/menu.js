$(function () {
    $('.menu > li').mouseenter(function () {
      $(this).find('.sub').stop().slideDown();
    });
  
    $('.menu > li').mouseleave(function () {
      $(this).find('.sub').stop().slideUp();
    });
  
    $('.sub li a').hover(function () {
    $('.sub li a').removeClass('active');
    $(this).addClass('active');
  });
  });

  