'use strict';

// Задачи

// Создайте новый объект с помощью уже существующего
function Obj() {
    this.value = 1;
}
Obj.prototype = {};

let obj = new Obj();
let obj2 = new obj.constructor();

console.log(obj2);