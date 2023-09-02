import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import Homepage from "../pages/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <NavComponent />

      <Routes>
        
        <Route path="/" element={<Homepage />} />

      </Routes>

      <FooterComponent />
    </BrowserRouter>
  )
}

export default App;