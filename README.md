# typescript

### string

```
const name = "hello";

let nameChange: string = "hello";
nameChange = "hello2"; //string代入

let username = "Hello";
```

### number

```
let dummynum = 2;
let dummyNum: number = 3;
```

### bolean

```
let bool: boolean = true;
```

### 配列

```
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [1, "aa", 2, "bb", 3, "ccccc"];
```

### オブジェクト

```
interface NAME{
  first: string;
  last: string | null;
  middle?: string; //ありでもなしでもいい
}

let nameObj: NAME = {first: "yamada", last: null};
```

### 関数

```
const func1 = (x: number, y: number) => {
  return x + y;
}
```

### インターセクションタイプ

```
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
}

//合体
type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 12,
  city: "osaka",
  username: "xxxzzz",
  password: "pass"
}
```

### ユニオンタイプ

```
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 24, 46, "aaaa"];
```

### リテラルタイプ

```
let company: "Facebook" | "google" | "amazon";
company = "amazon";

let memory: 120 | 110 | 100;
memory = 100;
```

### タイプオフ

```
let msg: string = "Hi";
let msg2: typeof msg; //string
msg2 = "aaaa";

let animal = {cat: "neko"};
let newAnimal: typeof animal = {cat: "good neko"};
```

### キーオフ

```
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";
```

## タイプオフキーオフ

```
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};
let keySports: keyof typeof SPORTS;
keySports = "soccer";
```

### 列挙型(enum)

```
enum OS {
  Windows,
  Mac,
  Linux
};
interface PC {
  id: number;
  OSType: OS;
};
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};
```

### 型の交換性

```
const comp1 = "test";
let comp2: string = comp1;

// let comp3 = "test";
// let comp4: "test" = comp3; ダメなパターン

let funcComp1 = (x:number) => {};
let funcComp2 = (x:string) => {};

//funcComp1 = funcComp2; ダメなパターン
```

# react のプロジェクト作製

```
docker-compose run --rm typescript sh -c 'npx create-react-app study --template typescript'
```

# バニラ typescript

### コンパイル用の設定ファイルを作成

```
tsc –-init
```

### javascript 変換

```
tsc
```

### WSL の html を開く

```
explorer.exe index.html
```
