'use strict';

// Задачи

// Перепишите класс
class Clock {

    constructor({template = 'h:m:s'} = {}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) {hours = '0' + hours;}

        let minutes = date.getMinutes();
        if (minutes < 10) {minutes = '0' + minutes;}

        let seconds = date.getSeconds();
        if (seconds < 10) {seconds = '0' + seconds;}

        let output = this.template.replace('h', hours).replace('m', minutes).replace('s', seconds);

        console.clear();
        console.log(output);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop() {
        clearInterval(this.timer);
    }
}

let clock = new Clock();
clock.start();
setTimeout(() => clock.stop(), 10000);

