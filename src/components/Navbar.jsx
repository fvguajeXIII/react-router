import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img src="/vite.svg" alt="Logo" />
      <span style={{ color: "#febd69", fontWeight: 700, fontSize: "1.3rem", letterSpacing: "1px" }}>MiniCommerce</span>
    </div>
    <NavLink to="/" end className={({ isActive }) => isActive ? "active" : undefined} aria-current={location => location.isActive ? "page" : undefined}>Home</NavLink>
    <NavLink to="/chi-siamo" className={({ isActive }) => isActive ? "active" : undefined} aria-current={location => location.isActive ? "page" : undefined}>Chi siamo</NavLink>
    <NavLink to="/prodotti" className={({ isActive }) => isActive ? "active" : undefined} aria-current={location => location.isActive ? "page" : undefined}>Prodotti</NavLink>
  </nav>
);

export default Navbar;
