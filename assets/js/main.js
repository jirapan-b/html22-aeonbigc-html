window.onload = function() {
    // script
    AOS.init({
        duration: 800,
        once: true,
        offset: 0,
    });
    $($(".toggle").click(function() {
        if ($(".menu").hasClass("open")) {
            $(".menu").removeClass("open");
            $(this).find("i").removeClass('icon-x')
            $(this).find("i").addClass('icon-align-justify')
        } else {
            $(".menu").addClass("open");
            $(this).find("i").removeClass('icon-align-justify')
            $(this).find("i").addClass('icon-x')
        }
    }));


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 60) {
            $(".site-header .nav").addClass("scroll");
        } else {
            $(".site-header .nav").removeClass("scroll");
        }
    });


    $('.promo-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        // cssEase: 'linear',
        touchMove: true,
        prevArrow: '<button class="slick-prev"><img src="assets/img/icon/prev@2x.png" alt=""></button>',
        nextArrow: '<button class="slick-next"><img src="assets/img/icon/next@2x.png" alt=""></button>',
        // prevArrow: '<button class="slick-prev"><span class="feather icon-chevron-left"></span></button>',
        // nextArrow: '<button class="slick-next"><span class="feather icon-chevron-right"></span></button>',

        //         responsive: [                        
        //             {
        //               breakpoint: 576,
        //               settings: {
        //                 centerMode: false,
        //                 variableWidth: false,
        //               }
        //             },
        //         ]
    });


    $('.card-reg-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        touchMove: true,
        prevArrow: '<span class="slick-prev"><img src="assets/img/icon/prev@2x.png" alt=""></span>',
        nextArrow: '<span class="slick-next"><img src="assets/img/icon/next@2x.png" alt=""></span>',
        responsive: [{
            breakpoint: 576,
            settings: {
                // arrows: false,
                adaptiveHeight: true,
            }
        }, ]
    });



    let theLanguage = $('html').attr('lang');

    let pathxxx = window.location.href;
    let splitText = pathxxx.split('/');
    let countArray = splitText.length - 1;
    // console.log(splitText[countArray]);
    // console.log(theLanguage);

    if (theLanguage == 'en') {
        var newlink = '/' + splitText[countArray];
    } else {
        var newlink = '/en/' + splitText[countArray];
    }

    // $(".switch-lang").attr('href', newlink);
    $(".switch-lang").attr('href', '.' + newlink);

    // console.log(newlink);


    // Card's name
    let pathCard = window.location.href;
    let splitCard = pathCard.split('#');
    let countArrayCard = splitCard.length - 1

    let cardName = splitCard[countArrayCard];;
    // console.log(cardName);

    if (cardName == 'big-c-world-mastercard') {
        $('.card-reg-slider').slick('slickGoTo', 0);
    } else if (cardName == 'big-c-platinum-visa') {
        $('.card-reg-slider').slick('slickGoTo', 1);
    } else if (cardName == 'big-c-exclusive') {
        $('.card-reg-slider').slick('slickGoTo', 2);
    }

    // en style 

    if (theLanguage == 'en') {
        if (($(window).width() < 1780) && ($(window).width() > 991)) {
            $('.site-header .menu .link').addClass('fz-less');
        } else {
            $('.site-header .menu .link').removeClass('fz-less');
        }
    }

    $(window).on('resize', function() {
        // let theLanguage = $('html').attr('lang');

        if (theLanguage == 'en') {
            if (($(window).width() < 1780) && ($(window).width() > 991)) {
                $('.site-header .menu .link').addClass('fz-less');
            } else {
                $('.site-header .menu .link').removeClass('fz-less');
            }
        }
    });

    // // th style 

    if (theLanguage != 'en') {
        if (($(window).width() < 1780) && ($(window).width() > 991)) {
            $('.site-header .menu .link').addClass('fz-th-less');
        } else {
            $('.site-header .menu .link').removeClass('fz-th-less');
        }
    }

    $(window).on('resize', function() {
        // let theLanguage = $('html').attr('lang');

        if (theLanguage != 'en') {
            if (($(window).width() < 1780) && ($(window).width() > 991)) {
                $('.site-header .menu .link').addClass('fz-th-less');
            } else {
                $('.site-header .menu .link').removeClass('fz-th-less');
            }
        }
    });


};

$(function() {
    ("use strict");
    // script
});