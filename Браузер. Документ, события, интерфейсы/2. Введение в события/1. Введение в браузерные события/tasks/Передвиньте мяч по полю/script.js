'use strict';

let field = document.querySelector('#field');
let ball = document.querySelector('#ball');


function moveBall(event) {
    let ball_center_x = event.pageX - (field.offsetWidth - field.clientWidth) - ball.clientWidth / 2;
    let ball_center_y = event.pageY - (field.offsetHeight - field.clientHeight) - ball.clientHeight / 2;

    if (ball_center_x < 0) {
        ball_center_x = 0;
    } else if (ball_center_x > field.clientWidth - ball.clientWidth) {
        ball_center_x = field.clientWidth - ball.clientWidth;
    }

    if (ball_center_y < 0) {
        ball_center_y = 0;
    } else if (ball_center_y > field.clientHeight - ball.clientHeight) {
        ball_center_y = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ball_center_x + 'px';
    ball.style.top = ball_center_y + 'px';

}

field.addEventListener('click', moveBall);
document.documentElement.addEventListener('click', moveBall);