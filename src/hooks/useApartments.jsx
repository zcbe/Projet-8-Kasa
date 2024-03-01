import React, { useState, useEffect } from "react";

//hook qui permet de récupérer les données d'appartements

export const useApartments = () => {
  const [apartments, setApartments] = useState([]); // Initialisation d'un état 'apartments' avec un tableau vide et une fonction 'setApartments' pour le mettre à jour

  useEffect(() => {
    // Utilisation du hook useEffect pour effectuer des opérations de côté
    const abortController = new AbortController(); // Création d'un contrôleur d'annulation pour gérer l'annulation des requêtes
    fetch("db.json", { signal: abortController.signal }) // Requête pour récupérer les données du fichier db.json, avec gestion de l'annulation
      .then((res) => res.json()) // Conversion de la réponse en JSON
      .then((res) => setApartments(res)) //Mise à jour de l'état 'apartments' avec les données récupérées
      .catch(console.error); // Gestion des erreurs en les affichant dans la console
    return () => {
      //console.log("cleanup");
      abortController.abort(); // Fonction de nettoyage pour annuler la requête en cours si le composant est démonté ou si l'effet est réexécuté avant la fin de la requête précédente
    };
  }, []); // Le tableau vide indique que cet effet ne s'exécute qu'une seule fois après le montage initial du composant
  return apartments;
};
