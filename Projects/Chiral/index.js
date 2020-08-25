$(document).ready(function () {
 $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
  $(this).toggleClass('open');
 });
});

$(".mobile_nav").hide();

function menuSlide() {
 $(".project_container ").fadeToggle();
 $(".intro_text1 ").fadeToggle();
 $(".intro_text2").fadeToggle();
 $(".mobile_nav").slideToggle();
}

$("#nav-icon3").on("click", function () {
 menuSlide();
})