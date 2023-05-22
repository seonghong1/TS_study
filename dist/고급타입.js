"use strict";
let somePerson;
somePerson = {
    name: "jone",
    privileges: ["a"],
    startDate: new Date(),
};
function Numadd(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
const result = Numadd(1, 2);
function UnKnownEmployee(emp) {
    if ("privileges" in emp) {
        console.log(emp.name, emp.privileges);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flySpd;
            break;
        case "horse":
            speed = animal.runningSpd;
            break;
    }
    console.log(speed);
    // if ("runningSpd" in animal) {
    //   console.log(animal.runningSpd);
    // }
}
moveAnimal({ type: "bird", flySpd: 4 });
const inputElement = document.getElementById("output-input");
inputElement.value = "kokoa";
const errorBag = {
    email: "not found email",
    username: "noy found username",
};
const fetchingData = "";
const data = fetchingData || "default data";
console.log("data : ", data);
