'use strict';

let messages = document.querySelectorAll('.pane');

function removeMessage(event) {
    let button = event.currentTarget;
    let message = button.parentElement;
    message.remove();
}

messages.forEach((message) => {
    let removeButton = document.createElement('button');
    removeButton.innerHTML = '[x]';
    removeButton.className = 'remove-button';
    removeButton.addEventListener('click', removeMessage);
    message.append(removeButton);
    removeButton.style.left = message.getBoundingClientRect().width - 1.5 * removeButton.offsetWidth + 'px';
    removeButton.style.top = '0px';
});

