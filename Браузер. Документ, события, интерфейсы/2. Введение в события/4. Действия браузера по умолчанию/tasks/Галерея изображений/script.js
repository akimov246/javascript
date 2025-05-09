'use strict';

thumbs.addEventListener('click', function(event) {
    event.preventDefault();
    let target = event.target.closest('a');

    if (!target || !thumbs.contains(target)) return;

    largeImg.src = target.getAttribute('href');
});