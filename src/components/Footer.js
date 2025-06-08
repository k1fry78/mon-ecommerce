import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mon E-commerce. Tous droits réservés.</p>
      <p>
        <a href="https://www.linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer">
          Suivez-nous sur LinkedIn
        </a>
      </p>
      <p>
        <a href="https://www.facebook.com/votre-page" target="_blank" rel="noopener noreferrer">
          Suivez-nous sur Facebook
        </a>
      </p>
      <a> Politique de confidentialité </a>
      <a> Conditions d'utilisation </a>
    </footer>
  );
}

export default Footer;