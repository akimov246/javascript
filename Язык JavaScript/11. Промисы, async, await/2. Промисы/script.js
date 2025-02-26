'use strict';

// Задачи

// Задержка на промисах
function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));