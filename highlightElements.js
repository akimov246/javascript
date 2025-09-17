'use strict';

const prismStyle = document.createElement('link');
prismStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css';
prismStyle.rel = 'stylesheet';
document.head.append(prismStyle);

const prismScript = document.createElement('script');
prismScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
document.head.append(prismScript);

prismScript.addEventListener('load', function() {
    document.querySelectorAll('code').forEach((elem) => {
        Prism.highlightElement(elem);
    });
});

document.querySelectorAll('pre.executable').forEach((elem) => {
    let button = document.createElement('button');
    button.innerText = '▶';
    button.style.cssText = `
        position: absolute;
        right: 0;
        top: 0;
        height: 2.5rem;
        width: 2.5rem;
        background-color: darkgrey;
        border: none;
        color: white;
        cursor: pointer;
        opacity: 0.7;
    `;

    button.addEventListener('mouseenter', function() {
        button.style.filter = 'brightness(1.1)';
    });

    button.addEventListener('mouseleave', function() {
        button.style.filter = '';
    });

    elem.append(button);

    elem.dispatchEvent(new CustomEvent('buttonAdded'));
});


customElements.define('console-log', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    background-color: var(--border-color-grey);
                    padding: 0.5rem;
                    max-height: 10rem;
                    overflow-y: auto;
                }
            
                ::slotted(p) {
                    margin: 0.1rem;
                    font-family: monospace;
                    font-size: 1rem;
                }
                
                ::slotted(p):before {
                    content: '> ';
                    color: red;
                }
            </style>
            <div>
                <slot></slot>
            </div>
        `;
        this.shadowRoot.querySelector('div').addEventListener('slotchange', function(event) {
            event.currentTarget.scrollTop = event.currentTarget.scrollHeight;
        });
    }
});