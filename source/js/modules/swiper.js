import Swiper, { Scrollbar, Controller, A11y, Thumbs, Navigation, EffectCoverflow, Pagination, EffectFade, Autoplay, Mousewheel, Keyboard, Lazy } from 'swiper';

Swiper.use([Scrollbar, Controller, A11y, Thumbs, EffectFade, EffectCoverflow, Pagination, Navigation, Autoplay, Mousewheel, Keyboard, Lazy]);

function updateSlider(slider) {

    if (slider != undefined) {
        if (Array.isArray(slider)) {

            if ((slider.length != 0) || (slider.length != undefined)) {

                for (let i = 0; i < slider.length; i++) {
                    slider[i].update();
                }
            }
        } else {
            slider.update();


        }

    }
}





let swiperServ;
if (document.querySelector('.swiper-container--serv')) {
    swiperServ = new Swiper('.swiper-container--serv', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        slidesPerGroup: 1,
        breakpoints: {
            // when window width is <= 320px
            767: {
                slidesPerView: 2,

            },
            1280: {
                slidesPerView: 4,

            }
        },


    });
}


let swiperServT;
if (document.querySelector('.swiper-container--serv-type')) {
    swiperServT = new Swiper('.swiper-container--serv-type', {
        slidesPerView: 1,
        spaceBetween: 60,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        slidesPerGroup: 1,
        breakpoints: {
            // when window width is <= 320px
            767: {
                slidesPerView: 2,

            },
            1280: {
                slidesPerView: 3,

            }
        },


    });
}

let swiperClient;
if (document.querySelector('.swiper-container--client')) {
    swiperClient = new Swiper('.swiper-container--client', {
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 1500,
        // loop: true,
        navigation: {
            nextEl: '.client__wrap .swiper-button-next',
            prevEl: '.client__wrap .swiper-button-prev',
        },
        breakpoints: {
            // when window width is <= 320px
            767: {
                slidesPerView: 4,

            },
            1280: {
                slidesPerView: 8,
                spaceBetween: 50,

            }
        },

    });
}

let swiperThumbs;

if (document.querySelector('.swiper-container--portfolio-slider-thumb')) {
    swiperThumbs = new Swiper(".swiper-container--portfolio-slider-thumb", {

        grabCursor: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        slidesPerView: 'auto',
        speed: 1500,
        // direction: "vertical",
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

        breakpoints: {


            1650: {
                direction: "vertical",

            }
        },
    });




}

let swiperPortfolioThumbs;
if (document.querySelector('.swiper-container--portfolio-slider-content')) {
    swiperPortfolioThumbs = new Swiper(".swiper-container--portfolio-slider-content", {
        // slidesPerView: 'auto',
        grabCursor: true,
        spaceBetween: 10,
        // freeMode: true,
        speed: 1500,
        hashNavigation: {
            // replaceState: true,
            watchState: true,
        },



        thumbs: {

            swiper: swiperThumbs,

        },

    });



}

window.addEventListener('resize', function() {
    updateSlider(swiperPortfolioThumbs);
    updateSlider(swiperThumbs);
    updateSlider(swiperClient);
    updateSlider(swiperServ);
    updateSlider(swiperServT);

})