'use strict';

// Задачи

// Операции с массивами
let styles = ['Джаз', 'Блюз'];
console.log(styles);
styles.push('Рок-н-ролл');
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift('Рэп', 'Регги');
console.log(styles);

// Сумма введенных чисел
function sumInput() {
    let nums = [];
    do {
        let val = prompt('Число?', '');
        if (!val || !isFinite(val)) {
            return sum(nums);
        }

        nums.push(Number(val));
    } while (true)

    function sum(arr) {
        let result = 0;
        for (let n of arr) {
            result += n;
        }
        return result
    }
}

console.log(sumInput());

// Подмассив наибольшей суммы
function getMaxSubSum(arr) {
    let max_sum = 0;
    let current_sum = 0;

    for (let n of arr) {
        current_sum += n;
        max_sum = Math.max(max_sum, current_sum);
        if (current_sum < 0) {
            current_sum = 0;
        }
    }

    return max_sum;
}

console.log(getMaxSubSum([1, -2, 3, 4, -9, 13, 14, -88, 228, -100, 15, 16, 17, 18, 32, 26, 15]));
