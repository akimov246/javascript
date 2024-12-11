'use strict';

// Задачи

// Добавьте toString в словарь
let dictionary = Object.create(null);

//ваш код, который добавляет метод dictionary.toString
Object.defineProperty(dictionary, 'toString', {
    value: function(separator) {
        return Object.keys(this).join(separator);
    },
    //enumerable: false
})

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary.toString()); // "apple,__proto__"