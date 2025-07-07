'use strict';

export default function() {
    setTimeout(() => alert('timeout'));

    Promise.resolve()
        .then(() => alert('promise'));

    alert('code');
}