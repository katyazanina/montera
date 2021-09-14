// Определение тач устройств
const breakpointMobile = window.matchMedia('(min-width:1280px)');

let mobileFlag = false;
const breakpointCheckerForMobile = function() {
    // if larger viewport and multi-row layout needed

    if (breakpointMobile.matches === true) {
        mobileFlag = false
    } else if (breakpointMobile.matches === false) {
        mobileFlag = true;
    }
}
breakpointMobile.addListener(breakpointCheckerForMobile);
breakpointCheckerForMobile();
window.addEventListener('resize', () => {


    breakpointMobile.addListener(breakpointCheckerForMobile);
    breakpointCheckerForMobile();

});

(function accordion() {

    if (mobileFlag) {
        document.querySelectorAll('.accordion__item').forEach((element) => {

            element.querySelector('.accordion__title').addEventListener('click', function(event) {
                event.preventDefault();

                document.querySelectorAll('.accordion__item').forEach((element) => {
                    if (event.target != element.querySelector('.accordion__title')) {
                        element.classList.remove('active');
                        element.querySelector('.accordion__info').style.maxHeight = '0px';
                    }

                })

                element.classList.toggle('active');
                if (element.classList.contains('active')) {
                    element.querySelector('.accordion__info').style.maxHeight = element.querySelector('.accordion__info-wrap').offsetHeight + 'px';
                } else {
                    element.querySelector('.accordion__info').style.maxHeight = '0px';
                }
            })
        });
    }


}())