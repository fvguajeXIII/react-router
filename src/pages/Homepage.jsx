import React from "react";


const Homepage = () => (
  <div style={{
    background: "linear-gradient(90deg, #febd69 0%, #fff 100%)",
    borderRadius: "12px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
    padding: "3rem 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2rem"
  }}>
    <h1 style={{ color: "#232f3e", fontWeight: 700, fontSize: "2.3rem" }}>Benvenuto nel nostro mini e-commerce!</h1>
    <img src="/vite.svg" alt="Promo" style={{ width: "180px", margin: "1.5rem 0" }} />
    <p style={{ fontSize: "1.2rem", color: "#111", maxWidth: "500px", textAlign: "center" }}>
      Scopri i nostri prodotti e le offerte speciali, proprio come su Amazon!
    </p>
  </div>
);

export default Homepage;
