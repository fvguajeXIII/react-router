import React from "react";


const Homepage = () => (
  <div style={{
    background: "linear-gradient(90deg, #febd69 0%, #fff 100%)",
    borderRadius: "18px",
    boxShadow: "0 6px 32px rgba(0,0,0,0.13)",
    padding: "3.5rem 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "2.5rem"
  }}>
    <h1 style={{ color: "#232f3e", fontWeight: 700, fontSize: "2.3rem", marginBottom: "1.2rem" }}>Benvenuto su MiniCommerce!</h1>
    <img src="/vite.svg" alt="Promo" style={{ width: "120px", margin: "1.5rem 0" }} />
    <p style={{ fontSize: "1.2rem", color: "#232f3e", maxWidth: "500px", textAlign: "center", marginBottom: "2rem" }}>
      Scopri i nostri prodotti e le offerte speciali, proprio come su Amazon!
    </p>
    <a href="/prodotti" style={{
      background: "#febd69",
      color: "#232f3e",
      fontWeight: "bold",
      padding: "0.9rem 2.2rem",
      borderRadius: "6px",
      fontSize: "1.1rem",
      textDecoration: "none",
      boxShadow: "0 2px 8px rgba(254,189,105,0.18)",
      transition: "background 0.2s, color 0.2s"
    }}>Vai ai prodotti</a>
  </div>
);

export default Homepage;
