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
    $('.first').css('background-image', 'url("' + 'images/1920/sdplus_mockup.webp' + '")');
    $('.second').css('background-image', 'url("' + 'images/1920/chiral2.webp' + '")');
    $('.third').css('background-image', 'url("' + 'images/1920/CSS_Challenges_Portfolio.svg' + '")');
    $('.fourth').css('background-image', 'url("' + 'images/1920/behance.webp' + '")');
    // supported
  } else {
    console.log('webp not supported');
    $('.first').css('background-image', 'url("' + 'images/1920/sdplus_mockup1.png' + '")');
    $('.second').css('background-image', 'url("' + 'images/1920/chiral2_1.png' + '")');
    $('.third').css('background-image', 'url("' + 'images/1920/CSS_Challenges_Portfolio.svg' + '")');
    $('.fourth').css('background-image', 'url("' + 'images/1920/behance1.png' + '")');
    // not-supported
  }
});  