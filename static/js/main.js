$(document).ready(function () {
    'use strict';

    //********* page loader js

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);

    /*START MENU JS*/
    $(window).on('scroll', function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    //********** menu hides after click (mobile menu)

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });


    //*********** scrollspy js

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });


    //************ smooth scroll js

    $('a.smooth-menu,a.my-btn-1,a.my-btn-2,a.my-btn-3').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });

    /*$('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 10
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });*/

    /* Closes the Responsive Menu on Menu Item Click*/
    $('.navbar-collapse ul li a').on('click', function() {
        $('.navbar-toggle:visible').click();
    });
    /*END MENU JS*/

    // Filter items when filter link is clicked
    $(window).load(function(){
        /*$filter.find('a').click(function () {
            var selector = $(this).attr('data-filter');
            $filter.find('a').removeClass('current');
            $(this).addClass('current');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    animationDuration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });*/

    });



    //****** magnific popup

    $('.view').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    $('.video-view').magnificPopup({
        type:'iframe',
        zoom: {
            enabled: true,
            duration: 300
        }
    });




    /*START PORTFOLIO JS*/

    /*START WOW ANIMATIONS JS*/
    new WOW().init();
    /*END WOW ANIMATIONS JS*/



    //scrollspy


   /* $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });*/

    //************* Owl Carousel

    $(".testimonial-slider").owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });







});