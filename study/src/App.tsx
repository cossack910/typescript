import React from 'react';
import './App.css';
import { getNodeMajorVersion } from 'typescript';

//string
const name = "hello";

let nameChange: string = "hello";
nameChange = "hello2";

let username = "Hello";

//number
let dummynum = 2;
let dummyNum: number = 3;

//boolean
let bool: boolean = true;

//array
let array1 = [1,2,3,4,5,6];
let array2 = [1,"aa",2,"bb",3,"ccccc"];

//オブジェクト
interface NAME{
  first: string;
  last: string | null;
  middle?: string;
}

let nameObj: NAME = {first: "yamada", last: null};

//関数
const func1 = (x: number, y: number) => {
  return x + y;
}

//インターセクションタイプ
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 12,
  city: "osaka",
  username: "xxxzzz",
  password: "pass"
}


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
