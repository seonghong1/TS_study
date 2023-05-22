// 인터섹션타입
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmoloyee = Admin & Employee;

let somePerson: ElevatedEmoloyee;

somePerson = {
  name: "jone",
  privileges: ["a"],
  startDate: new Date(),
};

type numOrStr = number | string;
type strOrbol = string | boolean;

function Numadd(n1: number, n2: number): number;
function Numadd(n1: string, n2: string): string;
function Numadd(n1: string, n2: numOrStr): string;
function Numadd(n1: numOrStr, n2: string): string;
function Numadd(n1: numOrStr, n2: numOrStr) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}
const result = Numadd(1, 2);

type unKnownEmployee = Employee | Admin;

function UnKnownEmployee(emp: unKnownEmployee) {
  if ("privileges" in emp) {
    console.log(emp.name, emp.privileges);
  }
}
type add = numOrStr & strOrbol;

interface Bird {
  type: "bird";
  flySpd: number;
}

interface Horse {
  type: "horse";
  runningSpd: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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

const inputElement = document.getElementById(
  "output-input"
) as HTMLInputElement;
inputElement.value = "kokoa";

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "not found email",
  username: "noy found username",
};

const fetchingData = "";

const data = fetchingData || "default data";
console.log("data : ", data);
