'use strict';

document.querySelector('#container').addEventListener('click', function(event) {
    let target = event.target;
    if (target?.classList.contains('remove-button')) {
        target.closest('.pane').remove();
    }
});