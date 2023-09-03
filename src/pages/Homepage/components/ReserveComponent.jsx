import React from "react";

function ReserveComponent() {
  return(
    <section className="reserve-container">
      <div className="text-container">
        <h1>Little Lemon</h1>

        <h4>Chicago</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        
        <a href="/booking">
          <button className="homepage-button" type="button">Reserve a Table</button>
        </a>
      </div>
      
      <div className="image-container">
        <img src="./assets/restauranfood.jpg" alt="food" />
      </div>
    </section>
  )
}

export default ReserveComponent;