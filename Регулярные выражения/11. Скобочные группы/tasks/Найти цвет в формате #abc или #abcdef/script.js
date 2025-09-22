'use strict';

let regexp = /#[0-9a-f]{3}([0-9a-f]{3})?\b/gi;

let str = "color: #3f3; background-color: #AA00ef; and: #abcd";

console.log( str.match(regexp) ); // #3f3 #AA00ef