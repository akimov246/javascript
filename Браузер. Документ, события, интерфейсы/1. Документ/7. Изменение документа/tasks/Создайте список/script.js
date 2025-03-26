'use strict';

document.body.append(document.createElement('ul'));
let ul = document.querySelector('ul');

while (true) {
    let value = prompt('Введите пункт списка');
    if (!value) break;

    let li = document.createElement('li');
    li.textContent = value;
    ul.append(li);
}

// document.body.append(document.createElement('ol'));
// let ol = document.querySelector('ol');
// let counter = 0;
// while (true) {
//     if (counter >= 1000) break;
//     let value = Math.floor(Math.random() * 16777215);
//     if (!value) break;
//
//     let li = document.createElement('li');
//     li.textContent = value;
//     li.style.color = '#' + `${value.toString(16).padStart(6, '0')}`.toUpperCase();
//     ol.append(li);
//     counter++;
// }