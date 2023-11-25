$(document).ready(function(){
  $(" #WorksSlider .owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop:true,
    autoplay:true,
    touchDrag:true,
    autoplayTimeout:4000
  });
});


$(document).ready(function(){
  $(" #port .owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop:true
    // autoplayTimeout:4000
  });
});

$(document).ready(function(){
  $(" #BlogSecondpage .owl-carousel").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop:true
    // autoplayTimeout:4000
  });
});