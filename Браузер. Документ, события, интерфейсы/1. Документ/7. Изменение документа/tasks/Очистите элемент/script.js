'use strict';

function clear(elem) {
    elem.replaceWith(elem.cloneNode(false));
    // Либо
    //elem.innerHTML = '';
}

let ol = document.querySelector('#elem');
setTimeout(() => clear(ol), 1000);