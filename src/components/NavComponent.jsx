import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./../styles/Nav.css";

function NavComponent() {
  return(
    <header>
      <nav className="links-container">
        <Link to="/">
          <img className="header-logo" src="/assets/Asset 16@4x.png" alt="little lemon logo" />
        </Link>

        <div className="header-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? 'active-link' : ''}>Menu</NavLink>
          <NavLink to="/booking" className={({ isActive }) => isActive ? 'active-link' : ''}>Reservations</NavLink>
          <NavLink to="/order-online" className={({ isActive }) => isActive ? 'active-link' : ''}>Order online</NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'active-link' : ''}>Login</NavLink>
        </div>

        <div>{true}</div>
      </nav>
    </header>
  )
}

export default NavComponent;