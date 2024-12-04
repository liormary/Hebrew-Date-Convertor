import React from "react";
import DateConverter from "./components/DateConverter";
import logo from './logo.png'; 
import "./App.css";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo"/>
      <DateConverter />
    </div>
  );
}

export default App;
