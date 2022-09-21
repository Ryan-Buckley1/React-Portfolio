import React from "react";
import About from "./components/About";
// import "./App.css";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <Title />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default App;
