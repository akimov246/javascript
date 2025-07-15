'use strict';

function concat(arrays) {
    let result_length = 0;
    for (let arr of arrays) {
        result_length += arr.length;
    }
    let result = new Uint8Array(result_length);

    let offset = 0;
    for (let arr of arrays) {
        result.set(arr, offset);
        offset += arr.length;
    }

    return result;
}

let uint8Array1 = new Uint8Array([1, 2, 3]);
let uint8Array2 = new Uint8Array([4, 5, 6]);
let uint8Array3 = new Uint8Array([7, 8, 9]);

let array = [uint8Array1, uint8Array2, uint8Array3];

let result = concat(array);
console.log(result);