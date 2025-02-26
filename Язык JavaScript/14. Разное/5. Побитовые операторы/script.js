'use strict';

// Задачи

// Проверка, целое ли число
function isInteger(num) {
    return num === (num ^ 0);
}

console.log(isInteger(1));
console.log(isInteger(1.5));
console.log(isInteger(-0.5));