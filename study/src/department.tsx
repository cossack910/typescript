export class Department {
  //外部から呼び出すときはexportを付ける
  // name: string; //プロパティにはletやconstを付けない
  // private employees: string[] = [];

  // constructor(n: string) {
  //   this.name = n;
  // }

  constructor(
    private name: string,
    public employees: string[] = [],
    private readonly id: string //readonlyは読み込みのみ
  ) {} //コンストラクタの引数にアクセス修飾子を付けることでプロパティ宣言にもなる

  //Departmentクラスを参照するように引数をつける
  decribe(this: Department) {
    console.log("部署名: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

//継承
class ItDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, ["aaa"], "IT"); //ベースクラスのコンストラクタ呼び出し
  }

  addReport(text: string) {
    this.reports.push(text);
  }
}
