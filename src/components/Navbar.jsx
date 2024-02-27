import React from "react";
import { Link } from "react-router-dom"; // Importe le composant Link pour la navigation entre les pages
import "./navbar.scss";

// Définition du composant Navbar
function Navbar() {
  return (
    // Définition de la structure de la barre de navigation
    <nav className="navbar">
      <Link to="/">
        {" "}
        {/* Crée un lien vers la page d'accueil */}
        <div className="navbar__logo">
          {" "}
          {/* Div pour le logo de la barre de navigation */}
          <img src="logo.png" alt="Logo" />
        </div>
      </Link>
      <Link to="/">
        {" "}
        {/* Lien vers la page d'accueil avec le texte 'Accueil' */}
        Accueil
      </Link>
      <Link to="/about">
        {" "}
        {/* Lien vers la page 'A propos' avec le texte 'A propos' */}A propos
      </Link>
    </nav>
  );
}

export default Navbar;
