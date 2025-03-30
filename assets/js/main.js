'user strict';
 
$(window).on(('load'), function(){
  $('.preloader').fadeOut(1000);


   // filter functions
   var $gallery = $(".gallery-wrapper");
   var filterFns = {};
   $gallery.isotope({
     itemSelector: '.gallery-item',
     masonry: {
       columnWidth: 0,
     }
   });
   // bind filter button click
   $('ul.filter').on('click', 'li', function () {
     $('ul.filter li').removeClass('active');
     $(this).addClass('active');
     var filterValue = $(this).attr('data-filter');
     // use filterFn if matches value
     filterValue = filterFns[filterValue] || filterValue;
     $gallery.isotope({
       filter: filterValue
     });
   });
});

$('.search-button').on('click', function(){
  $('.search-form-wrapper').addClass('active')
  $('.overlay').addClass('active')
})
$('.overlay').on('click', function(){
  $('.overlay').removeClass('active')
  $('.search-form-wrapper').removeClass('active')
  $('.header-top').removeClass('active')
})
$('.close-icon').on('click', function(){
  $('.overlay').removeClass('active')
  $('.search-form-wrapper').removeClass('active')
})




//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-sub-menu");

$('.menu li a').on('click', function (e) {
  var element = $(this).parent('li');
  if (element.hasClass('open')) {
    element.removeClass('open');
    element.find('li').removeClass('open');
    element.find('ul').slideUp(400, "swing");
  } else {
    element.addClass('open');
    element.children('ul').slideDown(400, "swing");
    element.siblings('li').children('ul').slideUp(400, "swing");
    element.siblings('li').removeClass('open');
    element.siblings('li').find('li').removeClass('open');
    element.siblings('li').find('ul').slideUp(400, "swing");
  }
});


var overlay = $('.overlay');
overlay.on('click', function() {
  $('.search-box').removeClass('open');
  $('.overlay').removeClass('active');

});

// Responsive Menu
var headerTrigger = $('.header-trigger');
headerTrigger.on('click', function(){
    $('.menu,.header-trigger').toggleClass('active')
    $('.overlay').toggleClass('overlay-clr')
    $('.overlay').removeClass('active')
});

var over = $('.overlay');
over.on('click', function() {
  $('.overlay').removeClass('overlay-clr')
  $('.menu, .header-trigger').removeClass('active')
})

// Video Pop Up
$('.video-button, .video').magnificPopup({
  type:'iframe',
});
// Image Popup
$('.img-link').magnificPopup({
  type:'image',
  gallery: {
    enabled: true
}
});

// Nice Select
$('select').niceSelect();

// Scroll To Top 
var scrollTop = $(".scrollToTop");
$(window).on('scroll', function () {
  if ($(this).scrollTop() < 500) {
    scrollTop.removeClass("active");
  } else {
    scrollTop.addClass("active");
  }
});

//Click event to scroll to top
$('.scrollToTop').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 300);
  return false;
});

// pagination
$('.pagination li a').on('click', function() {
  $('.pagination li a').removeClass('active')
  $(this).addClass('active')
})



$('.trigger-wrapper .dots').on('click', function() {
  $('.header-top').toggleClass('active')
  $('.overlay').toggleClass('active')
})


$('.banner-slider').slick({
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // adaptiveHeight: true,
  infinite: true,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1200,
});

$('.sponsor-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },

  ]
});

$('.payment-gateway-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  margin: 20,
  arrows:true,
  nextArrow: '<i class="las la-angle-right arrow-left"></i>',
  prevArrow: '<i class="las la-angle-left arrow-right"></i>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },

  ]
});

// Odometer Counter
$(".counter-item").each(function () {
  $(this).isInViewport(function (status) {
    if (status === "entered") {
      for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
        var el = document.querySelectorAll('.odometer')[i];
        el.innerHTML = el.getAttribute("data-odometer-final");
      }
    }
  });
});

//Count Down Java Script
$('.hosting-countdown').countdown({
  date: '12/10/2022 23:59:59',
  offset: +6,
},
function () {
  //alert('Done!');
});
  
// testimonial slider
$('.client-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  dots: false,
  autoplay: true,
  pauseOnHover: false,
  nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
  prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },

  ]
});
//Faq
$('.faq-wrapper .faq-title, .faq-wrapper-two .faq-title-two').on('click', function (e) {
  var element = $(this).parent('.faq-item, .faq-item-two');
  if (element.hasClass('open')) {
    element.removeClass('open');
    element.find('.faq-content, .faq-content-two').removeClass('open');
    element.find('.faq-content, .faq-content-two').slideUp(300, "swing");
  } else {
    element.addClass('open');
    element.children('.faq-content, .faq-content-two').slideDown(300, "swing");
    element.siblings('.faq-item, .faq-item-two').children('.faq-content, .faq-content-two').slideUp(300, "swing");
    element.siblings('.faq-item, .faq-item-two').removeClass('open');
    element.siblings('.faq-item, .faq-item-two').find('.faq-title, .faq-title-two').removeClass('open');
    element.siblings('.faq-item, .faq-item-two').find('.faq-content, .faq-content-two').slideUp(300, "swing");
  }
});