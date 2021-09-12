import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@ryo/components";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Your Count is {count}
        <Button onClick={() => setCount((prev: number) => ++prev)}>
          Click
        </Button>
      </header>
    </div>
  );
}

export default App;
