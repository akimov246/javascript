'use strict';

function parse(expression) {
    //let regexp = /^\s*(-?\d+(?:\.\d+)?)\s*([-/+*])\s*(-?\d+(?:\.\d+)?)$/;
    let regexp = /^\s*(-?\d+\.?\d*)\s*([-/+*])\s*(-?\d+\.?\d*)$/;
    let result = expression.match(regexp);
    if (result) return [result[1], result[2], result[3]];
}


console.log(parse('1 + 2'));
console.log(parse('1.2 * 3.4'));
console.log(parse('-3 / -6'));
console.log(parse('-2 - 2'));