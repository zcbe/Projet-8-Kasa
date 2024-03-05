import React from "react";
import "../scss/ApartmentCard.scss";
import { Link } from "react-router-dom";

// ci-dessous le composant pour afficher les différentes card. Définition d'un composant de fonction nommé ApartmentCard, prenant props comme argument

function ApartmentCard(props) {
  //console.log("props dans apartment card:", props);

  // Début du retour du composant
  return (
    // Utilisation du composant Link pour créer un lien vers le détail de l'appartement
    <Link
      to={`flat/${props.id}`} // Lien dynamique vers l'URL spécifique de l'appartement en utilisant l'ID de l'appartement passé en props
      state={{
        // Passer des données d'état au composant cible via l'objet state
        apartmentId: props.id, // L'ID de l'appartement est passé en tant que propriété apartmentId dans l'objet state
      }}
    >
      <div className="apartment">
        {/* Début de la définition du contenu de l'appartement */}
        <img src={props.imageUrl} alt="" />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default ApartmentCard;
