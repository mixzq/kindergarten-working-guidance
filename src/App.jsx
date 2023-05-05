import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Mainpage from "./page/Mainpage";
import PracticalInfo from "./page/PracticalInfo";
import PracticalJob from "./page/PracticalJob";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/PracticalInfo" element={<PracticalInfo />} />
        <Route path="/PracticalJob" element={<PracticalJob />} />
      </Routes>
    </div>
  );
}

export default App;
