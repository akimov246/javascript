'use strict';

let calendar = document.getElementById('calendar');

function createCalendar(elem, year, month) {
    let date = new Date(year, month - 1);
    let currentMonth = date.getMonth();
    let row = 1;
    let cell = date.getDay() - 1;
    while (currentMonth === date.getMonth()) {
        if (cell === 7) {
            row++;
            cell = 0;
        }
        calendar.rows[row].cells[cell].innerHTML = date.getDate();
        date.setDate(date.getDate() + 1);
        cell++;
    }
}

createCalendar(calendar, 1998, 6);