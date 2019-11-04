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

//3d карточка
const card = document.querySelector('.portrait');
card.addEventListener('mousemove', startRotate);
card.addEventListener('mouseout', stopRotate);

function startRotate(event) {
  const portraitWrap = this.querySelector('.portrait-wrap');
  const halfHeight = portraitWrap.offsetHeight/2;
  const halfWidth = portraitWrap.offsetWidth/2;
  portraitWrap.style.transform = 'rotateX('+ - (event.offsetY - halfHeight) / 20 + 'deg)rotateY('+ (event.offsetX - halfWidth) / 15 + 'deg)';
}

function stopRotate(event){
  const portraitWrap = this.querySelector('.portrait-wrap');
  portraitWrap.style.transform = 'rotate(0)';
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
