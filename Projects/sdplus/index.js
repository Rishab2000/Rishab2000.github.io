// Hamburger functionality
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

// Show Exeperience roadmap text
$.fn.prepareTransitionText = function () {
    return this.each(function () {
        var el = $(this);
        // remove the transition class upon completion
        el.one('TransitionEnd webkitTransitionEnd transitionend oTransitionEnd', function () {
            el.removeClass('is-transitioningText');
        });

        // check the various CSS properties to see if a duration has been set
        var cl = ["transition-duration", "-moz-transition-duration", "-webkit-transition-duration", "-o-transition-duration"];
        var duration = 0;
        $.each(cl, function (idx, itm) {
            duration || (duration = parseFloat(el.css(itm)));
        });

        // if I have a duration then add the class
        if (duration != 0) {
            el.addClass('is-transitioningText');
            el[0].offsetWidth; // check offsetWidth to force the style rendering
        };
    });
};

// Show Exeperience roadmap text
$.fn.prepareTransitionList = function () {
    return this.each(function () {
        var el = $(this);
        // remove the transition class upon completion
        el.one('TransitionEnd webkitTransitionEnd transitionend oTransitionEnd', function () {
            el.removeClass('is-transitioningList');
        });

        // check the various CSS properties to see if a duration has been set
        var cl = ["transition-duration", "-moz-transition-duration", "-webkit-transition-duration", "-o-transition-duration"];
        var duration = 0;
        $.each(cl, function (idx, itm) {
            duration || (duration = parseFloat(el.css(itm)));
        });

        // if I have a duration then add the class
        if (duration != 0) {
            el.addClass('is-transitioningList');
            el[0].offsetWidth; // check offsetWidth to force the style rendering
        };
    });
};




$(".more_button").on('click', function () {
    if ($('.research_moreList').hasClass('research_moreList_show')) {
        $('.research_moreList').removeClass('research_moreList_show');
        $('.research_moreText').removeClass('research_moreText_show');
        $('.more_button').html('Read More...')
    } else {
        $('.research_moreList').prepareTransitionList().addClass('research_moreList_show');
        $('.research_moreText').prepareTransitionText().addClass('research_moreText_show');
        $('.more_button').html('<br> Read Less...')
    }

})

Modernizr.on('webp', function(result) {
    if (result) {
      console.log('webp supported');
      $('.title_image').css('background-image', 'url("' + '../../images/1920/sdplus_mockup.webp' + '")');
      // supported
    } else {
      console.log('webp not supported');
      $('.title_image').css('background-image', 'url("' + '../../images/1920/sdplus_mockup.png' + '")');
      // not-supported
    }
  });  