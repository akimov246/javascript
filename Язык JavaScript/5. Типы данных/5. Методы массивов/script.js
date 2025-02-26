'use strict';

// Задачи

function camelize(str) {
    //let words = str.split('-');
    //words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    //return words.join('');
    return str.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// Фильтрация по диапазону
function filterRange(arr, a, b) {
    return arr.filter((item) => item >= a && item <= b);
}

console.log(filterRange([5, 3, 8, 1], 1, 4));

// Фильтрация по диапазону на месте
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1, 7, 1588, 24, 53, 3, 2, 5, 6];
filterRangeInPlace(arr, 1, 4);
console.log(arr);

// Сортировать в порядке по убыванию
arr = [5, 2, 1, -10, 8];
console.log(arr.sort((a, b) => b - a))

// Скопировать и отсортировать массив
function copySorted(arr) {
    arr = structuredClone(arr);
    return arr.sort((a, b) => a.localeCompare(b));
}

arr = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(arr));

// Создать расширяемый калькулятор
function Calculator() {
    this.methods = {
        '+': (a, b) => Number(a) + Number(b),
        '-': (a, b) => Number(a) - Number(b)
    };

    this.calculate = function(str) {
        if (typeof(str) !== 'string') {
            console.log('Введите корректное выражение!')
            return;
        }
        let expression = str;
        if (!expression) {
            console.log('Отмена');
            return;
        }

        expression = expression.split(' ');
        let operand1 = expression[0];
        let operator = expression[1];
        let operand2 = expression[2];

        if (!(operator in this.methods)) {
            console.log('Несуществующий оператор!');
            return;
        }
        if (!(isFinite(operand1) && isFinite(operand2))) {
            console.log('Введите числа!');
            return;
        }

        return this.methods[operator](operand1, operand2);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    }
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc.calculate('12412'));

// Трансформировать в массив имен
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);
console.log(names);

// Трансформировать в объекты
vasya = { name: "Вася", surname: "Пупкин", id: 1 };
petya = { name: "Петя", surname: "Иванов", id: 2 };
masha = { name: "Маша", surname: "Петрова", id: 3 };

users = [ vasya, petya, masha ];

let usersMapped = users.map((user) => {
    return {id: user.id, fullName: user.name + ' ' + user.surname};
});

console.log(usersMapped);

// Отсортировать пользователей по возрасту
vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };

arr = [ vasya, petya, masha ];

function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}

console.log(sortByAge(arr));

// Перемешайте массив
function shuffle(arr) {
    return arr.sort(() => Math.random() - Math.random());
}

console.log(shuffle([1, 2, 3, 5, 6, 7, 8, 9, 10]));

// Получить средний возраст

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 29 };

arr = [ vasya, petya, masha ];

function getAverageAge(users) {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

console.log(getAverageAge(arr));

// Оставить уникальные элементы массива
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

function unique(arr) {
    let result = [];

    arr.forEach((item) => (!result.includes(item)) ? result.push(item) : null);
    return result;
}

console.log(unique(strings));

// Создайте объект с ключами из массива
users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
    // let result = {};
    // for (let item of arr) {
    //     result[item.id] = structuredClone(item);
    // }
    // return result;
    return arr.reduce((result, item) => {
        result[item.id] = item;
        return result;
    }, {});
}

console.log(groupById(users));