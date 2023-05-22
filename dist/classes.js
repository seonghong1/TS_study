"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = n;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    get getSomeThings() {
        return this.someThings;
    }
    constructor(id, name, cto) {
        super(id, name);
        this.cto = cto;
        this.cto = cto;
        this.someThings = cto[0];
    }
    static getinstance() {
        if (ITDepartment.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment("d1", "kokoa", ["jone", "kate", "bob"]);
        return this.instance;
    }
    describe() {
        console.log(`Department id: ${this.id} / name: ${this.name}`);
    }
    callEmpployees() {
        console.log(this.employees);
    }
    addsomeThings(text) {
        this.someThings = text;
    }
}
const it = ITDepartment.getinstance();
const i2t = ITDepartment.getinstance();
console.log(it, i2t);
const employee1 = Department.createEmployee("sandy");
console.log("employee1 : ", employee1);
// it.employees[2] = 'Anna';
console.log(it.getSomeThings);
it.describe();
console.log(it);
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
