# react(typescript) のプロジェクト作製

```
docker-compose run --rm コンテナ名 sh -c 'npx create-react-app プロジェクト名 --template typescript'
```

# typescript

### string

シングルクォート、ダブルクォート、バックチック（テンプレ文字列）

```
const name = "hello"; //型推論

let nameChange: string = "hello"; //型明示 型推論があるため冗長?パット見わかりやすいかも？
nameChange = "hello2"; //string代入

let username = "Hello";
```

### number

整数や浮動小数点も含むすべての数値

```
let dummynum = 2;
let dummyNum: number = 3;
```

### bolean

```
let bool: boolean = true;
```

### 配列

すべての型を格納可能

```
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [1, "aa", 2, "bb", 3, "ccccc"];

//配列宣言
let Array: any[];
let stringArray: string[];

```

### オブジェクト

```
interface NAME{
  first: string;
  last: string | null;
  middle?: string; //ありでもなしでもいい
}

let nameObj: NAME = {first: "yamada", last: null};

//オブジェクト型推論
const person = {
  name: 'aaaa',
  age: 99
}

//ネスト
const data = {
  id: 1,
  price: 200,
  details: {
    title: 'candy',
    description: '美味しいね'
  }
}

//タプル
const person: {
  name: string;
  age: number;
  role: [number, string]; //タプル 役割がはっきりしてるときに使う
} = {
  name: 'aaa',
  age: 456,
  role: [2, 'dame'],
}
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

### エイリアス型

型を再利用できる。

```
//ユニオン型
type Combinable = number | string;
//リテラル型
type riteCombinable = 397 | 'ohhhhhhhhhhhh';

function combine(
  num1: Combinable, //number
  str2: Combinable  //string
){
  //処理
}

//便利
type User = { name: string; age: number };

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
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

定数の集合一覧などに使用する

```
//指定しなければ自動的に数値が割り振られる
enum Role {
  ADMIN, //0
  READ_ONLY, //1
  AUTHOR, //2
  MEIJI = 55555, //明示的に数値指定
}


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

### ジェネリックス

```
interface GEN<T>{
  item: T;// 型自体は定まッていない
}
const gen0: GEN<string> = { item: "hello" };// 使用時に動的に変更可能なのがジェネリクス
//const gen1: GEN = { item: "hello" };//型指定なしエラー
const gen2: GEN<number> = { item: 3} ;

//string指定
interface GENSTR<T=string>{
  item: T;
}
const gen3: GENSTR = { item: "hello" };//デフォルトのstring適応のためエラーにならない

//複合型
interface GENSTRNUM<T extends string | number >{
  item: T;
}
const gen4: GENSTRNUM<string> = { item: "string" };
const gen5: GENSTRNUM<number> = { item: 13 };

//関数
function funcGen<T>(props: T) {
  return { item: props };
}
const gen6 = funcGen<string>("test");
const gen7 = funcGen<string | null>(null);//複合

function funcGen1<T extends string | null>(props: T){
  return { value: props };
}
const gen8 = funcGen1<string>("aaaaa");
//const gen9 = funcGen1<string>(11); エラー数値型は指定していないため


//プロップス
interface Props {
  price: number;
}

function funcGen3<T extends Props>(props: T){
  return { value: props.price };
}

const gen10 = funcGen3({price:10});

//アロー関数
const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
};
```

### json

```
import Data from "./data.json";

//JSON型推論
type USER = typeof Data;
```
