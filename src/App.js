import React from "react";
import About from "./components/About";
// import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div>
        <Title />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
