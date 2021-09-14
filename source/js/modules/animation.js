// Функция видимость при скролле

var Visible = function(target) {
    // Все позиции элемента
    var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код

        return true;
    } else {
        // Если элемент не видно, то запускаем этот код
        return false;
    };
};



// Переменная для меню
let oldScrollTopPosition = 0;
let winScroll;
let scrollTopPosition;




window.addEventListener('scroll', function() {
    winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    scrollTopPosition = document.body.scrollTop || document.documentElement.scrollTop;


    document.querySelectorAll('.title').forEach(element => {
        if (Visible(element)) {
            element.classList.add('show');
        }
    });
    document.querySelectorAll('.title-small').forEach(element => {
        if (Visible(element)) {
            element.classList.add('show');
        }
    });
    document.querySelectorAll('.title-form').forEach(element => {
        if (Visible(element)) {
            element.classList.add('show');
        }
    });
    document.querySelectorAll('.title-inner').forEach(element => {
        if (Visible(element)) {
            element.classList.add('show');
        }
    });
    // if (winScroll > 0) {
    //     document.body.classList.add('htmlscroll');
    // } else {
    //     document.body.classList.remove('htmlscroll');
    // }

});

window.addEventListener('load', function() {
    document.querySelectorAll('.title').forEach(element => {
        if (Visible(element)) {
            element.classList.add('show');
        }
    });
    document.querySelectorAll('.title-small').forEach(element => {
        if (Visible(element)) {
            element.classList.add('show');
        }
    });
    document.querySelectorAll('.title-form').forEach(element => {
        if (Visible(element)) {
            element.classList.add('show');
        }
    });
    document.querySelectorAll('.title-inner').forEach(element => {
        if (Visible(element)) {
            element.classList.add('show');
        }
    });
})