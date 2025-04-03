'use strict';

document.addEventListener('click',(event) => {
    console.log(`Координаты мыши:
    x: ${event.clientX}
    y: ${event.clientY}`);
});

let field = document.getElementById('field');
let coords = field.getBoundingClientRect();

let top_left_outer = `Верхний левый внешний угол:\n\tx: ${coords.top}\n\ty: ${coords.left}`;
console.log(top_left_outer);

let bottom_right_outer = `Нижний правый внешний угол:\n\tx: ${coords.right}\n\ty: ${coords.bottom}`;
console.log(bottom_right_outer);

let top_left_inner = `Верхний левый внутренний угол:\n\tx: ${coords.top + field.clientLeft}\n\ty: ${coords.left + field.clientLeft}`;
console.log(top_left_inner);

let bottom_right_inner = `Нижний правый внутренний угол:\n\tx: ${coords.top + field.clientLeft + field.clientWidth}\n\ty: ${coords.left + field.clientLeft + field.clientHeight}`;
console.log(bottom_right_inner);