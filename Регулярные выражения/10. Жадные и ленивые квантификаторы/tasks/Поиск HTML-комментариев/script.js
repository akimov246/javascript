'use strict';

let regexp = /<!--.*?-->/gs;

let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

console.log(str.match(regexp)); // '<!-- My -- comment \n test -->', '<!---->'