import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "2.2rem",
        marginTop: "2.5rem"
      }}>
        {prodotti.map((prodotto) => (
          <Link
            to={`/prodotti/${prodotto.id}`}
            key={prodotto.id}
            style={{ textDecoration: "none" }}
          >
            <div style={{
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.13)",
              padding: "2rem 1.2rem 1.2rem 1.2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "340px",
              transition: "box-shadow 0.2s, transform 0.2s",
              cursor: "pointer"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(254,189,105,0.18)";
              e.currentTarget.style.transform = "translateY(-4px) scale(1.03)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.13)";
              e.currentTarget.style.transform = "none";
            }}
            >
              <img src={prodotto.image} alt={prodotto.title} style={{ width: "120px", height: "120px", objectFit: "contain", marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.15rem", color: "#232f3e", marginBottom: "0.7rem", textAlign: "center", fontWeight: 600 }}>{prodotto.title}</h3>
              <p style={{ fontWeight: "bold", color: "#b12704", fontSize: "1.25rem", marginTop: "auto", marginBottom: "0.5rem" }}>{prodotto.price} €</p>
              <span style={{ fontSize: "0.95rem", color: "#888", marginBottom: "0.5rem" }}>{prodotto.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Prodotti;
