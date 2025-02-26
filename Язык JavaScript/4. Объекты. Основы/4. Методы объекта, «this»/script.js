'use strict';

// Задачи

// Создайте калькулятор
let calculator = {

    read() {
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
    },

    sum() {
        if (this.a && this.b) {
            return this.a + this.b;
        }
    },

    mul() {
        if (this.a && this.b) {
            return this.a * this.b;
        }
    }
};

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())

// Цепь вызовов
let ladder = {
    step: 0,

    up() {
        this.step++;
        return this;
    },

    down() {
        this.step--;
        return this;
    },

    showStep: function() { // показывает текущую ступеньку
        console.log(this.step);
        return this;
  }
};

ladder.up().up().down().showStep().down().showStep();