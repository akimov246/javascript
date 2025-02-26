'use strict';

function sum(a, b, c) {
    return a + b + c;
}

function curry(f) {
    return function curried(...args) {
        if (args.length >= f.length) {
            return f.call(this, ...args);
        }
        return function(...args2) {
            return curried.call(this, ...args, ...args2);
        };
    };
}

sum = curry(sum);
console.log(sum(1)(2,3));