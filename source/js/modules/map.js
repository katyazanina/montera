let mapsR = document.querySelector('.yandexmap');

if (mapsR) {
    let lat = document.getElementById('lat').textContent;
    let lon = document.getElementById('lon').textContent;
    let name = document.getElementById('adress').textContent;
    let geo = [lat, lon];

    let tag;
    if (typeof(ymaps) == 'undefined') {
        tag = document.createElement('script');
        tag.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        tag.onload = function() {
            ymaps.ready(init);
        }
    } else {
        ymaps.ready(init);
    }

    function init() {
        // ymaps.ready(function() {
        let map = new ymaps.Map(mapsR, {
            // center: [59.880069, 30.259939],
            center: geo,
            zoom: 15
        });

        let place = new ymaps.Placemark(
            geo, {
                hintContent: name,
            }, {
                iconImageHref: '/pin.svg',

                iconImageSize: [64, 64],
                iconLayout: 'default#image',
            }
        );
        map.geoObjects.add(place);
        map.behaviors.disable('scrollZoom');
        // map.behaviors.disable('multiTouch');
        map.behaviors.disable('drag');

        mapsR.addEventListener('click', function() {
            map.behaviors.enable('drag');
            map.behaviors.disable('scrollZoom');
        })
    };

}