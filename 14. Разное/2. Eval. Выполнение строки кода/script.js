'use strict';

// Задачи

//Eval-калькулятор

let expression = '228 / 1488 * 322';
const regex = /^[\d+\-*/().\s]+$/;
if (regex.test(expression)) {
    console.log(eval(expression));
} else {
    throw new EvalError('Некорректное арифметическое выражение')
}
