'use strict';

// Задачи

// Проверка значения из диапазона
let age = 13;

if (age >= 14 && age <= 90) {
    console.log('В диапазоне');
}

// Проверка значения вне диапазона
if (!(age >= 14 && age <= 90)) {
    console.log('Вне диапазона');
}

if (age < 14 || age > 90) {
    console.log('Вне диапазона');
}

// Проверка логина
let login = prompt('Введите логин', '');

if (login === 'Админ') {

    let password = prompt('Введите пароль', '');

    if (password === 'Я главный') {
        alert('Здравствуйте!');
    } else if (!(password)) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (!(login)) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}