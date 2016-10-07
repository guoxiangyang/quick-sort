'use strict';
/*jslint vars : true*/
function qs(a, key, i, j, level) {
    console.log("%d\t%d\t%d\t%d\t", level, i, j, key, a);
    var left = i, right = j, v;
    while (i !== j) {
        while (j > i && a[j] >= key) { j--; }
        if (i === j) { break; }
        if (a[j] < key) { v = a[i]; a[i] = a[j]; a[j] = v; }
        while (i < j && a[i] <= key) { i++; }
        if (i === j) { break; }
        if (a[i] > key) { v = a[i]; a[i] = a[j]; a[j] = v; }
    }
    if (left !== i) { qs(a, a[left], left, i - 1, level + 1); }
    if (right !== j) { qs(a, a[j + 1], j + 1, right, level + 1); }
    return;
}
function quick_sort(a) {
    qs(a, a[0], 0, a.length - 1, 0);
    return a;
}

var arr = [200, 3, 54, 1234, 23, 2354, 34125, 1, 2345, 12, 4325, 123, 12345, 123];
console.log("input  = ", arr);
console.log("output = ", quick_sort(arr));
