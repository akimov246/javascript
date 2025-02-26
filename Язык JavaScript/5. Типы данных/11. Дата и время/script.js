'use strict';

// Задачи

// Создайте дату
let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

// Покажите день недели
function getWeekDay(date) {
    let day = new Map([
        [0, 'ВС'],
        [1, 'ПН'],
        [2, 'ВТ'],
        [3, 'СР'],
        [4, 'ЧТ'],
        [5, 'ПТ'],
        [6, 'СБ']
        ]);
    return day.get(date.getDay());
}

date = new Date(2012, 0, 3);
console.log(getWeekDay(date));

// День недели в европейской нумерации
function getLocalDay(date) {
    return date.getDay() || 7;
}

date = new Date(2012, 0, 3);
console.log(getLocalDay(date));

// Какой день месяца был много дней назад
function getDateAgo(date, days) {
    let dateAgo = new Date(date);
    dateAgo.setDate(dateAgo.getDate() - days);
    return dateAgo.getDate();
}

date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 2));

// Последнее число месяца
function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2012, 1));

// Сколько сегодня прошло секунд
function getSecondsToday() {
    let date = new Date();
    return date.getHours() * 3600 * date.getMinutes() * 60 * date.getSeconds();
}

console.log(getSecondsToday());

// Сколько секунд осталось до завтра?
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.round((tomorrow - now) / 1000);
}

console.log(getSecondsToTomorrow());

// Форматирование относительно даты
function formatDate(date) {
    let now = new Date();
    let diff = Math.abs(Math.round((now - date) / 1000));
    if (diff < 1) {
        return 'прямо сейчас'
    }
    if (diff < 60) {
        return `${diff} секунд назад`
    }
    if (diff < 3600) {
        return `${Math.round(diff / 60)} минут назад`
    }
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`.slice(0, -2) + ` ${date.getHours()}:${date.getMinutes()}`;
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));

