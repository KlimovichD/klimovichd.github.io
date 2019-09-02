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
$(function () {                                      // Когда страница загрузится
    $('.header__list-link').each(function () {             // получаем все нужные нам ссылки
        var location = window.location.href; // получаем адрес страницы
        var link = this.href;                // получаем адрес ссылки
        if(location == link) {               // при совпадении адреса ссылки и адреса окна
            $(this).addClass('active');  //добавляем класс
        }
    });
});

$(document).ready(function () {
   $('#btn1').on('click', function (e) {
      e.preventDefault;
      $(this).toggleClass('section__faqs-button-active');
      $('#list1').toggleClass('section__faqs-list-active');

   });
   $('#btn2').on('click', function (e) {
      e.preventDefault;
      $(this).toggleClass('section__faqs-button-active');
      $('#list2').toggleClass('section__faqs-list-active');
   });
   $('#btn3').on('click', function (e) {
      e.preventDefault;
      $(this).toggleClass('section__faqs-button-active');
      $('#list3').toggleClass('section__faqs-list-active');
   });
   $('#btn4').on('click', function (e) {
      e.preventDefault;
      $(this).toggleClass('section__faqs-button-active');
      $('#list4').toggleClass('section__faqs-list-active');
   });
   $('#btn5').on('click', function (e) {
      e.preventDefault;
      $(this).toggleClass('section__faqs-button-active');
      $('#list5').toggleClass('section__faqs-list-active');
   });
   $('#btn6').on('click', function (e) {
      e.preventDefault;
      $(this).toggleClass('section__faqs-button-active');
      $('#list6').toggleClass('section__faqs-list-active');
   });
   $('#btn7').on('click', function (e) {
      e.preventDefault;
      $(this).toggleClass('section__faqs-button-active');
      $('#list7').toggleClass('section__faqs-list-active');
   });
   $('#btn8').on('click', function (e) {
      e.preventDefault;
      $(this).toggleClass('section__faqs-button-active');
      $('#list8').toggleClass('section__faqs-list-active');
   });
   $('#btn9').on('click', function (e) {
      e.preventDefault;
      $(this).toggleClass('section__faqs-button-active');
      $('#list9').toggleClass('section__faqs-list-active');
   });

   $('.collapse').collapse()
   $('.section__openings-btn').on('click', function(){
      $(this).toggleClass('section__faqs-button-active');
     
  });
});

