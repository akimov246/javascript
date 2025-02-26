'use strict';

// Задачи

// Сделайте первый символ заглавным
// function ucFirst(str) {
//     if (str && typeof(str) === 'string') {
//         return str.at(0).toUpperCase() + str.slice(1);
//     } else {
//         return str;
//     }
// }

function ucFirst(str) {
    return typeof(str) === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}

console.log(ucFirst('вася'));

// Проверка на спам
function checkSpam(str) {
    str = str.toLowerCase();
    return str.includes('viagra') || str.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

// Усечение строки
function truncate(str, maxlength) {
    // if (str.length > maxlength) {
    //     return str.slice(0, maxlength - 1) + '…';
    // }
    // return str;
    return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

// Выделить число
function extractCurrencyValue(str) {
    return Number(str.slice(1));
}

console.log(extractCurrencyValue('$120'));