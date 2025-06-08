import React, { useEffect, useState } from "react";
import { getProduitsByCategory } from "../api/produitsApi";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function Electroniques() {
  const [produits, setProduits] = useState([]);
  const { addToCart } = useContext(CartContext);

  let category = "electronics";

  useEffect(() => {
    getProduitsByCategory(category).then(setProduits);
  }, []);

  return (
    <div>
      <div className="container-title-produits">
        <h1>Nos matiérels électroniques</h1>
        <p>Découvrez notre matériel</p>
      </div>
      <div className="container-col">
        <div className="container-row">
          {produits.map((p) => (
            <div className="container-card" key={p.id}>
              <h2>{p.title}</h2>
              <img src={p.image} alt={p.title} />
              <div className="container-card-text">
                <p>Prix: {p.price} €</p>
                <p>Note: {p.rating?.rate} ⭐</p>
              </div>
              <p className="text-description">{p.description}</p>
              <button onClick={() => addToCart(p)}>Commander</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Electroniques;
