//Фиксация навигации сверху

window.onload = function(){
  window.onscroll = function showHeader(){
    var header = document.querySelector('.header');

    if(window.pageYOffset > 300){
      header.classList.add('header_fixed');
    }
    else{
      header.classList.remove('header_fixed');
    }
  }
}




//Всплывающее окно с картинкой
$('#inline-popups').magnificPopup({
  delegate: 'a',
  removalDelay: 100, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true,
  closeOnContentClick:true,
  closeBtnInside:false,
  removalDelay: 100,
});

$(document).ready(function(){
  $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 700);
  });
  $('.social-icon').hover(
       function(){ $(this).addClass('animated jello') },
       function(){ $(this).removeClass('animated jello') });
  
});

$('.menu-btn').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
});
