'use strict';

let regexp = /<style(>|\s.*?>)/g;

console.log( '<style> <styler> <style test="...">'.match(regexp) ); // <style>, <style test="...">