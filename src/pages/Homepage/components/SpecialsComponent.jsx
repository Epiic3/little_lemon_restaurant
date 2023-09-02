import React from "react";
import { loremIpsum } from "react-lorem-ipsum";

function SpecialsCard(props) {
  return(
    <div>
      <img src={props.src} alt={props.alt} />

      <h4>{props.name}</h4>
      <p>{props.description}</p>
    </div>
  )
}

function SpecialsComponents() {
  return(
    <section>
      <div>
        <h2>This week specials!</h2>
        <button className="homepage-button">Online Menu</button>
      </div>

      <div>
        <SpecialsCard src="/assets/greek salad.jpg" alt="greek salad" name="Greek salad" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
      </div>

    </section>
  )
}

export default SpecialsComponents;