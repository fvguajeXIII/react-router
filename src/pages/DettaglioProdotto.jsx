import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DettaglioProdotto = () => {
  const { id } = useParams();
  const [prodotto, setProdotto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProdotto(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Errore nel caricamento del prodotto");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>{error}</p>;
  if (!prodotto) return <p>Prodotto non trovato.</p>;

  return (
    <div style={{
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
      padding: "2.5rem 2rem",
      maxWidth: "700px",
      margin: "0 auto 2rem auto",
      textAlign: "center"
    }}>
      <h1 style={{ color: "#232f3e", fontWeight: 700, fontSize: "2rem" }}>{prodotto.title}</h1>
      <img src={prodotto.image} alt={prodotto.title} style={{ width: "180px", height: "180px", objectFit: "contain", marginBottom: "1.5rem" }} />
      <p style={{ fontSize: "1.15rem", color: "#111", marginBottom: "1rem" }}>{prodotto.description}</p>
      <p style={{ fontWeight: "bold", color: "#b12704", fontSize: "1.3rem" }}>{prodotto.price} €</p>
      <p style={{ color: "#232f3e", fontSize: "1rem", marginTop: "1rem" }}>Categoria: {prodotto.category}</p>
    </div>
  );
};

export default DettaglioProdotto;
