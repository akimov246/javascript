'use strict';

// Задачи

// Сумма с помощью замыканий
function sum(a) {
    return function(b) {
        return a + b;
    }
}

console.log(sum(5)(-1));

// Фильтрация с помощью функции
function inBetween(a, b) {
    return function(element) {
        return element >= a && element <= b;
    }
}

function inArray(arr) {
    return function(element) {
        return arr.includes(element);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

// Сортировать по полю
function byField(fieldName) {
    return function(a, b) {
        if (typeof(a) === 'string') return a.localeCompare(b);
        return a[fieldName] > b[fieldName] ? 1 : -1;
    }
}

let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

// Армия функций
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
      let x = i;
      let shooter = function() { // функция shooter
          console.log(x); // должна выводить порядковый номер
      };
      shooters.push(shooter); // и добавлять стрелка в массив
      i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();
army[5]();