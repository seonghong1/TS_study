"use strict";
// 일반적인 데코레이터의 형태
// function Logger(constructor: Function) {
//   console.log("logging");
//   console.log(constructor);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//데코레이터를 팩토리화
function Logger(logstr) {
    console.log("1번");
    return function (constructor) {
        console.log("4번");
        console.log(logstr);
        console.log("constructor", constructor);
    };
}
// function modalElement(el: string, elementId: string) {
//   return function (_: Function) {
//     const element = document.getElementById(elementId);
//     if (element) {
//       element.innerHTML = el;
//     }
//   };
// }
function modalElement(el, elementId) {
    console.log("2번");
    return function (constructor) {
        console.log("3번");
        const name = new constructor();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = el;
            element.querySelector("h1").textContent = name.name;
        }
        return class extends constructor {
        };
    };
}
// @Logger
let Person222 = class Person222 {
    constructor() {
        this.name = "max";
        console.log("aaa");
    }
};
Person222 = __decorate([
    Logger("logging-person"),
    modalElement("<h1>new modal</h2>", "app")
], Person222);
const per11 = new Person222();
console.log(per11);
