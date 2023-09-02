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
          <NavLink to="/" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>About</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>Menu</NavLink>
          <NavLink to="/booking" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>Reservations</NavLink>
          <NavLink to="/order-online" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>Order online</NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'link active-link' : 'link'}>Login</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default NavComponent;