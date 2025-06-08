import "../css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container-title">
        <h1>Bienvenue dans notre site E-commerce</h1>
        <img src="/home-img.jpg" alt="E-commerce" />
      </div>
      <div className="container-col">
        <h2>Découvrez nos produits !</h2>
        <div className="container-row">
          <div className="container-card">
            <h2>Profitez de nos vêtements pour homme !</h2>
            <img
              alt="Vêtements"
              src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
            />
            <Link to="/vetements">
              <button> Voir les vêtements pour homme</button>
            </Link>
          </div>
          <div className="container-card">
            <h2>Profitez de nos vêtements pour femme !</h2>
            <img
              alt="Vêtements"
              src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
            />
            <Link to="/vetements">
              <button> Voir les vêtements pour femme</button>
            </Link>
          </div>
        </div>
        <div className="container-row">
          <div className="container-card">
            <h2>Découvrez nos bijoux !</h2>
            <img
              alt="Bijoux"
              src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
            />
            <Link to="/bijoux">
              <button> Voir les bijoux</button>
            </Link>
          </div>
          <div className="container-card">
            <h2>Découvrez nos produits électroniques !</h2>
            <img
              alt="Electronique"
              src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
            />
            <Link to="/electroniques">
              <button> Voir les produits électroniques</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-about">
        <h2>À propos de nous</h2>
        <div className="container-about-text">
          <p>
            Nous sommes une entreprise dédiée à la vente en ligne de produits de
            qualité. Notre objectif est de vous offrir une expérience d'achat
            agréable et sécurisée. N'hésitez pas à parcourir notre sélection de
            produits et à nous contacter si vous avez des questions.
          </p>
          <p>
            Notre équipe est passionnée par la mode, la technologie et les
            accessoires, et nous nous engageons à vous fournir les meilleurs
            produits au meilleur prix. Merci de visiter notre site !
          </p>
        </div>
        <img src="/ecommerce-about.jpg" alt="Commandes prêtes"></img>
      </div>
      <div className="contact">
        <h1>Contactez-nous</h1>
        <h3>Si vous avez des questions, n'hésitez pas à nous contacter !</h3>
        <div className="container-contact">
          <div className="contact-info">
            <h2>Informations de contact</h2>
            <p>N'hésitez pas à nous contact par e-mail ou téléphone:</p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto: contact@e-commerce.fr">
                  contact@e-commerce.fr
                </a>
              </li>
              <li>
                Téléphone: <a href="tel:+33123456789">+33 1 23 45 67 89</a>
              </li>
              <li>Adresse: 123 Rue de l'E-commerce, Paris, France</li>
              <li>Horaires: Lundi - Vendredi, 9h00 - 18h00</li>
              <li>
                Réseaux sociaux:
                <ul>
                  <li>
                    <a href="https://www.facebook.com/ecommerce">Facebook</a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/ecommerce">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ecommerce">Instagram</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="container-form">
            <h2>Formulaire de contact</h2>
            <form>
              <label htmlFor="name">Nom:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="name">Prénom:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
