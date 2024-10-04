'use strict';

// Задачи

// Название JavaScript
let result = prompt('Какое «официальное» название JavaScript?', '');

if (result === 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}

// Покажите знак числа
let num = prompt('Введите число', '');
if (Number(num) > 0) {
    alert(1);
} else if (Number(num) < 0) {
    alert(-1);
} else {
    alert(0);
}

// Перепишите 'if' в '?'
let result = (a + b < 4) ? 'Мало' : 'Много';

// Перепишите 'if...else' в '?'
let message = (login === 'Сотрудник') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
    (login === '') ? 'Нет логина' :
    '';