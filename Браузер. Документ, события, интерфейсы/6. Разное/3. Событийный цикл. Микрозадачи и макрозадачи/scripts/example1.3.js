'use strict';

let i = 0;
let start;

export default function count() {
    if (!start) {
        start = Date.now();
    }

    if (i < 1e9 - 1e6) {
        setTimeout(count);
    }

    do {
        i++;
    } while (i % 1e6 !== 0);

    if (i === 1e9) {
        alert(`Done in ${Date.now() - start}ms`);
        i = 0;
        start = null;
    }
}