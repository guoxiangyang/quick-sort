'use strict';
/*jslint vars : true*/
function qs(a) {
    var k = [], r = [];
    return a.length ? qs(a.filter(e => {(e == a[0] ? k : (e > a[0] ? r : [])).push(e); return (e < a[0])})).concat(k, qs(r)) : [];
}

var arr = [200, 3, 54, 1234, 23, 2354, 34125, 1, 2345, 12, 4325, 123, 12345, 123];
console.log("input  = ", arr);
console.log("output = ", qs(arr));
