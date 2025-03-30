'use strict';

let div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.height = '100px';
div.style.width = '100px';
document.body.append(div);
console.log(`Ширина прокрутки: ${div.offsetWidth - div.clientWidth}px`);
div.remove();