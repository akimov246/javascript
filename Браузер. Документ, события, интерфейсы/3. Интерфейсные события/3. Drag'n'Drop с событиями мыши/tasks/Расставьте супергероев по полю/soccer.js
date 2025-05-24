'use strict';

document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});

document.addEventListener('mousedown', function (event) {
    event.preventDefault();
    let target = event.target;
    if (!target.classList.contains('draggable')) return;

    let shiftX = event.clientX - target.getBoundingClientRect().left;
    let shiftY = event.clientY - target.getBoundingClientRect().top;
    target.style.position = 'absolute';
    moveAt(event.pageX, event.pageY);
    let targetCoords = target.getBoundingClientRect();

    function moveAt(pageX, pageY) {
        let left = pageX - shiftX;
        let top = pageY - shiftY;
        if (left <= 0) {
            left = 0;
        }
        if (left + target.offsetWidth >= document.body.offsetWidth) {
            left = document.body.offsetWidth - target.offsetWidth;
        }
        if (top <= 0) {
            top = 0;
        }
        if (top + target.offsetHeight >= document.body.offsetHeight) {
            top = document.body.offsetHeight - target.offsetHeight + 15;
        }


        target.style.left = left + 'px';
        target.style.top = top + 'px';
        target.scrollIntoView({block: 'nearest'});
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    target.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', onMouseMove);
    }, {once: true});
});