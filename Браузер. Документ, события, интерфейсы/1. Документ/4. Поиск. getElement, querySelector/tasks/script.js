'use strict';

// Как найти?

// 1. Таблицу с id="age-table"
let table = document.querySelector('#age-table');
console.log(1, table);

// 2. Все элементы label внутри этой таблицы (их три)
let labels = table.querySelectorAll('label');
console.log(2, labels, labels.length);

// 3. Первый td в этой таблице (со словом «Age»)
let first_td = table.querySelector('td');
console.log(3, first_td);

// 4. Форму form с именем name="search"
let form_search = document.querySelector('form[name="search"]');
console.log(4, form_search);

// 5. Первый input в этой форме
let first_input_in_form = form_search.querySelector('input');
console.log(5, first_input_in_form);

// 6. Последний input в этой форме
let last_input_in_form = form_search.querySelectorAll('input');
console.log(6, last_input_in_form[last_input_in_form.length - 1]);