'use strict';

$(document).ready(function () {

    // // header script
    // $('header').scrollToFixed({
    //     zIndex: 1000,
    // });

    // if ($(window).width() < 1200) {}

    // $('.btn-showmenu').click(function() {
    //     $('.menu').addClass('open');
    //     $('.overlay').fadeIn(500);
    // })
    // $('.overlay').click(function() {
    //     $(this).fadeOut(500);
    //     $('.menu').removeClass('open');
    // })

    // $(window).bind('scroll', function() {
    //     if ($(window).scrollTop() > 100) {
    //         $('header').addClass('hide', 'minimal');
    //     } else {
    //         $('header').removeClass('hide', 'minimal');
    //     }
    // });
    // $(window).bind('scroll', function() {
    //     if ($(window).scrollTop() > 200) {
    //         $('header').addClass('minimal');
    //     } else {
    //         $('header').removeClass('minimal');
    //     }
    // });

    // $('.search-toggle').click(function() {
    //     $(this).toggleClass('active');
    //     $('.search-wrap').fadeToggle(300);
    // })

    // // BANNER
    // $('.banner').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 1000,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     arrows: true,
    //     dots: true,
    //     fade: true,
    // });

    // // Partner slide
    // $('.partner-slide').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: false,
    //     infinite: true,
    //     responsive: [{
    //                 breakpoint: 1199,
    //                 settings: {
    //                     slidesToShow: 3,
    //                     slidesToScroll: 3,
    //                 }
    //             },
    //             {
    //                 breakpoint: 991,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     slidesToScroll: 2,
    //                 }
    //             },
    //             {
    //                 breakpoint: 767,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                 }
    //             }
    //         ]
    //         // autoplay: true,
    //         // autoplaySpeed: 5000,
    // });

    // // Project slide
    // $('.project-slide').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: false,
    //     infinite: true
    // });

    // // Gallery slide
    // $('.gallery-slide').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     // infinite: false,
    //     speed: 300,
    //     dots: false,
    //     arrows: true,
    //     centerMode: true,
    //     centerPadding: '200px',
    //     responsive: [{
    //             breakpoint: 1199,
    //             settings: {
    //                 centerPadding: '100px',
    //             }
    //         },
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 centerPadding: '80px',
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 centerPadding: '40px',
    //             }
    //         }
    //     ]
    // });

    // // history slide
    // $('.history-event').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots: false,
    //     fade: true,
    //     asNavFor: '.history-slide'
    // });
    // $('.history-year').slick({
    //     slidesToShow: 6,
    //     slidesToScroll: 1,
    //     asNavFor: '.history-slide',
    //     focusOnSelect: true,
    //     arrows: true,
    //     dots: false,
    //     responsive: [{
    //             breakpoint: 1199,
    //             settings: {
    //                 slidesToShow: 5,
    //             }
    //         },
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 4,
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         }
    //     ]
    // });

    // // Product slide
    // $('.product-slide').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots: false,
    //     fade: true,
    //     asNavFor: '.product-nav'
    // });
    // $('.product-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.product-slide',
    //     dots: false,
    //     arrows: false,
    //     focusOnSelect: true
    // });

    // // SERVICE TOGGLE
    // $('.feature .feature-name').click(function() {
    //     if ($(this).parent().hasClass('active') == true) {
    //         $(this).parent().removeClass('active')
    //         $(this).parent().find('.feature-des').slideUp(500);
    //     } else {
    //         $('.feature').removeClass('active');
    //         $('.feature').find('.feature-des').slideUp(500);
    //         $(this).parent().addClass('active')
    //         $(this).parent().find('.feature-des').slideDown(500);
    //     }
    // });

    // // top nav fixed
    // $('.top-nav ul').scrollToFixed({
    //     marginTop: 60,
    //     zIndex: 100,
    // });

    // // Page scroll to id
    // $('.top-nav a').mPageScroll2id({
    //     offset: 120,
    //     // highlightClass: 'active',
    //     forceSingleHighlight: true,
    // });

    // RITAVO DEPOT SCRIPT
    $('.product-adv').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        fade: true
    });

    $('.product-slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        arrows: true
    });

    $('.product-slick-wide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        arrows: true
    });

    $('.partner-slick').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        arrows: true
    });

    // about slide
    $('.about-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.about-nav'
    });
    $('.about-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.about-slide',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        vertical: true
    });

    // FAQ toggle
    $('.faq .faq-title').click(function () {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active');
            $(this).parent().find('.faq-content').slideUp(500);
        } else {
            $('.faq').removeClass('active');
            $('.faq').find('.faq-content').slideUp(500);
            $(this).parent().addClass('active');
            $(this).parent().find('.faq-content').slideDown(500);
        }
    });

    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());

    // product slide
    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });

    // Rating
    $('#bar-rating').barrating({
        theme: 'fontawesome-stars'
    });

    // responsive tab 
    $('#responsivetabs').responsiveTabs({
        startCollapsed: 'accordion'
    });
});