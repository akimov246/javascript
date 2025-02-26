'use strict';

// Задачи

// Напишите if, аналогичный switch

let browser = 'Chrome';

if (browser === 'Edge') {
    console.log('You\'ve got the Edge!');
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    console.log('Okay we support these browsers too!');
} else {
    console.log('We hope that this page looks ok!');
}

// Переписать условия if на switch
let number = prompt('Введите число между 0 и 3', '');
number &&= Number(number)

switch (number) {
    case null:
        break;
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}