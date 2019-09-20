import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Wizard />
    </div>
  );
}

export default App;
