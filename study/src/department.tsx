export class Department {
  //外部から呼び出すときはexportを付ける
  // name: string; //プロパティにはletやconstを付けない
  // private employees: string[] = [];

  // constructor(n: string) {
  //   this.name = n;
  // }

  static fiscalYear = 2023; //静的プロパティ

  constructor(
    public name: string,
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

  //静的メソッド
  static createEmploee(name: string) {
    return name;
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

  //オーバーライド
  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push("Mass");
  }
}

const it = new ItDepartment("1", ["report"]);
