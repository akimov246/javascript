'use strict';

// Задачи

// Привет, object
let user = {};
user['name'] = 'John';
user['surname'] = 'Smith';
user['name'] = 'Pete';
delete user['name'];
console.log(user);

// Проверка на пустоту
let obj = {
    name: 'Leonid',
    age: 26
}

let empty_obj = {}
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(obj))
console.log(isEmpty(empty_obj));

// Сумма свойств объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

// Умножаем все числовые свойства на 2
let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === 'number') {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);