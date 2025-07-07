'use strict';

export default function count() {
    let i = 0;

    let start = Date.now();

    for (let j = 0; j < 1e9; j++) {
        i++;
    }
    alert(`Done in ${Date.now() - start}ms`);
}