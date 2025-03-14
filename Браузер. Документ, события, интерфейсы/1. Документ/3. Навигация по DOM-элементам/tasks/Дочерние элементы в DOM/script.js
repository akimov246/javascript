'use strict';

// Получить <div>
let div_element = document.body.firstElementChild;
console.log(div_element);

// Получить <ul>
let ul_element = document.body.children[1];
console.log(ul_element);

// Получить второй <li> (с именем Пит)
let second_li_element = ul_element.lastElementChild;
console.log(second_li_element);
