
$(document).ready(function(){
    $('.slider').slick({
      arrows:false,
      dots:true,
      appendDots:'.slider-dots',
      dotsClass:'dots'
    });

  let hamberge = document.querySelector('.hamberg');
  let times = document.querySelector('.times');  
  let mobileNav = document.querySelector('.mobile-nav');
  
  hamberge.addEventListener('click',()=>{
    mobileNav.classList.add('open');
  });
  times.addEventListener('click',()=>{
    mobileNav.classList.remove('open');
  });
  });