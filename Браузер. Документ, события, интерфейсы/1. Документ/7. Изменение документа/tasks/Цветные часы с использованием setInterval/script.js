'use strict';

let start_button = document.getElementById('start_btn');
let stop_button = document.getElementById('stop_btn');
let timerId;

start_button.addEventListener('click', (e) => {
    let date = new Date();
    document.getElementById('hh').innerHTML = date.getHours().toString().padStart(2, '0');
    document.getElementById('mm').innerHTML = date.getMinutes().toString().padStart(2, '0');
    document.getElementById('ss').innerHTML = date.getSeconds().toString().padStart(2, '0');
    timerId = setInterval(() => {
        let date = new Date();
        document.getElementById('hh').innerHTML = date.getHours().toString().padStart(2, '0');
        document.getElementById('mm').innerHTML = date.getMinutes().toString().padStart(2, '0');
        document.getElementById('ss').innerHTML = date.getSeconds().toString().padStart(2, '0');
    }, 1000);
});

stop_button.addEventListener('click', (e) => {
    clearInterval(timerId);
});