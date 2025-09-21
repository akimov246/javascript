'use strict';

let regexp = /<\/?[a-z].*?>/g;

let str = '<> <a href="/"> <input type="radio" checked> <b>';

console.log( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>', '<b>'