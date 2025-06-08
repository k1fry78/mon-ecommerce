import React, { useEffect, useState } from "react";
import { getProduitsByCategory } from "../api/produitsApi";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function Bijoux() {
  const [produits, setProduits] = useState([]);
  const { addToCart } = useContext(CartContext);

  let category = "jewelery";

  useEffect(() => {
    getProduitsByCategory(category).then(setProduits);
  }, []);

  return (
    <div>
      <div className="container-title-produits">
        <h1>Nos bijoux</h1>
        <p>Découvrez nos bagues, bracelets, colliers...</p>
      </div>
      <label>Rechercher</label>
      <input
        type="text"
        placeholder="Rechercher un produit..."
        onChange={(e) => {
          const searchTerm = e.target.value.toLowerCase();
          getProduitsByCategory(category).then((data) => {
            const filteredProducts = data.filter((p) =>
              p.title.toLowerCase().includes(searchTerm)
            );
            setProduits(filteredProducts);
          });
        }}
      />
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

export default Bijoux;
