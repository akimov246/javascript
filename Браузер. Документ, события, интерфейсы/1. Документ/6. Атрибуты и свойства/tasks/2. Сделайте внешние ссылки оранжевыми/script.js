'use strict';

let links = document.querySelectorAll('li a');
//console.log(links);

for (let link of links) {
    let href = link.getAttribute('href');
    if (href.includes('://') && !href.startsWith('http://internal.com')) {
        link.style.color = 'orange';
    }
}

setTimeout(() => {
    let links = document.querySelectorAll('a[href*="://"]:not(a[href^="http://internal.com"])');
    links.forEach(link => {
        link.style.color = 'red';
    });
}, 1000);