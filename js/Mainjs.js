$(document).ready(function(){
  $(" #worked .owl-carousel").owlCarousel({
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
  $(" #innerBlog .owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    nav: false,
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