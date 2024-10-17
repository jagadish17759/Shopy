import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import All from "./Components/All";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/rgistr" element={<Register />} />
        <Route path="/lgin" element={<Login />} />
        <Route path="/loginn" element={<Login />} />
        <Route path="/homee" element={<HomePage />} />
        <Route path="/fake" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


