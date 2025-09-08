import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
    <NavLink to="/chi-siamo" className={({ isActive }) => isActive ? "active" : ""}>Chi siamo</NavLink>
    <NavLink to="/prodotti" className={({ isActive }) => isActive ? "active" : ""}>Prodotti</NavLink>
  </nav>
);

export default Navbar;
