'use strict';
/*jslint vars : true*/
function qs(a) {
    var l = [], k = [], r = [];
    a.forEach(function (e) {
        (e === a[0] ? k : (e > a[0] ? r : l)).push(e);
    });
    return a.length ? qs(l).concat(k, qs(r)) : [];
}

function quick_sort(a) {
    return qs(a, a[0], 0, a.length - 1, 0);
}



var arr = [200, 3, 54, 1234, 23, 2354, 34125, 1, 2345, 12, 4325, 123, 12345, 123];
console.log("input  = ", arr);
console.log("output = ", quick_sort(arr));
