/* --------Menu Active-------- */
$(document).ready(function(){
  var page_link=window.location.href.substr(window.location.href.lastIndexOf("/")+1);
 
      $(this).css({
        'color' : '#27beb6'
      });
  });

/*---------------------------
:: Navbar on Scroll
-----------------------------*/     
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);    
     if ($(this).scrollTop() > 100) {
        $('nav').addClass('fixed-top');
      } 
      else {
        $('nav').removeClass("fixed-top");
      }         
});



// -------------------------
AOS.init({
  duration: 1200,
})
/*---------------------------
:: Home Swiper Slider
-----------------------------*/ 
var mySwiper = new Swiper('.swiper-home-slide', {
    direction: 'horizontal',
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    speed:1000,
    autoplay: 
    {
      delay: 2000,
    },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

/*---------------------------
:: events Swiper Slider
-----------------------------*/ 
var swiper = new Swiper('.dr-swiper', {
  slidesPerView: 2,
  // loop: true,
  // centeredSlides: true,
  spaceBetween:10,
  grabCursor: true,
  speed:1000,
  autoplay: 
    {
      delay: 2000,
    },
     navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },          
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  }
});
/*---------------------------
:: testimonial Swiper Slider
-----------------------------*/ 
var swiper = new Swiper('.swiper-footer', {
  slidesPerView:1,
  loop: true,
  // centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  speed:1000,
  autoplay: 
    {
      delay: 2000,
    },       
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  }
});
/*---------------------------
:: testimonial Swiper Slider
-----------------------------*/ 
var swiper = new Swiper('.swiper-testi-inner', {
  slidesPerView:2,
  loop: true,
  // centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  speed:1000,
  autoplay: 
    {
      delay: 2000,
    }, 
     navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },        
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  }
});

/*---------------------------
:: lightBox Gallery
-----------------------------*/
$(document).ready(function(){
    $('.lightgallery').lightGallery();
    $('.video-gallery').lightGallery();
});

/*---------------------------
:: Scroll To Top Button
-----------------------------*/
window.onscroll=function(){scrollFunction()};function scrollFunction(){if(document.body.scrollTop>10||document.documentElement.scrollTop>10){document.getElementById("myBtnn").style.display="block"}else{document.getElementById("myBtn").style.display="none"}}function topFunction(){document.body.scrollTop=0;document.documentElement.scrollTop=0};
  

 /*---------------------------
:: Window Onload Popup
-----------------------------*/
$(document).ready(function(){       
  $('#onmyModal').modal('show');
}); 

