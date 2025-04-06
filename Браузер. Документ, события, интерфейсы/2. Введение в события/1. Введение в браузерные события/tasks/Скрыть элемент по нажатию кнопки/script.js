'use strict';

let button = document.querySelector('button');
let text = document.querySelector('#text');

button.addEventListener('click', () => {
    text.style.display = 'none';
});