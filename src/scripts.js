/*-----------------------------------------------------------------------------------

    Theme Name: Personala
    Theme URI: http://
    Description: The Multi-Purpose Onepage Template
    Author: his7am
    Author URI: http://themeforest.net/user/his7am
    Version: 1.0

-----------------------------------------------------------------------------------*/
$(function() {

    "use strict";

    var wind = $(window);


    // scrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -63            // offste (in px) for fixed top navigation
    });



    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");

        if(bodyScroll > 100){

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.png');

        }else{

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.png');
        }
    });



    // progress bar
    wind.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });



    // sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    // === owl-carousel === //

    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500
    });

    // Blog owlCarousel
    $('.blog .owl-carousel').owlCarousel({
        loop: true,
        // margin: 30,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });


    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.link',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});