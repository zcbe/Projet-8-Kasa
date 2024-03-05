import React from "react";
import "../scss/ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";
import { useApartments } from "./../hooks/useApartments.jsx";

//Composant qui génère les cards d'apartement avec une liste d'appartements en entrée

function ApartmentGrid() {
  const apartments = useApartments(); // Appel du custom hook useApartments pour obtenir la liste des appartements

  return (
    //Début de la définition du contenu de la grille
    <div className="grid">
      {apartments.map((apartment //Utilisation de la méthode map pour itérer sur chaque appartement dans la liste
          )=> (
          <ApartmentCard // Utilisation du composant ApartmentCard pour afficher les détails de chaque appartement
            key={apartment.id}          // Clé unique pour chaque instance du composant ApartmentCard
            title={apartment.title}     // Titre de l'appartement passé en tant que propriété
            imageUrl={apartment.cover}  // URL de l'image de couverture de l'appartement passé en tant que propriété
            id={apartment.id}           // ID de l'appartement passé en tant que propriété
          />
        )
      )}
    </div>
  );
}
export default ApartmentGrid;
