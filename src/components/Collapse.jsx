import React, { useState } from "react";

import "../scss/Collapse.scss"; // Importez le fichier CSS

const DescriptionPanel = (props) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="description__panel">
      {/* Début de la définition du contenu du panneau de description */}
      <p className="description__header" onClick={toggleDescription}>
        {/* En-tête du panneau de description, avec la fonction de basculement sur clic */}
        <span>{props.title}</span>{" "}
        {/* Titre de la description passé via les props */}
        <i
          className={`fa-solid fa-chevron-down ${isDescriptionVisible ? 
          "reverse" : "rotate" } `}
        ></i>{" "}
        {/* Icône indiquant l'état de visibilité de la description */}
      </p>
      {isDescriptionVisible && (
        <p className="description__content">{props.content}</p>
      )}
    </div>
  );
};

export default DescriptionPanel;
