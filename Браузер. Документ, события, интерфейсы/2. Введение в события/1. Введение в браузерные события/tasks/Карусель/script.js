'use strict';

let lis = document.querySelectorAll('li');
let numberOfDisplayedLis = Math.min(3, lis.length);

for (let i = 0; i < numberOfDisplayedLis; i++) {
    lis[i].style.display = 'block';
}
let lastDisplayedLi = numberOfDisplayedLis;

let right_arrow = document.querySelector('.arrow.right');
right_arrow.onclick = function() {
    lastDisplayedLi = Math.min(lastDisplayedLi + 3, lis.length);
    for (let li of lis) {
        li.style.display = 'none';
    }
    for (let i = lastDisplayedLi - 3; i < lastDisplayedLi; i++) {
        lis[i].style.display = 'block';
    }
}

let left_arrow = document.querySelector('.arrow.left');
left_arrow.onclick = function() {
    lastDisplayedLi = Math.max(lastDisplayedLi - 3, numberOfDisplayedLis);
    for (let li of lis) {
        li.style.display = 'none';
    }
    for (let i = lastDisplayedLi - 3; i < lastDisplayedLi; i++) {
        lis[i].style.display = 'block';
    }
}