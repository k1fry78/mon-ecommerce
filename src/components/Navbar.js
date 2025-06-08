import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <NavLink to="/" className="navbar-logo-item">
          Mon E-commerce
        </NavLink>
      </div>
      <div
        className={`navbar-items${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <NavLink className="navbar-item" to="/vetements">
          Vêtements
        </NavLink>
        <NavLink className="navbar-item" to="/bijoux">
          Bijoux
        </NavLink>
        <NavLink className="navbar-item" to="/electroniques">
          Electronique
        </NavLink>
        <NavLink className="navbar-item" to="/contact">
          Contact
        </NavLink>
        <NavLink className="navbar-item navbar-end-item" to="/panier">
          Panier
        </NavLink>
      </div>
      <div
        className="navbar-hamburger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Ouvrir le menu"
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}

export default Navbar;