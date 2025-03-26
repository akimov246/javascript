'use strict';

setTimeout(() => {
    let tbody = document.querySelector('tbody');

    let rows_array = Array.from(tbody.cloneNode(true).rows);

    rows_array.sort((a, b) => a.cells[0].innerText.localeCompare(b.cells[0].innerText));

    for (let i = 0; i < rows_array.length; i++) {
        for (let j = 0; j < rows_array[i].cells.length; j++) {
            tbody.rows[i].cells[j].innerText = rows_array[i].cells[j].innerText;
        }
    }
}, 1000);