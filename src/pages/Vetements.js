import React, { useEffect, useState } from "react";
import { getProduitsByCategory, getProduit } from "../api/produitsApi";
import "../css/Vetements.css";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function Produits() {
  const [produits, setProduits] = useState([]);
  const [scene, setScene] = useState("initial");
  const category = scene === "homme" ? "homme" : "femme";
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    if (scene === "initial") {
      Promise.all([
        getProduit(1),
        getProduit(2),
        getProduit(19),
        getProduit(20),
      ]).then(setProduits);
    } else if (scene === "homme") {
      let category = "men's clothing";

      getProduitsByCategory(category).then(setProduits);
    } else if (scene === "femme") {
      let category = "women's clothing";

      getProduitsByCategory(category).then(setProduits);
    }
  }, [scene]);

  if (scene === "femme") {
    return (
      <div>
        <div className="container-title-produits">
          <h1>Nos produits</h1>
          <p>Découvrez les vêtements pour {category} !</p>
          <div className="boutons-vetements">
            <button
              className="bouton-vetement"
              onClick={() => setScene("initial")}
            >
              Promotions
            </button>
            <button
              className="bouton-vetement homme"
              onClick={() => setScene("homme")}
            >
              Vêtements pour homme
            </button>
          </div>
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

  if (scene === "homme") {
    return (
      <div>
        <div className="container-title-produits">
          <h1>Nos produits</h1>
          <p>Découvrez les vêtements pour {category} !</p>
          <div className="boutons-vetements">
            <button
              className="bouton-vetement"
              onClick={() => setScene("initial")}
            >
              Promotions
            </button>
            <button
              className="bouton-vetement femme"
              onClick={() => setScene("femme")}
            >
              Vêtements pour femme
            </button>
          </div>
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

  if (scene === "initial") {
    return (
      <div>
        <div className="container-title-produits">
          <h1>Nos vêtements</h1>
          <p>Découvrez les vêtements pour homme et pour femme !</p>
          <div className="boutons-vetements">
            <button
              className="bouton-vetement homme"
              onClick={() => setScene("homme")}
            >
              Vêtements pour homme
            </button>
            <button
              className="bouton-vetement femme"
              onClick={() => setScene("femme")}
            >
              Vêtements pour femme
            </button>
          </div>
          <h3> Nos promotions !</h3>
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
                <button onClick={() => addToCart(p)}>Commander</button>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Produits;
