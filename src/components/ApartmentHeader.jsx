import React from "react";
import "../scss/ApartmentHeader.scss";

// Composant qui permet d'afficher les détails d'un apartement (titre,location,tags,nom,image,stars)

function ApartmentHeader({flat}) {
  // Définition d'un composant de fonction nommé ApartmentHeader, prenant props comme argument
  const name = flat.host.name; // Extraction du nom de l'hôte de l'appartement
  const [firstname, lastname] = name.split(" "); // Découpage du nom de l'hôte en prénom et nom

  return (
    <div className="apartment__header">
      {" "}
      {/* Début de la définition de l'en-tête de l'appartement */}
      <div className="apartment__title">
        <h1> {flat.title}</h1>
        <h2> {flat.location}</h2>
        <div className="apartment__tags">
          {flat.tags.map(
            (
              tag // Utilisation de la méthode map pour itérer sur chaque tag
            ) => (
              <span key={tag}>{tag}</span> // Affichage de chaque tag
            )
          )}
        </div>
      </div>
      <div className="apartment__owner">
        {" "}
        {/* Début de la définition du propriétaire de l'appartement */}
        <div className="apartment__owner__details">
          <h3>
            <span>{firstname}</span> {/* Affichage du prénom du propriétaire */}
            <span>{lastname}</span>{" "}
            {/* Affichage du nom de famille du propriétaire */}
          </h3>
          <div className="apartment__owner__badge">
            {" "}
            {/* Section du badge du propriétaire */}
            <img src={flat.host.picture} alt="/"></img>{" "}
            {/* Affiche le nom de famille du propriétaire */}
          </div>
        </div>
        <div className="apartment__owner__stars">
          {" "}
          {/* Section des étoiles du propriétaire */}
          {[1, 2, 3, 4, 5].map(
            (num) => (
              <span key={num} className={props.flat.rating >= num ? "on" : ""}>
                ★
              </span> // Affiche une étoile pleine si le rating est supérieur ou égal à ce nombre
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ApartmentHeader;
