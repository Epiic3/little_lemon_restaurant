import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import Homepage from "../pages/Homepage/Homepage";
import Booking from "../pages/Booking/Booking";

function App() {
  return (
    <BrowserRouter>
      <NavComponent />

      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />

      </Routes>

      <FooterComponent />
    </BrowserRouter>
  )
}

export default App;