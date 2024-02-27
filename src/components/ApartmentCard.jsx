import React from "react";
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";

// ci-dessous le composant pour afficher les différentes card. Définition d'un composant de fonction nommé ApartmentCard, prenant props comme argument

function ApartmentCard(props) {
  //console.log("props dans apartment card:", props);

  // Début du retour du composant
  return (
    <Link
      to="/flat"
      state={{
        // Passer des données d'état au composant cible via l'objet state
        apartmentId: props.id, // L'ID de l'appartement passé en tant que propriété
      }}
    >
      <div className="apartment">
        {" "}
        {/* Début de la définition du contenu de l'appartement */}
        <img src={props.imageUrl} alt="" />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default ApartmentCard;
