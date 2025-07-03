'use strict';

const prismStyle = document.createElement('link');
prismStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css';
prismStyle.rel = 'stylesheet';
document.head.append(prismStyle);

const prismScript = document.createElement('script');
prismScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';

prismScript.addEventListener('load', function() {
    document.querySelectorAll('code').forEach((elem) => {
        Prism.highlightElement(elem);
    });
});

document.head.append(prismScript);