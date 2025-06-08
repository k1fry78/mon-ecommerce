import "../css/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="container-title-produits">
        <h1>Contactez-nous</h1>
        <h3>Si vous avez des questions, n'hésitez pas à nous contacter !</h3>
      </div>
      <div className="container-contact">
        <div className="contact-info">
          <h2>Informations de contact</h2>
          <p>N'hésitez pas à nous contact par e-mail ou téléphone:</p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto: contact@e-commerce.fr">contact@e-commerce.fr</a>
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
  );
}

export default Contact;
