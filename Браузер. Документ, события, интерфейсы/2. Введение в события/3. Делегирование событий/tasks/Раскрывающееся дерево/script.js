'use strict';

// tree.addEventListener('mouseover', function(event) {
//     let target = event.target;
//     if (target.tagName === 'SPAN') {
//         target.style.fontWeight = 'bold';
//         target.addEventListener('mouseleave', function(event) {
//             target.style.fontWeight = 'normal';
//         }, {once: true});
//     }
// });

tree.addEventListener('click', function(event) {
    let target = event.target;
    if (target.tagName === 'SPAN') {
        if (target.nextElementSibling) {
            target.nextElementSibling.hidden = !target.nextElementSibling.hidden;
        }
    }
});
