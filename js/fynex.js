/*
  [JS Index]
  
  ---
  
  Template Name: Fynex - Creative Coming Soon Template
  Author:  ex-nihilo
  Version: 1.0
*/


/*
  1. navigation
    1.1. page scroll
    1.2. highlight navigation
    1.3. close mobile menu
    1.4. collapse navigation
  2. snapping
  3. forms
    3.1. newsletter form
  4. YouTube player
  5. swiper slider
    5.1. swiper parallax slider
  6. slick slider
    6.1. slick fullscreen slideshow ZOOM/FADE
*/


$(function() {
    "use strict";
	
	
    // 1. navigation
    // 1.1. page scroll
    $(".page-scroll").on("click", function(e) {
        var $anchor = $(this);
        if ($(window).width() < 768) {
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr("href")).offset().top - 57
            }, 1500, 'easeInOutExpo');
        } else {
            $("html, body").stop().animate({
                scrollTop: $($anchor.attr("href")).offset().top - 80
            }, 1500, 'easeInOutExpo');
        };
        e.preventDefault();
    });
    // 1.2. highlight navigation
    $("body").scrollspy({
        target: ".navbar",
        offset: 80
    });
    // 1.3. close mobile menu
    $(".navbar-collapse ul li a").on("click", function() {
        $(".navbar-toggle:visible").click();
    });
	
    $(window).on("scroll", function() {
        if (viewportWidth() < 768) {
            // 1.4. collapse navigation
            if ($(".navbar").offset().top > 57) {
                $(".navbar-bg-switch").addClass("main-navigation-bg");
            } else {
                $(".navbar-bg-switch").removeClass("main-navigation-bg");
            }
        }
    });
	
    // 2. snapping
    if (viewportWidth() > 768) {
        var $windows = $('.page');
        $windows.windows({
            snapping: true, // snapping: false
            snapSpeed: 500,
            snapInterval: 1100,
            minRatio: 0.5
        });
    }
	
    // 3. forms
    // 3.1. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        $.post("subscribe.php");
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
	
	// 4. YouTube player
    $("#bgndVideo").YTPlayer();
	
	// 5. swiper slider
    // 5.1. swiper parallax slider
    var swiper = new Swiper(".parallax .swiper-container", {
        autoplay: true,
        speed: 800,
        parallax: true,
        mousewheelControl: false,
        keyboardControl: false,
        navigation: false,
        paginationClickable: true
    });
	
	// 6. slick slider
    // 6.1. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
	
});