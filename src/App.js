import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginView from "./views/LoginView/LoginView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginView/>}/>
      </Routes>
    </div>
  );
};

export default App;
