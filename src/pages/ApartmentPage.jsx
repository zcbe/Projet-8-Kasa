import React, { useState, useEffect } from "react";

import "../scss/ApartmentPage.scss";

// Import des composants utilisés dans la page d'appartement
import DescriptionPanel from "../components/Collapse.jsx";
import ImageBanner from "../components/ImageBanner.jsx";
import ApartmentHeader from "../components/ApartmentHeader.jsx";

// Import du hook useParams pour récupérer les paramètres d'URL
import { useParams } from "react-router-dom"; 

// Définition du composant de la page d'appartement
function ApartmentPage() {
  const {location} = useParams();   // Utilisation du hook useParams pour obtenir les paramètres d'URL

  const [flat, setFlat] = useState([]);    // Utilisation de useState pour créer un état local 'flat' avec une valeur initiale de null

  // Utilisation du hook useEffect pour effectuer des actions après le rendu initial
  useEffect(()=>{
 // Effectue une requête pour récupérer des données à partir d'un fichier JSON (simulé)
    fetch("../db.json") 
    .then((res) => res.json()) // Convertit la réponse en format JSON
    .then((flats) => {

      setFlat(flats); // Met à jour l'état local 'flat' avec les données de l'appartement récupéré
    }
    );
    console.log("flat",flat);

  }, []); // Le tableau vide [] signifie que ce useEffect ne dépend d'aucune variable et s'exécute une seule fois après le rendu initial


  // Trouve l'appartement correspondant à l'ID fourni dans les paramètres d'URL
    const target = flat.length ? flat.find((alllocation) => alllocation.id === location) : null; 
  // Si les données de l'appartement ne sont pas encore chargées, affiche un message de chargement

  if (target === null) return <div>Loading...</div>; 

  // Rendu de la page d'appartement avec les détails récupérés

  return (
    <>
  <div className="apartment-page">
        {/* Affiche un composant ImageBanner avec les images de l'appartement */}
        <ImageBanner pictures={target.pictures} />

        {/* Affiche un composant ApartmentHeader avec les détails de l'appartement */}
        <ApartmentHeader flat={target} />

        {/* Conteneur pour la description et les équipements de l'appartement */}
        <div className="apartment__description__area">
          {/* Affiche un panneau de description avec la description de l'appartement */}
          <DescriptionPanel title="Description" content={target.description} />

          {/* Affiche un panneau de description avec la liste des équipements de l'appartement */}
          <DescriptionPanel
            title="Equipements"
            content={target.equipments.map((eq, i) => (
              <li key={i}>{eq}</li>
            ))}
          />
        </div>
      </div>
    </>
  );
}

export default ApartmentPage;
