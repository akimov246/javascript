'use strict';

grid.addEventListener('click', function(event) {
    let target = event.target;
    if (!target.dataset.type) return;

    let rows = Array.from(grid.tBodies[0].rows);
    let cells = [];
    for (let row of rows) {
        cells.push([row.cells[0].innerText, row.cells[1].innerText]);
    }

    if (target.dataset.type === "number") {
        cells.sort((a, b) => a[0] - b[0]);
    }

    if (target.dataset.type === "string") {
        cells.sort((a, b) => a[1].localeCompare(b[1]));
    }

    let newGrid = grid.tBodies[0].cloneNode(true);
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].cells.length; j++) {
            newGrid.rows[i].cells[j].innerText = cells[i][j];
        }
    }
    document.getElementById('grid').tBodies[0].replaceWith(newGrid);
});