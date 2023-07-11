import React from "react";
import "./App.css";
import { Product } from "./decorator"; // exportを付けたクラスを呼び出す

function App() {
  new Product("a", 100);
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
