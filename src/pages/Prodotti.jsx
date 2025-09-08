import React, { useEffect, useState } from "react";

const Prodotti = () => {
  const [prodotti, setProdotti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProdotti(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Errore nel caricamento dei prodotti");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Caricamento prodotti...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="prodotti">
      <h1>Prodotti</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "2rem",
        marginTop: "2rem"
      }}>
        {prodotti.map((prodotto) => (
          <div key={prodotto.id} style={{
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "340px"
          }}>
            <img src={prodotto.image} alt={prodotto.title} style={{ width: "120px", height: "120px", objectFit: "contain", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.1rem", color: "#232f3e", marginBottom: "0.7rem", textAlign: "center" }}>{prodotto.title}</h3>
            <p style={{ fontWeight: "bold", color: "#b12704", fontSize: "1.2rem", marginTop: "auto" }}>{prodotto.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prodotti;
