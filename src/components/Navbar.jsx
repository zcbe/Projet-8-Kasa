import React from "react";
import { NavLink } from "react-router-dom"; // Importe le composant Link pour la navigation entre les pages
import "./navbar.scss";

// Définition du composant Navbar
function Navbar() {
  return (
    // Définition de la structure de la barre de navigation
    <nav className="navbar">
    
        <div className="navbar__logo">
          {" "}
          {/* Div pour le logo de la barre de navigation */}
          <img src="logo.png" alt="Logo" />
        </div>
    
        {/* Lien vers la page d'accueil avec le texte 'Accueil' */}
        <NavLink to="/" exact={true.toString()} activeclassname="active">
        Accueil
      </NavLink>

      {/* Lien vers la page 'A propos' avec le texte 'A propos' */}
      <NavLink to="/about" activeclassname="active">
        A propos
      </NavLink>
    </nav>
  );
}

export default Navbar;
