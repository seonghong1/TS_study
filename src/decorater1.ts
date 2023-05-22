//프로퍼티 데코레이터를 사용하면 기존 프로퍼티의 동작을 확장하거나 수정할 수 있습니다.
// 프로퍼티 데코레이터는 여러 프로퍼티에 적용할 수 있으며, 재사용할 수 있습니다. 이를 통해 코드의 중복을 줄이고 일관된 동작을 적용할 수 있습니다.
// 데코레이터는 클라스를 호출할때가 아닌 정의할때 실행된다.

function Log(target: any, propertyName: string | symbol) {
  const property = target[propertyName];
  console.log(property);
  console.log(target);
  console.log(propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw Error("error");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPrice() {
    console.log(this._price);
  }
}

const newaa = new Product("jone", 10000);
console.log(newaa.title);
console.log("new object", newaa);
