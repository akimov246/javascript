'use strict';

let regexp = /(?<!-)\b\d+/g;

let str = "0 12 -5 123 -18";

console.log( str.match(regexp) ); // 0, 12, 123