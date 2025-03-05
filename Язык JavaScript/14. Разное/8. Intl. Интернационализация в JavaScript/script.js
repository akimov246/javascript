'use strict';

// Задачи

// Отсортируйте массив с буквой ё
let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let compare = new Intl.Collator('ru', {
    sensitivity: "base"
}).compare;
animals.sort((a, b) => compare(a, b));
console.log(animals);