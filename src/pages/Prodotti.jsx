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
      <ul>
        {prodotti.map((prodotto) => (
          <li key={prodotto.id}>
            <img src={prodotto.image} alt={prodotto.title} style={{ width: "100px" }} />
            <h3>{prodotto.title}</h3>
            <p>{prodotto.price} €</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prodotti;
