"use strict";
//프로퍼티 데코레이터를 사용하면 기존 프로퍼티의 동작을 확장하거나 수정할 수 있습니다.
// 프로퍼티 데코레이터는 여러 프로퍼티에 적용할 수 있으며, 재사용할 수 있습니다. 이를 통해 코드의 중복을 줄이고 일관된 동작을 적용할 수 있습니다.
// 데코레이터는 클라스를 호출할때가 아닌 정의할때 실행된다.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(target, propertyName) {
    const property = target[propertyName];
    console.log(property);
    console.log(target);
    console.log(propertyName);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw Error("error");
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPrice() {
        console.log(this._price);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
const newaa = new Product("jone", 10000);
console.log(newaa.title);
console.log("new object", newaa);
