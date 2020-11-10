$(document).ready(function () {
 $('.nav-icon3').click(function () {
  $(this).toggleClass('open');
 });
});

function menuSlide() {
 $('.mobile_nav').toggleClass("show")
 $('.mobile_nav').toggleClass("toggle")
 $('.nav-icon3-bar').toggleClass("nav-icon3-black")
}

$(".nav-icon3").on("click", function () {
 menuSlide();
})

Modernizr.on('webp', function(result) {
    if (result) {
      console.log('webp supported');
      $('.title_image').css('background-image', 'url("' + '../../images/1920/chiral2.webp' + '")');
      // supported
    } else {
      console.log('webp not supported');
      $('.title_image').css('background-image', 'url("' + '../../images/1920/chiral2_1.png' + '")');
      // not-supported
    }
  });  