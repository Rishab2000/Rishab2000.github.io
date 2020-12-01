$(document).ready(function () {
  $(".nav-icon3").click(function () {
    $(this).toggleClass("open");
  });
});

function menuSlide() {
  $(".mobile_nav").toggleClass("show");
  $(".nav-icon3-bar").toggleClass("nav-icon3-black");
}

$(".nav-icon3").on("click", function () {
  menuSlide();
});


Modernizr.on('webp', function(result) {
  if (result) {
    console.log('webp supported');
    $('.first').css('background-image', 'url("' + 'images/internship.webp' + '")');
    $('.second').css('background-image', 'url("' + 'images/decisions.webp' + '")');
    $('.third').css('background-image', 'url("' + 'images/laws.webp' + '")');
    $('.fourth').css('background-image', 'url("' + 'images/learn.webp' + '")');
    $('.fifth').css('background-image', 'url("' + 'images/immersive.webp' + '")');
    // supported
  } else {
    console.log('webp not supported');
    $('.first').css('background-image', 'url("' + 'images/internship.jpeg' + '")');
    $('.second').css('background-image', 'url("' + 'images/decisions.jpeg' + '")');
    $('.third').css('background-image', 'url("' + 'images/laws.jpeg' + '")');
    $('.fourth').css('background-image', 'url("' + 'images/learn.jpeg' + '")');
    $('.fifth').css('background-image', 'url("' + 'images/immersive.jpeg' + '")');
    // not-supported
  }
});  