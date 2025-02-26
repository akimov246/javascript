'use strict';

// Задачи

// Создайте калькулятор при помощи конструктора, new Calculator
function Calculator() {

    this.read = function() {
        let a = prompt('a?', '');
        if (!a) {
            return;
        }
        this.a = Number(a);
        let b = prompt('b?', '');
        if (!b) {
            return;
        }
        this.b = Number(b);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())

// Создайте new Accumulator
function Accumulator(startingValue) {
    this.value = Number(startingValue);

    this.read = function() {
        if (!this.value) {
            return;
        }
        let new_value = prompt('new value?', '');
        if (!new_value) {
            return;
        }
        this.value += Number(new_value);
    };
}

let accumulator = new Accumulator(5);
console.log(accumulator.value);
accumulator.read();
console.log(accumulator.value);