import React from 'react';
import './App.css';
//import { getNodeMajorVersion } from 'typescript';
import Data from "./data.json";

//JSON型推論
type USER = typeof Data;

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
