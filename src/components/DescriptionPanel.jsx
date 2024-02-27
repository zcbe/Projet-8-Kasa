import React, { useState } from "react";
import "./DescriptionPanel.scss";

function DescriptionPanel(props) {
  // Utilisation du hook useState pour gérer l'état de la visibilité de la description
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  // Fonction pour basculer la visibilité de la description

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="description__panel">
      {" "}
      {/* Début de la définition du contenu du panneau de description */}
      <p className="description__header" onClick={toggleDescription}>
        {" "}
        {/* En-tête du panneau de description, avec la fonction de basculement sur clic */}
        <span>{props.title}</span>{" "}
        {/* Titre de la description passé via les props */}
        <i
          className={`fa-solid fa-chevron-${isDescriptionVisible ? "up" : "down"}`}
        ></i>{" "}
        {/* Icône indiquant l'état de visibilité de la description */}
      </p>
      {isDescriptionVisible && (
        <p className="description__content">{props.content}</p>
      )}
    </div>
  );
}

export default DescriptionPanel;
