'use strict';

// Задачи

// Декоратор-шпион
function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.call(this, ...args);
    }

    wrapper.calls = [];

    return wrapper;
}

function work(a, b) {
    return a + b;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
    console.log('call: ' + args.join());
}

// Задерживающий декоратор
function delay(f, ms) {

    return function(...args) {
        return setTimeout(() => f.call(this, ...args), ms);
    }
}

function f(x) {
    console.log(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000('test1000');
f1500('test1500');


// Декоратор debounce
function debounce(f, ms) {

    let timerId;

    function wrapper(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => f.call(this, ...args), ms);
    }

    return wrapper;
}

// f = debounce(f, 1000);
// f('a');
// setTimeout(() => f('b'), 200);
// setTimeout(() => f('c'), 500);
// setTimeout(() => f('d'), 800);

// Тормозящий (throttling) декоратор
function throttle(f, ms) {
    let timerId;

    return function(...args) {
        if (!timerId) {
            f.call(this, ...args);
            timerId = setTimeout(() => {timerId = null;}, ms);
        }
    }
}

f1000 = throttle(f, 500);

for (let ms = 1; ms < 10000; ms++) {
    setTimeout(() => f1000(ms), ms);
}
