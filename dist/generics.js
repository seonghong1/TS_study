"use strict";
// const names: string[] = ["max", "jone"];
const names = ["max", "jone"];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeData = merge(23, { name: "jone" });
console.log(mergeData);
