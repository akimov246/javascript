'use strict';

// Задачи

// Вычислить сумму чисел до данного
function sumToCycle(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function sumTo(n) {
    if (n === 1) return 1;
    return n + sumTo(n - 1);
}

function sumToProgression(n) {
    return n * (n + 1) / 2;
}

console.log(sumToCycle(100));
console.log(sumTo(100));
console.log(sumToProgression(100));

// Вычислить факториал
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));

// Числа Фибоначчи
function fib_mem(n, cache = {}) {
    if (n <= 2) return 1;
    let result;
    if (cache[n]) {
        result = cache[n];
    } else {
        result = fib_mem(n - 1, cache) + fib_mem(n - 2, cache);
        cache[n] = result
    }
    return result
}

function fib_dp(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

console.log(fib_mem(77));
console.log(fib_dp(77));

// Вывод односвязного списка
let list = {value: 1};
list.next = {value: 2};
list.next.next = {value: 3};
list.next.next.next = {value: 4};
list.next.next.next.next = null;

function printListCycle(list) {
    while (list) {
        console.log(list.value);
        list = list.next;
    }
}

function printListRecursive(list) {
    if (list) {
        console.log(list.value);
        printListRecursive(list.next);
    }
}

printListCycle(list);
printListRecursive(list);

// Вывод односвязного списка в обратном порядке
function printListReverseCycle(list) {
    let values = [];

    while (list) {
        values.push(list.value);
        list = list.next;
    }
    values.reverse();
    for (let value of values) {
        console.log(value);
    }
}

function printListReverseRecursive(list) {
    if (list.next) {
        printListReverseRecursive(list.next);
    }
    console.log(list.value);
}

printListReverseCycle(list);
printListReverseRecursive(list);