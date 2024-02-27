import React, { useState, useEffect } from "react";
import "./ApartmentPage.scss";
import DescriptionPanel from "../components/DescriptionPanel.jsx";
import ImageBanner from "../components/ImageBanner.jsx";
import ApartmentHeader from "../components/ApartmentHeader.jsx";
import { useLocation } from "react-router-dom"; // Importe un hook useLocation depuis react-router-dom pour accéder aux données de l'URL

function ApartmentPage() {
  const location = useLocation(); // Utilise le hook useLocation pour obtenir les données de l'URL actuelle
  //console.log("location", location);
  //console.log("our apartment id is :", location.state.apartmentId);
  const [flat, setFlat] = useState(null); // Utilise useState pour créer un état local 'flat' avec une valeur initiale de null
  //console.log("flat",flat);

  useEffect(fetchApartmentData, []); // Utilise le hook useEffect pour exécuter fetchApartmentData une seule fois après le rendu initial

  function fetchApartmentData() {
    fetch("db.json") // Effectue une requête pour récupérer des données à partir d'un fichier JSON (simulé)
      .then((res) => res.json()) // Convertit la réponse en format JSON
      .then((flats) => {
        const flat = flats.find(
          (flat) => flat.id === location.state.apartmentId
        ); // Recherche l'appartement correspondant à l'ID spécifié dans les données de l'URL
        //console.log("selectedFlat", selectedFlat);
        setFlat(flat); // Met à jour l'état local 'flat' avec les données de l'appartement récupéré
      })
      .catch(console.error); // Gère les erreurs de la requête
  }
  if (flat == null) return <div>Loading...</div>; // Si les données de l'appartement ne sont pas encore chargées, affiche un message de chargement
  return (
    <>
      <div className="apartment-page">
        <ImageBanner pictures={flat.pictures} />{" "}
        {/* Affiche un composant ImageBanner avec les images de l'appartement */}
        <ApartmentHeader flat={flat} />{" "}
        {/* Affiche un composant ApartmentHeader avec les détails de l'appartement */}
        <div className="apartment__description__area">
          <DescriptionPanel title="Description" content={flat.description} />{" "}
          {/* Affiche un panneau de description avec la description de l'appartement */}
          <DescriptionPanel
            title="Equipements"
            content={flat.equipments.map((eq, i) => (
              <li key={i}>{eq}</li>
            ))}
          />{" "}
          {/* Affiche un panneau de description avec la liste des équipements de l'appartement */}
        </div>
      </div>
    </>
  );
}

export default ApartmentPage;
