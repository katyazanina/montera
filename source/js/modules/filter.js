import { event } from "jquery";

document.querySelectorAll('.timetable__item').forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        document.querySelector('.timetable__list').addEventListener('click', function(event) {
            event.stopPropagation();
        })
        document.querySelectorAll('.timetable__smalllist-item').forEach(item => {

            console.log(element.dataset.class);

            if (item.classList.contains(element.dataset.class)) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }

            document.addEventListener('click', function() {
                item.style.display = "flex";
            })
        });



    })

});