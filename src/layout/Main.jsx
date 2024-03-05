import React from "react";

import "../scss/Main.scss";

// Définition du composant fonctionnel Main avec une props "children"
function Main({ children }) {
  return <div className="main">{children}</div>; // Retourne un élément div avec la classe "main", et affiche le contenu des composants enfants passés
}

export default Main;
