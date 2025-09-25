// Это решение приводится в примере как верное, но оно не верное для вложенных одноименных тегов, например,
// [b][b]text[/b][/b]. Только при еще одной проверке, решение становится верным.

'use strict';

let str = `[b]текст[/b]

                  [url]http://ya.ru[/url] 
                  
                  [url] [b]http://ya.ru[/b] [/url]
                  
                  [quote] [b]текст[/b] [/quote]
                  
                  [b][b]текст[/b][/b]
                  
                  [quote]\n\t[b]текст[/b]\n[/quote]`;


let regexp = /(?<openTag>\[(b|url|quote)\])(?<value>.*?)(?<closeTag>\[\/\2\])/gs;

for (let match of str.matchAll(regexp)) {
    let result = match[0];
    let tags = result.match(/\[\/?(b|url|quote)\]/g);
    if (!(tags.length % 2)) {
        console.log(result);
    }
}