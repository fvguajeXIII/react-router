import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DettaglioProdotto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const idNum = Number(id);
  const prevId = idNum > 1 ? idNum - 1 : null;
  const nextId = idNum < 20 ? idNum + 1 : null; // Fake Store API ha 20 prodotti

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

      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "2rem" }}>
        <button
          onClick={() => prevId && navigate(`/prodotti/${prevId}`)}
          disabled={!prevId}
          style={{
            background: prevId ? "#febd69" : "#eee",
            color: prevId ? "#232f3e" : "#aaa",
            border: "none",
            borderRadius: "4px",
            padding: "0.7rem 1.5rem",
            fontWeight: "bold",
            cursor: prevId ? "pointer" : "not-allowed"
          }}
        >
          ← Precedente
        </button>
        <button
          onClick={() => nextId && navigate(`/prodotti/${nextId}`)}
          disabled={!nextId}
          style={{
            background: nextId ? "#febd69" : "#eee",
            color: nextId ? "#232f3e" : "#aaa",
            border: "none",
            borderRadius: "4px",
            padding: "0.7rem 1.5rem",
            fontWeight: "bold",
            cursor: nextId ? "pointer" : "not-allowed"
          }}
        >
          Successivo →
        </button>
      </div>
    </div>
  );
};

export default DettaglioProdotto;
