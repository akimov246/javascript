'use strict';

let tree = document.querySelector('ul');

for (let li of tree.querySelectorAll('li')) {
    let children_number = li.querySelectorAll('li').length;
    if (children_number) {
        li.firstChild.data += `[${children_number}]`;
    }
}