'use strict';

let field = document.querySelector('#field');
let ball = document.querySelector('#ball');

let y_center = field.scrollHeight / 2;
let x_center = field.scrollWidth / 2;
console.log(`Координаты центра поля:\n\tx: ${x_center}\n\ty: ${y_center}`);

setTimeout(() => {
    ball.style.left = x_center - (ball.clientWidth / 2) + 'px';
    ball.style.top = y_center - (ball.clientHeight / 2) + 'px';
}, 1000);