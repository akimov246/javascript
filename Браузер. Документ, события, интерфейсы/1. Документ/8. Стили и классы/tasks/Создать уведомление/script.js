'use strict';

function showNotification({top=0, right=0, html, className}) {
    let notification = document.createElement('div');
    notification.className = 'notification';
    if (className) {
        notification.classList.add(className);
    }
    notification.innerHTML = html;
    notification.style.top = top + 'px';
    notification.style.right = top + 'px';
    document.body.append(notification);
    setTimeout(() => notification.remove(), 1500);
}

let counter = 1;

setInterval(() => showNotification({
    top: 10,
    right: 10,
    html: 'Hello! ' + counter++,
    className: 'welcome'
}),3000);