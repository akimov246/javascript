'use strict';

let elem = document.querySelector('div');

function helper() {
    console.clear();
    console.log(`scrollHeight: ${Math.round(elem.scrollHeight)}`);
    console.log(`clientHeight: ${Math.round(elem.clientHeight)}`);
    console.log(`scrollTop: ${Math.round(elem.scrollTop)}`);
    let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
    console.log(`scrollBottom: ${Math.round(scrollBottom)}`);
}

elem.onclick = helper;