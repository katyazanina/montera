document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.burger');
    let body = document.body;


    btn.addEventListener('click', function(event) {
        event.stopPropagation();
        body.classList.toggle('open');
        document.addEventListener('click', function() {
            body.classList.remove('open');
        })

    })
})