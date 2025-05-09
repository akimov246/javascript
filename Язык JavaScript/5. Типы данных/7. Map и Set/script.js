'use strict';

// Задачи

// Фильтрация уникальных элементов массива
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

// Отфильтруйте анаграммы
function aclear(arr) {
    let map = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
    }
    return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclear(arr));

// Перебираемые ключи
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
console.log(keys);
keys.push("more");
console.log(keys);
