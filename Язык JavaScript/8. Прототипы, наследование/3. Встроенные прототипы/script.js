'use strict';

// Задачи

// Добавить функциям метод "f.defer(ms)"
Function.prototype.defer = function(ms) {
    let func = this;
    function wrapper(...args) {
        setTimeout(() => func.call(this, ...args), ms);
    }
    return wrapper;
}

function f(message) {
    console.log(message);
}

f.defer(2000)('Hello World!');

// Добавьте функциям декорирующий метод "defer()"
function f2(a, b) {
    console.log(a + b);
}

f2.defer(1000)(14, 88);


let obj = {};
console.log(obj.__proto__);