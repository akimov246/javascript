'use strict';

let span = document.querySelector('span');
let ul = document.querySelector('ul');

span.onclick = function() {
    let currentClass = span.className;
    if (currentClass === 'closed') {
        span.className = 'opened';
        ul.className = 'opened';
    } else if (currentClass === 'opened') {
        span.className = 'closed';
        ul.className = 'closed';
    }
}