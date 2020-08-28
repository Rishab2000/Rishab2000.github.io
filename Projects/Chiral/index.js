$(document).ready(function () {
 $('.nav-icon3').click(function () {
  $(this).toggleClass('open');
 });
});

function menuSlide() {
 $('.mobile_nav').toggleClass("show")
 $('.nav-icon3-bar').toggleClass("nav-icon3-black")
}

$(".nav-icon3").on("click", function () {
 menuSlide();
})