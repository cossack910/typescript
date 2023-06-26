export class Department {
  //外部から呼び出すときはexportを付ける
  name: string; //プロパティにはletやconstを付けない

  constructor(n: string) {
    this.name = n;
  }

  //Departmentクラスを参照するように引数をつける
  decribe(this: Department) {
    console.log("部署名: " + this.name);
  }
}
