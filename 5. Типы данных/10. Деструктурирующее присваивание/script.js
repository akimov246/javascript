'use strict';

// Задачи

// Деструктурирующее присваивание
let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;
console.log(name);
console.log(age);
console.log(isAdmin);

// Максимальная зарплата
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
    let topEmployee = new Map([[null, 0]]);

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > topEmployee.values().next().value) {
            topEmployee = new Map([[name, salary]]);
        }
    }

    return topEmployee.keys().next().value;
}

console.log(topSalary(salaries));