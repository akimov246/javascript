'use strict';

let table = document.getElementById('bagua-table');

let currentEdit;

table.addEventListener('pointerdown', function(event) {
    let target = event.target.closest('td');
    if (!target) return;
    if (currentEdit) return;

    let value = target.innerHTML;
    let cell = target;

    let textarea = document.createElement('textarea');
    textarea.style.width = target.offsetWidth + 'px';
    textarea.style.height = target.offsetHeight - 4 + 'px';
    target.replaceWith(textarea);
    textarea.focus();
    currentEdit = textarea;
    let buttonContainer = document.createElement('div');
    buttonContainer.style.position = 'absolute';
    textarea.insertAdjacentElement('afterend', buttonContainer);
    let buttonOk = document.createElement('button');
    buttonOk.className = 'edit';
    buttonOk.innerHTML = 'OK';
    buttonContainer.appendChild(buttonOk);
    let buttonCancel = document.createElement('button');
    buttonCancel.className = 'edit';
    buttonCancel.innerHTML = 'Cancel';
    buttonContainer.appendChild(buttonCancel);

    textarea.value = value;

    document.addEventListener('pointerdown', function(event) {
        let target = event.target;
        if (!target) return;
        if (!target.classList.contains('edit')) {
            textarea.focus();
            return;
        }

        if (target.innerText === 'OK') {
            cell.innerHTML = textarea.value;
        }
        buttonContainer.remove();
        textarea.replaceWith(cell);
        currentEdit = null;
    });
});