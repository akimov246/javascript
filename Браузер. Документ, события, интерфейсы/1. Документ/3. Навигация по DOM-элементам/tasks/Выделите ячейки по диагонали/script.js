'use strict';

let table = document.body.firstElementChild;
console.log(table);

for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.background = 'rgb(255, 0, 0)';
}