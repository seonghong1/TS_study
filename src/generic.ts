// const names: string[] = ["max", "jone"];
const names: Array<string> = ["max", "jone"];

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeData = merge({ age: 23 }, { name: "jone" });

console.log(mergeData);
/*
함수를 호출할때 매개변수의 타입이 동적으로 생성됨

선언 시점이 아니라 생성 시점에 타입을 명시하여 
하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다. 
한번의 선언으로 다양한 타입에 '재사용'이 가능하다는 장점이 있다.
*/

function someData<A extends number, B extends string, C extends boolean>(
  a: A,
  b: B,
  c: C
) {
  return console.log(a, b, c);
}
const asd = someData(1, "dsad", true);

interface Lengthy {
  length: number;
}

function printDescription<T extends { length: number }>(element: T) {
  let description;
  if (element.length === 0) {
    description = `길이가 0이라니 !!!`;
  } else {
    description = `길이는 ${element.length} 입니다 ~~`;
  }
  return [element, description];
}
const aa = printDescription("ddd");

console.log(aa);

function searchKey<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(searchKey({ name: "jone" }, "name"));

class Storage {
  private data = [];
}
