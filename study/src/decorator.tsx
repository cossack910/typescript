//プロパティデコレーター
function Log(target: any, propatyName: string | Symbol) {
  console.log("プロパティデコレータ");
  console.log(target, propatyName);
}

//アクセサデーコレータ
function Log2(target: any, name: string, decriptor: PropertyDescriptor) {
  console.log("Accessor デコレーター");
  console.log(target);
  console.log(name);
  console.log(decriptor);
}

//メソッドデコレータ
function Log3(
  target: any,
  name: string | Symbol,
  decriptor: PropertyDescriptor
) {
  console.log("メソッド デコレーター");
  console.log(target);
  console.log(name);
  console.log(decriptor);
}

//パラメータデコレーター
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("パラメータ デコレーター");
  console.log(target);
  console.log(name);
  console.log(position);
}

export class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("不正価格");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

//クラスを継承して、返却するクラスデコレータ
function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    const hookEl = document.getElementById(hookId)!;
    if (hookEl) {
      hookEl.innerHTML = template;
    }

    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log(this.name);
      }
    };
  };
}

@WithTemplate("<h1>やったぜ</h1>", "App")
class Person {
  name = "Max";

  constructor() {
    console.log("Personオブジェクト作成中...");
  }
}
