import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function Panier() {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 24 }}>
      <h1>Mon panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cart.map((prod, idx) => (
            <li key={prod.id + "-" + idx} style={{ marginBottom: 24, borderBottom: "1px solid #eee", paddingBottom: 12 }}>
              <strong>{prod.title}</strong> <br />
              Prix : {prod.price} € <br />
              <img src={prod.image} alt={prod.title} style={{ width: 80, height: 80, objectFit: "contain" }} />
            </li>
          ))}
        </ul>
      )}
        {cart.length > 0 && (
            <div style={{ marginTop: 24 }}>
            <h2>Total : {cart.reduce((total, prod) => total + prod.price, 0)} €</h2>
            <button style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: 4 }}>
                Valider la commande
            </button>
            </div>
        )}
    </div>
  );
}

export default Panier;