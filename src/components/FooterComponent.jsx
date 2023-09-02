import React from "react";
import "../styles/Footer.css"

function FooterComponent() {
  return(
    <footer>
      <div className="logo-container">
        <img className="footer-logo" src="/assets/Asset 20@4x.png" alt="" />
      </div>

      <div className="super">
        <div className="social_networks">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>

        <div className="social_networks">
          <p>Little lemon</p>
          <p>3247238476</p>
          <p>Little_lemon</p>
          <p>Little_lemon</p>
        </div>
      </div>

    </footer>
  )
}

export default FooterComponent;