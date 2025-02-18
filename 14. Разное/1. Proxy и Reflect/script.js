'use strict';

// Задачи

// Ошибка при чтении несуществующего свойства
let user = {
    name: 'John'
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(...arguments);
            }
            throw new Error(`Свойство не существует: '${prop}'`);
        }
    });
}

user = wrap(user);

try {
    console.log(user.name);
    console.log(user.age);
} catch (err) {
    console.log(`${err.name}: ${err.message}`);
}


// Получение элемента массива с отрицательной позиции
let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = Number(prop) + target.length;
        }
        return Reflect.get(target, prop, receiver);
    }
});

console.log(array[-1]);
console.log(array[-2]);


// Observable
function makeObservable(target) {

    target.observe = function(handler) {
        Object.defineProperty(target, 'handler', {
            value: handler,
            enumerable: false
        })
    }

    return new Proxy(target, {
        set(target, prop, value, receiver) {
            let success = Reflect.set(target, prop, value, receiver);
            if (success && target.handler) {
                target.handler(prop, value);
            }

            return success;
        }
    });
}

user = {};
user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = 'John';

for (let prop in user) {
    console.log(prop);
}