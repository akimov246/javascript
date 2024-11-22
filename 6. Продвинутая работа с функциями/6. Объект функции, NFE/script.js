'use strict';

// Задачи

// Установка и уменьшение значения счетчика
function makeCounter() {
    function counter() {
        return counter.count++;
    }

    counter.set = (value) => counter.count = value || 0;

    counter.decrease = () => counter.count--;

    counter.set();
    return counter
}

let c = makeCounter();
console.log(c());
console.log(c());
console.log(c());
console.log(c());
c.set(5);
console.log(c());
console.log(c());
c.decrease();
c.decrease();
c.decrease();
console.log(c());

// Сумма с произвольным количеством скобок
// function sum(value) {
//     sum.value += value;
//     return sum;
// }
//
// sum.value = 0;
// sum.toString = function () {
//     let tmp = sum.value;
//     sum.value = 0;
//     return tmp;
// }

function sum(value) {
    function inner(value) {
        inner.value += value;
        return inner;
    }

    inner.value = 0;
    inner.valueOf = function() {
        return inner.value;
    }

    return inner(value);
}

console.log(sum(0)(1)(2)(3)(4)(5));
console.log(sum(6)(-1)(-2)(-3));

