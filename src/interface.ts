interface PersonalInfo {
  readonly name: string;
  age: number;
  job: string[];
  someText(text: number): void;
}

interface PersonalDetailInfo extends PersonalInfo {
  a?: string;
}
class Person implements PersonalDetailInfo {
  name: string;
  age: number;
  job: string[];

  constructor(name: string, age: number, job: string[]) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  someText(text: number) {
    console.log(text, this.name);
  }
}

const person1 = new Person("kakao", 23, ["dev"]);

person1.someText(1);
person1.name = "1";

// type addFu = (n1: number, n2: number) => number;
interface addFu {
  (n1: number, n2: number): number;
}

const addfunc: addFu = (n1: number, n2: number) => {
  const total = n1 + n2;
  return total;
};
