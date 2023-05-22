"use strict";
class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    someText(text) {
        console.log(text, this.name);
    }
}
const person1 = new Person("kakao", 23, ["dev"]);
person1.someText(1);
person1.name = "1";
const addfunc = (n1, n2) => {
    const total = n1 + n2;
    return total;
};
