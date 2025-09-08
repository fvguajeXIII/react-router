import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : undefined} aria-current={location => location.isActive ? "page" : undefined}>Home</NavLink>
    <NavLink to="/chi-siamo" className={({ isActive }) => isActive ? "active" : undefined} aria-current={location => location.isActive ? "page" : undefined}>Chi siamo</NavLink>
    <NavLink to="/prodotti" className={({ isActive }) => isActive ? "active" : undefined} aria-current={location => location.isActive ? "page" : undefined}>Prodotti</NavLink>
  </nav>
);

export default Navbar;
