'use strict';

// Задачи

// Вывод каждую секунду
function printNumbersInterval(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        if (current >= to) {
            clearInterval(timerId);
        }
        console.log(current++);
    }, 1000);
}

printNumbersInterval(1, 5);

function printNumbersTimeout(from, to) {
    let current = from;

    let timerId = setTimeout(function func() {
        console.log(current++);
        timerId = setTimeout(func, 1000);
        if (current > to) {
            clearTimeout(timerId);
        }
    }, 1000);
}

printNumbersTimeout(1, 5);

function printNumberFirstNoDelay(from, to) {
    let current = from;

    function func() {
        console.log(current++);

        if (current > to) {
            clearInterval(timerId);
        }
    }

    func();
    let timerId = setInterval(func, 1000);
}

printNumberFirstNoDelay(1, 5);