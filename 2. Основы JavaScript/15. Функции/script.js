'use strict';

// Задачи

// Перепишите функцию, используя оператор ? или ||
function check_age(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

function check_age(age) {
    return age > 18 || confirm('Родители разрешили?');
}

// Функция min(a, b)
function min(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}

// Функция pow(x, n)
function pow(x, n) {
    return x ** n;
}

let x = prompt('Введите основание', '');
let n = prompt('Введите степень', '');
if (x && n) {
    alert(pow(x, n));
}