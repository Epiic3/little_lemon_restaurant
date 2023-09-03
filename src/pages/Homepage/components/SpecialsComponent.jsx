import React from "react";

function SpecialsCard(props) {
  return(
    <div className="card-container">
      <img className="card-img" src={props.src} alt={props.alt} />

      <h4>{props.name}</h4>
      <p>{props.description}</p>
    </div>
  )
}

function SpecialsComponents() {
  return(
    <section className="specials-container">
      <div className="specials-header">
        <h2>This week specials!</h2>
        <button type="button" className="homepage-button">Online Menu</button>
      </div>

      <div className="specials-card-container">
        <SpecialsCard src="/assets/greek salad.jpg" alt="greek salad" name="Greek salad" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
        <SpecialsCard src="/assets/bruchetta.jpg" alt="bruchetta" name="Bruchetta" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
        <SpecialsCard src="/assets/lemon dessert.jpg" alt="lemon dessert" name="Lemon Dessert" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
      </div>

    </section>
  )
}

export default SpecialsComponents;