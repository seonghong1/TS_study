// 일반적인 데코레이터의 형태
// function Logger(constructor: Function) {
//   console.log("logging");
//   console.log(constructor);
// }

//데코레이터를 팩토리화
function Logger(logstr: string) {
  return function (constructor: Function) {
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

function modalElement(el: string, elementId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = el;
          element.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger
@Logger("logging-person")
@modalElement("<h1>new modal</h2>", "app")
class Person222 {
  name = "max";
  constructor() {
    console.log("aaa");
  }
}

const per11 = new Person222();
console.log(per11);
