import React from "react";
import ReserveComponent from "./components/ReserveComponent";
import SpecialsComponents from "./components/SpecialsComponent";
import "../../styles/Homepage.css";

function Homepage() {
  return (
    <div className="homepage-container">
      <ReserveComponent />
      <SpecialsComponents />
    </div>
  )
}

export default Homepage;