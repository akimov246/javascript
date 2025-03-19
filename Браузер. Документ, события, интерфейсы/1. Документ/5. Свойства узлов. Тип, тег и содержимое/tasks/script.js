'use strict';

// Считаем потомков <li>:количество его потомков

let li_elements = document.querySelectorAll('li');

for (let li of li_elements) {
    let value = li.firstChild.nodeValue.trim();
    let children_number = li.querySelectorAll('li').length;
    console.log(`${value} : ${children_number}`);
}