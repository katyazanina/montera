'use strict';


import { event } from 'jquery';
import * as swiper from './modules/swiper.js';
import * as animation from './modules/animation.js';
import * as menu from './modules/menu.js';
import * as validation from './modules/validation.js';
// import * as filter from './modules/filter.js';
import * as map from './modules/map.js';
// import * as accordion from './modules/accordion.js';

// import 'lazysizes';
// import CustomSelect from 'vanilla-js-dropdown';

var $ = require("jquery");
window.jQuery = $;

var fancybox = require("@fancyapps/fancybox");

import Masonry from 'masonry-layout'



// Фэнси бокс галерея для галерей и попапов

$('[data-fancybox]').fancybox({
    buttons: [
        'slideShow',
        'fullScreen',
        'thumbs',
        //'share',
        'download',
        //'zoom',
        'close'
    ],
    thumbs: {
        autoStart: false, // Display thumbnails on opening
        hideOnClose: true, // Hide thumbnail grid when closing animation starts
        // parentEl: ".fancybox-container", // Container is injected into this element
        axis: "y" // Vertical (y) or horizontal (x) scrolling
    },
    youtube: {
        controls: 1,
        showinfo: 0
    },
    vimeo: {
        color: 'f00'
    }

});

$.fancybox.defaults.backFocus = false;


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);


});










// Маленькие действия
// Поиск
// Кнопка поделиться
function prevent(evt) {
    evt.preventDefault();
}
// document.querySelector('.search button').addEventListener('click', prevent);
// document.querySelector('.search button').addEventListener('click', function(event) {

//     event.stopPropagation();
//     document.querySelector('.header').addEventListener('click', function(event) {
//         event.stopPropagation();
//     })

//     function remove() {
//         document.querySelector('.search').classList.remove('active');
//     }

//     document.querySelector('.search').classList.toggle('active');
//     document.querySelector('.search button').removeEventListener('click', prevent);
//     if (document.querySelector('.search').classList.contains('active')) {

//         document.addEventListener('click', remove)
//     } else {
//         document.removeEventListener('click', remove)
//     }
// })





document.addEventListener('wpcf7mailsent', function(event) {
    $.fancybox.open({
        src: '#popup-modal-ok',

    });
    setTimeout(function() {
        $.fancybox.close(true);

    }, 3000)
});


// Файл загрузки

let inputF = document.getElementById('fl_inp');

if (inputF) {
    inputF.addEventListener('change', function(e) {
        let fileName = e.target.value.split('\\').pop();
        if (fileName) {
            // document.getElementById('fl_name').innerHTML = "";
            document.getElementById('fl_name').textContent = fileName;
        }
    });
}

function parallaxFooter() {
    if (window.innerHeight > document.querySelector('.footer__parallax-wrap').offsetHeight) {
        document.querySelector('.footer__parallax-wrap').style.position = 'fixed';

        document.querySelector('main').style.paddingBottom = document.querySelector('.footer__parallax-wrap').offsetHeight + 'px';


        document.querySelectorAll('.footer__parallax-wrap .button').forEach((element, index) => {

            element.addEventListener('click', function() {
                window.scroll({
                    behavior: 'smooth',

                    top: document.getElementById('form').offsetTop
                });
            })

        });
    } else {

        document.querySelector('.footer__parallax-wrap').style.position = 'static';

        document.querySelector('main').style.paddingBottom = '0px';

    }

}

const videoHero = document.querySelector('.hero__video');
document.addEventListener('DOMContentLoaded', function() {
    parallaxFooter()


    if (videoHero) {
        // Загружаем видео
        videoHero.getElementsByTagName('source')[0].src = videoHero.dataset.src;
        videoHero.load();

        videoHero.play();

        if (videoHero.played) {
            setTimeout(function() {
                document.querySelector('.hero__overlay').classList.add('visible');

            }, 100)

        }


    }


})

window.addEventListener('resize', function() {
    parallaxFooter()
})
parallaxFooter()


// var
//     words = ['Типография', 'Monte Print'],
//     part,
//     i = 0,
//     offset = 0,
//     len = words.length,
//     forwards = true,
//     skip_count = 0,
//     skip_delay = 5,
//     speed = 100;

// var wordflick = function() {
//     setInterval(function() {
//         if (forwards) {
//             if (offset >= words[i].length) {
//                 ++skip_count;
//                 if (skip_count == skip_delay) {
//                     forwards = false;
//                     skip_count = 0;
//                 }
//             }
//         } else {
//             if (offset == 0) {
//                 forwards = true;
//                 i++;
//                 offset = 0;
//                 if (i >= len) {
//                     i = 0;
//                 }
//             }
//         }
//         part = words[i].substr(0, offset);
//         if (skip_count == 0) {
//             if (forwards) {
//                 offset++;
//             } else {
//                 offset--;
//             }
//         }
//         $('.word').text(part);
//     }, speed);
// };

// $(document).ready(function() {
//     wordflick();
// });

document.querySelectorAll('.button[href="#form"]').forEach(element => {
    element.addEventListener('click', function() {
        if (element.dataset.comment) {
            console.log(element.dataset.comment);
            document.querySelector('.input-text').value = element.dataset.comment;
        } else {
            console.log(element.dataset.comment);
            document.querySelector('.input-text').value = "";
        }
    })
});


document.querySelectorAll('form').forEach((element, index) => {
    if (!element.classList.contains('form-search')) {


        element.querySelector('.button').addEventListener('click', function() {


            let tel = element.querySelector('input[type="tel"]');
            let email = element.querySelector('input[type="email"]');
            if (tel.checkValidity()) {
                email.required = false;
            } else {
                email.required = true;
            }

            if (email.checkValidity()) {
                tel.required = false;
            } else {
                tel.required = true;
            }


        })


        element.addEventListener('submit', function(event) {
            event.preventDefault();
            let dataF = new FormData(element);

            $.ajax({
                url: element.getAttribute('action'),
                type: "POST",
                data: dataF,
                processData: false,
                contentType: false,
                cache: false,
                success: function(data) {


                    $.fancybox.open({
                        src: '#popup-modal-ok',

                    });
                    setTimeout(function() {
                        $.fancybox.close(true);

                    }, 3000)
                },
                error: function(data) {

                    $.fancybox.open({
                        src: '#popup-modal-error',

                    });
                    setTimeout(function() {
                        $.fancybox.close(true);

                    }, 3000)
                }

            });


        })
    }

})