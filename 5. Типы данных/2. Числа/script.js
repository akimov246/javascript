'use strict'

// Задачи

// Сумма пользовательских чисел
let a = prompt('a?', '');
if (a && isFinite(a)) {
    a = Number(a);
    let b = prompt('b?', '');
    if (b && isFinite(b)) {
        b = Number(b);
        console.log((a + b).toFixed(2));
    }
}

// Ввод числового значения
function readNumber(target) {
    let x;
    while (Number(target) !== x) {
        x = prompt('x? (5)', '');
        if (!x) {
            return null;
        }
        x = Number(x);
    }
    return x
}

console.log(readNumber(5));

// Случайное число от min до max
function my_random(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(my_random(1, 10));

// Случайное целое число от min до max
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

console.log(randomInteger(1, 10));