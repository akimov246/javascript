'use strict';

const startMessagesBtn = document.querySelector('.start-messages'); // (1)
const closeWindowBtn = document.querySelector('.window_button'); // (2)
const windowElementRef = new WeakRef(window.document.querySelector('.window__body')); // (3)

startMessagesBtn.addEventListener('click', () => {
    startMessages(windowElementRef);
    startMessagesBtn.disabled = true;
});

closeWindowBtn.addEventListener('click', () => document.querySelector('.window__body').remove()); // (5)

const startMessages = (element) => {
    const timedId = setInterval(() => { // (6)
        if (element.deref()) { // (7)
            const payload = document.createElement('p');
            payload.textContent = `Сообщение: Статус системы ОК: ${new Date().toLocaleTimeString()}`;
            element.deref().append(payload);
        } else { // (8)
            alert('Элемент был удален.'); // (9)
            clearInterval(timedId);
        }
    }, 1000);
}