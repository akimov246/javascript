'use strict';

let isPressed = false;

for (let container of document.querySelectorAll('.container')) {
    container.addEventListener('pointerdown', function(event) {
        if (!event.target.classList.contains('point')) return;
        isPressed = true;
    });
}

for (let point of document.querySelectorAll('.point')) {
    point.onpointermove = (event) => onPointerMove(event);
}

document.addEventListener('pointerup', function() {
    isPressed = false;
});

export function drawGrid(canvasElem, step = 10) {
    let context = canvasElem.getContext('2d');
    context.beginPath();
    context.strokeStyle = '#acacac';
    context.lineWidth = 1;

    for (let x = 0; x <= canvasElem.width; x += step) {
        context.moveTo(x, 0);
        context.lineTo(x, canvasElem.height);
    }

    for (let y = 0; y <= canvasElem.height; y += step) {
        context.moveTo(0, y);
        context.lineTo(canvasElem.width, y);
    }

    context.stroke();
}

export function drawBezier(canvasElem, points) {
    let context = canvasElem.getContext('2d');

    let startPoint = points.slice(0, 2);
    let endPoint = points.slice(-2);
    let controlPoints = points.slice(2, -2);

    if (points.length === 6) {
        // Вспомогательные линии
        context.beginPath();
        context.strokeStyle = 'orange';
        context.moveTo(startPoint[0], startPoint[1]); context.lineTo(controlPoints[0], controlPoints[1]);
        context.moveTo(controlPoints[0], controlPoints[1]); context.lineTo(endPoint[0], endPoint[1]);
        context.lineWidth = 1;
        context.stroke();
        // Кривая Безье
        context.beginPath();
        context.lineWidth = 2;
        context.moveTo(startPoint[0], startPoint[1]);
        context.quadraticCurveTo(controlPoints[0], controlPoints[1], endPoint[0], endPoint[1]);
        context.strokeStyle = 'red';
        context.stroke();
    }

    if (points.length === 8) {
        // Вспомогательные линии
        context.beginPath();
        context.strokeStyle = 'orange';
        context.moveTo(startPoint[0], startPoint[1]); context.lineTo(controlPoints[0], controlPoints[1]);
        context.moveTo(controlPoints[0], controlPoints[1]); context.lineTo(controlPoints[2], controlPoints[3]);
        context.moveTo(controlPoints[2], controlPoints[3]); context.lineTo(endPoint[0], endPoint[1]);
        context.lineWidth = 1;
        context.stroke();
        // Кривая Безье
        context.beginPath();
        context.lineWidth = 2;
        context.moveTo(startPoint[0], startPoint[1]);
        context.bezierCurveTo(controlPoints[0],
                                 controlPoints[1],
                                 controlPoints[2],
                                 controlPoints[3],
                                 endPoint[0],
                                 endPoint[1]);
        context.strokeStyle = 'red';
        context.stroke();
    }
}

function onPointerMove(event){
    let canvas = event.target.parentElement.firstElementChild
    if (!isPressed) return;

    event.target.setPointerCapture(event.pointerId);
    let containerCoords = event.target.parentElement.getBoundingClientRect();
    let x = event.clientX - containerCoords.left;
    if (x < 0) {
        x = 0
    }
    if (x > containerCoords.width) {
        x = containerCoords.width
    }
    let y = event.clientY - containerCoords.top;
    if (y < 0) {
        y = 0;
    }
    if (y > containerCoords.height) {
        y = containerCoords.height;
    }
    event.target.style.left = x + 'px';
    event.target.style.top = y + 'px';

    draw(canvas);
}

export function drawTangent(canvasElem, t) {
    let context = canvasElem.getContext('2d');
    let container = canvasElem.parentElement;
    let points = container.querySelectorAll('.point');

    //draw(canvasElem);
    if (Math.floor(t)) return;

    let pointsCoords = [];
    for (let point of points) {
        pointsCoords.push(parseInt(point.style.left));
        pointsCoords.push(parseInt(point.style.top));
    }
    let x1 = pointsCoords[0];
    let y1 = pointsCoords[1];
    let x2 = pointsCoords[2];
    let y2 = pointsCoords[3];
    let x3 = pointsCoords[4];
    let y3 = pointsCoords[5];

    if (points.length === 3) {


        let px1 = x1 + (x2 - x1) * t;
        let py1 = y1 + (y2 - y1) * t;

        let px2 = x2 + (x3 - x2) * t;
        let py2 = y2 + (y3 - y2) * t;

        let tangentPointX = (1 - t)**2*x1 + 2*(1 - t)*t*x2 + t**2*x3;
        let tangentPointY = (1 - t)**2*y1 + 2*(1 - t)*t*y2 + t**2*y3;

        context.beginPath();
        context.fillStyle = 'red';
        context.arc(tangentPointX, tangentPointY, 5, 0, Math.PI * 2);
        context.fill();

        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = 'blue';
        context.moveTo(px1, py1);
        context.lineTo(px2, py2);
        context.stroke();
    }

    if (points.length === 4) {
        let x4 = pointsCoords[6];
        let y4 = pointsCoords[7];

        let px12 = x1 + (x2 - x1) * t;
        let py12 = y1 + (y2 - y1) * t;

        let px23 = x2 + (x3 - x2) * t;
        let py23 = y2 + (y3 - y2) * t;

        let px34 = x3 + (x4 - x3) * t;
        let py34 = y3 + (y4 - y3) * t;

        context.beginPath();
        context.lineWidth = 1;
        context.strokeStyle = 'green';
        context.moveTo(px12, py12);
        context.lineTo(px23, py23);
        context.moveTo(px23, py23);
        context.lineTo(px34, py34);
        context.stroke();

        let tangentPointX = (1 - t)**3*x1 + 3*(1 - t)**2*t*x2 + 3*(1 - t)*t**2*x3 + t**3*x4;
        let tangentPointY = (1 - t)**3*y1 + 3*(1 - t)**2*t*y2 + 3*(1 - t)*t**2*y3 + t**3*y4;

        context.beginPath();
        context.fillStyle = 'red';
        context.arc(tangentPointX, tangentPointY, 5, 0, Math.PI * 2);
        context.fill();

        let px1223 = px12 + (px23 - px12) * t;
        let py1223 = py12 + (py23 - py12) * t;

        let px2334 = px23 + (px34 - px23) * t;
        let py2334 = py23 + (py34 - py23) * t;

        context.beginPath();
        context.lineWidth = 2;
        context.strokeStyle = 'blue';
        context.moveTo(px1223, py1223);
        context.lineTo(px2334, py2334);
        context.stroke();
    }
}

export function draw(canvasElem, tangent=false, t=0) {
    canvasElem.getContext('2d').clearRect(0, 0, canvasElem.width, canvasElem.height);
    drawGrid(canvasElem);
    let pointsCoords = [];
    for (let point of canvasElem.parentElement.querySelectorAll('.point')) {
        pointsCoords.push(parseInt(point.style.left));
        pointsCoords.push(parseInt(point.style.top));
    }
    drawBezier(canvasElem, pointsCoords);
    if (tangent) {
        drawTangent(canvasElem, t);
    }
}

export function animatedDraw(canvasElem, tangent=false, t=0) {

    let startTime = Date.now();
    let duration = 5000;

    function animate() {
        t = Math.min((Date.now() - startTime) / duration, 1);
        if (tangent) {
            canvasElem.parentElement.previousElementSibling.innerHTML = `t = ${t}`;
        }
        draw(canvasElem, tangent, t);
        if (t < 1) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}