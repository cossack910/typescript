import React from "react";
import "./App.css";
import { Department } from "./department"; // exportを付けたクラスを呼び出す

const keiri = new Department("経理");
keiri.decribe();

const keiriCopy = { name: "経理2", describe: keiri.decribe };
keiriCopy.describe();
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
