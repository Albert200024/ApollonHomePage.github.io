$(document).ready(function (){
    //================================================== Navbar open and close function ==================================================//
    $(".navbar").hover(function() {
            $(this).addClass("nav-width-hover");
            $(this).removeClass("nav-width-not-hover");

            $(".page-container").addClass("page-container-width-open-navbar")
            $(".page-container").removeClass("page-container-width-dont-open-navbar")

            $(".content").addClass("content-show");
            $(".content-input").addClass("content-show-input");
            $(".content-logo").addClass("content-logo-show");

            $(".row").removeClass("navbar-dont-open-row");
            $(".row").addClass("navbar-open-row");
    }, function() {
            $(this).removeClass("nav-width-hover");
            $(this).addClass("nav-width-not-hover");

            $(".page-container").removeClass("page-container-width-open-navbar")
            $(".page-container").addClass("page-container-width-dont-open-navbar")

            $(".content").removeClass("content-show");
            $(".content-input").removeClass("content-show-input");
            $(".content-logo").removeClass("content-logo-show");

            $(".row").addClass("navbar-dont-open-row");
            $(".row").removeClass("navbar-open-row");
    });

    //================================================== Header background animation ==================================================//
    $(".header").hover(function() {
        $(this).css({
            "background-position":"25px 25px",
            "transition":"all 1s ease 0s"
        })
    }, function() {
        $(this).css({
            "background-position":"0 0",
            "transition":"all 1s ease 0s"
        })
    });

    //========================== navbar fixd delete ==========================//
    $(function() {
        var top = 0;
        var footTop = $('#footer').offset().top;

        var maxY = footTop - $('.navbar').outerHeight();


        $(window).scroll(function() {
            var y = $(this).scrollTop();


            if (y >= $('.navbar').height()) {
                if (y < maxY) {
                    $('.navbar').addClass('fixed').removeAttr('style');
                    console.log("open")
                } else {
                    $('.navbar').removeClass('fixed').css({
                        position: 'absolute',
                        top: (maxY - top) + 'px',
                        scrollBehavior: "smooth",
                        transition: "all ease .75s",
                    });

                    console.log((maxY - top))
                }
            } else {
                $('.navbar').removeClass('fixed');
            }
        });
    });

    //========================== Menu mobile open and close ==========================//
    let bool = true;
    $(".mobile-menu-open").click(function (){
        if(bool){
            $(".mobile-nav-menu").slideDown();
            $(".mobile_nav_btn_logo").attr("src", "img/close.svg");
            $("body").css("overflow", "hidden")
            bool = false;
        } else {
            $(".mobile-nav-menu").slideUp();
            $(".mobile_nav_btn_logo").attr("src", "img/btn_mobile_menu.svg");
            $("body").css("overflow", "visible")
            bool = true;
        }
    })

    //================================================== Header slider  ==================================================//
    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });

    //================================================== Portfolio slider ==================================================//
    var swiper = new Swiper(".portfolio_slider1_top_block", {
        effect: "flip",
        grabCursor: true,
        direction:"horizontal",
        speed: 1100,
        loop:true,

        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
    });

    var swiper = new Swiper(".portfolio_slider2_top_block", {
        effect: "flip",
        grabCursor: true,
        direction:"vertical",
        speed: 1100,
        loop:true,

        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
    });

    var swiper = new Swiper(".portfolio_slider1_bottom_block", {
        effect: "flip",
        grabCursor: true,
        direction:"horizontal",
        speed: 1100,
        loop:true,

        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
    });

    var swiper = new Swiper(".portfolio_slider2_bottom_block", {
        effect: "flip",
        grabCursor: true,
        direction:"vertical",
        speed: 1100,
        loop:true,

        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
    });

    //======== Portfolio mobile slider ========//
    var $swiper = $(".swiper-container");
    var $bottomSlide = null;
    var $bottomSlideContent = null;


    var mySwiper = new Swiper(".swiper-mobile-portfolio", {
        spaceBetween: "-10px",
        slidesPerView: 1.8,
        centeredSlides: true,
        grabCursor: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });


    //================================================== Otziv slider ==================================================//
    var swiper = new Swiper(".slider-otziv", {
        slidesPerView: 3,
        spaceBetween: 25,
        centeredSlides: true,
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //======== Otziv mobile slider ========//
    var $bottomSlide = null;
    var $bottomSlideContent = null;

    var mySwiper = new Swiper(".otziv_mobile", {
        spaceBetween: 16,
        slidesPerView: 1.8,
        centeredSlides: true,
        roundLengths: true,
        grabCursor: true,
        loop: true,
        loopAdditionalSlides: 30,


        breakpoints:{
            315: {
                slidesPerView:1.5
            },

            460:{
                slidesPerView: 1.9,
            }
        }
    });

    //================================================== Partner slider ==================================================//
    var swiper_partner1 = new Swiper('.partner_swiper_slider1', {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 20,
        mousewheel: true,
        autoplayDisableOnInteraction:true,
        grabCursor: true,
        speed: 1200,
        loop: true,
        autoplay: {
            delay: 0,
        },

        breakpoints:{
            315: {
                spaceBetween:8
            },

            768:{
                spaceBetween: 10,
            },

            1440:{
                spaceBetween: 20,
            }
        }
    });

    var swiper_partner2 = new Swiper('.partner_swiper_slider2', {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 30,
        mousewheel: true,
        grabCursor: true,
        loop: true,
        speed: 1700,
        autoplayDisableOnInteraction:true,
        autoplay: {
            delay: 0,
        },

        breakpoints:{
            315: {
                spaceBetween:8
            },

            768:{
                spaceBetween: 10,
            },


            1440:{
                spaceBetween: 20,
            }
        }
    });

    var swiper_partner3 = new Swiper('.partner_swiper_slider3', {
        direction: 'vertical',
        autoplayDisableOnInteraction:true,
        slidesPerView: 3,
        spaceBetween: 30,
        mousewheel: true,
        pauseOnMouseEnter: true,
        grabCursor: true,
        loop: true,
        speed: 1200,

        autoplay: {
            delay: 0,
        },

        breakpoints:{
            315: {
                spaceBetween:8
            },

            768:{
                spaceBetween: 10,
            },


            1440:{
                spaceBetween: 20,
            }
        }
    });

    $('.partner_swiper_slider3').on('mouseenter', function(e){
        console.log('stop autoplay');
        swiper_partner3.autoplay.stop()
    })

    $('.partner_swiper_slider3').on('mouseleave', function(e){
        console.log('start autoplay');
        swiper_partner3.autoplay.start()
    })


    $('.partner_swiper_slider2').on('mouseenter', function(e){
        console.log('stop autoplay');
        swiper_partner2.autoplay.stop()
    })

    $('.partner_swiper_slider2').on('mouseleave', function(e){
        console.log('start autoplay');
        swiper_partner2.autoplay.start()
    })


    $('.partner_swiper_slider1').on('mouseenter', function(e){
        console.log('stop autoplay');
        swiper_partner1.autoplay.stop()
    })

    $('.partner_swiper_slider1').on('mouseleave', function(e){
        console.log('start autoplay');
        swiper_partner1.autoplay.start()
    })

    //================================================== Teams slider ==================================================//
    var swiper = new Swiper(".swiper_team", {
        slidesPerView: 4,
        spaceBetween: 35,
        centeredSlides:false,
        watchOverflow: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints:{
            1100:{
                spaceBetween:15
            },

            1282:{
                spaceBetween:30
            },
            1440: {
                spaceBetween: 0
            },
            1640:{
                spaceBetween:30
            }
        }


    });

    //================================================== Map function ==================================================//
    $(document).ready(function () {
        ymaps.ready(init);
        function init() {
            var myMap = new ymaps.Map('map', {
                center: [40.78041604070807, 44.577514311461435],
                zoom: 13,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            });
            let myPlacemark = new ymaps.Placemark([40.78041604070807, 44.577514311461435], {
                balloonContent: 'Apollon lab',
                preset: 'islands#blackStretchyIcon',
            }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'img/location.svg',
                iconImageSize: [39, 58],
                iconImageOffset: [-24, -24],
                iconContentOffset: [15, 15],
                hideIconOnBalloonOpen: false
            });
            myMap.geoObjects.add(myPlacemark)
        }
    })
})