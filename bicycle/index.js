const menuBtn = document.querySelector('.header_menu-icon'),
         menuBlock = document.querySelector('.header_menu'),
         menuWrap = document.querySelector('.header_menu-wrap')
menuBtn.addEventListener('click', (e) => {
   let target = e.target;
   if(target.classList.contains('header_menu-wrap') || target.parentNode.classList.contains('header_menu-wrap')) {
      menuWrap.classList.toggle('active');
      menuBlock.classList.toggle('active');
   }
})

function ibg(){
   let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
   if(ibg[i].querySelector('img')){
   ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
         }
      }
   }
   
   ibg();

const anchors = document.querySelectorAll('a[href*="#"]'),
         scrollTopBtn = document.querySelector('.to_top');

anchors.forEach(item => {
   item.addEventListener('click', (e) => {
      e.preventDefault();
      const blockID = item.getAttribute('href').substr(1);
      
      document.getElementById(blockID).scrollIntoView({
         behavior: "smooth"
      })
   })
})


window.addEventListener('scroll', (e) =>{
   e.preventDefault();
   const screenHeight = e.path[1].screen.height,
            scrollHeight = e.path[1].scrollY;
   if(scrollHeight >= screenHeight) {
      scrollTopBtn.style.display = 'block';
   } else {
      scrollTopBtn.style.display = 'none';
   }
   
})