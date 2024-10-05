'use strict';

// Задачи

// Выведите четные числа
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Замените for на while
let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

// Повторять цикл, пока ввод неверен
while (true) {
    let n = Number(prompt('Введите число больше 100', ''));
    if (!n || n > 100) {
        break;
    }
}

// Вывести простые числа
let n = 10;
is_prime_label: for (let i = 2; i <= n; i++) {
    if (i === 2) {
        console.log(i);
        continue;
    }

    if (i % 2 === 0) {
        continue;
    }

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            continue is_prime_label;
        }
    }

    console.log(i);
}