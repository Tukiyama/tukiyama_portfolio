$(function(){
  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if(slideIndex == 0){
      $('.prev-btn').hide();
    }else if(slideIndex == 2){
      $('.next-btn').hide();
    }
  }

  $('.change-btn').click(function(){
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if($(this).hasClass('next-btn')){
      $displaySlide.next().addClass('active');
    }else{
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });

  $('#top-btn').click(function(){
    $('html,body').animate({
      'scrollTop':0
    },'slow');
  });

  $('a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500);
  });

  $('.faq-list-item').click(function(){
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    }else{
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  });


  $('#vegas').vegas({
        slides: [
            { src: '../image/startup-593327__340.jpg' },
            { src: '../image/home-office-336373__340.jpg' },
            { src: '../image/writing-1149962__340.jpg' },
        ],

        transition:'zoomOut',
        transitionDuration:3000,
        overlay:true

    });


});
